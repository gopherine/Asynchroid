package controllers

import (
	"Asynchroid/Backend/buisnesslogic"
	"Asynchroid/Backend/models"
	"Asynchroid/Backend/utilities"
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type (
	// UserController represents the controller for operating on the User resource
	UserController struct {
		session *mgo.Session
	}
)

//NewUserController pointer to Struct
func NewUserController(s *mgo.Session) *UserController {
	return &UserController{s}
}

// GetUser retrieves an individual user resource
// GetUser retrieves an individual user resource
func (uc UserController) GetUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	// Grab id
	id := p.ByName("id")
	fmt.Fprintf(w, id)
	// Stub user
	u := models.UserAuthSuccess{}

	// Fetch user
	query := bson.M{"username": id}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}

	// Marshal provided interface into JSON structure
	uj, _ := json.Marshal(u)

	// Write content-type, statuscode, payload
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(200)
	fmt.Fprintf(w, "%s", uj)
}

// CreateUser creates a new user resource
// CreateUser creates a new user resource
func (uc UserController) CreateUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	// Stub an user to be populated from the body
	u := models.UserAuth{}

	// Populate the user data
	json.NewDecoder(r.Body).Decode(&u)

	// processing data enetered by the user
	u.ID = bson.NewObjectId()
	u.Password = buisnesslogic.HashAndSalt([]byte(u.Password))
	u.RegistrationTime = buisnesslogic.GenerateUTCTime()
	u.UserAccountStatus = "invalid"
	u.Token = buisnesslogic.GetToken(20)
	u.TokenExpire = time.Now().UTC().Add(time.Minute * time.Duration(15)).String()
	// Write the user to mongo
	err := uc.session.DB("asynchroid").C("userdetails").Insert(u)
	if err != nil {
		if mgo.IsDup(err) {
			fmt.Fprintln(w, "Username or Email Already Exists")
			return
		}
		// Is another error
		fmt.Fprintln(w, "Unknown Error")
		return
	}

	// Marshal provided interface into JSON structure
	uj, _ := json.Marshal(u)
	// Sends Email
	s := models.AsynchroidMailData{}
	if err := uc.session.DB("asynchroid").C("asynchroidmail").Find(bson.M{}).One(&s); err != nil {
		w.WriteHeader(404)
		return
	}
	URL := "http://localhost/password/reset/token?token=" + u.Token + "&username=" + u.UserName
	utilities.SendMail(s.SenderEmail, []string{u.Email}, "User Email Confirmation", u.UserName, URL, "../Backend/utilities/ConfirmEmail.html")

	// Write content-type, statuscode, payload
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(201)
	fmt.Fprintf(w, "%s", uj)
}

// RemoveUser removes an existing user resource
func (uc UserController) RemoveUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	// Grab id
	id := p.ByName("id")

	// Remove user
	query := bson.M{"username": id}
	if err := uc.session.DB("asynchroid").C("userdetails").Remove(query); err != nil {
		w.WriteHeader(404)
		return
	}

	// Write status
	w.WriteHeader(200)
	fmt.Fprintf(w, "Removed User")
}

//UpdateUserPassword updates userdetails collection
func (uc UserController) UpdateUserPassword(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	newPwd := r.URL.Query().Get("newPwd")
	oldPwd := r.URL.Query().Get("oldPwd")
	username := r.URL.Query().Get("username")
	query := bson.M{"username": username}
	set := bson.M{"$set": bson.M{"password": buisnesslogic.HashAndSalt([]byte(newPwd))}}
	u := models.UserPwdReset{}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}
	if buisnesslogic.ComparePasswords(u.Password, []byte(oldPwd)) {
		if err := uc.session.DB("asynchroid").C("userdetails").Update(query, set); err != nil {
			w.WriteHeader(404)
			return
		}
	} else {
		fmt.Fprintf(w, "Invalid Password")
	}

	fmt.Fprintf(w, newPwd)
	fmt.Fprintf(w, oldPwd)
	//fmt.Fprintf(w, "%s", uj)
}

//ForgetUserPasswordToken generates password token if someone forget their password
func (uc UserController) ForgetUserPasswordToken(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	id := p.ByName("id")
	u := models.UserAuthSuccess{}
	s := models.AsynchroidMailData{}
	query := bson.M{"username": id}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}

	if err := uc.session.DB("asynchroid").C("asynchroidmail").Find(bson.M{}).One(&s); err != nil {
		w.WriteHeader(404)
		return
	}

	updatequery := bson.M{"username": u.UserName}

	expireTime := time.Now().UTC().Add(time.Minute * time.Duration(15)).String()
	expireToken := buisnesslogic.GetToken(20)
	set := bson.M{"$set": bson.M{"Token": expireToken, "TokenExpire": expireTime}}
	if err := uc.session.DB("asynchroid").C("userdetails").Update(updatequery, set); err != nil {
		w.WriteHeader(404)
		return
	}

	URL := "http://localhost/password/reset/token?token=" + expireToken + "&username=" + u.UserName
	utilities.SendMail(s.SenderEmail, []string{u.Email}, "Password Reset Confirmation", u.UserName, URL, "../Backend/utilities/ResetPassword.html")
	fmt.Fprintf(w, u.UserName)
	fmt.Fprintf(w, u.Email)
}

//ConfirmPasswordResetToken confirms password reset token
func (uc UserController) ConfirmPasswordResetToken(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	u := models.UserAuth{}
	username := r.URL.Query().Get("username")
	token := r.URL.Query().Get("token")

	query := bson.M{"username": username}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}
	if u.Token == token {
		layout := "2006-01-02 15:04:05 -0700 MST"
		currentTime := time.Now().UTC()
		time, _ := time.Parse(layout, u.TokenExpire)

		diff := time.Sub(currentTime)
		if diff > 0 {
			uj, _ := json.Marshal(u)
			fmt.Fprintf(w, "%s", uj)
		} else {
			fmt.Fprintf(w, "expired")
		}
	}
}

//ForgetResetPassword resets password if password is forgotten
func (uc UserController) ForgetResetPassword(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	newPwd := r.URL.Query().Get("newPwd")
	username := r.URL.Query().Get("username")
	query := bson.M{"username": username}
	set := bson.M{"$set": bson.M{"password": buisnesslogic.HashAndSalt([]byte(newPwd))}}

	if err := uc.session.DB("asynchroid").C("userdetails").Update(query, set); err != nil {
		w.WriteHeader(404)
		return
	}

	fmt.Fprintf(w, "Success")
	//fmt.Fprintf(w, "%s", uj)
}

//ConfirmUserIsValid confirms the email and updates user status
func (uc UserController) ConfirmUserIsValid(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	u := models.UserAuth{}
	username := r.URL.Query().Get("username")
	token := r.URL.Query().Get("token")

	query := bson.M{"username": username}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}
	if u.Token == token {
		layout := "2006-01-02 15:04:05 -0700 MST"
		currentTime := time.Now().UTC()
		time, _ := time.Parse(layout, u.TokenExpire)

		diff := time.Sub(currentTime)
		if diff > 0 {
			uj, _ := json.Marshal(u)
			set := bson.M{"$set": bson.M{"useracccountstatus": "valid"}}
			if err := uc.session.DB("asynchroid").C("userdetails").Update(query, set); err != nil {
				w.WriteHeader(404)
				return
			}
			fmt.Fprintf(w, "%s", uj)
		} else {
			fmt.Fprintf(w, "token expired")
		}
		w.WriteHeader(200)
		fmt.Fprintf(w, "Email Confirmed Successfully")
	}
}
