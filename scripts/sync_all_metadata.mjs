import fs from "fs";
import { motions } from "../data/motions.js";

console.log(`Current motions count: ${motions.length}`);

// 1. Update index.html
let indexHtml = fs.readFileSync("index.html", "utf8");
indexHtml = indexHtml.replace(/64\+/g, "60+");
indexHtml = indexHtml.replace(/64 种/g, "60 种");
indexHtml = indexHtml.replace(/64 经典/g, "60 经典");
indexHtml = indexHtml.replace(/收录 64/g, "收录 60");
indexHtml = indexHtml.replace(/Curating 64/g, "Curating 60");
indexHtml = indexHtml.replace(/64 项/g, "60 项");
indexHtml = indexHtml.replace(/64/g, `${motions.length}`);

// Generate Schema List items in index.html
const schemaItems = motions.map((m, idx) => {
  return `          { "@type": "ListItem", "position": ${idx + 1}, "name": "${m.zhName} (${m.enName})", "url": "https://holynova.github.io/web-motion-showcase/detail.html?id=${m.id}&name=${encodeURIComponent(m.enName)}" }`;
}).join(",\n");

// Replace itemListElement in index.html
const itemListRegex = /"itemListElement":\s*\[[\s\S]*?\]\s*\}/;
if (itemListRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(itemListRegex, `"itemListElement": [\n${schemaItems}\n        ] }`);
}

fs.writeFileSync("index.html", indexHtml, "utf8");
console.log("index.html updated with 60 motions & schema!");

// 2. Update detail.html
let detailHtml = fs.readFileSync("detail.html", "utf8");
detailHtml = detailHtml.replace(/01 \/ 64/g, `01 / ${String(motions.length).padStart(2, "0")}`);
fs.writeFileSync("detail.html", detailHtml, "utf8");
console.log("detail.html updated!");

// 3. Update package.json
let pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.description = `${motions.length} High-Craft Web UI Motions & AI Prompts`;
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log("package.json updated!");

// 4. Update README.md catalog
let readme = fs.readFileSync("README.md", "utf8");
readme = readme.replace(/64\+/g, `${motions.length}+`);
readme = readme.replace(/64 种/g, `${motions.length} 种`);
readme = readme.replace(/64 /g, `${motions.length} `);

// Re-generate category tables for README
const categoryOrder = ["进入", "滚动", "悬停", "反馈", "媒体", "布局"];
const categoryMap = {
  "进入": { title: "1. 进入与显现类 (Entrance & Reveal)", rows: [] },
  "滚动": { title: "2. 滚动与视差类 (Scroll & Parallax)", rows: [] },
  "悬停": { title: "3. 悬停与聚焦类 (Hover & Cursor Focus)", rows: [] },
  "反馈": { title: "4. 点击与反馈交互类 (Click & Interactive Feedback)", rows: [] },
  "媒体": { title: "5. 媒体与质感特效类 (Media & Ambient Shimmer)", rows: [] },
  "布局": { title: "6. 空间与布局重排类 (Layout & Spatial Transition)", rows: [] }
};

motions.forEach(m => {
  if (categoryMap[m.category]) {
    categoryMap[m.category].rows.push(m);
  }
});

let catalogSection = `## 📑 ${motions.length} 种动效分类全景矩阵速查表 | Motion Catalog\n\n`;

categoryOrder.forEach(cat => {
  const group = categoryMap[cat];
  catalogSection += `### ${group.title}\n\n`;
  catalogSection += `| 动效名称 / ID | 核心动效交互特征 | 关键技术实现 | 详情沙盒 |\n`;
  catalogSection += `| :--- | :--- | :--- | :--- |\n`;
  group.rows.forEach(m => {
    catalogSection += `| [**${m.zhName}** <br><sub>${m.enName}</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=${m.id}&name=${encodeURIComponent(m.enName)}) | ${m.description} | \`CSS / JS\` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=${m.id}&name=${encodeURIComponent(m.enName)}) |\n`;
  });
  catalogSection += `\n`;
});

// Replace between catalog header and next section in README
const readmeCatalogStart = readme.indexOf("## 📑");
const nextSectionStart = readme.indexOf("## 🚀 快速上手与本地运行");
if (readmeCatalogStart !== -1 && nextSectionStart !== -1) {
  readme = readme.slice(0, readmeCatalogStart) + catalogSection + readme.slice(nextSectionStart);
}

fs.writeFileSync("README.md", readme, "utf8");
console.log("README.md updated with 60 motions!");

// 5. Update sync-catalog.mjs
let syncCatalog = fs.readFileSync("scripts/sync-catalog.mjs", "utf8");
syncCatalog = syncCatalog.replace(/64/g, `${motions.length}`);
fs.writeFileSync("scripts/sync-catalog.mjs", syncCatalog, "utf8");
console.log("scripts/sync-catalog.mjs updated!");
