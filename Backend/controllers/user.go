package controllers

import (
	"Asynchroid/Backend/buisnesslogic"
	"Asynchroid/Backend/models"
	"encoding/json"
	"fmt"
	"net/http"

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

//UpdateUser updates userdetails collection
func (uc UserController) UpdateUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	newPwd := r.URL.Query().Get("newPwd")
	oldPwd := r.URL.Query().Get("oldPwd")
	username := r.URL.Query().Get("username")
	query := bson.M{"username": username}
	u := models.UserPwdReset{}
	if err := uc.session.DB("asynchroid").C("userdetails").Find(query).One(&u); err != nil {
		w.WriteHeader(404)
		return
	}
	if buisnesslogic.ComparePasswords(u.Password, []byte(oldPwd)) {
		fmt.Print("Matched")
	}

	fmt.Fprintf(w, newPwd)
	fmt.Fprintf(w, oldPwd)
	//fmt.Fprintf(w, "%s", uj)
}
