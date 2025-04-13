import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface CategoryAttributes {
  id: number;
  name: string;
}

export class CategoryInstance extends Model<CategoryAttributes> {}

CategoryInstance.init(
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
    tableName: "category",
    freezeTableName: true,
  }
);
