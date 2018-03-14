package models

import "gopkg.in/mgo.v2/bson"

type (
	// User represents the structure of our resource
	User struct {
		ID     bson.ObjectId `json:"id" bson:"_id"`
		Name   string        `json:"name" bson:"name"`
		Gender string        `json:"gender" bson:"gender"`
		Age    int           `json:"age" bson:"age"`
	}

	//UserAuth represents the structure of our usual login
	UserAuth struct {
		ID                     bson.ObjectId `json:"id" bson:"_id"`
		UserName               string        `json:"username" bson:"username"`
		Password               string        `json:"password" bson:"password"`
		Email                  string        `json:"email" bson:"email"`
		Salt                   string        `json:"salt" bson:"salt"`
		HashAlgorithm          string        `json:"hashalgorithm" bson:"hashalgorithm"`
		RegistrationTime       string        `json:"registrationtime" bson:"registrationtime"`
		EmailConfirmationToken string        `json:"emailconfirmationtoken" bson:"emailconfirmationtoken"`
		UserAccountStatusID    int           `json:"useraccountstatusid" bson:"useraccountstatusid"`
		PasswordReminderToken  string        `json:"passwordremindertoken" bson:"passwordremindertoken"`
		PasswordReminderExpire string        `json:"passwordreminderexpire" bson:"passwordremindertoken"`
	}
)
