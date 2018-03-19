package utilities

import (
	"bytes"
	"html/template"
	"log"

	gomail "gopkg.in/gomail.v2"
)

//SendMail is used to send email
func SendMail(username string, url string, mailtype string, from string, to string, subject string, senderuser string, senderpass string) {

	data := struct {
		Name string
		URL  string
	}{
		Name: username,
		URL:  url,
	}
	t, err := template.ParseFiles(mailtype + ".html")
	if err != nil {
		log.Panic(err)
	}
	buf := new(bytes.Buffer)
	if err = t.Execute(buf, data); err != nil {
		log.Panic(err)
	}
	body := buf.String()

	m := gomail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", body)

	d := gomail.NewDialer("smtp.gmail.com", 587, senderuser, senderpass)

	// Send the email to Bob, Cora and Dan.
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
}
