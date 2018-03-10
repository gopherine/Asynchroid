package main

import (
	"Asynchroid/Backend/api"
	"fmt"

	_ "github.com/lib/pq"
)

func main() {
	//Rest API
	api.Routes()
}

func checkErr(loc string, err error) {
	if err != nil {
		fmt.Print(loc)
		panic(err)
	}
}
