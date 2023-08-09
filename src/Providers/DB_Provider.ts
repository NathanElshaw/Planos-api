import mongoose from "mongoose";
import "dotenv/config";

const Db_Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB as string);
    return "Connected";
  } catch (e: any) {
    return e;
  }
};

export default Db_Connect;
