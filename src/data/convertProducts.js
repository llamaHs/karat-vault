import fs from "fs";

const rawData = JSON.parse(fs.readFileSync("./src/data/products.json", "utf8"));

const products = rawData.products;

const headers = Object.keys(products[0]);

function escapeCsv(value) {
  if (value === null || value === undefined) return "";

  const str = String(value);

  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

const rows = products.map((product) =>
  headers.map((header) => escapeCsv(product[header])).join(",")
);

const csv = [headers.join(","), ...rows].join("\n");

fs.writeFileSync("./products.csv", csv);

console.log("✅ products.csv created successfully!");
console.log(`📦 ${products.length} products exported`);
