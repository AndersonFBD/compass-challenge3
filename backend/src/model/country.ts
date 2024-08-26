import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { ContinentInstance } from "./continent";

interface CountryAttributes {
  id: number;
  continentId: number;
  name: string;
}

export class CountryInstance extends Model<CountryAttributes> {}

CountryInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    continentId: {
      type: DataTypes.INTEGER,
      references: {
        model: ContinentInstance,
        key: "id",
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    tableName: "country",
  }
);

CountryInstance.belongsTo(ContinentInstance, {
  foreignKey: "continentId",
  as: "continent",
});
ContinentInstance.hasMany(CountryInstance, {
  foreignKey: "continentId",
  as: "continent",
});

CountryInstance.sync({ alter: true });
