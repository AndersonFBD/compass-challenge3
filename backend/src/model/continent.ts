import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface ContinentAttributes {
  id: number;
  name: string;
}

export class ContinentInstance extends Model<ContinentAttributes> {}

ContinentInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "continent",
    freezeTableName: true,
  }
);
