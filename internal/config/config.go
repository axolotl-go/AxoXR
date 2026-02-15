package config

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

type Config struct {
	ServerPort string

	DBUrl       string
	DBToken     string
	StoragePath string
	StorageUrl  string
	CorsOrigins string
}

func Load() *Config {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}

	return &Config{
		ServerPort: os.Getenv("SERVER_PORT"),

		DBUrl:       os.Getenv("DB_URL"),
		DBToken:     os.Getenv("DB_TOKEN"),
		StoragePath: os.Getenv("STORAGE_PATH"),
		StorageUrl:  os.Getenv("STORAGE_URL"),
		CorsOrigins: os.Getenv("CORS_ORIGINS"),
	}
}

func CorsConfig() cors.Config {
	var origins = Load().CorsOrigins

	if origins == "" {
		log.Fatal("CORS_ORIGINS is not set")
	}

	return cors.Config{
		AllowOrigins:     origins,
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
	}
}
