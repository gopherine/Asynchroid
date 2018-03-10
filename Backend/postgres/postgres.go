package postgres

import (
	"database/sql"
	"fmt"
)

const (
	dbuser     = "asynchroid"
	dbpassword = "async@2018Atharva"
	dbname     = "asynchroid"
)

//Database
func DatabaseConn() *sql.DB {
	//Database Connection
	dbinfo := fmt.Sprintf("user=%s "+
		"password=%s dbname=%s sslmode=disable",
		dbuser, dbpassword, dbname)

	db, err := sql.Open("postgres", dbinfo)
	checkErr("On Opening", err)
	return db
}

func checkErr(loc string, err error) {
	if err != nil {
		fmt.Print(loc)
		panic(err)
	}
}
