import mongoose from "mongoose";

interface Key_Document extends mongoose.Document {
  key: string;
  requests: number;
}

const Key_Schema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    requests: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Key_Model = mongoose.model<Key_Document>("Keys", Key_Schema);

export default Key_Model;
