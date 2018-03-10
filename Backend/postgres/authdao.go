package postgres

import (
	"fmt"
)

func AuthSearch() string {
	db := DatabaseConn()
	defer db.Close()
	fmt.Println("Searching Values")
	rows, err := db.Query("SELECT user_name FROM user_account")
	checkErr("On Row", err)
	fmt.Print(rows)

	for rows.Next() {
		var user_name string
		err = rows.Scan(&user_name)
		checkErr("rows", err)
		return user_name
	}
	return "user name not found"
}
