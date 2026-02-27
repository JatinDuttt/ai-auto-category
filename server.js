const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 AI Auto-Category & Tag Generator is running");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});