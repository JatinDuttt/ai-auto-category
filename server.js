const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// 👇 ADD THIS LINE
app.use(express.static("public"));

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 AI Auto-Category & Tag Generator is running");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});