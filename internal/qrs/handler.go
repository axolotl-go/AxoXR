package qrs

import "github.com/gofiber/fiber/v2"

func Generate(c *fiber.Ctx) error {

	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{
		"Ok": "ok",
	})
}
