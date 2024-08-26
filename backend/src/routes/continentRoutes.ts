import express, { Request, Response } from "express";
import { ContinentInstance } from "../model/continent";

const router = express.Router();

router.post("/continent/add", async (req: Request, res: Response) => {
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

router.get("/continents", async (req: Request, res: Response) => {
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

export default router;
