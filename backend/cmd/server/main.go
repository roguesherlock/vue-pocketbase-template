// main.go
package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

var version string // do not remove or change

func main() {
	app := pocketbase.New()

	if err := app.Start(); err != nil {
		log.Fatal("version: ", version, "\n", err)
	}

}
