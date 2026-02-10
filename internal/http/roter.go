package http

import (
	"github.com/axolotl-go/AR/internal/models"
	"github.com/axolotl-go/AR/internal/users"
	"github.com/gofiber/fiber/v2"
)

func SetupRouter(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	api := app.Group("/api")

	// User
	api.Post("/user", users.Create)
	api.Post("/login", users.Login)

	// Models
	api.Post("/models", models.Create)

}
