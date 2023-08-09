import nodemailer from "nodemailer";
import "dotenv/config";
import { Request, Response } from "express";
import Account_Service from "./account.service";
import { Account_Info_Document } from "../Models/account.model";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASS,
  },
});

const Email_Services = {
  Send_Verification_Service: async (user_Info: Account_Info_Document) => {
    try {
      const info = transporter.sendMail({
        from: `"Planos" <${process.env.EMAIL}>`,
        to: `${user_Info.name} <${user_Info.email}>`,
        subject: "Planos Verification Code",
        text: `${await Account_Service.Create_Verification_Code(
          user_Info.email
        )}`,
        html: `<h1>${await Account_Service.Create_Verification_Code(
          user_Info.email
        )}</h1>`,
      });
      console.log("Message Sent: %s", (await info).messageId);
      return;
    } catch (e: any) {
      return e;
    }
  },
};

export default Email_Services;
