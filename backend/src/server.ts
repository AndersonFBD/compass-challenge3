import express, { Request, Response } from "express";
import db from "./config/database.config";
import { ContinentInstance } from "./model/continent";
import { CountryInstance } from "./model/country";
db.sync().then(() => {
  console.log("connect to db");
});

const app = express();
const port = 8000;
app.use(express.json());

app.post("/continent", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const name: string = req.body.name;
  try {
    const continent = await ContinentInstance.create({ id, name });
    return res.json({ continent, msg: "success on adding continent" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

app.get("/continent", async (req: Request, res: Response) => {
  try {
    const continents = await ContinentInstance.findAll();
    return res.json({ continents });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

app.post("/country", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const continentId: number = req.body.continent;
  const name: string = req.body.name;
  try {
    const country = await CountryInstance.create({ id, continentId, name });
    return res.json({ country, msg: "success on adding continent" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

app.get("/country", async (req: Request, res: Response) => {
  try {
    const countries = await CountryInstance.findAll();
    return res.json({ countries });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

app.listen(port, () => console.log("listening on port: " + port));
