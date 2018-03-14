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

	// Verify id is ObjectId, otherwise bail
	if !bson.IsObjectIdHex(id) {
		w.WriteHeader(404)
		return
	}

	// Grab id
	oid := bson.ObjectIdHex(id)

	// Stub user
	u := models.UserAuth{}

	// Fetch user
	if err := uc.session.DB("asynchroid").C("userdetails").FindId(oid).One(&u); err != nil {
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
	uc.session.DB("asynchroid").C("userdetails").Insert(u)

	// Marshal provided interface into JSON structure
	uj, _ := json.Marshal(u)

	// Write content-type, statuscode, payload
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(201)
	fmt.Fprintf(w, "%s", uj)
}

// RemoveUser removes an existing user resource
// RemoveUser removes an existing user resource
func (uc UserController) RemoveUser(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	// Grab id
	id := p.ByName("id")

	// Verify id is ObjectId, otherwise bail
	if !bson.IsObjectIdHex(id) {
		w.WriteHeader(404)
		return
	}

	// Grab id
	oid := bson.ObjectIdHex(id)

	// Remove user
	if err := uc.session.DB("asynchroid").C("userdetails").RemoveId(oid); err != nil {
		w.WriteHeader(404)
		return
	}

	// Write status
	w.WriteHeader(200)
}
