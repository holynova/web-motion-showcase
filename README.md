# 网页 UI 动效灵感库 | Web Motion Showcase


![Screenshot](./screenshot.png)


<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/holynova/web-motion-showcase?style=flat-square&color=3b82f6)](https://github.com/holynova/web-motion-showcase/stargazers)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)
[![Zero Dependency](https://img.shields.io/badge/Dependencies-0%20Vanilla%20JS-success?style=flat-square)](https://github.com/holynova/web-motion-showcase)
[![Motions Included](https://img.shields.io/badge/Motions-34%2B%20Catalog-orange?style=flat-square)](https://holynova.github.io/web-motion-showcase/)
[![AI Ready](https://img.shields.io/badge/AI%20Prompts-Claude%20%7C%20Cursor%20%7C%20DeepSeek-purple?style=flat-square)](https://holynova.github.io/web-motion-showcase/)

**面向网页设计初学者与前端开发者的互动式动效科普、全屏交互沙盒与 AI 开发提示词库。**  
An interactive catalog, fullscreen sandbox, and AI prompt hub of restrained Web UI motions.

[🌐 在线演示 (Live Demo)](https://holynova.github.io/web-motion-showcase/) | [📖 GEO 优化报告](./docs/GEO_OPTIMIZATION_REPORT.md) | [English Documentation](#english-description)

</div>

---

## 📖 项目愿景与设计哲学 | Philosophy

> **“动效应当服务于信息传递与状态感知，克制才是最高级的设计。”**

在现代 Web 设计中，过度浮夸的动画往往会带来视觉疲劳与页面卡顿。**Web Motion Showcase** 秉持**“克制动效（Restrained Motion）”**原则打造：

- 🍃 **克制与呼吸感**：动效时长严格控制在 `150ms ~ 400ms`，配合精心调校的 `cubic-bezier` 缓动，让交互如同呼吸般自然。
- 🎨 **双色温防刺眼配色**：内置 **Slate (石板灰)**、**Sage Green (莫兰迪绿)** 与 **Warm Sand (秋叶暖沙)** 三组柔和主题，全面告别刺眼的纯白与高对比度眩光，支持一键切换深浅色模式。
- 🤖 **AI 原生研发友好**：为每个动效配备经过实战调优的精准 **AI 提示词 (Prompt)**，可一键复制并无缝应用于 **Claude**, **Cursor**, **ChatGPT**, **DeepSeek** 等工具生成生产级前端代码。
- 🚀 **0 依赖纯原生工程**：基于原生 Vanilla JS 与 CSS 变量构建，无需安装任何体积庞大的动画库，开箱即用，极速加载。

---

## 📸 页面视觉矩阵 | Screenshots

### 1. 首页全景与三主题双模式 (Homepage & Multi-Themes)

| 经典石板灰浅色 (Slate Light) | 沉浸暗黑模式 (Slate Dark) |
| :---: | :---: |
| ![首页石板灰浅色](./docs/screenshots/01_homepage_light.png) | ![首页暗黑模式](./docs/screenshots/02_homepage_dark.png) |

| 莫兰迪绿护眼主题 (Sage Green) | 秋叶暖沙温润主题 (Warm Sand) |
| :---: | :---: |
| ![莫兰迪绿主题](./docs/screenshots/03_homepage_green.png) | ![秋叶暖沙主题](./docs/screenshots/03_homepage_sand.png) |

| 实时分类过滤与搜索 (Category Filter) | 移动端响应式体验 (Mobile Responsive) |
| :---: | :---: |
| ![动效分类过滤](./docs/screenshots/08_homepage_filter_hover.png) | <img src="./docs/screenshots/12_mobile_responsive.png" width="360" alt="移动端响应式"/> |

### 2. 动效全屏沉浸式详情沙盒 (Fullscreen Motion Sandbox)

| 3D 透视倾斜卡片 (3D Perspective Tilt Card) | 粘性滚动叙事 (Sticky Scroll Storytelling) |
| :---: | :---: |
| ![3D卡片倾斜详情](./docs/screenshots/04_detail_tilt_card.png) | ![粘性滚动详情](./docs/screenshots/05_detail_sticky_scroll.png) |

| FLIP 网格重排与折叠 (Layout Transition) | 粒子矩阵交互光波 (Canvas Interactive Ripple) |
| :---: | :---: |
| ![网格重排动效](./docs/screenshots/06_detail_layout_transition.png) | ![Canvas粒子点阵动效](./docs/screenshots/09_detail_canvas_ripple.png) |

| 无限平滑跑马灯 (Infinite Smooth Marquee) | 鼠标跟随光标 (Custom Trailing Cursor) |
| :---: | :---: |
| ![无缝跑马灯详情](./docs/screenshots/07_detail_infinite_marquee.png) | ![自定义鼠标光标](./docs/screenshots/10_detail_custom_cursor.png) |

---

## 🌟 核心特性 | Features

1. **64+ 精选前沿与经典网页动效全收录**：
   - 覆盖**进入 (Entrance)**、**滚动 (Scroll)**、**悬停 (Hover)**、**反馈 (Feedback)**、**图片 (Media)**、**布局 (Layout)** 6 大高频交互维度。
   - 新增：**极光渐变弥散流光 (Aurora Glow)**、**流星夜空划过特效 (Meteors Shower)**、**打字机多词轮播交替 (Typewriter Cycle)**、**闪烁微光星空点阵 (Starfield Particles)**、**光标轨迹动态拖影 (Cursor Trail)**、**方向感知卡片划入 (Direction-Aware Hover)**、**点阵网格近邻感应高亮 (Dot Matrix Proximity)**、**镜面菲涅尔反光 3D 卡片 (Glass Glare Tilt Card)**、**滑动指示器分段标签页 (Sliding Indicator Tabs)**、**折叠展开浮动操作岛 (Expanding FAB Menu)**、**波形音频动态可视化 (Waveform Visualizer)**、**环形刻度进度仪表 (Radial Progress Meter)**、**前后对比滑动擦除 (Before-After Slider)**、**流体变形有机泡泡 (Organic Morphing Blob)** 等前沿特效。
2. **全屏沉浸式体验沙盒 (Fullscreen Sandbox)**：
   - 点击任意卡片进入专属详情页，支持全屏预览、重新播放、交互反馈测试与参数调试。
3. **AI 编程提示词一键直达**：
   - 点击卡片右下角或详情面板中的“一键复制”，即可将结构化 Prompt 注入 AI 编程工具生成对应动效。
4. **全量无障碍适配 (Accessibility / a11y)**：
   - 深度集成 `@media (prefers-reduced-motion: reduce)`，当系统开启“减少动态效果”时自动优雅降级为静态展示，兼顾全人群体验。
5. **深度 GEO / SEO 知识图谱架构**：
   - 结合 [yao-geo-skills](https://github.com/yaojingang/yao-geo-skills) 规范，全量内置 `Schema.org`（`SoftwareApplication`、`ItemList`、`FAQPage`）结构化数据，全面适配 AI 搜索引擎（DeepSeek、豆包、通义千问、Kimi、元宝）检索与引用。

---

## 📑 64 种动效分类全景矩阵速查表 | Motion Catalog

> **速查提示**：点击任意动效名称或体验按钮即可进入**全屏沉浸式交互沙盒**，支持参数实时调节与一键复制 AI 提示词。

### 1. 🌟 基础进入与文字排版 (Entrance & Typography)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**淡入上移** <br><sub>Fade In Up</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=fade-in-up&name=Fade%20In%20Up) | 最基础的元素显现，透明度从 0 渐显并伴随微小自下而上位移 | `opacity`, `translateY`, `cubic-bezier` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=fade-in-up&name=Fade%20In%20Up) |
| [**滚动显现** <br><sub>Scroll Reveal</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-reveal&name=Scroll%20Reveal) | 视口监听触发元素淡入与微位移，长页面秩序感分层加载 | `IntersectionObserver`, `threshold` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-reveal&name=Scroll%20Reveal) |
| [**文字逐行显现** <br><sub>Line Reveal</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=line-reveal&name=Line%20Reveal) | 遮罩溢出隐藏配合文字逐行/逐字错峰自下而上抽拉升起 | `overflow: hidden`, `translateY(100%->0)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=line-reveal&name=Line%20Reveal) |
| [**模糊进入** <br><sub>Blur In / Soft Reveal</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=blur-reveal&name=Blur%20In%20%2F%20Soft%20Reveal) | 从朦胧高斯模糊与低透明度平滑过渡到完全高清清晰态 | `filter: blur()`, `transition` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=blur-reveal&name=Blur%20In%20%2F%20Soft%20Reveal) |
| [**减少动态适配** <br><sub>Reduced Motion Support</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=reduced-motion&name=Reduced%20Motion%20Support) | 遵循 a11y 标准，检测系统无障碍偏好自动降级为静态 | `@media (prefers-reduced-motion)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=reduced-motion&name=Reduced%20Motion%20Support) |
| [**打字机多词轮播交替** <br><sub>Typewriter Cycle</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=typewriter-cycle&name=Typewriter%20Cycle) | 敲击节奏逐字键入与快速退格，多组关键词平滑循环交替 | `dynamic string slice`, `setInterval` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=typewriter-cycle&name=Typewriter%20Cycle) |
| [**金属光泽扫光文字** <br><sub>Metallic Shimmer Text</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=metallic-shimmer-text&name=Metallic%20Shimmer%20Text) | 高级金属反光与镜面高光在深色文字表面平滑对角线扫过 | `background-clip: text`, `linear-gradient` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=metallic-shimmer-text&name=Metallic%20Shimmer%20Text) |
| [**文字波浪反弹悬停** <br><sub>Text Wave Ripple Hover</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=text-wave-hover&name=Text%20Wave%20Ripple%20Hover) | 大标题拆分为单字符，阶梯延迟正弦波逐字向上弹性反弹 | `transition-delay`, `cubic-bezier bounce` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=text-wave-hover&name=Text%20Wave%20Ripple%20Hover) |
| [**黑客密码解密文本** <br><sub>Text Scramble Decrypt</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=text-scramble&name=Text%20Scramble%20Decrypt) | 赛博朋克字符高频随机滚动，随后由左至右逐字收敛解密 | `random cipher glyphs`, `setInterval` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=text-scramble&name=Text%20Scramble%20Decrypt) |
| [**文字 3D 逐字波浪飞入** <br><sub>Split-Text 3D Wave</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=split-text-3d-wave&name=Split-Text%203D%20Wave) | 标题文字拆分单字，自 3D 空间沿 X 轴 90 度立体翻折登场 | `perspective`, `rotateX(90deg->0deg)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=split-text-3d-wave&name=Split-Text%203D%20Wave) |

### 2. 🖱️ 悬停交互与光标微动效 (Hover & Cursor Micro-Interactions)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**悬停上浮** <br><sub>Hover Lift</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=hover-lift&name=Hover%20Lift) | 按钮或卡片 hover 时微幅抬升 2-4px，提示可交互状态 | `transform: translateY(-4px)`, `transition` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=hover-lift&name=Hover%20Lift) |
| [**悬停阴影增强** <br><sub>Hover Shadow</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=hover-shadow&name=Hover%20Shadow) | 悬停时周围投射出深邃柔和的漫反射阴影，营造悬浮立体感 | `box-shadow`, `transition: box-shadow` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=hover-shadow&name=Hover%20Shadow) |
| [**颜色过渡** <br><sub>Color Transition</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=color-transition&name=Color%20Transition) | 消减突兀视觉跳变，毫秒级平滑过渡背景色与文字色彩 | `transition: background 250ms, color` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=color-transition&name=Color%20Transition) |
| [**下划线展开** <br><sub>Underline Reveal</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=underline-reveal&name=Underline%20Reveal) | 导航链接 hover 时，底部横线由中心向两侧或自左向右延展 | `scaleX(0->1)`, `transform-origin` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=underline-reveal&name=Underline%20Reveal) |
| [**图片轻微放大** <br><sub>Image Zoom on Hover</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=image-zoom&name=Image%20Zoom%20on%20Hover) | 外层溢出裁剪，hover 时内部图片平滑微放大 1.06 倍呼吸感 | `overflow: hidden`, `scale(1.06)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=image-zoom&name=Image%20Zoom%20on%20Hover) |
| [**饱和度增强** <br><sub>Saturation Shift</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=color-shift&name=Saturation%20Shift) | 平时低饱和或黑白灰度，光标滑入瞬间恢复全彩明亮色彩 | `filter: grayscale(100%->0%)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=color-shift&name=Saturation%20Shift) |
| [**图片遮罩揭示** <br><sub>Mask Reveal</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=mask-reveal&name=Mask%20Reveal) | 利用 CSS 裁剪路径以对角滑开或圆形绽开方式艺术化显现 | `clip-path: polygon(...)`, `transition` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=mask-reveal&name=Mask%20Reveal) |
| [**图片跟随预览** <br><sub>Hover Image Preview</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=image-preview&name=Hover%20Image%20Preview) | 光标划过纯文字列表项时，侧方浮现跟随光标的缩略图 | `position: fixed`, `pointer-events: none` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=image-preview&name=Hover%20Image%20Preview) |
| [**方向感知卡片划入** <br><sub>Direction-Aware Hover</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=direction-aware-hover&name=Direction-Aware%20Hover) | 三角函数计算光标切入角，遮罩层严格从光标进入方向划入 | `Math.atan2()`, `4-direction translate` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=direction-aware-hover&name=Direction-Aware%20Hover) |
| [**鼠标跟随光标** <br><sub>Custom Cursor</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=custom-cursor&name=Custom%20Cursor) | 自定义圆点紧随光标，外环圆圈带微小惯性插值平滑追踪 | `requestAnimationFrame`, `lerp()` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=custom-cursor&name=Custom%20Cursor) |
| [**光标轨迹动态拖影** <br><sub>Interactive Cursor Trail</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=cursor-trail&name=Interactive%20Cursor%20Trail) | 鼠标移动时基于贝塞尔样条插值绘制连续平滑的发光拖尾 | `Canvas 2D`, `quadraticCurveTo`, `alpha decay` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=cursor-trail&name=Interactive%20Cursor%20Trail) |

### 3. ⚡ 状态反馈与组件控制 (Feedback & Component Controls)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**按钮点击波纹** <br><sub>Button Ripple</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=button-ripple&name=Button%20Ripple) | 以点击坐标为圆心向外动态扩散半透明水波纹触觉反馈 | `position: absolute`, `scale(0->4)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=button-ripple&name=Button%20Ripple) |
| [**滑动指示器分段标签页** <br><sub>Sliding Indicator Tabs</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=sliding-indicator-tabs&name=Sliding%20Indicator%20Tabs) | 高亮药丸背景跟随激活 Tab 的尺寸与位置弹性滑移拉伸 | `offsetLeft/Width`, `spring cubic-bezier` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=sliding-indicator-tabs&name=Sliding%20Indicator%20Tabs) |
| [**手风琴折叠** <br><sub>Accordion Smooth Expand</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=accordion-expand&name=Accordion%20Smooth%20Expand) | 通过 CSS Grid 精准解决 auto 高度无法平滑过渡的难题 | `grid-template-rows: 0fr->1fr` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=accordion-expand&name=Accordion%20Smooth%20Expand) |
| [**数字滚动** <br><sub>Count Up Animation</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=count-up&name=Count%20Up%20Animation) | 数据看板指标从 0 开始以非线性缓动平滑递增至目标终值 | `requestAnimationFrame`, `easeOutExpo` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=count-up&name=Count%20Up%20Animation) |
| [**暗色模式切换** <br><sub>Smooth Theme Switch</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=theme-switch&name=Smooth%20Theme%20Switch) | 日夜图标自旋形态转化，全站背景色与边框色平滑插值过渡 | `transform: rotate(360deg)`, `transition` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=theme-switch&name=Smooth%20Theme%20Switch) |
| [**磁吸反馈** <br><sub>Magnetic Button</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=magnetic-effect&name=Magnetic%20Button) | 按钮在光标靠近时产生引力拉伸，离开后平滑物理回弹 | `getBoundingClientRect`, `translate` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=magnetic-effect&name=Magnetic%20Button) |
| [**弹性缓动** <br><sub>Spring Motion</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=spring-motion&name=Spring%20Motion) | 模拟真实弹簧物理阻尼衰减震荡，带来软弹轻快的交互手感 | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=spring-motion&name=Spring%20Motion) |
| [**汉堡菜单变形** <br><sub>Menu Morphing</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=menu-morphing&name=Menu%20Morphing) | 三道横线在展开时平滑折叠交叉，无缝演化为关闭叉号 (X) | `transform: rotate(45deg)`, `opacity` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=menu-morphing&name=Menu%20Morphing) |
| [**弹性手势阻尼抽屉** <br><sub>Spring Sheet Drawer</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=spring-drawer&name=Spring%20Sheet%20Drawer) | 支持触摸拖拽阻尼感应，松手依附展开或橡皮筋回弹收起 | `touch/mouse drag`, `rubber-band snap` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=spring-drawer&name=Spring%20Sheet%20Drawer) |
| [**折叠展开浮动操作岛** <br><sub>Expanding FAB Island Menu</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=expanding-fab-menu&name=Expanding%20FAB%20Island%20Menu) | 右下角悬浮动作圆点膨胀展开为全功能交互动作面板 | `spring morphing`, `staggered entrance` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=expanding-fab-menu&name=Expanding%20FAB%20Island%20Menu) |
| [**灵动岛悬浮胶囊** <br><sub>Dynamic Island Morph</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=dynamic-island&name=Dynamic%20Island%20Morph) | 极简黑色胶囊在多状态切换时以弹性阻尼平滑形变展开 | `spring cubic-bezier`, `morphing container` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=dynamic-island&name=Dynamic%20Island%20Morph) |
| [**环形刻度进度仪表** <br><sub>Circular Radial Progress Meter</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=circular-progress-meter&name=Circular%20Radial%20Progress%20Meter) | SVG 刻度圆环顺时针描边填充，数值平滑累加并带发光端点 | `stroke-dashoffset`, `requestAnimationFrame` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=circular-progress-meter&name=Circular%20Radial%20Progress%20Meter) |
| [**机械滚轮数字翻牌器** <br><sub>Rolling Number Odometer</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=rolling-number-odometer&name=Rolling%20Number%20Odometer) | 多位数字独立纵向滚轮翻滚，带来机械仪表盘沉浸质感 | `translateY(digit * -10%)`, `stagger delay` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=rolling-number-odometer&name=Rolling%20Number%20Odometer) |
| [**波形音频动态可视化** <br><sub>Audio Waveform Visualizer</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=audio-waveform-visualizer&name=Audio%20Waveform%20Visualizer) | 正弦相移算法与声学振幅起伏跳动，生动模拟语音频谱 | `scaleY() oscillation`, `CSS wave bars` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=audio-waveform-visualizer&name=Audio%20Waveform%20Visualizer) |
| [**磁吸吸附光晕按钮** <br><sub>Magnetic Glow Button</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=magnetic-glow-button&name=Magnetic%20Glow%20Button) | 光标靠近时产生物理位移吸附，同时内部光晕泛出跟随光效 | `distance vector lerp`, `radial-gradient` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=magnetic-glow-button&name=Magnetic%20Glow%20Button) |
| [**路径形变果冻按钮** <br><sub>SVG Path Jelly Morphing</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=svg-path-morphing&name=SVG%20Path%20Jelly%20Morphing) | SVG 矢量路径控制点贝塞尔插值变形，果冻拉伸并伴随回弹 | `d: path()`, `border-radius 8-axis` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=svg-path-morphing&name=SVG%20Path%20Jelly%20Morphing) |
| [**物理重力礼花爆炸** <br><sub>Confetti Explosion Burst</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=confetti-explosion&name=Confetti%20Explosion%20Burst) | 点击瞬间喷射 140+ 纸屑粒子，真实重力加速度与风阻下落 | `Canvas 2D physics`, `gravity + drag` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=confetti-explosion&name=Confetti%20Explosion%20Burst) |

### 4. 📜 滚动叙事与视差纵深 (Scroll, Parallax & Storytelling)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**滚动进度条** <br><sub>Scroll Progress Indicator</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-progress&name=Scroll%20Progress%20Indicator) | 固定在页面顶部的极细线条，跟随阅读下滑比例平滑伸展 | `width: percentage%`, `scaleX` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-progress&name=Scroll%20Progress%20Indicator) |
| [**头部阴影渐变** <br><sub>Scroll Shadow</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-shadow&name=Scroll%20Shadow) | 离开页面顶部时粘性顶栏平滑渐显阴影或浮雕底边框 | `box-shadow`, `backdrop-filter: blur` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-shadow&name=Scroll%20Shadow) |
| [**粘性滚动叙事** <br><sub>Sticky Scroll Storytelling</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=sticky-scroll&name=Sticky%20Scroll%20Storytelling) | 双栏布局中一侧视觉卡片吸顶驻留，另一侧叙事文字连续滚动 | `position: sticky`, `scroll-timeline` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=sticky-scroll&name=Sticky%20Scroll%20Storytelling) |
| [**视差滚动** <br><sub>Parallax Scrolling</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=parallax-scrolling&name=Parallax%20Scrolling) | 背景图层滚动速度慢于前景文字，营造三维立体纵深感 | `transform: translateY(scroll * factor)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=parallax-scrolling&name=Parallax%20Scrolling) |
| [**横向滚动作品带** <br><sub>Horizontal Scroll Gallery</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=horizontal-gallery&name=Horizontal%20Scroll%20Gallery) | 将常规垂直鼠标滚动转换为横向水平滑轨作品展示 | `transform: translateX(-offset)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=horizontal-gallery&name=Horizontal%20Scroll%20Gallery) |
| [**滚动卡片层叠固化** <br><sub>Card Sticky Stacking</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=card-sticky-stacking&name=Card%20Sticky%20Stacking) | 多张卡片在视口顶部依次吸附固化并产生阶梯叠加与缩放 | `position: sticky`, `scale()`, `brightness()` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=card-sticky-stacking&name=Card%20Sticky%20Stacking) |
| [**滚动手绘线条勾勒** <br><sub>Scroll-Drawn SVG Path</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-drawn-svg&name=Scroll-Drawn%20SVG%20Path) | 页面滚动进度实时驱动复杂矢量线条像画笔一样生长勾勒 | `SVG getTotalLength()`, `stroke-dashoffset` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=scroll-drawn-svg&name=Scroll-Drawn%20SVG%20Path) |
| [**页面转场** <br><sub>Page Transition</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=page-transition&name=Page%20Transition) | 单页应用或路由跳转时平滑帷幕幕布划过，提供流畅过渡 | `curtain overlay`, `translateY` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=page-transition&name=Page%20Transition) |

### 5. 🎴 现代卡片与手势布局 (Cards & Gesture Layout)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**光标聚光灯卡片** <br><sub>Spotlight Border Card</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=spotlight-card&name=Spotlight%20Border%20Card) | Linear / Vercel 标志性卡片，径向渐变聚光灯随光标照亮边框 | `CSS vars --mouse-x/y`, `radial-gradient` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=spotlight-card&name=Spotlight%20Border%20Card) |
| [**网格重排动画** <br><sub>Layout Transition</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=layout-transition&name=Layout%20Transition) | 分类筛选时运用 FLIP 原理计算坐标，卡片平滑飞行重组 | `getBoundingClientRect`, `FLIP principle` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=layout-transition&name=Layout%20Transition) |
| [**便当网格交错入场** <br><sub>Bento Grid Stagger</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=bento-grid-stagger&name=Bento%20Grid%20Stagger) | Apple Bento 风格非对称布局卡片按空间错峰平滑弹入 | `CSS Grid`, `staggered cubic-bezier` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=bento-grid-stagger&name=Bento%20Grid%20Stagger) |
| [**前后对比滑动擦除** <br><sub>Before-After Comparison Slider</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=before-after-slider&name=Before-After%20Comparison%20Slider) | 两层图片重叠，拖动中线手柄动态裁切顶层实现即时对比 | `clip-path: polygon()`, `drag handler` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=before-after-slider&name=Before-After%20Comparison%20Slider) |
| [**卡片 3D 倾斜** <br><sub>3D Tilt Card</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=tilt-card&name=3D%20Tilt%20Card) | 根据光标相对中心坐标产生 3D 透视倾斜与文字视差浮起 | `perspective()`, `rotateX`, `rotateY` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=tilt-card&name=3D%20Tilt%20Card) |
| [**镜面菲涅尔反光 3D 卡片** <br><sub>Glass Glare Tilt Card</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=glass-glare-tilt&name=Glass%20Glare%20Tilt%20Card) | 3D 透视倾斜叠加对角线菲涅尔玻璃高光漫游，拟真反光 | `perspective()`, `radial specular glare` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=glass-glare-tilt&name=Glass%20Glare%20Tilt%20Card) |
| [**拟物鱼眼缩放 Dock** <br><sub>macOS Fisheye Dock</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=macos-dock&name=macOS%20Fisheye%20Dock) | 经典 macOS Dock 栏，图标根据光标距离呈现高斯鱼眼放大 | `gaussian proximity`, `cos() distance` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=macos-dock&name=macOS%20Fisheye%20Dock) |
| [**层叠卡片手势抽卡** <br><sub>Stack Card Swipe</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=card-stack-swipe&name=Stack%20Card%20Swipe) | 探探 / Apple Wallet 风格手势抽卡，顶层飞出底层放大补位 | `z-index layering`, `rotational flick` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=card-stack-swipe&name=Stack%20Card%20Swipe) |

### 6. 🌌 视觉氛围与粒子背景 (Atmosphere & Generative Effects)

| 动效名称 (ZH / EN) | 核心视觉与物理机制 | 核心技术实现 | 在线体验 |
| :--- | :--- | :--- | :---: |
| [**流光环形边框** <br><sub>Border Beam Animation</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=border-beam&name=Border%20Beam%20Animation) | Magic UI 经典动效，高亮炫彩渐变光柱沿着矩形外边框周游 | `conic-gradient`, `@keyframes spin` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=border-beam&name=Border%20Beam%20Animation) |
| [**流程连线脉冲光波** <br><sub>Animated Flow Beams</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=animated-flow-beams&name=Animated%20Flow%20Beams) | UI 节点间贝塞尔曲线，发光脉冲粒子沿着线条持续流动传输 | `SVG bezier`, `stroke-dashoffset` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=animated-flow-beams&name=Animated%20Flow%20Beams) |
| [**无缝跑马灯** <br><sub>Infinite Marquee</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=infinite-marquee&name=Infinite%20Marquee) | 品牌 Logo 或文字列表绝对匀速、无缝对接的无限循环滚动 | `@keyframes marquee`, `translateX(-50%)` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=infinite-marquee&name=Infinite%20Marquee) |
| [**动态噪点材质** <br><sub>Dynamic Noise Texture</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=noise-texture&name=Dynamic%20Noise%20Texture) | SVG feTurbulence 噪点滤镜与高频微抖动，模拟胶片质感 | `SVG feTurbulence`, `mix-blend-mode` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=noise-texture&name=Dynamic%20Noise%20Texture) |
| [**点阵网格近邻感应高亮** <br><sub>Grid Dot Matrix Proximity</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=grid-dot-proximity&name=Grid%20Dot%20Matrix%20Proximity) | 光标周围指定半径内的点阵根据欧氏距离衰减高亮与放大 | `Euclidean distance`, `gaussian scale` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=grid-dot-proximity&name=Grid%20Dot%20Matrix%20Proximity) |
| [**交互式粒子网格** <br><sub>Interactive Ripple Grid</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=canvas-ripple-grid&name=Interactive%20Ripple%20Grid) | Canvas 粒子点阵随光标划过受重力排开，松开弹性回弹 | `Canvas 2D`, `hookian spring physics` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=canvas-ripple-grid&name=Interactive%20Ripple%20Grid) |
| [**流体变形有机泡泡** <br><sub>Organic Morphing Blob</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=organic-morphing-blob&name=Organic%20Morphing%20Blob) | 八角独立比例连续缓动形变，赋予水滴与气泡的生命律动 | `border-radius 8-axis`, `keyframes rotate` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=organic-morphing-blob&name=Organic%20Morphing%20Blob) |
| [**闪烁微光星空点阵** <br><sub>Twinkling Starfield Particles</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=twinkling-starfield&name=Twinkling%20Starfield%20Particles) | 纯白星芒粒子以不同正弦周期呼吸闪烁，并随光标 2.5D 视差 | `Canvas 2D`, `sin(alpha)`, `parallax` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=twinkling-starfield&name=Twinkling%20Starfield%20Particles) |
| [**极光渐变弥散流光** <br><sub>Aurora Glow Background</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=aurora-background&name=Aurora%20Glow%20Background) | 多层大半径高斯模糊与多色径向渐变，打造深邃极光流体 | `filter: blur(80px)`, `radial-gradient` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=aurora-background&name=Aurora%20Glow%20Background) |
| [**流星夜空划过特效** <br><sub>Meteors Shower Background</sub>](https://holynova.github.io/web-motion-showcase/detail.html?id=meteors-background&name=Meteors%20Shower%20Background) | 倾斜流星光束以随机速度划破深色夜空，头部带有微弱光斑 | `linear-gradient`, `@keyframes meteor` | [👉 体验 ↗](https://holynova.github.io/web-motion-showcase/detail.html?id=meteors-background&name=Meteors%20Shower%20Background) |

---

## 🤖 AI 提示词实战指南 | How to Use AI Prompts

每个动效卡片均内置标准化提示词，包含**触发条件、物理参数、样式规则与降级处理**。

### 使用方法：
1. **在网页中复制**：在卡片右下角点击复制图标，或在详情面板点击 `复制此提示词`。
2. **粘贴到 AI 编程助手**：
   - **Cursor / Claude Code**：`“@styles.css @script.js [粘贴提示词]，请按照项目既有的 CSS 变量实现该动效组件。”`
   - **ChatGPT / DeepSeek**：`“[粘贴提示词]，请使用 HTML + CSS + 原生 JS 为我编写完整可运行的代码片段。”`
   - **React / Tailwind 项目**：`“[粘贴提示词]，请将上述动效转换为 React + Framer Motion / Tailwind CSS 组件。”`

### 提示词示例 (以 3D Tilt Card 为例)：
```text
请帮我实现一个网页动效：卡片 3D 倾斜（3D Tilt Card）。
当鼠标在卡片上移动时，计算鼠标相对于卡片中心的坐标，给卡片施加基于 perspective(1000px) 的 rotateX 和 rotateY 三维透视旋转，并让卡片内部文字产生轻微视差浮起感；鼠标离开时平滑回弹归位。
```

---

## 🛠️ 本地运行与快速开始 | Quick Start

本项目为纯静态结构，无需任何 Node.js 构建或编译步骤。

### 方式 1：使用 Python 内置服务器
```bash
git clone https://github.com/holynova/web-motion-showcase.git
cd web-motion-showcase
python3 -m http.server 8080
```
在浏览器中打开：[http://localhost:8080](http://localhost:8080)

### 方式 2：使用 VS Code Live Server
使用 VS Code 打开项目文件夹，右键 `index.html` 选择 **"Open with Live Server"** 即可。

### URL 快捷参数支持 (Deep-Linking)
- 指定色彩主题：`?theme=slate` / `?theme=green` / `?theme=sand`
- 指定深浅模式：`?mode=light` / `?mode=dark`
- 指定界面语言：`?lang=zh` / `?lang=en`
- 直达动效详情：`detail.html?id=tilt-card`

---

## 🌐 GEO 知识图谱与搜索引擎优化 | GEO & SEO Optimization

本项目严格遵循 [yao-geo-skills](https://github.com/yaojingang/yao-geo-skills) 标准进行了全方位的 **GEO (Generative Engine Optimization)** 与结构化数据优化：

- 🏷️ **Schema.org JSON-LD 结构化数据**：已部署 `WebSite`、`SoftwareApplication`、`ItemList`（34 个动效实体）、`FAQPage` 以及 `BreadcrumbList`。
- 🔍 **AI 原生可抽取性**：优化了针对 DeepSeek, 豆包, 通义千问, Kimi, 腾讯元宝等 AI 引擎的原子事实抽取与检索意图覆盖。
- 📊 **完整优化报告**：详见 [docs/GEO_OPTIMIZATION_REPORT.md](./docs/GEO_OPTIMIZATION_REPORT.md)。

---

## <a name="english-description"></a>🌍 English Documentation

### Overview
**Web Motion Showcase** is an interactive educational sandbox and inspiration library of restrained web UI motions designed specifically for web designers and frontend engineers.

### Key Highlights
- **Restrained Motion Philosophy**: Transitions constrained to `150ms ~ 400ms` with custom cubic-bezier timing curves to prevent cognitive overload.
- **Calm Multi-Theme System**: Slate, Sage Green, and Warm Sand color palettes (supporting Light & Dark modes) that completely avoid pure white glare.
- **34 Classic & Modern UI Motions**: Categorized under *Entrance*, *Scroll*, *Hover*, *Feedback*, *Media*, and *Layout*.
- **Copy-Ready AI Prompts**: Tailored prompts for instant code generation with Claude, Cursor, ChatGPT, and DeepSeek.
- **Zero Dependencies**: Pure vanilla JavaScript and native CSS variables with zero build step.
- **Full a11y Compliance**: Gracefully degrades via `@media (prefers-reduced-motion: reduce)`.

---

## 📄 开源协议与作者 | License & Credits

- **Author**: [holynova](https://github.com/holynova)
- **License**: [ISC License](./package.json)
- **GEO Methodology**: Powered by [yao-geo-skills](https://github.com/yaojingang/yao-geo-skills) by [姚金刚](https://x.com/yaojingang)

⭐ 如果这个项目对你的设计或前端开发有所启发，欢迎在 GitHub 上点一个 Star！