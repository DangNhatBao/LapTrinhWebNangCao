import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Lấy danh sách sản phẩm
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Thêm sản phẩm
router.post("/", async (req, res) => {
  const { name, price, description, image, category, stock } = req.body;
  const product = new Product({ name, price, description, image, category, stock });

  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Không thể thêm sản phẩm" });
  }
});

export default router;
