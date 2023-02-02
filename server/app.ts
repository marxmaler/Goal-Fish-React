import "dotenv/config";
import "./db";
import express, { Request, Response } from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter";
import path from "path";

const app = express();
const buildAddress = path.join(__dirname, "..", "client/build/");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET || "",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use(express.static(buildAddress));

app.use("/api", apiRouter);
app.get("*", (req: Request, res: Response) => {
  return res.sendFile(buildAddress + "index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${process.env.PORT}
  ################################################
`);
});
