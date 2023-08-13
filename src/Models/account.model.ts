import mongoose from "mongoose";

export interface Account_Info_Document extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  code: string | null;
  recieve_Updates: boolean;
  company_Info: {
    company_Name: string;
    company_Sector: string;
    position: string;
    company_Location: string;
    company_Size: string;
  };
  addition_Info: string;
}

const Account_Info_Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    recieve_Updates: { type: Boolean, required: true },
    company_Info: {
      company_Name: { type: String, required: true },
      company_Sector: { type: String, required: true },
      position: { type: String, required: true },
      code: { type: String || null, required: false },
      company_Location: { type: String, required: true },
      company_Size: { type: String, required: true },
    },
    addition_Info: { type: String },
  },
  {
    timestamps: true,
  }
);

const Account_Model = mongoose.model<Account_Info_Document>(
  "Accounts",
  Account_Info_Schema
);

export default Account_Model;
