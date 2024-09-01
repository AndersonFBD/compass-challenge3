import express, { Request, Response } from "express";
import { TourInstance } from "../model/tour";
import { ReviewInstance } from "../model/review";
import { CountryInstance } from "../model/country";
import { literal, Sequelize } from "sequelize";

const router = express.Router();

router.post("/tour/add", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const countryId: number = req.body.countryId;
  const categoryId: number = req.body.categoryId;
  const city: string = req.body.city;
  const title: string = req.body.title;
  const overview: string = req.body.overview;
  const duration: number = req.body.duration;
  const price: number = parseFloat(req.body.price);
  const max_people: number = req.body.max_people;
  const min_age: number = req.body.min_age;
  const imageurl: string = req.body.imageurl;

  try {
    const tour = await TourInstance.create({
      id,
      countryId,
      categoryId,
      city,
      title,
      overview,
      duration,
      price,
      max_people,
      min_age,
      imageurl,
    });
    return res.json({ tour, msg: "success on adding tour" });
  } catch (error) {
    return res.json({
      msg: "error on creation",
      status: 500,
    });
  }
});

router.get("/tours", async (req: Request, res: Response) => {
  try {
    const tours = await TourInstance.findAll();
    return res.json({ tours });
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

router.get("/tour/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const tour = await TourInstance.findOne({
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

router.get("/reviews-of-tour/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const reviewCount = await ReviewInstance.count({
      where: {
        tourId: id,
      },
    });

    const avgRate = await ReviewInstance.findOne({
      where: {
        tourId: id,
      },
      attributes: [
        [Sequelize.fn("AVG", Sequelize.col("Overall_rating")), "averageRating"],
      ],
      raw: true,
    });

    return res.json({
      reviewCount,
      avgRate,
    });
  } catch (error) {
    return res.json({
      msg: error,
      status: 500,
    });
  }
});

export default router;
