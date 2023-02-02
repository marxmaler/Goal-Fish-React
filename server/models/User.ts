import {Schema, model} from "mongoose";
import { IUser } from "../interfaces/interfaces";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String },
  joinedWithSocial: { type: Boolean, default: false },
  quote: { type: String },
  lang: { type: String },
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 5);
  }
});

const User = model("User", userSchema);
export default User;
