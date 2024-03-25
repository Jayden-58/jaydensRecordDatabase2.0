package model

import (
	"gorm.io/gorm"
)

type Artist struct {
	gorm.Model
	Name string `gorm:"not null"`
}