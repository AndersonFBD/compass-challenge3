import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { TourInstance } from "./tour";

interface ReviewAttributes {
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
}

export class ReviewInstance extends Model<ReviewAttributes> {}

ReviewInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tourId: {
      type: DataTypes.INTEGER,
      references: {
        model: TourInstance,
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    services: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    locations: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    prices: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    food: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    comfort_and_quality: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    overall_rating: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    tableName: "review",
  }
);

ReviewInstance.belongsTo(TourInstance, {
  foreignKey: "tourId",
  as: "tour",
});
TourInstance.hasMany(ReviewInstance, {
  foreignKey: "tourId",
  as: "tour",
});

ReviewInstance.sync({ alter: true });
