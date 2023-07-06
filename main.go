package main

import (
	"embed"
	"fmt"
)

func main() {
	fmt.Println("Hello, Checkout main.go!")
}

//go:embed all:dist
var StaticFiles embed.FS
