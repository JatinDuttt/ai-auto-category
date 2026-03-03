🌿 AI Auto-Category & Tag Generator
🚀 Overview

This project is an AI-powered backend system with an interactive real-time dashboard that automates product catalog enrichment for sustainable commerce platforms.

It intelligently analyzes product data to:

Automatically assign primary category & sub-category

Generate SEO-optimized tags

Detect sustainability attributes

Provide explainable AI reasoning

Display confidence scoring

Store structured AI output in a database

The goal is to reduce manual catalog operations while ensuring transparency, consistency, and auditability.

✨ Key Features
🧠 AI Intelligence

Auto category & sub-category assignment

5–10 SEO tags generation

Sustainability filter detection:

plastic-free

compostable

vegan

recycled

Explainable reasoning statement

Confidence score calculation

💾 Backend & Data

MySQL database persistence

AI input/output logging

Structured JSON responses

Sample catalog data seeded (50+ demo products)

🎨 Real-Time Interactive UI

Animated loading spinner

Fake AI “thinking” typing effect

Dynamic progress bar

Smooth result reveal

Confidence score animated bar

Clean SaaS-style interface

🛠 Tech Stack

Node.js

Express.js

MySQL

HTML, CSS, Vanilla JavaScript

Rule-based deterministic AI logic

No paid APIs. Fully self-contained system.

🏗 Project Architecture
ai-auto-category/
│
├── config/
│   └── db.js                # Database connection
│
├── controllers/
│   └── productController.js # Request handling & orchestration
│
├── routes/
│   └── productRoutes.js     # API endpoints
│
├── services/
│   └── aiCategoryService.js # AI categorization logic
│
├── public/
│   └── index.html           # Real-time interactive dashboard
│
├── database.sql             # Schema + seed data
├── server.js                # Entry point
├── package.json
├── .gitignore
├── .env.example
└── README.md
🧠 AI Design Approach

This system uses rule-based explainable AI instead of a large language model.

Why?

Deterministic outputs

Full explainability

No API dependency

Easy debugging

Production-safe logic

AI Logic Flow

Extract keywords from product name & description

Match against predefined category clusters

Generate SEO tags based on matched intent

Detect sustainability attributes

Calculate confidence score based on keyword match strength

Generate human-readable reasoning

📊 Confidence Score Logic

Confidence is calculated based on:

Keyword density

Category match strength

Sustainability signals detected

Description completeness

Example output:

{
  "confidence_score": 0.91,
  "reasoning": "Multiple sustainability keywords strongly matched the Kitchen & Storage category."
}

The UI visually represents confidence using an animated progress bar.

🎨 Interactive Dashboard

Access at:

http://localhost:3000
UI Workflow:

Enter product name

Enter product description

Click "Analyze Product"

AI simulation begins:

Spinner animation

Progress bar

Typing effect (“Analyzing description…”)

Final output appears with smooth animation

Output Includes:

Category

Sub-category

SEO tags

Sustainability filters

Confidence score (animated)

AI reasoning

🔌 API Endpoint
Analyze Product

POST /api/analyze

Request Body
{
  "product_name": "Bamboo Water Bottle",
  "description": "Plastic free reusable bamboo bottle for daily hydration"
}
Response
{
  "message": "Product analyzed & stored successfully",
  "product_id": 1,
  "category": "Kitchen & Storage",
  "subCategory": "Bottles & Containers",
  "tags": [
    "eco bottle",
    "reusable bottle",
    "sustainable hydration",
    "green living"
  ],
  "confidence_score": 0.91
}
🗄 Database Design
Tables
1️⃣ products

Stores AI-analyzed product data

2️⃣ ai_logs

Stores AI input/output for traceability

3️⃣ sample_products

Pre-seeded demo catalog (50+ products across domains)

Domains covered:

Bamboo products

Solar & renewable

Compostable packaging

Eco personal care

Sustainable stationery

Green cleaning

Gardening & water conservation

⚙ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/JatinDuttt/ai-auto-category.git
cd ai-auto-category
2️⃣ Install Dependencies
npm install
3️⃣ Environment Configuration

Create .env file using .env.example

4️⃣ Database Setup

Run database.sql using MySQL Workbench.

5️⃣ Start Server
npm start

Server runs at:

http://localhost:3000
🎯 Assignment Alignment

This project demonstrates:

Structured AI outputs

Explainable reasoning

Clean backend architecture

Separation of concerns

Database persistence

Sustainability-driven classification

Interactive user experience

Confidence scoring mechanism

Production-style API design

🔮 Future Enhancements

Bulk catalog AI processing

Admin review + feedback loop

Hybrid LLM + rule-based system

Real ESG impact scoring

Advanced NLP keyword clustering

Deployment with Docker

👨‍💻 Author

Jatin 
Applied AI Systems – Sustainable Commerce
Built as part of an AI systems engineering assignment