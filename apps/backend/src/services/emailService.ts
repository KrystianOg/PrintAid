import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({ jsonTransport: true });

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
): Promise<void> => {
  await transporter.sendMail({
    from: "no-reply@printaid.app",
    to,
    subject,
    text,
  });
};
