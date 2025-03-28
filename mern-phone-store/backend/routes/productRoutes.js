import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Lấy danh sách sản phẩm
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Không thể lấy danh sách sản phẩm" });
  }
});

// Lấy chi tiết sản phẩm theo ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Sản phẩm không tồn tại" });
    }
    res.json(product);
  } catch (error) {
    
    res.status(500).json({ error: "Không thể lấy thông tin sản phẩm" });
  }
});

// Thêm sản phẩm mới
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

// Cập nhật sản phẩm theo ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Sản phẩm không tồn tại" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Không thể cập nhật sản phẩm" });
  }
});

// Xóa sản phẩm theo ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Sản phẩm không tồn tại" });
    }
    res.json({ message: "Xóa sản phẩm thành công" });
  } catch (error) {
    res.status(500).json({ error: "Không thể xóa sản phẩm" });
  }
});

export default router;
