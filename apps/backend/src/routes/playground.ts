import { Router } from "express";
import { sendEmail } from "../services/emailService.js";
import { notifyUser } from "../lib/nodemailer.js";

const router = Router();

const MAIL = {
  email: "user@example.com",
  subject: "Hello to PrintAid",
  html: "<p>DUPA</p>",
};

router.post("/email", async (req, res, next) => {
  console.log("send email");
  try {
    await notifyUser(MAIL.email, MAIL.subject, MAIL.html);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).send({ error: "Failed to send email" });
  }

  next();
});

export default router;
