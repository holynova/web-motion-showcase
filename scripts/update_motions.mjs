import fs from "fs";
import { motions } from "../data/motions.js";

const toDelete = ["accordion-expand", "reduced-motion", "mask-reveal", "cursor-trail"];

// Read current data/motions.js source
let src = fs.readFileSync("data/motions.js", "utf8");

// Parse each motion block from src
const idMatches = [...src.matchAll(/id:\s*"([^"]+)"/g)];
const blockMap = new Map();

for (let i = 0; i < idMatches.length; i++) {
  const currentMatch = idMatches[i];
  const id = currentMatch[1];
  if (toDelete.includes(id)) continue;
  
  const startIdx = src.lastIndexOf("{", currentMatch.index);
  let endIdx;
  if (i < idMatches.length - 1) {
    const nextMatch = idMatches[i + 1];
    const nextStart = src.lastIndexOf("{", nextMatch.index);
    endIdx = src.lastIndexOf("}", nextStart) + 1;
  } else {
    const closingArrayBracket = src.lastIndexOf("];");
    endIdx = src.lastIndexOf("}", closingArrayBracket) + 1;
  }
  let block = src.slice(startIdx, endIdx).trim();
  if (block.endsWith(",")) block = block.slice(0, -1).trim();
  blockMap.set(id, block);
}

// 1. Update spotlight-card
blockMap.set("spotlight-card", `{
    id: "spotlight-card",
    zhName: "光标聚光灯卡片",
    enName: "Spotlight Border Card",
    category: "悬停",
    description: "Vercel / Linear 标志性边框光晕。计算光标在卡片内的局部坐标，以径向渐变照亮卡片边框与内部微光，产生精致的现代科技质感。",
    enDescription: "Linear & Vercel signature spotlight. Traces cursor coordinates to project an illuminated radial gradient glare across border and card surface.",
    prompt: "请帮我实现一个网页动效：光标聚光灯卡片（Spotlight Border Card）。通过监听 mousemove 动态更新 CSS 变量 --mouse-x 和 --mouse-y，使用 radial-gradient 在卡片边框与内表面渲染跟随光标移动的高亮聚光灯光晕。",
    enPrompt: "Please help me implement a web motion: Spotlight Border Card. Calculate cursor coordinates via mousemove and project a dynamic radial gradient spotlight along the card borders and surface.",
    demoHtml: \`
      <div class="preview-spotlight-wrap">
        <div class="preview-spotlight-card"><div class="preview-spotlight-glow"></div><span>01</span></div>
        <div class="preview-spotlight-card"><div class="preview-spotlight-glow"></div><span>02</span></div>
      </div>
    \`,
    render: (container) => {
      container.innerHTML = \`
        <div class="sandbox-spotlight-stage">
          <div class="sandbox-spotlight-header">
            <span class="spotlight-badge">✦ LINEAR / VERCEL STYLE</span>
            <h2>\${getCurrentLang() === "en" ? "Interactive Spotlight Grid" : "聚光灯光晕跟随卡片组"}</h2>
            <p class="sandbox-hero-sub">\${getCurrentLang() === "en" ? "Move cursor across the cards to experience high-contrast radial border and surface glare" : "移动光标在卡片间游走，体验高辨识度的边框跟随聚光灯与内表面漫反射高光"}</p>
          </div>
          <div class="sandbox-spotlight-grid">
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3>\${getCurrentLang() === "en" ? "Hyper Fluid Sync" : "毫秒超快同步"}</h3>
                <p>\${getCurrentLang() === "en" ? "Millisecond state synchronization with CRDT-based collaborative engine." : "毫秒级状态同步，基于 CRDT 算法构建的多人协作流体引擎。"}</p>
                <div class="spotlight-card-tag">Ultra Fast</div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>\${getCurrentLang() === "en" ? "Zero Trust Crypto" : "零信任加密"}</h3>
                <p>\${getCurrentLang() === "en" ? "Zero-knowledge encryption ensuring enterprise data privacy & safety." : "零知识证明加密存储，保障企业级数据隐私与资产安全。"}</p>
                <div class="spotlight-card-tag">Zero Trust</div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"/></svg>
                </div>
                <h3>\${getCurrentLang() === "en" ? "Neural Mesh AI" : "神经架构编排"}</h3>
                <p>\${getCurrentLang() === "en" ? "Autonomous multi-agent orchestration for automated code refactoring." : "多智能体自主协作中枢，自动化编排代码分析与重构工作流。"}</p>
                <div class="spotlight-card-tag">Neural Mesh</div>
              </div>
            </div>
          </div>
        </div>
      \`;

      const cards = container.querySelectorAll(".spotlight-card-item");
      const handleMouseMove = (e) => {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", \`\${x}px\`);
          card.style.setProperty("--mouse-y", \`\${y}px\`);
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("cleanup", () => {
        container.removeEventListener("mousemove", handleMouseMove);
      }, { once: true });
    }
  }`);

// 2. Update theme-switch
blockMap.set("theme-switch", `{
    id: "theme-switch",
    zhName: "暗色模式切换",
    enName: "Smooth Theme Switch",
    category: "反馈",
    description: "优雅克制的昼夜模式过渡。点击切换开关，太阳与月亮图标自旋变形，背景与卡片伴随柔和的色彩插值平滑渐变，无刺眼白光冲击。",
    enDescription: "Smooth day-night transition. Sun and moon icons morph with 360° spin while background interpolates gently without blinding glare.",
    prompt: "请帮我实现一个网页动效：暗色模式平滑切换（Smooth Theme Switch）。点击切换按钮时，通过 CSS transition 与图标自旋转平滑变换深浅主题色调，避免突兀的强光闪烁。",
    enPrompt: "Please help me implement a web motion: Smooth Theme Switch. Morph sun/moon icons with rotation and smoothly interpolate color variables without harsh white flashes.",
    demoHtml: \`
      <div class="preview-theme-switch">
        <div class="preview-theme-btn"></div>
        <div class="preview-theme-ripple"></div>
      </div>
    \`,
    render: (container) => {
      container.innerHTML = \`
        <div class="sandbox-theme-switch-stage" id="tsStage" data-theme-preview="dark">
          <div class="theme-switch-showcase-card">
            <div class="theme-switch-top-pill">
              <span class="ts-status-dot"></span>
              <span id="tsStatusLabel">\${getCurrentLang() === "en" ? "NIGHT MODE ACTIVE" : "当前为夜间模式"}</span>
            </div>
            <h1 id="tsTitle">\${getCurrentLang() === "en" ? "Restrained Day & Night Flow" : "克制温和的昼夜流转"}</h1>
            <p id="tsDesc">\${getCurrentLang() === "en" ? "Click the button below to observe soft background luminance interpolation and tactile icon rotation." : "点击下方按钮体验温和的背景色彩插值与触感图标自旋，杜绝刺眼全屏爆闪。"}</p>
            <div class="theme-switch-btn-wrap">
              <button class="theme-switch-soft-btn" id="tsBtn">
                <span class="ts-icon-box" id="tsIconBox">
                  <svg class="ts-icon-svg" id="tsMoon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  <svg class="ts-icon-svg" id="tsSun" style="display:none;" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </span>
                <span id="tsBtnText">\${getCurrentLang() === "en" ? "Switch to Day Mode" : "切换为日间明亮"}</span>
              </button>
            </div>
          </div>
        </div>
      \`;
      
      const stage = container.querySelector("#tsStage");
      const tsBtn = container.querySelector("#tsBtn");
      const tsIconBox = container.querySelector("#tsIconBox");
      const tsMoon = container.querySelector("#tsMoon");
      const tsSun = container.querySelector("#tsSun");
      const tsBtnText = container.querySelector("#tsBtnText");
      const tsStatusLabel = container.querySelector("#tsStatusLabel");
      
      let isDark = true;
      tsBtn.addEventListener("click", () => {
        isDark = !isDark;
        stage.setAttribute("data-theme-preview", isDark ? "dark" : "light");
        
        tsIconBox.style.transform = "rotate(360deg) scale(0.85)";
        setTimeout(() => {
          tsIconBox.style.transform = "rotate(0deg) scale(1)";
          if (isDark) {
            tsMoon.style.display = "block";
            tsSun.style.display = "none";
            tsBtnText.textContent = getCurrentLang() === "en" ? "Switch to Day Mode" : "切换为日间明亮";
            tsStatusLabel.textContent = getCurrentLang() === "en" ? "NIGHT MODE ACTIVE" : "当前为夜间模式";
          } else {
            tsMoon.style.display = "none";
            tsSun.style.display = "block";
            tsBtnText.textContent = getCurrentLang() === "en" ? "Switch to Night Mode" : "切换为夜间深邃";
            tsStatusLabel.textContent = getCurrentLang() === "en" ? "DAY MODE ACTIVE" : "当前为日间模式";
          }
        }, 150);
      });
    }
  }`);

// 3. Update spring-motion
blockMap.set("spring-motion", `{
    id: "spring-motion",
    zhName: "弹性缓动",
    enName: "Spring Motion",
    category: "反馈",
    description: "模拟真实物理弹簧超调与阻尼回弹。整齐对齐的卡片在点击或激活时产生软弹轻快的交互震荡，手感舒适灵动。",
    enDescription: "Simulates physical spring overshoot and damped oscillation. Symmetrically aligned cards bounce organically upon trigger.",
    prompt: "请帮我实现一个网页动效：弹性缓动（Spring Motion）。使用 cubic-bezier 物理弹簧模型，让整齐对齐的卡片在点击触发时产生轻快弹性超调与阻尼回摆动画。",
    enPrompt: "Please help me implement a web motion: Spring Motion. Apply spring physics curves to aligned cards to simulate bouncy, organic elasticity rather than linear easing.",
    demoHtml: "<div class=\\"preview-spring-box\\"></div>",
    render: (container) => {
      container.innerHTML = \`
        <div class="sandbox-spring-stage">
          <div class="spring-stage-header">
            <span class="spring-stage-badge">✦ HOOKE PHYSICS DAMPING</span>
            <h2>\${getCurrentLang() === "en" ? "Aligned Spring Physics Sandbox" : "对称对齐弹性物理沙盒"}</h2>
            <p class="sandbox-hero-sub">\${getCurrentLang() === "en" ? "Click cards or the central trigger to experience aligned spring overshoot oscillations" : "点击任意卡片或中央触发器，体验严谨对齐的物理弹性震荡反馈"}</p>
          </div>
          <div class="spring-cards-grid">
            <div class="spring-interactive-card" id="spCard1" data-preset="soft">
              <div class="sp-card-badge">SOFT SPRING</div>
              <div class="sp-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <h3>\${getCurrentLang() === "en" ? "Soft Damp" : "柔和阻尼"}</h3>
              <p>\${getCurrentLang() === "en" ? "Gentle 400ms overshoot for tranquil notifications." : "微小超调，适合沉静的消息提示与微交互。"}</p>
            </div>
            <div class="spring-interactive-card" id="spCard2" data-preset="bouncy">
              <div class="sp-card-badge active">BALANCED POP</div>
              <div class="sp-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3>\${getCurrentLang() === "en" ? "Snappy Pop" : "轻快回弹"}</h3>
              <p>\${getCurrentLang() === "en" ? "Apple-standard spring curve for tactile response." : "标准苹果级阻尼曲线，按键与卡片触感首选。"}</p>
            </div>
            <div class="spring-interactive-card" id="spCard3" data-preset="elastic">
              <div class="sp-card-badge">HIGH ELASTIC</div>
              <div class="sp-card-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              </div>
              <h3>\${getCurrentLang() === "en" ? "Hyper Elastic" : "高度弹性"}</h3>
              <p>\${getCurrentLang() === "en" ? "Dual-cycle oscillation for playful celebratory UI." : "双重振荡，适合游戏化成就与点赞庆典。"}</p>
            </div>
          </div>
          <div class="spring-controls-row">
            <button class="btn btn-primary" id="btnSpringAll" style="width: auto; padding: 12px 32px;">
              \${getCurrentLang() === "en" ? "⚡ Trigger All Aligned Cards" : "⚡ 触发全部对齐卡片"}
            </button>
          </div>
        </div>
      \`;

      const cards = container.querySelectorAll(".spring-interactive-card");
      const triggerAll = container.querySelector("#btnSpringAll");

      const animateCard = (card) => {
        card.classList.remove("springing");
        void card.offsetWidth;
        card.classList.add("springing");
      };

      cards.forEach(c => {
        c.addEventListener("click", () => animateCard(c));
      });

      triggerAll.addEventListener("click", () => {
        cards.forEach((c, idx) => {
          setTimeout(() => animateCard(c), idx * 70);
        });
      });
    }
  }`);

// 4. Update menu-morphing
blockMap.set("menu-morphing", `{
    id: "menu-morphing",
    zhName: "汉堡菜单变形",
    enName: "Menu Morphing",
    category: "反馈",
    description: "居中导航栏中的汉堡图标在点击时平滑旋转折叠，中间线条淡出，上下线条交叉演化为关闭叉号（X），并展开下拉菜单。",
    enDescription: "Centered navbar hamburger morphs smoothly into a close X icon with rotating lines while sliding down an action drawer.",
    prompt: "请帮我实现一个网页动效：汉堡菜单变形（Menu Morphing）。三根线条构成的汉堡图标平滑变化转换为 X 形关闭按钮，位置居中规整，不与外层导航冲突。",
    enPrompt: "Please help me implement a web motion: Menu Morphing. Smoothly transform a three-line hamburger icon into a clean close X icon inside a centered navigation device mockup.",
    demoHtml: \`
      <div class="preview-morphing-btn">
        <div class="preview-morphing-line line-1"></div>
        <div class="preview-morphing-line line-2"></div>
        <div class="preview-morphing-line line-3"></div>
      </div>
    \`,
    render: (container) => {
      container.innerHTML = \`
        <div class="sandbox-morph-stage">
          <div class="morph-device-mockup">
            <div class="morph-mockup-header">
              <div class="mockup-brand-row">
                <span class="mockup-brand-logo">✦ STUDIO</span>
                <button class="morph-burger-trigger" id="mockBurger" aria-label="Toggle Navigation">
                  <div class="morph-burger-lines">
                    <span class="m-line line-top"></span>
                    <span class="m-line line-mid"></span>
                    <span class="m-line line-bot"></span>
                  </div>
                </button>
              </div>
            </div>
            <div class="morph-dropdown-drawer" id="morphDrawer">
              <div class="morph-nav-links">
                <a href="#" class="m-nav-item"><span>01</span> \${getCurrentLang() === "en" ? "Spatial Architecture" : "空间策展叙事"}</a>
                <a href="#" class="m-nav-item"><span>02</span> \${getCurrentLang() === "en" ? "Kinetic Motion Lab" : "动力学动效工坊"}</a>
                <a href="#" class="m-nav-item"><span>03</span> \${getCurrentLang() === "en" ? "Engineering Systems" : "工程架构系统"}</a>
                <a href="#" class="m-nav-item"><span>04</span> \${getCurrentLang() === "en" ? "Design Intelligence" : "设计智能中心"}</a>
              </div>
            </div>
            <div class="morph-mockup-content">
              <div class="mockup-hero-box">
                <h4>\${getCurrentLang() === "en" ? "Centered Morphing Menu" : "居中汉堡图标形变"}</h4>
                <p>\${getCurrentLang() === "en" ? "Click the top-right hamburger icon inside this device mockup to observe lines smoothly cross into an X." : "点击右上角汉堡按钮，观察三道线条如何平滑折叠并旋转交叉成为关闭叉号。"}</p>
              </div>
            </div>
          </div>
        </div>
      \`;
      
      const burger = container.querySelector("#mockBurger");
      const drawer = container.querySelector("#morphDrawer");
      
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        drawer.classList.toggle("open");
      });
    }
  }`);

// 5. Update parallax-scrolling
blockMap.set("parallax-scrolling", `{
    id: "parallax-scrolling",
    zhName: "视差滚动",
    enName: "Parallax Scrolling",
    category: "滚动",
    description: "建筑学空间多维视差。沉静的曜石黑底色与翡翠冷翠/琥珀光环，背景网格、中景透镜与前景卡片按不同速度差分层位移，构建无蓝紫杂色的高级纵深。",
    enDescription: "Architectural spatial parallax. Restrained obsidian slate, emerald and amber lens floating across velocity layers without blue-purple cliches.",
    prompt: "请帮我实现一个网页动效：视差滚动（Parallax Scrolling）。使用克制的曜石灰/翡翠色系，将背景几何网格、中景光环和前景卡片按不同 translateY 滚动速率分层移动，营造沉浸式空间纵深。",
    enPrompt: "Please help me implement a web motion: Parallax Scrolling. Coordinate background grids, midground geometric lenses, and foreground cards at varying scroll speed ratios using a restrained obsidian & emerald palette.",
    demoHtml: \`
      <div class="preview-parallax-container">
        <div class="preview-parallax-bg"></div>
        <div class="preview-parallax-fg"></div>
      </div>
    \`,
    render: (container) => {
      container.innerHTML = \`
        <div class="parallax-scroll-full-page">
          <div class="parallax-layer parallax-bg" id="pBg"></div>
          <div class="parallax-layer parallax-grid-ambient" id="pGrid"></div>
          <div class="parallax-layer parallax-mid" id="pMid">
            <div class="parallax-emerald-lens"></div>
          </div>
          <div class="parallax-layer parallax-fg" id="pFg">
            <div class="parallax-editorial-hero">
              <span class="parallax-eyebrow">✦ KINETIC ARCHITECTURE</span>
              <h1>\${getCurrentLang() === "en" ? "Spatial Parallax Narrative" : "多维空间视差叙事"}</h1>
              <p class="parallax-subhead">\${getCurrentLang() === "en" ? "Scroll down to observe multi-layer velocity vectors across geometry and typography" : "向下垂直滚动，观察网格背景、翡翠透镜与前景卡片以不同速度矢量错峰位移"}</p>
            </div>
          </div>
          <div class="parallax-floating-cards-track">
            <div class="p-float-card card-1" id="pCard1">
              <span class="p-card-index">01</span>
              <h3>\${getCurrentLang() === "en" ? "Velocity Ratios" : "速率分层差"}</h3>
              <p>\${getCurrentLang() === "en" ? "Background moves at 0.2x, midground at 0.4x, foreground at 0.8x." : "背景网格 0.2x 缓动，中景透镜 0.4x，前景文字 0.8x。"}</p>
            </div>
            <div class="p-float-card card-2" id="pCard2">
              <span class="p-card-index">02</span>
              <h3>\${getCurrentLang() === "en" ? "Restrained Obsidian" : "曜石与冷翠调性"}</h3>
              <p>\${getCurrentLang() === "en" ? "Pure architectural neutrals eliminating garish blue-purple gradients." : "摒弃廉价蓝紫，选用沉稳深曜石与翡翠冷光构建高级策展质感。"}</p>
            </div>
          </div>
        </div>
      \`;
      
      const pGrid = container.querySelector("#pGrid");
      const pMid = container.querySelector("#pMid");
      const pFg = container.querySelector("#pFg");
      const pCard1 = container.querySelector("#pCard1");
      const pCard2 = container.querySelector("#pCard2");
      
      const onScroll = () => {
        const y = window.scrollY;
        if (pGrid) pGrid.style.transform = \`translateY(\${-y * 0.18}px)\`;
        if (pMid) pMid.style.transform = \`translateY(\${-y * 0.42}px) rotate(\${y * 0.05}deg)\`;
        if (pFg) pFg.style.transform = \`translateY(\${-y * 0.75}px)\`;
        if (pCard1) pCard1.style.transform = \`translateY(\${-y * 0.35}px)\`;
        if (pCard2) pCard2.style.transform = \`translateY(\${-y * 0.55}px)\`;
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  }`);

// 6. Update tilt-card (remove hover prompt)
let tiltBlock = blockMap.get("tilt-card");
tiltBlock = tiltBlock.replace(/<p style="margin-top:24px;[^"]*">[^<]*<\/p>/, "");
blockMap.set("tilt-card", tiltBlock);

// Build new data/motions.js file
const header = `/**
 * Centralized Motions Database (Single Source of Truth)
 * 60 High-Craft Web Motion Items
 */

function getCurrentLang() {
  try {
    if (typeof document !== "undefined" && document.documentElement) {
      if (document.documentElement.lang === "en") return "en";
      if (document.documentElement.lang?.startsWith("zh")) return "zh";
    }
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("lang") || "zh";
    }
  } catch (e) {}
  return "zh";
}

export const motions = [
`;

const orderedIds = [];
motions.forEach(m => {
  if (!toDelete.includes(m.id)) orderedIds.push(m.id);
});

let body = "";
orderedIds.forEach((id, idx) => {
  const blk = blockMap.get(id);
  if (!blk) throw new Error("Missing block: " + id);
  body += "  " + blk + (idx < orderedIds.length - 1 ? ",\n" : "\n");
});

const out = header + body + "];\n";
fs.writeFileSync("data/motions.js", out, "utf8");
console.log("data/motions.js written successfully with 60 motions!");
