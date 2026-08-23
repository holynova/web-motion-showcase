import fs from "fs";
import { motions } from "../data/motions.js";

const count = motions.length;
const countPattern = "(?:34|60|64|70)";

console.log(`Current motions count: ${count}`);

function updateCounts(text) {
  return text
    .replace(new RegExp(`${countPattern}\\+`, "g"), `${count}+`)
    .replace(new RegExp(`${countPattern} 种`, "g"), `${count} 种`)
    .replace(new RegExp(`${countPattern} 经典`, "g"), `${count} 经典`)
    .replace(new RegExp(`收录 ${countPattern}`, "g"), `收录 ${count}`)
    .replace(new RegExp(`Curating ${countPattern}`, "g"), `Curating ${count}`)
    .replace(new RegExp(`${countPattern} 项`, "g"), `${count} 项`);
}

// 1. Update index.html and its ItemList JSON-LD.
let indexHtml = updateCounts(fs.readFileSync("index.html", "utf8"));
const schemaItems = motions.map((motion, index) => {
  return `          { "@type": "ListItem", "position": ${index + 1}, "name": "${motion.zhName} (${motion.enName})", "url": "https://holynova.github.io/web-motion-showcase/detail.html?id=${motion.id}&name=${encodeURIComponent(motion.enName)}" }`;
}).join(",\n");
const itemListRegex = /"itemListElement":\s*\[[\s\S]*?\]\s*\}/;
if (itemListRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(itemListRegex, `"itemListElement": [\n${schemaItems}\n        ] }`);
}
fs.writeFileSync("index.html", indexHtml, "utf8");
console.log(`index.html updated with ${count} motions & schema!`);

// 2. Update the detail counter.
let detailHtml = fs.readFileSync("detail.html", "utf8");
detailHtml = detailHtml.replace(new RegExp(`01 \/ ${countPattern}`, "g"), `01 / ${String(count).padStart(2, "0")}`);
fs.writeFileSync("detail.html", detailHtml, "utf8");
console.log("detail.html updated!");

// 3. Keep package metadata aligned with the single source of truth.
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.description = `${count} High-Craft Web UI Motions & AI Prompts`;
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2) + "\n", "utf8");
console.log("package.json updated!");

// 4. Update README counts without regenerating the compact document.
let readme = fs.readFileSync("README.md", "utf8");
readme = readme
  .replace(new RegExp(`Motions-(?:34|60|64|70)%2B`, "g"), `Motions-${count}%2B`)
  .replace(new RegExp(`${countPattern}\\+`, "g"), `${count}+`)
  .replace(new RegExp(`${countPattern} 种`, "g"), `${count} 种`)
  .replace(new RegExp(`${countPattern} Classic`, "g"), `${count} Classic`);
fs.writeFileSync("README.md", readme, "utf8");
console.log(`README.md compact summary updated with ${count} motions!`);
