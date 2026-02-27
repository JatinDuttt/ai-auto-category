CREATE DATABASE ai_category;
USE ai_category;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  description TEXT,
  category VARCHAR(100),
  sub_category VARCHAR(100),
  seo_tags JSON,
  sustainability_filters JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);