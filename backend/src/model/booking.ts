import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { TourInstance } from "./tour";

interface BookingAttributes {
  id: number;
  tourId: number;
  user: string;
  date: string;
  time: number;
  adults: number;
  kids: number;
  children: number;
  total: number;
}

export class BookingInstance extends Model<BookingAttributes> {}

BookingInstance.init(
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
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      allowNull: false,
    },
    adults: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    kids: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    children: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    tableName: "booking",
  }
);

BookingInstance.belongsTo(TourInstance, {
  foreignKey: "tourId",
  as: "tour",
});
TourInstance.hasMany(BookingInstance, {
  foreignKey: "tourId",
  as: "tour",
});

BookingInstance.sync({ alter: true });
