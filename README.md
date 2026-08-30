# Web Motion Showcase

60+ 个克制、可复用的 Web UI 动效示例，配套全屏交互沙盒和 AI 开发提示词。

[![Motions Included](https://img.shields.io/badge/Motions-60%2B%20Catalog-orange?style=flat-square)](https://holynova.github.io/web-motion-showcase/)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-0%20Vanilla%20JS-success?style=flat-square)](https://github.com/holynova/web-motion-showcase)
[![AI Ready](https://img.shields.io/badge/AI%20Prompts-Claude%20%7C%20Cursor%20%7C%20DeepSeek-purple?style=flat-square)](https://holynova.github.io/web-motion-showcase/)

[🌐 在线演示](https://holynova.github.io/web-motion-showcase/) · [📖 GEO 优化报告](./docs/GEO_OPTIMIZATION_REPORT.md) · [English](#english)

![Web Motion Showcase](./screenshot.png)

<a href="https://holynova.github.io/web-motion-showcase/"><img src="github-pages-qr.png" width="180" alt="扫描访问 Web Motion Showcase" /></a>

手机扫描二维码即可访问在线演示。

## 项目简介

Web Motion Showcase 是一个纯原生的网页动效灵感库，面向网页设计师和前端开发者。

- 60+ 条动效，覆盖进入、滚动、悬停、反馈、图片和布局。
- 每条动效都有首页预览、详情沙盒、中英双语说明和 AI Prompt。
- 支持 Slate、Sage Green、Warm Sand 三组主题，以及浅色和深色模式。
- 支持 `prefers-reduced-motion`，减少动态效果时自动降级。
- 无构建步骤，无第三方运行时依赖。

## 快速开始

```bash
npm run dev
```

然后打开 <http://127.0.0.1:4173/index.html>。

也可以直接运行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## URL 参数

```text
?lang=zh              界面语言：zh / en
?theme=slate          主题：slate / green / sand
?mode=light           模式：light / dark
?filter=滚动           按分类筛选
?q=card               搜索动效
```

详情页示例：

```text
detail.html?id=tilt-card&lang=zh&theme=slate&mode=light
```

## 动效目录

完整目录和可交互预览请直接访问[首页](https://holynova.github.io/web-motion-showcase/)。当前分类包括：

| 分类 | 适合观察的交互问题 |
| :--- | :--- |
| 进入 | 首屏显现、内容加载、文字入场 |
| 滚动 | 阅读进度、视差、叙事节奏 |
| 悬停 | 可点击性、聚焦、指针反馈 |
| 反馈 | 点击状态、通知、成功与错误 |
| 图片 | 图片加载、遮罩、质感变化 |
| 布局 | 网格重排、卡片层叠、空间切换 |

## 项目结构

```text
index.html                  首页目录
detail.html                 动效详情沙盒
data/motions.js             动效单一数据源
script.js                   首页交互与筛选
detail.js                   详情页渲染与复制逻辑
css/                        首页组件与预览样式
detail.css                  详情页与沙盒样式
scripts/sync-catalog.mjs    目录一致性检查
```

## 开发检查

```bash
npm test
```

检查动效 ID 唯一性、元数据完整性和目录数量。

项目使用 `Schema.org` JSON-LD、`ItemList` 和 `FAQPage`，相关 GEO 说明见 [GEO 优化报告](./docs/GEO_OPTIMIZATION_REPORT.md)。

## English

Web Motion Showcase is a dependency-free catalog of 60+ restrained Web UI motions for designers and frontend developers.

It includes interactive detail sandboxes, bilingual descriptions, copy-ready AI prompts, theme switching, dark mode, search, filters, and reduced-motion support.

## License

[ISC License](./package.json) · Author: [holynova](https://github.com/holynova)
