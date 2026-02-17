package main

import (
	"log"

	"github.com/axolotl-go/AR/internal/config"
	"github.com/axolotl-go/AR/internal/db"
	"github.com/axolotl-go/AR/internal/http"
	"github.com/axolotl-go/AR/internal/models"
	"github.com/axolotl-go/AR/internal/qrs"
	"github.com/axolotl-go/AR/internal/users"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
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

	db.DB.AutoMigrate(&users.User{}, &models.Model3D{})

	app := fiber.New()
	app.Use(cors.New(config.CorsConfig()))
	app.Static("/storage", "/var/app/storage")

	qr, _ := qrs.QrGenerator(3)
	println(qr.PublicSlug)

	http.SetupRouter(app)

	log.Fatal(app.Listen(":" + serverxport))
}
