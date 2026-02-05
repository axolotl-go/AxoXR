package db

import (
	"database/sql"
	"fmt"

	"github.com/axolotl-go/AR/internal/config"

	_ "github.com/tursodatabase/libsql-client-go/libsql"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func init() {
	var err error

	cfg := config.Load()

	DBUrl := cfg.DBUrl
	DBToken := cfg.DBToken

	if DBUrl == "" || DBToken == "" {
		panic("DB_URL and DB_TOKEN must be set")
	}

	dsn := fmt.Sprintf("%s?authToken=%s", DBUrl, DBToken)

	sqlDB, err := sql.Open("libsql", dsn)
	if err != nil {
		panic(err)
	}

	DB, err = gorm.Open(sqlite.Dialector{
		Conn: sqlDB,
	}, &gorm.Config{})
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected")

}
