import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";
import Subcategory from "./subcategory";

interface CategoryAttributes {
  id: number;
  name: string;
  image: string;

  description: string;
}

interface CategoryCreationAttributes extends Partial<CategoryAttributes> {}

class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public name!: string;
  public image!: string;

  public description!: string;
}

Category.init(
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);

Category.hasMany(Subcategory);
Subcategory.belongsTo(Category, { foreignKey: "categoryId" });

export default Category;
