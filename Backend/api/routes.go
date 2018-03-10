package api

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

// Routes : contains end points for all the API's
func Routes() {
	router := httprouter.New()
	router.GET("/", Index)
	router.GET("/hello/:name", Hello)

	log.Fatal(http.ListenAndServe(":8000", router))
}
