import nodemailer from "nodemailer";

const account = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  user: "jwwimrgyoeowqymp@ethereal.email",
  pass: "8Eyd4UqSF37bucARJP",
};

export async function createMailer() {
  // const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: account.host,
    port: account.port,
    secure: account.secure,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  return { transporter };
}

export async function notifyUser(email: string, subject: string, html: string) {
  const { transporter } = await createMailer();
  console.log("sending email...");

  try {
    const result = await transporter.sendMail({
      from: '"PrintAid" <noreply@printaid.local>',
      to: email,
      subject,
      html,
    });
    console.log("Email sent:", result);
  } catch (e) {
    console.error("Error sending email: ", e);
    throw e;
  }
}
