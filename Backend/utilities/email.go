package utilities

import (
	"bytes"
	"crypto/tls"
	"fmt"
	"html/template"
	"log"
	"net/smtp"
	"strings"
)

//Mail contains structure for mail content
type Mail struct {
	senderID string
	toIds    []string
	subject  string
	body     string
}

//SMTPServer contains structure for smtp configurations
type SMTPServer struct {
	host string
	port string
}

const (
	//MIME for HTML mails
	MIME = "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
)

//ServerName returns server host and port details in a formatted string
func (s *SMTPServer) ServerName() string {
	return s.host + ":" + s.port
}

//BuildMessage builds the content and body of the mail
func (mail *Mail) BuildMessage() string {
	message := ""
	message += fmt.Sprintf("From: %s\r\n", mail.senderID)
	if len(mail.toIds) > 0 {
		message += fmt.Sprintf("To: %s\r\n", strings.Join(mail.toIds, ";"))
	}

	message += fmt.Sprintf("Subject: %s\r\n", mail.subject) + MIME
	message += "\r\n" + mail.body

	return message
}

func (mail *Mail) Reader(templateFileName string, data interface{}) error {
	t, err := template.ParseFiles(templateFileName)
	if err != nil {
		return err
	}
	buf := new(bytes.Buffer)
	if err = t.Execute(buf, data); err != nil {
		return err
	}
	mail.body = buf.String()
	return nil
}

func SendMail(senderemail string, to []string, subject string, toname string, URL string, mailtype string) {
	mail := Mail{}
	mail.senderID = senderemail
	mail.toIds = to
	mail.subject = "Password Confirmation"
	templateData := struct {
		Name string
		URL  string
	}{
		Name: toname,
		URL:  URL,
	}

	err := mail.Reader(mailtype, templateData)
	//mail.body = Reader("ConfirmEmail.html")

	messageBody := mail.BuildMessage()

	SMTPServer := SMTPServer{host: "smtp.gmail.com", port: "465"}

	log.Println(SMTPServer.host)
	//build an auth
	auth := smtp.PlainAuth("", mail.senderID, "Atharva@1", SMTPServer.host)

	// Gmail will reject connection if it's not secure
	// TLS config
	tlsconfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName:         SMTPServer.host,
	}

	conn, err := tls.Dial("tcp", SMTPServer.ServerName(), tlsconfig)
	if err != nil {
		log.Panic(err)
	}

	client, err := smtp.NewClient(conn, SMTPServer.host)
	if err != nil {
		log.Panic(err)
	}

	// step 1: Use Auth
	if err = client.Auth(auth); err != nil {
		log.Panic(err)
	}

	// step 2: add all from and to
	if err = client.Mail(mail.senderID); err != nil {
		log.Panic(err)
	}
	for _, k := range mail.toIds {
		if err = client.Rcpt(k); err != nil {
			log.Panic(err)
		}
	}

	// Data
	w, err := client.Data()
	if err != nil {
		log.Panic(err)
	}

	_, err = w.Write([]byte(messageBody))
	if err != nil {
		log.Panic(err)
	}

	err = w.Close()
	if err != nil {
		log.Panic(err)
	}

	client.Quit()

	log.Println("Mail sent successfully")

}
