const db = require("../config/db");
const { generateCategoryData } = require("../services/aiCategoryService");

exports.createProduct = (req, res) => {
  const { product_name, description } = req.body;

  // Basic validation
  if (!product_name || !description) {
    return res.status(400).json({
      error: "product_name and description are required"
    });
  }

  // AI processing
  const aiResult = generateCategoryData(product_name, description);

  const insertProductSQL = `
    INSERT INTO products
    (product_name, description, category, sub_category, seo_tags, sustainability_filters)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    insertProductSQL,
    [
      product_name,
      description,
      aiResult.category,
      aiResult.subCategory,
      JSON.stringify(aiResult.seoTags),
      JSON.stringify(aiResult.sustainabilityFilters)
    ],
    (err, result) => {
      if (err) {
        console.error("❌ DB Error (products):", err);
        return res.status(500).json({ error: "Database error" });
      }

      // ✅ AI INPUT + OUTPUT LOGGING
      const insertLogSQL = `
        INSERT INTO ai_logs (input_text, ai_output, module_name)
        VALUES (?, ?, ?)
      `;

      db.query(
        insertLogSQL,
        [
          `${product_name} | ${description}`,
          JSON.stringify(aiResult),
          "AI Auto-Category Generator"
        ],
        logErr => {
          if (logErr) {
            console.error("⚠️ AI Log Error:", logErr);
          }
        }
      );

      // Final response
      res.status(201).json({
        message: "✅ Product analyzed & stored successfully",
        product_id: result.insertId,
        ai_output: aiResult
      });
    }
  );
};