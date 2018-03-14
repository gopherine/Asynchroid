package models

import "gopkg.in/mgo.v2/bson"

type (
	// UserAuth represents the structure of our user login details
	UserAuth struct {
		ID                     bson.ObjectId `json:"id" bson:"_id"`
		UserName               string        `json:"username" bson:"username"`
		Password               string        `json:"password" bson:"password"`
		Email                  string        `json:"email" bson:"email"`
		RegistrationTime       string        `json:"registrationtime" bson:"registrationtime"`
		EmailConfirmationToken string        `json:"emailconfirmationtoken" bson:"emailconfirmationtoken"`
		UserAccountStatusID    int           `json:"useraccountstatusid" bson:"useraccountstatusid"`
		PwdResetToken          string        `json:"pwdresettoken" bson:"pwdresettoken"`
		PwdResetExpire         string        `json:"pwdresetexpire" bson:"pwdresetexpire"`
	}
)
