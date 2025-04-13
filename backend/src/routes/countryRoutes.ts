import express, { Request, Response } from "express";
import { CountryInstance } from "../model/country";
import { sql } from "@sequelize/core";
import { where } from "sequelize";

const router = express.Router();

router.post("/country/add", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const continentId: number = req.body.continent;
  const name: string = req.body.name;
  try {
    const country = await CountryInstance.create({ id, continentId, name });
    return res.json({ country, msg: "success on adding country" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

router.get("/countries", async (req: Request, res: Response) => {
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

router.get("/country/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const country = await CountryInstance.findOne({
      where: {
        id: id,
      },
    });
    return res.json(country);
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

//rota experimental, testando paginação e busca com nome do continente
router.get("/countries2", async (req: Request, res: Response) => {
  const page = Number(req.query.page);
  try {
    const countries = await CountryInstance.findAndCountAll({
      include: [
        {
          association: "continent",
          attributes: ["name"],
        },
      ],
      limit: 3,
      offset: (page - 1) * 3,
    });
    return res.json({ countries });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

export default router;
