type review = {
  id: number;
  tourId: number;
  name: string;
  email: string;
  comment: string;
  services: number;
  locations: number;
  prices: number;
  food: number;
  comfort_and_quality: number;
  overall_rating: number;
};

import express, { Request, Response } from "express";
import { ReviewInstance } from "../model/review";
const router = express.Router();

router.post("/review/add", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const tourId: number = req.body.tourId;
  const name: string = req.body.name;
  const email: string = req.body.email;
  const comment: string = req.body.comment;
  const services: number = req.body.services;
  const locations: number = req.body.locations;
  const prices: number = req.body.prices;
  const food: number = req.body.food;
  const comfort_and_quality: number = req.body.comfort_and_quality;
  const overall_rating: number = req.body.overall_rating;

  try {
    const review = await ReviewInstance.create({
      id,
      tourId,
      name,
      email,
      comment,
      services,
      locations,
      prices,
      food,
      comfort_and_quality,
      overall_rating,
    });
    return res.json({ review, msg: "success on adding review" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

//reviews of a particular tour
router.get("/reviews/:tourId", async (req: Request, res: Response) => {
  try {
    const tours = await ReviewInstance.findAll({
      where: { tourId: req.params.tourId },
    });
    return res.json({ tours });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

router.get("/review/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const tour = await ReviewInstance.findOne({
      where: {
        id: id,
      },
    });
    return res.json({ tour });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

export default router;
