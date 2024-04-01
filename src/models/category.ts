import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database";

interface CategoryAttributes {
  id: number;
  name: string;
  categoryId: number;
  description: string;
}

interface CategoryCreationAttributes
  extends Partial<CategoryAttributes> {}

class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public name!: string;
  public categoryId!: number;
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
    categoryId: {
      type: DataTypes.INTEGER,
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

export default Category;