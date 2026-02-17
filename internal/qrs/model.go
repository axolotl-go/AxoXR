package qrs

import (
	"github.com/axolotl-go/AR/internal/models"
	"gorm.io/gorm"
)

type Qr struct {
	gorm.Model

	ModelID    uint   `gorm:"not null;index"`
	PublicSlug string `gorm:"unique;not null"`
	ViewsCount int    `gorm:"default:0"`

	Model3D models.Model3D `gorm:"foreignKey:ModelID"`
}
