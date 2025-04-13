type BookingAttributes = {
  id: number;
  tourId: number;
  user: string;
  date: string;
  time: number;
  adults: number;
  kids: number;
  children: number;
  total: number;
};

import express, { Request, Response } from "express";
import { BookingInstance } from "../model/booking";
const router = express.Router();

router.post("/booking/add", async (req: Request, res: Response) => {
  const id: number = req.body.id;
  const tourId: number = req.body.tourId;
  const user: string = req.body.user;
  const date: string = req.body.date;
  const time: number = req.body.time;
  const adults: number = req.body.adults;
  const kids: number = req.body.kids;
  const children: number = req.body.children;
  const total: number = req.body.total;

  try {
    const booking = await BookingInstance.create({
      id,
      tourId,
      user,
      date,
      time,
      adults,
      kids,
      children,
      total,
    });
    return res.status(201).send({ booking, msg: "success on adding booking" });
  } catch (error) {
    return res.json({
      msg: `error on creation: ${error}`,
      status: 500,
    });
  }
});

router.get("/bookings", async (req: Request, res: Response) => {
  try {
    const booking = await BookingInstance.findAll();
    return res.json(booking);
  } catch (error) {
    return res.json({
      msg: "error on search",
      status: 500,
    });
  }
});

export default router;
