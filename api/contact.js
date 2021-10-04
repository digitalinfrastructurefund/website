const nodemailer = require("nodemailer");

const getMailgun = () => {
  const transport = {
    service: "Mailgun",
    auth: {
      user: process.env.MAILGUN_USER,
      pass: process.env.MAILGUN_PASSWORD,
    },
  };

  return nodemailer.createTransport(transport);
};

const sendMessage = (options = {}) => {
  const {
    from,
    cc,
    to,
    bcc,
    subject,
    text,
    html,
    headers = {},
    attachments,
    tag,
  } = options;

  headers["X-Mailgun-Dkim"] = "yes";
  if (tag) {
    headers["X-Mailgun-Tag"] = tag;
  }

  return new Promise((resolve, reject) => {
    getMailgun().sendMail(
      { from, cc, to, bcc, subject, text, html, headers, attachments },
      (err, info) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(info);
        }
      }
    );
  });
};

module.exports = async (req, res) => {
  const body = req.body;
  if (!(body && body.email)) {
    res.status(400).send("All inputs required");
  }

  await sendMessage({
    to: "hello@digitalinfrastrcuture.fund",
    from: "Digital Infrastructure Fund <hello@digitalinfrastrcuture.fund>",
    subject: "NEW! Contact us form response",
    text: `
        Email: ${body.email}
        Name: ${body.name}
        Message: "${body.message}"
      `,
  });

  res.status(200).send({ result: "Success" });
};
