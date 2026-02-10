package models

import (
	"errors"

	"github.com/axolotl-go/AR/internal/db"
	"github.com/axolotl-go/AR/internal/users"
)

func create(model *Model3D) error {
	return db.DB.Create(model).Error
}

func ValidateUserID(userID int) error {
	var user users.User
	err := db.DB.First(&user, userID).Error
	if err != nil {
		return errors.New("user not found")
	}
	return nil
}
