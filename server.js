require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.use(express.json())

const dataList = [];
app.get('/data', (req, res) => {
  res.status(200).send(dataList);
})

app.post('/data', (req, res) => {
  let data = req.body;
  dataList.push(data);
  res.status(201).send(data);
  return;
})

 app.listen(PORT, () => {
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


