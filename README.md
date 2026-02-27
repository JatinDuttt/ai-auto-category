# AI Auto-Category & Tag Generator

## Overview
This project is an AI-powered backend system with a real-time dashboard that automates product catalog enrichment for sustainable commerce platforms.

It analyzes product data to:
- Automatically assign categories and sub-categories
- Generate SEO-friendly tags
- Identify sustainability attributes
- Provide explainable AI outputs with confidence scores

The system is designed to reduce manual catalog work while maintaining transparency, consistency, and auditability.

---

## Key Features
- AI-based **auto category & sub-category assignment**
- **5–10 SEO tags** generation
- **Sustainability filters** detection:
  - plastic-free
  - compostable
  - vegan
  - recycled
- **Confidence score** for AI decisions
- **Human-readable AI reasoning**
- Real-time **interactive UI dashboard**
- MySQL database persistence
- AI input/output logging for auditability
- Sample catalog data seeded for demo/testing

---

## Tech Stack
- **Node.js**
- **Express.js**
- **MySQL**
- **HTML, CSS, JavaScript (Vanilla)**
- Rule-based AI logic (deterministic & explainable)

---

## Project Architecture

ai-auto-category/
│
├── config/
│ └── db.js # Database connection
│
├── controllers/
│ └── productController.js # Request handling & orchestration
│
├── routes/
│ └── productRoutes.js # API routes
│
├── services/
│ └── aiCategoryService.js # AI logic (categorization & scoring)
│
├── public/
│ └── index.html # Real-time AI dashboard UI
│
├── database.sql # Database schema + seed data
├── server.js # Application entry point
├── package.json
├── .gitignore
├── .env.example
└── README.md


---

## AI Design Approach
This project uses **rule-based AI** instead of a large language model to ensure:

- Explainability of decisions
- Deterministic and consistent outputs
- Zero dependency on paid APIs
- Easy auditing and debugging

The AI analyzes product names and descriptions using keyword-based reasoning to infer:
- Category
- Sub-category
- SEO tags
- Sustainability attributes

Each AI response includes:
- A **confidence score**
- A **reasoning statement** explaining why the decision was made

---

## Interactive Dashboard (UI)
The project includes a real-time dashboard that allows users to:
- Enter product name and description
- Trigger AI analysis
- View results instantly with animations and loading states

### UI Output Includes:
- Category & Sub-category
- Confidence score (%)
- AI reasoning
- SEO tags
- Sustainability filters

Access the dashboard at:

http://localhost:3000/index.html


---

## API Endpoint

### Analyze Product
**POST** `/api/products`

#### Request Body
```json
{
  "product_name": "Bamboo Water Bottle",
  "description": "Plastic free reusable bamboo bottle for daily hydration"
}
Response
{
  "message": "Product analyzed & stored successfully",
  "product_id": 1,
  "ai_output": {
    "category": "Kitchen & Storage",
    "subCategory": "Bottles & Containers",
    "confidence_score": 0.9,
    "reasoning": "Keywords in the product description strongly matched Kitchen & Storage → Bottles & Containers.",
    "seoTags": [
      "eco bottle",
      "reusable bottle",
      "water bottle",
      "sustainable product",
      "green living"
    ],
    "sustainabilityFilters": [
      "plastic-free",
      "compostable"
    ]
  }
}
Database Design

The system uses MySQL with the following tables:

products – Stores AI-analyzed product data

ai_logs – Stores AI inputs and outputs for traceability

sample_products – Preloaded catalog data for demo and testing

Sample catalog data is seeded to simulate a real-world onboarding workflow.

Setup Instructions
1. Clone Repository
git clone https://github.com/JatinDuttt/ai-auto-category.git
cd ai-auto-category
2. Install Dependencies
npm install
3. Environment Configuration

Create a .env file using .env.example

4. Database Setup

Run the SQL script in database.sql using MySQL Workbench or any MySQL client.

5. Start Server
npm start

Server runs on:

http://localhost:3000
Assignment Alignment

This project satisfies the following requirements:

Structured AI outputs

Explainable AI logic

Clean separation of concerns

Database persistence

Sustainability-focused reasoning

Real-time user interaction

Production-ready backend architecture

Future Enhancements

Batch AI processing for bulk catalogs

LLM-based NLP integration

Admin feedback loop for AI learning

Impact reporting module (carbon & plastic savings)

Author

Jatin 
Applied AI Systems – Sustainable Commerce