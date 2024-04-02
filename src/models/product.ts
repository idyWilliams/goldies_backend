import { DataTypes, Model } from "sequelize";
import Category from "./category";
import Subcategory from "./subcategory";
import { sequelize } from "../../database";

// Define the interface for Product attributes
interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  fillings: string[];
  shapes: string[];
  toppings: string[];
  images: string[];
  // Add references to Category and Subcategory objects
  category: Category; // Reference to Category object
  subcategory: Subcategory; // Reference to Subcategory object
}

// Define the interface for Product creation attributes
interface IProductCreation extends Partial<IProduct> {}

// Define the Product model
class Product extends Model<IProductCreation, IProduct> implements IProduct {
  // Define the attributes
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public sizes!: string[];
  public fillings!: string[];
  public shapes!: string[];
  public toppings!: string[];
  public images!: string[];
  public category!: Category; // Reference to Category object
  public subcategory!: Subcategory; // Reference to Subcategory object
}

// Initialize the Product model
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

// Define associations between Product, Category, and Subcategory
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
Product.belongsTo(Subcategory, {
  foreignKey: "subcategoryId",
  as: "subcategory",
});

export default Product;
