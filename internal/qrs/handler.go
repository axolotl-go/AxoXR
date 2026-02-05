package qr

import "github.com/gofiber/fiber/v2"

func Create(c *fiber.Ctx) error {

	return c.Status(fiber.StatusAccepted).JSON(fiber.Map{
		"Ok": "ok",
	})
}

func Get(c *fiber.Ctx) error {

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"Ok": "OK",
	})
}
