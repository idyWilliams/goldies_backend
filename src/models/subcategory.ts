import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import Category from "./category";

interface SubcategoryAttributes {
  id: number;
  name: string;
  description: string;
  image: string;
  categoryId: number;
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
  public image!: string;
  public categoryId!: number;
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Subcategory",
  }
);

Category.hasMany(Subcategory, { foreignKey: "categoryId" });
Subcategory.belongsTo(Category, { foreignKey: "categoryId" });

export default Subcategory;
