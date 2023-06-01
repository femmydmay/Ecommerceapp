const nodemailer = require("nodemailer");

const sendmail = async (subject, to, html) => {
 
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAIL_USERNAME,
    subject: subject,
    to: to,
    // text: text,
    html: html,
  });

  console.log("message sent to %s", info.messageId);
};

module.exports = sendmail;
