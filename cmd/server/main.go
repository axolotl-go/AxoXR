package main

import (
	"log"

	"github.com/axolotl-go/AR/internal/config"
	"github.com/axolotl-go/AR/internal/db"
	"github.com/axolotl-go/AR/internal/http"
	"github.com/axolotl-go/AR/internal/users"
	"github.com/gofiber/fiber/v2"
)

var serverxport string

func init() {
	cfg := config.Load()
	serverxport = cfg.ServerPort

	if serverxport == "" {
		serverxport = "3000"
	}
}

func main() {

	db.DB.AutoMigrate(&users.User{})

	app := fiber.New()

	http.SetupRouter(app)

	log.Fatal(app.Listen(":" + serverxport))
}
