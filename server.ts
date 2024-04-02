require("dotenv").config();
import express, { Request, Response } from "express";
import Product from "./src/models/product";
import { sequelize } from "./database";


const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/data", async (req: Request, res: Response) => {
  const allProduct = await Product.findAll();
  res.status(200).send(allProduct); 
});

app.post("/data", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const productData = await Product.create(data);
    res.status(201).send(productData);
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
    await sequelize.sync({ alter: true });
    console.log("sync to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     // Start the Express server
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
