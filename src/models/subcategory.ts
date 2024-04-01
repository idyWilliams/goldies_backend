import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

interface SubcategoryAttributes {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  subcategoryId: number;
}

interface SubcategoryCreationAttributes
  extends Partial<SubcategoryAttributes> {}

class Subcategory
  extends Model<SubcategoryAttributes, SubcategoryCreationAttributes>
  implements SubcategoryAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public categoryId!: number;
  public subcategoryId!: number;
}

Subcategory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subcategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Subcategory",
  }
);

export default Subcategory;
