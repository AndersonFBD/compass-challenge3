import express, { Request, Response } from "express";
import cors from "cors";
import db from "./config/database.config";
import continentRoutes from "./routes/continentRoutes";
import countryRoutes from "./routes/countryRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import tourRoutes from "./routes/tourRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import reviewRoutes from "./routes/reviewRoutes";

db.sync().then(() => {
  console.log("connect to db");
});

const allowedOrigins = ["http://localhost:5173"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors(options));
app.use(continentRoutes);
app.use(countryRoutes);
app.use(categoryRoutes);
app.use(tourRoutes);
app.use(bookingRoutes);
app.use(reviewRoutes);

app.listen(port, () => console.log("listening on port: " + port));
