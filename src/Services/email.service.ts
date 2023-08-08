import nodemailer from "nodemailer";
import "dotenv/config";
import { Request, Response } from "express";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS,
  },
});

const Email_Services = {
  Send_Verification_Service: async (user_Info: any) => {
    try {
      const info = transporter.sendMail({
        from: `"Planos" <${process.env.EMAIL}>`,
        to: `${user_Info.name} <${user_Info.email}>`,
        subject: "Planos Verification Code",
        text: "HI",
        html: "<h1>HI</h1>",
      });
      console.log("Message Sent: %s", (await info).messageId);
      return;
    } catch (e: any) {
      return e;
    }
  },
};

export default Email_Services;
