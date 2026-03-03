const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Analyze Product
router.post("/analyze", (req, res) => {
  const { product_name, description } = req.body;

  if (!product_name || !description) {
    return res.status(400).json({ error: "All fields required" });
  }

  // Simple AI logic (dummy example)
  const category = "Eco-Friendly Product";
  const tags = ["sustainable", "green", "reusable"];

  const sql = `
    INSERT INTO products 
    (product_name, description, category, seo_tags)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [product_name, description, category, JSON.stringify(tags)],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json({
        message: "Product analyzed successfully",
        category,
        tags
      });
    }
  );
});

module.exports = router;