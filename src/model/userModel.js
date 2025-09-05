import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:String,enum:["Student","Teacher"]}
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
