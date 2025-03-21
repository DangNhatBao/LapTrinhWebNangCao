import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use(express.urlencoded({ extended: true }));

// Kết nối MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// Routes cơ bản
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Khởi động server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
