import express, { Request, Response } from "express";
import db from "./config/database.config";
import continentRoutes from "./routes/continentRoutes";
import countryRoutes from "./routes/countryRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import tourRoutes from "./routes/tourRoutes";
db.sync().then(() => {
  console.log("connect to db");
});

const app = express();
const port = 8000;
app.use(express.json());

app.use(continentRoutes);
app.use(countryRoutes);
app.use(categoryRoutes);
app.use(tourRoutes);

app.listen(port, () => console.log("listening on port: " + port));
