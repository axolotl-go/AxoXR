package users

import (
	"github.com/axolotl-go/AR/internal/db"
)

func CheckUserExists(email string) bool {
	var user User
	err := db.DB.Where("email = ?", email).First(&user).Error
	return err == nil
}

func CreateUser(user *User) error {
	return db.DB.Create(user).Error
}

func AuthenticateUser(email, password string) (*User, error) {
	var user User

	err := db.DB.
		Where("email = ?", email).
		First(&user).Error

	if err != nil {
		return nil, err
	}

	return &user, nil
}
