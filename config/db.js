const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // put your MySQL root password here
  database: "ai_category"
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
    return;
  }
  console.log("✅ MySQL Connected Successfully");
});

module.exports = db;