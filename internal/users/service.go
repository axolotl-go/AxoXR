package users

import "errors"

var (
	ErrInvalidPassword = errors.New("Password must be at least 8 characters and contain uppercase letter")
	ErrMissingFields   = errors.New("Missing required fields")
)

func ValidateUser(u User) error {
	if u.Email == "" || u.Username == "" || u.Password == "" {
		return ErrMissingFields
	}
	return nil
}

func ValidatePassword(p string) error {
	if len(p) < 8 {
		return ErrInvalidPassword
	}

	hasUpperCase := false
	hasLowerCase := false
	hasDigit := false

	for _, c := range p {
		switch {
		case 'A' <= c && c <= 'Z':
			hasUpperCase = true
		case 'a' <= c && c <= 'z':
			hasLowerCase = true
		case '0' <= c && c <= '9':
			hasDigit = true
		}

		if hasUpperCase && hasLowerCase && hasDigit {
			return nil
		}
	}

	if !hasUpperCase || !hasLowerCase || !hasDigit {
		return ErrInvalidPassword
	}

	return nil
}
