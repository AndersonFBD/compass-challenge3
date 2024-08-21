import express, { Request, Response } from "express";
import db from "./config/database.config";
db.sync().then(() => {
  console.log("connect to db");
});
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  return res.send("hello world");
});

app.listen(port, () => console.log("listening on port: " + port));
