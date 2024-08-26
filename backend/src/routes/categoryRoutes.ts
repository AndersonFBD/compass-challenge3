import express, { Request, Response } from "express";
import { CategoryInstance } from "../model/category";

const router = express.Router();

router.post("/category/add", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const name: string = req.body.name;
  try {
    const category = await CategoryInstance.create({ id, name });
    return res.json({ category, msg: "success on adding category" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

router.get("/categories", async (req: Request, res: Response) => {
  try {
    const categories = await CategoryInstance.findAll();
    return res.json({ categories });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

export default router;
