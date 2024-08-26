import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { CountryInstance } from "./country";
import { CategoryInstance } from "./category";

interface TourAttributes {
  id: number;
  countryId: number;
  categoryId: number;
  city: string;
  title: string;
  overview: string;
  duration: number;
  price: number;
  max_people: number;
  min_age: number;
  imageurl: string;
}

export class TourInstance extends Model<TourAttributes> {}

TourInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      references: {
        model: CountryInstance,
        key: "id",
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: CategoryInstance,
        key: "id",
      },
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    overview: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    max_people: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "tour",
  }
);

TourInstance.belongsTo(CountryInstance, {
  foreignKey: "countryId",
  as: "country",
});
CountryInstance.hasMany(TourInstance, {
  foreignKey: "countryId",
  as: "country",
});

TourInstance.belongsTo(CategoryInstance, {
  foreignKey: "categoryId",
  as: "type",
});
CategoryInstance.hasMany(TourInstance, {
  foreignKey: "categoryId",
  as: "type",
});

TourInstance.sync({ alter: true });
