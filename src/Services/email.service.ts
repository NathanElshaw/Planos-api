import nodemailer from "nodemailer";
import "dotenv/config";
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
  Send_Verification: async (
    user_Info: Account_Info_Document,
    code?: string
  ) => {
    try {
      const info = transporter.sendMail({
        from: `"Planos" <${process.env.EMAIL}>`,
        to: `${user_Info.name} <${user_Info.email}>`,
        subject: "Planos Verification Code",
        text: `${
          !code
            ? await Account_Service.Create_Verification_Code(user_Info.email)
            : code
        }`,
        html: `<h1>${
          !code
            ? await Account_Service.Create_Verification_Code(user_Info.email)
            : code
        }</h1>`,
      });
      return info;
    } catch (e: any) {
      return e;
    }
  },
  Resend_Verification: async (
    user_Info: Account_Info_Document,
    code?: string
  ) => {
    try {
      const Code_Check = await Account_Service.Check_For_Code(user_Info._id);
      if (Code_Check === false)
        return await Email_Services.Send_Verification(user_Info);
      const info = transporter.sendMail({
        from: `"Planos" <${process.env.EMAIL}>`,
        to: `${user_Info.name} <${user_Info.email}>`,
        subject: "Planos Verification Code",
        text: `${
          !code
            ? await Account_Service.Create_Verification_Code(user_Info.email)
            : code
        }`,
        html: `<h1>${
          !code
            ? await Account_Service.Create_Verification_Code(user_Info.email)
            : code
        }</h1>`,
      });
      return info;
    } catch (e: any) {
      return e;
    }
  },
  Send_SignUp_Thank_You: async (user_Info: Account_Info_Document) => {
    try {
      const info = transporter.sendMail({
        from: `"Planos" <${process.env.EMAIL}>`,
        to: `${user_Info.name} <${user_Info.email}>`,
        subject: "Planos Verification Code",
        text: `Thank you for signing up`,
        html: `<h1>Thank you for signing up</h1>`,
      });
      return;
    } catch (e: any) {
      return e;
    }
  },
};

export default Email_Services;
