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
		UserAccountStatus      string        `json:"useraccountstatusid" bson:"useraccountstatusid"`
		PwdResetToken          string        `json:"pwdresettoken" bson:"pwdresettoken"`
		PwdResetExpire         string        `json:"pwdresetexpire" bson:"pwdresetexpire"`
	}

	//UserAuthSuccess contains structure of response after successful authentication
	UserAuthSuccess struct {
		ID       bson.ObjectId `json:"id" bson:"_id"`
		UserName string        `json:"username" bson:"username"`
		Email    string        `json:"email" bson:"email"`
	}

	//UserPwdReset contains structure to reset password
	UserPwdReset struct {
		ID       bson.ObjectId `json:"id" bson:"_id"`
		UserName string        `json:"username" bson:"username"`
		Password string        `json:"password" bson:"password"`
	}
)
