CREATE DATABASE ai_category;
USE ai_category;

-- Main products table (AI output)
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

-- AI input/output logs
CREATE TABLE ai_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  input_text TEXT,
  ai_output JSON,
  module_name VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample catalog data for demo/testing
CREATE TABLE sample_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(150),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional seed data
INSERT INTO sample_products (product_name, description) VALUES
("Bamboo Water Bottle", "Plastic free reusable bamboo bottle for daily hydration"),
("Organic Herbal Soap", "Vegan chemical free bathing soap made from natural herbs"),
("Recycled Cloth Shopping Bag", "Reusable recycled cloth bag for grocery shopping"),
("Vegan Herbal Shampoo", "Plant-based shampoo free from parabens and sulfates"),
("Steel Food Storage Container", "Reusable stainless steel container for kitchen storage");