package qrs

import (
	"io/ioutil"

	qrcode "github.com/skip2/go-qrcode"
)

func QrGenerator(ModelID uint) (Qr, error) {
	png, err := qrcode.Encode("https://example.org", qrcode.Medium, 256)
	if err != nil {
		return Qr{}, err
	}

	err = ioutil.WriteFile("./png.png", png, 0644)
	if err != nil {
		return Qr{}, err
	}

	return Qr{}, nil
}
