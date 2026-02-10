package users

import "errors"

var (
	ErrInvalidPassword  = errors.New("invalid password")
	ErrPasswordTooShort = errors.New("password must be at least 8 characters")
	ErrMissingUpperCase = errors.New("password must contain uppercase letter")
)

func ValidateUser(u User) error {
	if u.Email == "" || u.Username == "" || u.Password == "" {
		return errors.New("missing required fields")
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
