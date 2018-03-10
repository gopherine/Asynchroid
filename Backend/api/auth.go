package api

import (
	"Asynchroid/Backend/postgres"
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

//Index helper
func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	output := postgres.AuthSearch()
	fmt.Fprint(w, "Welcome!\n"+output)
}

//Hello helper
func Hello(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	fmt.Fprintf(w, "hello, %s!\n", ps.ByName("name"))
}
