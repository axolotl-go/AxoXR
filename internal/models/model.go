package models

import "gorm.io/gorm"

type Model3D struct {
	gorm.Model

	UserID   uint   `gorm:"not null;index"`
	Name     string `gorm:"not null"`
	FileURL  string `gorm:"not null"`
	FileSize int64
	Format   string `gorm:"not null"`
}
