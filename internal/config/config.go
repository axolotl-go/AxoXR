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
	}
}

func CorsConfig() cors.Config {
	return cors.Config{
		AllowOrigins:     "http://127.0.0.1:5500/",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
	}
}
