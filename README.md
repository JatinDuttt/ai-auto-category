# AI Auto-Category & Tag Generator

## Overview
This project is an AI-powered backend module designed to automate product catalog enrichment for sustainable commerce platforms.  
It reduces manual effort by automatically categorizing products, generating SEO-friendly tags, and identifying sustainability attributes using structured, explainable AI logic.

This module was built as part of an **Applied AI for Sustainable Commerce** assignment.

---

## Features
- Auto-assigns a **primary product category** from a predefined list
- Suggests an appropriate **sub-category**
- Generates **5–10 SEO-friendly tags**
- Identifies **sustainability filters**, including:
  - plastic-free
  - compostable
  - vegan
  - recycled
- Returns **structured JSON output**
- Stores AI-generated results in a **MySQL database**
- Logs AI inputs and outputs for **auditability**

---

## Tech Stack
- Node.js
- Express.js
- MySQL
- Rule-based AI logic (deterministic & explainable)

---

## Project Architecture

ai-auto-category/
│
├── config/
│ └── db.js
│
├── controllers/
│ └── productController.js
│
├── routes/
│ └── productRoutes.js
│
├── services/
│ └── aiCategoryService.js
│
├── database.sql
├── server.js
├── package.json
├── .gitignore
├── .env.example
└── README.md


---

## AI Design Approach
This system uses **rule-based AI logic** instead of an external LLM to ensure:
- Explainability
- Consistent outputs
- Zero API cost
- Easy auditing and validation

The AI analyzes product names and descriptions using keyword-based reasoning to generate structured, business-ready outputs.

---

## API Endpoint

### Create Product with AI Auto-Category
**POST** `/api/products`

#### Request Body
```json
{
  "product_name": "Bamboo Water Bottle",
  "description": "Plastic free reusable bamboo bottle for daily use"
}
Response
{
  "message": "Product analyzed & stored successfully",
  "product_id": 1,
  "ai_output": {
    "category": "Kitchen & Storage",
    "subCategory": "Bottles & Containers",
    "seoTags": [
      "eco bottle",
      "reusable bottle",
      "water bottle",
      "sustainable product",
      "green living",
      "environment friendly"
    ],
    "sustainabilityFilters": [
      "plastic-free",
      "compostable"
    ]
  }
}
Database

The project uses MySQL with structured storage for:

Product details

AI-generated categories

SEO tags (JSON)

Sustainability filters (JSON)

AI input/output logs for traceability

Setup Instructions

Clone the repository

git clone https://github.com/JatinDuttt/ai-auto-category.git
cd ai-auto-category

Install dependencies

npm install

Configure environment variables
Create a .env file using .env.example

Create database
Run the SQL script in database.sql

Start server

npm start

Server runs on: http://localhost:3000

Assignment Alignment

This module satisfies the following requirements:

Structured AI outputs

Clear separation of AI and business logic

Database persistence

Sustainability-focused business logic

Production-ready backend architecture

Future Enhancements

LLM-based NLP integration

Admin dashboard for catalog review

Multi-language product understanding

Integration with impact reporting modules

Author

Jatin
AI Systems Assignment – Sustainable Commerce
