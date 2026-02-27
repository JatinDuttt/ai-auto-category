function generateCategoryData(productName, description) {
  const text = (productName + " " + description).toLowerCase();

  let category = "Others";
  let subCategory = "General";
  let seoTags = [];
  let sustainabilityFilters = [];

  // -------- CATEGORY & SUB-CATEGORY LOGIC --------
  if (text.includes("bottle") || text.includes("container")) {
    category = "Kitchen & Storage";
    subCategory = "Bottles & Containers";
    seoTags.push("eco bottle", "reusable bottle", "water bottle");
  }

  if (text.includes("soap") || text.includes("shampoo")) {
    category = "Personal Care";
    subCategory = "Bath & Hygiene";
    seoTags.push("organic soap", "chemical free", "natural care");
  }

  if (text.includes("bag")) {
    category = "Shopping Essentials";
    subCategory = "Reusable Bags";
    seoTags.push("cloth bag", "eco friendly bag", "shopping bag");
  }

  // -------- SUSTAINABILITY FILTERS --------
  if (text.includes("plastic free")) sustainabilityFilters.push("plastic-free");
  if (text.includes("bamboo")) sustainabilityFilters.push("compostable");
  if (text.includes("vegan")) sustainabilityFilters.push("vegan");
  if (text.includes("recycled")) sustainabilityFilters.push("recycled");

  // Default sustainability tag
  if (sustainabilityFilters.length === 0) {
    sustainabilityFilters.push("eco-friendly");
  }

  // -------- COMMON SEO TAGS --------
  seoTags.push(
    "sustainable product",
    "green living",
    "environment friendly"
  );

const confidence = seoTags.length >= 3 ? 0.9 : 0.75;

return {
  category,
  subCategory,
  confidence_score: confidence,
  reasoning: `Keywords in the product description strongly matched ${category} → ${subCategory}.`,
  seoTags: [...new Set(seoTags)].slice(0, 10),
  sustainabilityFilters
};
}

module.exports = { generateCategoryData };