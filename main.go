package main

import "fmt"
import (
	"embed"
)

func main() {
	fmt.Println("Hello, Checkout ui.go!")
}

//go:embed all:dist
var StaticFiles embed.FS
