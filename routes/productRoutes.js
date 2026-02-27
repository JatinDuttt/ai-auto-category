const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");

// POST: Create product + AI auto-category
router.post("/products", createProduct);

module.exports = router;