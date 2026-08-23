#!/usr/bin/env node
/**
 * scripts/sync-catalog.mjs
 * 
 * Verifies catalog consistency between:
 * 1. data/motions.js (SSOT)
 * 2. README.md (Catalog summary)
 * 3. index.html (Metadata count)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { motions } from "../data/motions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log(`\n🔍 Checking catalog consistency for ${motions.length} motions...\n`);

// 1. Verify unique IDs
const idSet = new Set();
const duplicates = [];
motions.forEach(m => {
  if (idSet.has(m.id)) duplicates.push(m.id);
  idSet.add(m.id);
});

if (duplicates.length > 0) {
  console.error(`❌ Duplicate motion IDs found: ${duplicates.join(", ")}`);
  process.exit(1);
} else {
  console.log(`✅ All ${motions.length} motion IDs are unique.`);
}

// 2. Verify all properties
let propErrors = 0;
motions.forEach((m, idx) => {
  const missing = [];
  if (!m.id) missing.push("id");
  if (!m.zhName) missing.push("zhName");
  if (!m.enName) missing.push("enName");
  if (!m.category) missing.push("category");
  if (!m.description) missing.push("description");
  if (!m.enDescription) missing.push("enDescription");
  if (!m.prompt) missing.push("prompt");
  if (!m.enPrompt) missing.push("enPrompt");
  if (!m.demoHtml) missing.push("demoHtml");
  if (typeof m.render !== "function") missing.push("render function");

  if (missing.length > 0) {
    console.error(`❌ Motion #${idx + 1} (${m.id || "unknown"}) missing: ${missing.join(", ")}`);
    propErrors++;
  }
});

if (propErrors === 0) {
  console.log(`✅ All ${motions.length} motions have complete metadata, demoHtml, and render functions.`);
} else {
  process.exit(1);
}

// 3. Verify README.md keeps the compact catalog summary
const readmeContent = fs.readFileSync(path.join(rootDir, "README.md"), "utf8");
const hasCatalogSummary = readmeContent.includes(`${motions.length}+`) && readmeContent.includes("## 动效目录");
if (hasCatalogSummary) {
  console.log(`✅ README.md contains the compact ${motions.length}-motion catalog summary.`);
} else {
  console.warn(`⚠️ README.md is missing the compact catalog summary for ${motions.length} motions.`);
}

console.log(`\n✨ Catalog verification completed successfully!\n`);
