package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	ServerPort string

	DBUrl   string
	DBToken string
}

func Load() *Config {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}

	return &Config{
		ServerPort: os.Getenv("SERVER_PORT"),

		DBUrl:   os.Getenv("DB_URL"),
		DBToken: os.Getenv("DB_TOKEN"),
	}
}
