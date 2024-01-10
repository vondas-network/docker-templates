package greeting

import (
	"fmt"
	"net/http"
)

// GREETING FUNCTION CALLED BY AN ALIAS IN MAIN 
func Greeting(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello World")
}