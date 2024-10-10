import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message, recaptchaToken } = req.body;

  if (!recaptchaToken) {
    return res.status(400).json({ error: "reCAPTCHA token is missing" });
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY; // Set this in your environment variables

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

  const recaptchaResponse = await fetch(verificationUrl, {
    method: "POST",
  });
  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    return res.status(400).json({ error: "reCAPTCHA verification failed" });
  }

  // Proceed with form handling after reCAPTCHA verification
  // e.g., send an email, save to database, etc.
  
  res.status(200).json({ message: "Form submitted successfully" });
}
