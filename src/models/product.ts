import { DataTypes, Model } from "sequelize";
import Category from "./category";
import Subcategory from "./subcategory";
import { sequelize } from "../../database";
interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  fillings: string[];
  shapes: string[];
  categoryId: number;
  subcategoryId: number;
  toppings: string[];
  images: string[];
}

interface IProductCreation extends Partial<IProduct> {}

class Product extends Model<IProductCreation, IProduct> implements IProduct {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public sizes!: string[];
  public fillings!: string[];
  public shapes!: string[];
  public categoryId!: number;
  public subcategoryId!: number;
  public toppings!: string[];
  public images!: string[];
}

Product.init(
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    fillings: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    shapes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
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
    toppings: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId" });
Product.belongsTo(Subcategory, { foreignKey: "subcategoryId" });

export default Product;
