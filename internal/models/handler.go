package models

import (
	"fmt"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/axolotl-go/AR/internal/config"
	"github.com/axolotl-go/AR/internal/db"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func Create(c *fiber.Ctx) error {

	userIDStr := c.FormValue("user_id")
	userID, err := strconv.Atoi(userIDStr)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "invalid user_id",
		})
	}

	file, err := c.FormFile("file")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "file is required",
		})
	}

	ext := strings.ToLower(filepath.Ext(file.Filename))
	filename := uuid.New().String() + ext

	storageDir := strings.TrimSpace(config.Load().StoragePath)
	filePath := filepath.Join(storageDir, filename)

	if _, err := os.Stat(storageDir); os.IsNotExist(err) {
		if err := os.MkdirAll(storageDir, 0755); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"error": "could not create storage directory",
				"debug": err.Error(),
			})
		}
	}

	model, err := BuildModel3D(uint(userID), file, filename)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	if err := c.SaveFile(file, filePath); err != nil {
		fmt.Printf("Error al guardar archivo en %s: %v\n", filePath, err)

		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error":   "could not save file in storage",
			"path":    filePath,
			"details": err.Error(),
		})
	}

	if err := db.DB.Create(&model).Error; err != nil {
		os.Remove(filePath)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "could not save model to database",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"status": "ok",
		"model":  model,
	})
}
