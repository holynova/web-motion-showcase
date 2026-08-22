/**
 * Web Motion Showcase - Detail Page Sandbox Controller
 * ES Module Architecture
 */

import { motions } from "./data/motions.js";
import { categoryTranslations, uiTranslations } from "./data/translations.js";

/* ==========================================================================
   Page Routing & Initialization Logic
   ========================================================================== */

// 1. Read 'id', 'effect', or 'name' from URL query params
const urlParams = new URLSearchParams(window.location.search);
const selectedId = urlParams.get("id") || urlParams.get("effect");
const selectedName = urlParams.get("name") || urlParams.get("name_en") || urlParams.get("motion");

// Find motion data by id or by name
let currentMotion = null;
if (selectedId) {
  currentMotion = motions.find(m => m.id === selectedId);
}
if (!currentMotion && selectedName) {
  const normSearch = selectedName.toLowerCase().replace(/[^a-z0-9]/g, "");
  currentMotion = motions.find(m => 
    m.enName.toLowerCase().replace(/[^a-z0-9]/g, "") === normSearch ||
    m.id.toLowerCase().replace(/[^a-z0-9]/g, "") === normSearch ||
    m.zhName === selectedName
  );
}
if (!currentMotion) {
  currentMotion = motions[0];
}

// Ensure the browser URL query bar always includes &name=<enName> for statistical & analytics tracking
try {
  const currentUrl = new URL(window.location.href);
  const currentQueryName = currentUrl.searchParams.get("name");
  if (!currentQueryName || currentQueryName !== currentMotion.enName) {
    currentUrl.searchParams.set("id", currentMotion.id);
    currentUrl.searchParams.set("name", currentMotion.enName);
    window.history.replaceState(null, "", currentUrl.toString());
  }
} catch (e) {
  // Ignore in non-browser or sandbox testing environments
}

// 2. State & Translation Config
let currentLang = urlParams.get("lang") || localStorage.getItem("lang") || "zh";
let activeTab = "prompt"; // "prompt" or "code"

// DOM Elements
const demoCanvas = document.getElementById("demoCanvas");
const controlPanel = document.getElementById("controlPanel");
const panelCollapseBtn = document.getElementById("panelCollapseBtn");
const floatingExpandBtn = document.getElementById("floatingExpandBtn");
const copyPromptBtn = document.getElementById("copyPromptBtn");
const copyPromptBtnText = document.getElementById("copyPromptBtnText");
const toastNotification = document.getElementById("toastNotification");

const tabPromptBtn = document.getElementById("tabPromptBtn");
const tabCodeBtn = document.getElementById("tabCodeBtn");
const promptViewWrap = document.getElementById("promptViewWrap");
const codeViewWrap = document.getElementById("codeViewWrap");
const codeText = document.getElementById("codeText");
const prevMotionBtn = document.getElementById("prevMotionBtn");
const nextMotionBtn = document.getElementById("nextMotionBtn");
const motionIndexBadge = document.getElementById("motionIndexBadge");

const detailTitleZh = document.getElementById("detailTitleZh");
const detailTitleEn = document.getElementById("detailTitleEn");
const titleCopyTrigger = document.getElementById("titleCopyTrigger");
const titleCopyBadge = document.getElementById("titleCopyBadge");
const titleCopyText = document.getElementById("titleCopyText");
const titleCopyIcon = document.getElementById("titleCopyIcon");
const detailCategory = document.getElementById("detailCategory");
const detailDesc = document.getElementById("detailDesc");
const promptText = document.getElementById("promptText");
const replayBtn = document.getElementById("replayBtn");
const panelBackBtn = document.getElementById("panelBackBtn");

// 3. Render Control Panel content
function initControlPanel() {
  const currentIndex = motions.findIndex(m => m.id === currentMotion.id);
  if (motionIndexBadge && currentIndex !== -1) {
    motionIndexBadge.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${motions.length}`;
  }
  if (detailTitleZh) detailTitleZh.textContent = currentLang === "en" ? currentMotion.enName : currentMotion.zhName;
  if (detailTitleEn) detailTitleEn.textContent = currentLang === "en" ? currentMotion.zhName : currentMotion.enName;
  if (titleCopyTrigger) {
    titleCopyTrigger.title = currentLang === "en" ? "Click to copy motion name" : "点击一键复制动效名称";
  }
  if (titleCopyText && !titleCopyBadge?.classList.contains("copied")) {
    titleCopyText.textContent = currentLang === "en" ? "Copy" : "复制";
  }
  if (detailCategory) detailCategory.textContent = categoryTranslations[currentLang][currentMotion.category] || currentMotion.category;
  if (detailDesc) detailDesc.textContent = currentLang === "en" ? (currentMotion.enDescription || currentMotion.description) : currentMotion.description;
  if (promptText) promptText.textContent = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
  if (codeText) codeText.textContent = getMotionCodeSnippet(currentMotion);
}

function navigateMotion(offset) {
  const currentIndex = motions.findIndex(m => m.id === currentMotion.id);
  if (currentIndex === -1) return;
  const targetIndex = (currentIndex + offset + motions.length) % motions.length;
  const targetMotion = motions[targetIndex];
  const url = new URL(window.location.href);
  url.searchParams.set("id", targetMotion.id);
  url.searchParams.set("name", targetMotion.enName);
  window.location.href = url.toString();
}

function getMotionCodeSnippet(motion) {
  const isEn = currentLang === "en";
  const titleComment = isEn ? `${motion.enName} (${motion.zhName})` : `${motion.zhName} (${motion.enName})`;
  const labelText = isEn ? `${motion.enName} Sample` : `${motion.zhName} 动效示例`;
  const reducedMotionComment = isEn ? "Accessibility: Graceful fallback for reduced motion preference" : "无障碍支持：系统减少动态效果模式优雅降级";

  return `<!-- ${titleComment} -->
<div class="${motion.id}-wrapper">
  <div class="${motion.id}-element">
    <span>${labelText}</span>
  </div>
</div>

<style>
.${motion.id}-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.${motion.id}-element {
  border-radius: 12px;
  padding: 16px 28px;
  background: var(--bg-secondary, #1e293b);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

.${motion.id}-element:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.3);
}

/* ${reducedMotionComment} */
@media (prefers-reduced-motion: reduce) {
  .${motion.id}-element {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
</style>`;
}

// 4. Panel Collapse / Expand Handlers
function togglePanel(collapsed) {
  const isCollapsed = collapsed !== undefined ? collapsed : !controlPanel.classList.contains("collapsed");
  if (isCollapsed) {
    controlPanel.classList.add("collapsed");
    document.body.classList.add("panel-collapsed");
    floatingExpandBtn?.classList.add("visible");
  } else {
    controlPanel.classList.remove("collapsed");
    document.body.classList.remove("panel-collapsed");
    floatingExpandBtn?.classList.remove("visible");
  }
}

// 5. Tab Switching (AI Prompt vs Source Code)
function switchTab(tab) {
  activeTab = tab;
  if (tab === "prompt") {
    tabPromptBtn?.classList.add("active");
    tabPromptBtn?.setAttribute("aria-selected", "true");
    tabCodeBtn?.classList.remove("active");
    tabCodeBtn?.setAttribute("aria-selected", "false");
    if (promptViewWrap) promptViewWrap.style.display = "block";
    if (codeViewWrap) codeViewWrap.style.display = "none";
  } else {
    tabCodeBtn?.classList.add("active");
    tabCodeBtn?.setAttribute("aria-selected", "true");
    tabPromptBtn?.classList.remove("active");
    tabPromptBtn?.setAttribute("aria-selected", "false");
    if (promptViewWrap) promptViewWrap.style.display = "none";
    if (codeViewWrap) codeViewWrap.style.display = "block";
  }
}

if (tabPromptBtn) tabPromptBtn.addEventListener("click", () => switchTab("prompt"));
if (tabCodeBtn) tabCodeBtn.addEventListener("click", () => switchTab("code"));

// 6. Copy Prompt / Code Callback
if (copyPromptBtn) {
  copyPromptBtn.addEventListener("click", () => {
    let textToCopy = "";
    if (activeTab === "prompt") {
      textToCopy = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
    } else {
      textToCopy = getMotionCodeSnippet(currentMotion);
    }
    copyToClipboard(textToCopy);
  });
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => handleCopySuccess())
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = "0";
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.background = "transparent";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const successful = document.execCommand("copy");
    if (successful) handleCopySuccess();
  } catch (err) {
    console.error("无法复制提示词，请手动复制: ", err);
  }
  document.body.removeChild(textArea);
}

function handleCopySuccess() {
  if (copyPromptBtn) {
    copyPromptBtn.classList.add("copied");
    if (copyPromptBtnText) {
      copyPromptBtnText.textContent = uiTranslations[currentLang].copyPromptSuccessText;
    }
    setTimeout(() => {
      copyPromptBtn.classList.remove("copied");
      if (copyPromptBtnText) {
        copyPromptBtnText.textContent = uiTranslations[currentLang].copyPromptBtnText;
      }
    }, 2000);
  }
  showToast();
}

function showToast(msg) {
  if (!toastNotification) return;
  if (msg) {
    const toastMsg = toastNotification.querySelector(".toast-message");
    if (toastMsg) toastMsg.textContent = msg;
  }
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2500);
}

// 6.5. Title One-Click Copy Handler
function initTitleCopy() {
  if (!titleCopyTrigger) return;
  
  const handleTitleCopy = () => {
    const textToCopy = currentLang === "en"
      ? `${currentMotion.enName} (${currentMotion.zhName})`
      : `${currentMotion.zhName} (${currentMotion.enName})`;
    
    copyToClipboard(textToCopy);
    
    if (titleCopyBadge) {
      titleCopyBadge.classList.add("copied");
      if (titleCopyText) {
        titleCopyText.textContent = currentLang === "en" ? "Copied!" : "已复制！";
      }
      if (titleCopyIcon) {
        titleCopyIcon.innerHTML = `<polyline points="20 6 9 17 4 12"></polyline>`;
      }
      setTimeout(() => {
        titleCopyBadge.classList.remove("copied");
        if (titleCopyText) {
          titleCopyText.textContent = currentLang === "en" ? "Copy" : "复制";
        }
        if (titleCopyIcon) {
          titleCopyIcon.innerHTML = `
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          `;
        }
      }, 1800);
    }
  };

  titleCopyTrigger.addEventListener("click", handleTitleCopy);
  titleCopyTrigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTitleCopy();
    }
  });
}

// 7. Initialize Theme from localStorage / URL params
function initTheme() {
  let theme = urlParams.get("theme") || localStorage.getItem("theme") || "slate";
  let mode = urlParams.get("mode") || localStorage.getItem("mode");
  
  if (!mode) {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    mode = systemPrefersDark ? "dark" : "light";
  }
  
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-mode", mode);
}

// 8. Language Translation Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  translatePage();
  
  // Re-render the canvas demo to localize text inside the canvas
  replayMotion();
}

function translatePage() {
  const t = uiTranslations[currentLang];
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  
  // Update headers, labels & buttons
  const backText = document.getElementById("backBtnText");
  if (backText) backText.textContent = t.backBtnText;
  if (panelBackBtn) panelBackBtn.title = t.backBtnTitle;
  
  const promptLabel = document.getElementById("promptCardLabel");
  if (promptLabel) promptLabel.textContent = t.promptCardLabel;

  const codeLabel = document.getElementById("codeCardLabel");
  if (codeLabel) codeLabel.textContent = t.codeCardLabel;
  
  if (copyPromptBtnText && !copyPromptBtn.classList.contains("copied")) {
    copyPromptBtnText.textContent = t.copyPromptBtnText;
  }
  
  const replayText = document.getElementById("replayBtnText");
  if (replayText) replayText.textContent = t.replayBtnText;
  
  const floatText = document.getElementById("floatingExpandText");
  if (floatText) floatText.textContent = t.floatingExpandText;
  
  if (panelCollapseBtn) panelCollapseBtn.title = t.collapseBtnTitle;
  if (floatingExpandBtn) floatingExpandBtn.title = t.expandBtnTitle;

  const toastMsg = document.querySelector("#toastNotification .toast-message");
  if (toastMsg) toastMsg.textContent = t.toastCopySuccess;
  
  // Update browser tab document title
  document.title = currentLang === "en" 
    ? `${currentMotion.enName} (${currentMotion.zhName}) | Web Motion Showcase`
    : `${currentMotion.zhName} (${currentMotion.enName}) | 动效体验沙盒`;

  // Update control panel text values
  initControlPanel();
}

function replayMotion() {
  if (!demoCanvas) return;
  window.scrollTo({ top: 0, behavior: "instant" });
  demoCanvas.dispatchEvent(new CustomEvent("cleanup"));
  demoCanvas.innerHTML = "";
  setTimeout(() => {
    if (typeof currentMotion.render === "function") {
      currentMotion.render(demoCanvas);
    }
  }, 50);
}

// 9. Core initialization call
function init() {
  initTheme();
  
  if (panelCollapseBtn) {
    panelCollapseBtn.addEventListener("click", () => togglePanel(true));
  }
  if (floatingExpandBtn) {
    floatingExpandBtn.addEventListener("click", () => togglePanel(false));
  }

  if (panelBackBtn) {
    panelBackBtn.addEventListener("click", (e) => {
      if (window.opener) {
        e.preventDefault();
        window.close();
      }
    });
  }
  
  if (replayBtn) {
    replayBtn.addEventListener("click", replayMotion);
  }

  if (prevMotionBtn) {
    prevMotionBtn.addEventListener("click", () => navigateMotion(-1));
  }
  if (nextMotionBtn) {
    nextMotionBtn.addEventListener("click", () => navigateMotion(1));
  }

  window.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
    
    if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      replayMotion();
    } else if (e.key === "h" || e.key === "H") {
      e.preventDefault();
      togglePanel();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateMotion(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateMotion(1);
    } else if (e.key === "Escape") {
      if (window.opener) {
        window.close();
      } else {
        window.location.href = "index.html";
      }
    }
  });
  
  initTitleCopy();
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", init);
