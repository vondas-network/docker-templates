package main

import (
	"log"
	"net/http"
	greeter "docker-go-template/greeting" // CUSTOM GREETING MODULE
	"fmt"
  )  

func main() {
	// ROUTER - GREETING FUNCTION
	http.HandleFunc("/greeting", greeter.Greeting)

	// SERVER START
	log.Println("Starting server ....")

    fmt.Printf("Server running (port=7000), route: http://localhost:7000/greeting\n")
    if err := http.ListenAndServe(":7000", nil); err != nil {
        log.Fatal(err)
    }
}

