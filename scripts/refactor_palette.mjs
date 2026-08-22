import fs from "fs";

// 1. Update css/variables.css
const newVariablesCss = `/* ==========================================================================
   Design System Variables & Theme Config (Impeccable Restrained Palette)
   Zero Pure-Black (#000000) & Zero Pure-White (#ffffff)
   ========================================================================== */

/* 1. Base Variables & Layout constants */
:root {
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --max-width: 1200px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  /* Text Inverse token for solid button labels (never pure white #ffffff) */
  --text-inverse: #f8fafc;
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* 2. Theme Mappings */

/* --- SLATE THEME (Default) --- */
:root,
[data-theme="slate"][data-mode="light"] {
  --bg-primary: #edf2f7;      /* Soft mist slate canvas */
  --bg-secondary: #f7fafc;    /* Crisp off-white card surface */
  --bg-tertiary: #e2e8f0;     /* Elevated control / pill */
  
  --text-primary: #111c2d;    /* Deep midnight navy charcoal */
  --text-secondary: #475569;  /* Muted slate body */
  --text-muted: #64748b;      /* Subtle caption / index */
  
  --accent-color: #2563eb;
  --accent-soft: rgba(37, 99, 235, 0.08);
  --accent-hover: #1d4ed8;
  
  --border-color: rgba(17, 28, 45, 0.08);
  --border-hover: rgba(37, 99, 235, 0.25);
  
  --navbar-bg: rgba(237, 242, 247, 0.88);
  --panel-bg: rgba(247, 250, 252, 0.88);
  --panel-border: rgba(17, 28, 45, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(17, 28, 45, 0.04);
  --shadow-md: 0 4px 20px -2px rgba(17, 28, 45, 0.06), 0 2px 8px -1px rgba(17, 28, 45, 0.03);
  --shadow-lg: 0 20px 25px -5px rgba(17, 28, 45, 0.06), 0 10px 10px -5px rgba(17, 28, 45, 0.03);
  --shadow-accent: 0 10px 15px -3px rgba(37, 99, 235, 0.16);
  
  --panel-shadow: 0 20px 25px -5px rgba(17, 28, 45, 0.08), 0 10px 10px -5px rgba(17, 28, 45, 0.04);
}

[data-theme="slate"][data-mode="dark"] {
  --bg-primary: #0d1424;      /* Deep midnight navy obsidian */
  --bg-secondary: #151f33;    /* Elevated dark card surface */
  --bg-tertiary: #202d46;     /* Layered control / pill */
  
  --text-primary: #edf2f7;    /* Luminous pearl white */
  --text-secondary: #94a3b8;  /* Muted silver slate */
  --text-muted: #64748b;      /* Quiet caption */
  
  --accent-color: #3b82f6;
  --accent-soft: rgba(59, 130, 246, 0.14);
  --accent-hover: #60a5fa;
  
  --border-color: rgba(237, 242, 247, 0.08);
  --border-hover: rgba(59, 130, 246, 0.4);
  
  --navbar-bg: rgba(13, 20, 36, 0.88);
  --panel-bg: rgba(21, 31, 51, 0.88);
  --panel-border: rgba(237, 242, 247, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
  --shadow-md: 0 4px 20px -2px rgba(0, 0, 0, 0.35), 0 2px 8px -1px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
  --shadow-accent: 0 10px 15px -3px rgba(59, 130, 246, 0.28);
  
  --panel-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
}

/* --- SAGE GREEN THEME --- */
[data-theme="green"][data-mode="light"] {
  --bg-primary: #e6ede8;      /* Earthy tea-mist green canvas */
  --bg-secondary: #f3f7f4;    /* Pale lichen card surface */
  --bg-tertiary: #d8e2da;     /* Layered control / pill */
  
  --text-primary: #152418;    /* Deep cypress charcoal */
  --text-secondary: #415344;  /* Muted forest */
  --text-muted: #617765;      /* Quiet sage */
  
  --accent-color: #2b7041;
  --accent-soft: rgba(43, 112, 65, 0.08);
  --accent-hover: #1f5430;
  
  --border-color: rgba(21, 36, 24, 0.08);
  --border-hover: rgba(43, 112, 65, 0.28);
  
  --navbar-bg: rgba(230, 237, 232, 0.88);
  --panel-bg: rgba(243, 247, 244, 0.88);
  --panel-border: rgba(21, 36, 24, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(21, 36, 24, 0.04);
  --shadow-md: 0 4px 20px -2px rgba(21, 36, 24, 0.06), 0 2px 8px -1px rgba(21, 36, 24, 0.03);
  --shadow-lg: 0 20px 25px -5px rgba(21, 36, 24, 0.06), 0 10px 10px -5px rgba(21, 36, 24, 0.03);
  --shadow-accent: 0 10px 15px -3px rgba(43, 112, 65, 0.16);
  
  --panel-shadow: 0 20px 25px -5px rgba(21, 36, 24, 0.08), 0 10px 10px -5px rgba(21, 36, 24, 0.04);
}

[data-theme="green"][data-mode="dark"] {
  --bg-primary: #0f1913;      /* Deep pine forest obsidian */
  --bg-secondary: #17241c;    /* Elevated moss card surface */
  --bg-tertiary: #233429;     /* Layered control / pill */
  
  --text-primary: #e3ece5;    /* Lichen pearl */
  --text-secondary: #9cb09f;  /* Muted sage */
  --text-muted: #6d8271;      /* Quiet forest */
  
  --accent-color: #4ade80;
  --accent-soft: rgba(74, 222, 128, 0.14);
  --accent-hover: #6ee7b7;
  
  --border-color: rgba(227, 236, 229, 0.08);
  --border-hover: rgba(74, 222, 128, 0.35);
  
  --navbar-bg: rgba(15, 25, 19, 0.88);
  --panel-bg: rgba(23, 36, 28, 0.88);
  --panel-border: rgba(227, 236, 229, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
  --shadow-md: 0 4px 20px -2px rgba(0, 0, 0, 0.35), 0 2px 8px -1px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
  --shadow-accent: 0 10px 15px -3px rgba(74, 222, 128, 0.28);
  
  --panel-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
}

/* --- WARM SAND THEME --- */
[data-theme="sand"][data-mode="light"] {
  --bg-primary: #eee6d8;      /* Warm parchment sand canvas */
  --bg-secondary: #f8f4ec;    /* Alabaster cream card surface */
  --bg-tertiary: #e2d7c5;     /* Layered control / pill */
  
  --text-primary: #2d2215;    /* Espresso amber-charcoal */
  --text-secondary: #594735;  /* Muted terracotta-brown */
  --text-muted: #7c6853;      /* Quiet clay */
  
  --accent-color: #8c4214;
  --accent-soft: rgba(140, 66, 20, 0.08);
  --accent-hover: #6e320d;
  
  --border-color: rgba(45, 34, 21, 0.08);
  --border-hover: rgba(140, 66, 20, 0.28);
  
  --navbar-bg: rgba(238, 230, 216, 0.88);
  --panel-bg: rgba(248, 244, 236, 0.88);
  --panel-border: rgba(45, 34, 21, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(45, 34, 21, 0.04);
  --shadow-md: 0 4px 20px -2px rgba(45, 34, 21, 0.06), 0 2px 8px -1px rgba(45, 34, 21, 0.03);
  --shadow-lg: 0 20px 25px -5px rgba(45, 34, 21, 0.06), 0 10px 10px -5px rgba(45, 34, 21, 0.03);
  --shadow-accent: 0 10px 15px -3px rgba(140, 66, 20, 0.16);
  
  --panel-shadow: 0 20px 25px -5px rgba(45, 34, 21, 0.08), 0 10px 10px -5px rgba(45, 34, 21, 0.04);
}

[data-theme="sand"][data-mode="dark"] {
  --bg-primary: #17120e;      /* Deep espresso roast obsidian */
  --bg-secondary: #221b15;    /* Warm walnut card surface */
  --bg-tertiary: #30261e;     /* Layered control / pill */
  
  --text-primary: #f3ece3;    /* Warm cashmere pearl */
  --text-secondary: #b8a796;  /* Muted toasted linen */
  --text-muted: #877666;      /* Quiet clay */
  
  --accent-color: #f59e0b;
  --accent-soft: rgba(245, 158, 11, 0.14);
  --accent-hover: #fbbf24;
  
  --border-color: rgba(243, 236, 227, 0.08);
  --border-hover: rgba(245, 158, 11, 0.35);
  
  --navbar-bg: rgba(23, 18, 14, 0.88);
  --panel-bg: rgba(34, 27, 21, 0.88);
  --panel-border: rgba(243, 236, 227, 0.08);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
  --shadow-md: 0 4px 20px -2px rgba(0, 0, 0, 0.35), 0 2px 8px -1px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
  --shadow-accent: 0 10px 15px -3px rgba(245, 158, 11, 0.28);
  
  --panel-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
}

/* Fallback for system dark mode when no data attribute is explicitly set */
@media (prefers-color-scheme: dark) {
  :root:not([data-mode]) {
    --bg-primary: #0d1424;
    --bg-secondary: #151f33;
    --bg-tertiary: #202d46;
    
    --text-primary: #edf2f7;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    
    --accent-color: #3b82f6;
    --accent-soft: rgba(59, 130, 246, 0.14);
    --accent-hover: #60a5fa;
    
    --border-color: rgba(237, 242, 247, 0.08);
    --border-hover: rgba(59, 130, 246, 0.4);
    
    --navbar-bg: rgba(13, 20, 36, 0.88);
    --panel-bg: rgba(21, 31, 51, 0.88);
    --panel-border: rgba(237, 242, 247, 0.08);
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.35);
    --shadow-md: 0 4px 20px -2px rgba(0, 0, 0, 0.35), 0 2px 8px -1px rgba(0, 0, 0, 0.25);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
    --shadow-accent: 0 10px 15px -3px rgba(59, 130, 246, 0.28);
    
    --panel-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.45), 0 10px 10px -5px rgba(0, 0, 0, 0.35);
  }
}

/* ==========================================================================
   Base Elements & Reset
   ========================================================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  padding: 0;
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Accessible focus styling */
.btn-primary:focus-visible,
.filter-btn:focus-visible,
.theme-dot:focus-visible,
.lang-btn:focus-visible,
.mode-toggle:focus-visible,
.nav-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

/* Text Selection */
::selection {
  background-color: var(--accent-soft);
  color: var(--accent-color);
}

/* Global Typography & Body */
body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Scrollbar Customization */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--bg-tertiary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}
`;

fs.writeFileSync("css/variables.css", newVariablesCss, "utf8");
console.log("css/variables.css rewritten with no pure black and no pure white!");

// 2. Clean pure white (#ffffff, #fff, white) and pure black (#000000, #000, black) across components.css, previews.css, detail.css
function cleanCssFile(filepath) {
  let css = fs.readFileSync(filepath, "utf8");
  
  // Replace #ffffff and #fff with var(--text-inverse, #f8fafc) or #f8fafc
  css = css.replace(/color:\s*#ffffff\s*!important/gi, "color: var(--text-inverse, #f8fafc) !important");
  css = css.replace(/color:\s*#ffffff;/gi, "color: var(--text-inverse, #f8fafc);");
  css = css.replace(/color:\s*#fff;/gi, "color: var(--text-inverse, #f8fafc);");
  css = css.replace(/color:\s*white;/gi, "color: var(--text-inverse, #f8fafc);");
  
  // Replace background: #ffffff, #fff, white
  css = css.replace(/background-color:\s*#ffffff;/gi, "background-color: var(--bg-secondary);");
  css = css.replace(/background:\s*#ffffff;/gi, "background: var(--bg-secondary);");
  
  // Replace pure black #000000, #000, black
  css = css.replace(/background-color:\s*#000000;/gi, "background-color: var(--bg-primary);");
  css = css.replace(/background:\s*#000000;/gi, "background: var(--bg-primary);");
  css = css.replace(/background-color:\s*#000;/gi, "background-color: var(--bg-primary);");
  css = css.replace(/background:\s*#000;/gi, "background: var(--bg-primary);");
  css = css.replace(/background-color:\s*black;/gi, "background-color: var(--bg-primary);");
  css = css.replace(/background:\s*black;/gi, "background: var(--bg-primary);");
  
  fs.writeFileSync(filepath, css, "utf8");
  console.log(`Cleaned ${filepath}!`);
}

cleanCssFile("css/components.css");
cleanCssFile("css/previews.css");
cleanCssFile("detail.css");
