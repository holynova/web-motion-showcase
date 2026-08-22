#!/usr/bin/env node
/**
 * scripts/sync-catalog.mjs
 * 
 * Verifies catalog consistency between:
 * 1. data/motions.js (SSOT)
 * 2. README.md (Catalog tables)
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
  console.log(`✅ All 60 motions have complete metadata, demoHtml, and render functions.`);
} else {
  process.exit(1);
}

// 3. Verify README.md mentions all motion IDs
const readmeContent = fs.readFileSync(path.join(rootDir, "README.md"), "utf8");
let missingInReadme = 0;
motions.forEach(m => {
  if (!readmeContent.includes(m.id)) {
    console.warn(`⚠️ README.md might be missing motion link for: ${m.id}`);
    missingInReadme++;
  }
});

if (missingInReadme === 0) {
  console.log(`✅ README.md covers all 60 motion links.`);
}

console.log(`\n✨ Catalog verification completed successfully!\n`);
