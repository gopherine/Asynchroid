package main

import (
	// Standard library packages
	"net/http"

	// Third party packages
	"Asynchroid/Backend/controllers"

	"github.com/julienschmidt/httprouter"
	mgo "gopkg.in/mgo.v2"
)

func getSession() *mgo.Session {
	// Connect to our local mongo
	s, err := mgo.Dial("mongodb://localhost")

	// Check if connection error, is mongo running?
	if err != nil {
		panic(err)
	}
	return s
}

func main() {
	// Instantiate a new router
	r := httprouter.New()

	// Get a UserController instance
	// Get a UserController instance
	uc := controllers.NewUserController(getSession())

	// Get a user resource
	r.GET("/user/:id", uc.GetUser)

	r.POST("/user", uc.CreateUser)

	r.DELETE("/user/:id", uc.RemoveUser)

	r.PUT("/password/reset", uc.UpdateUserPassword)

	r.GET("/password/forget/:id", uc.ForgetUserPasswordToken)

	r.GET("/confirm/reset/token", uc.ConfirmPasswordResetToken)

	// Fire up the server
	http.ListenAndServe("localhost:8000", r)
}
