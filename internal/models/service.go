package models

import (
	"errors"
	"mime/multipart"
	"path/filepath"
	"strings"

	"github.com/axolotl-go/AR/internal/config"
)

const maxFileSize = 16 * 1024 * 1024 // 16 MB

func BuildModel3D(userID uint, file *multipart.FileHeader, savedFilename string) (Model3D, error) {
	ext := strings.ToLower(filepath.Ext(file.Filename))
	if ext != ".obj" {
		return Model3D{}, errors.New("only .obj files allowed")
	}

	// Limpiamos la URL para evitar doble slash //
	baseURL := strings.TrimSuffix(config.Load().StorageUrl, "/")

	return Model3D{
		UserID:   userID,
		Name:     file.Filename,
		FileURL:  baseURL + "/" + savedFilename, // Resultado: https://148.113.142.241/storage/uuid.obj
		FileSize: file.Size,
		Format:   ext,
	}, nil
}
