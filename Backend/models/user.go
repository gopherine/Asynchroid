package models

import "gopkg.in/mgo.v2/bson"

type (
	// UserAuth represents the structure of our user login details
	UserAuth struct {
		ID                bson.ObjectId `json:"id" bson:"_id"`
		UserName          string        `json:"username" bson:"username"`
		Password          string        `json:"password" bson:"password"`
		Email             string        `json:"email" bson:"email"`
		RegistrationTime  string        `json:"registrationtime" bson:"registrationtime"`
		UserAccountStatus string        `json:"useraccountstatus" bson:"useraccountstatus"`
		Token             string        `json:"token" bson:"token"`
		TokenExpire       string        `json:"tokenexpire" bson:"tokenexpire"`
	}

	//UserAuthSuccess contains structure of response after successful authentication
	UserAuthSuccess struct {
		ID                bson.ObjectId `json:"id" bson:"_id"`
		UserName          string        `json:"username" bson:"username"`
		Email             string        `json:"email" bson:"email"`
		UserAccountStatus string        `json:"useraccountstatus" bson:"useraccountstatus"`
	}

	//UserPwdReset contains structure to reset password
	UserPwdReset struct {
		ID       bson.ObjectId `json:"id" bson:"_id"`
		UserName string        `json:"username" bson:"username"`
		Password string        `json:"password" bson:"password"`
	}

	//AsynchroidMailData contains structure for AsynchroidMailData
	AsynchroidMailData struct {
		ID          bson.ObjectId `json:"id" bson:"_id"`
		SenderEmail string        `json:"senderemail" bson:"senderemail"`
		SenderName  string        `json:"sendername" bson:"sendername"`
		Password    string        `json:"password" bson:"password"`
	}
)
