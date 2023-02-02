import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017")

const db = mongoose.connection;

db.on("error", (error)=>console.log("DB Error", error));
db.once("open", ()=>console.log("✅ Connected to DB"));