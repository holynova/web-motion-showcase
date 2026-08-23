/**
 * Web Motion Showcase - Homepage Controller
 * ES Module Architecture
 */

import { motions } from "./data/motions.js";
import { categories, categoryTranslations, uiTranslations, faqData, getThemeModeIcon } from "./data/translations.js";

/* ==========================================================================
   State Variables
   ========================================================================== */
const urlParams = new URLSearchParams(window.location.search);
let currentLang = ["zh", "en"].includes(urlParams.get("lang"))
  ? urlParams.get("lang")
  : localStorage.getItem("lang") || "zh";
let activeCategory = categories.includes(urlParams.get("filter") || urlParams.get("category"))
  ? (urlParams.get("filter") || urlParams.get("category"))
  : "全部";
let searchQuery = urlParams.get("q") || urlParams.get("search") || "";
let renderTimer = null;
let renderVersion = 0;

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const motionGrid = document.getElementById("motionGrid");
const filterContainer = document.getElementById("filterContainer");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const resultsSummary = document.getElementById("resultsSummary");
const resetFilters = document.getElementById("resetFilters");
const toastNotification = document.getElementById("toastNotification");
const progressBar = document.getElementById("progressBar");
const navbar = document.getElementById("navbar");

/* ==========================================================================
   Functions & Core Logic
   ========================================================================== */

function syncUrlState() {
  const url = new URL(window.location.href);
  const theme = document.documentElement.getAttribute("data-theme") || "slate";
  const mode = document.documentElement.getAttribute("data-mode") || "light";

  url.searchParams.set("lang", currentLang);
  url.searchParams.set("theme", theme);
  url.searchParams.set("mode", mode);

  if (activeCategory === "全部") url.searchParams.delete("filter");
  else url.searchParams.set("filter", activeCategory);
  url.searchParams.delete("category");

  if (searchQuery.trim()) url.searchParams.set("q", searchQuery.trim());
  else {
    url.searchParams.delete("q");
    url.searchParams.delete("search");
  }

  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

function getMotionHref(motion) {
  const url = new URL("./detail.html", window.location.href);
  url.searchParams.set("id", motion.id);
  url.searchParams.set("name", motion.enName);
  url.searchParams.set("lang", currentLang);
  url.searchParams.set("theme", document.documentElement.getAttribute("data-theme") || "slate");
  url.searchParams.set("mode", document.documentElement.getAttribute("data-mode") || "light");
  return url.href;
}

// 1. Render Category Filters
function renderFilters() {
  if (!filterContainer) return;
  filterContainer.innerHTML = categories.map(category => {
    const displayName = categoryTranslations[currentLang][category] || category;
    return `
      <button 
        class="filter-btn ${category === activeCategory ? 'active' : ''}" 
        type="button"
        aria-pressed="${category === activeCategory}"
        data-category="${category}"
      >
        ${displayName}
      </button>
    `;
  }).join("");
  
  // Attach filter event listeners
  filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      syncUrlState();
      renderFilters();
      renderCards();
    });
  });
}

// 2. Render Motion Cards based on Filters & Search
function renderCards() {
  if (!motionGrid || !emptyState) return;
  const renderId = ++renderVersion;
  if (renderTimer) clearTimeout(renderTimer);

  const filteredMotions = motions.filter(motion => {
    const matchesCategory = activeCategory === "全部" || motion.category === activeCategory;
    const searchString = `${motion.zhName} ${motion.enName} ${(currentLang === 'en' ? motion.enDescription : motion.description)} ${motion.category}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const t = uiTranslations[currentLang];
  if (resultsSummary) {
    resultsSummary.textContent = t.resultsSummary
      .replace("{visible}", filteredMotions.length)
      .replace("{total}", motions.length);
  }
  if (resetFilters) {
    resetFilters.hidden = activeCategory === "全部" && !searchQuery.trim();
    resetFilters.textContent = t.resetFilters;
  }

  // Toggle Empty State
  if (filteredMotions.length === 0) {
    motionGrid.style.opacity = "0";
    renderTimer = setTimeout(() => {
      if (renderId !== renderVersion) return;
      motionGrid.style.display = "none";
      emptyState.style.display = "block";
    }, 200);
  } else {
    emptyState.style.display = "none";
    motionGrid.style.display = "grid";
    
    // Smooth transition list re-render
    motionGrid.style.opacity = "0";
    renderTimer = setTimeout(() => {
      if (renderId !== renderVersion) return;
      motionGrid.innerHTML = filteredMotions.map(motion => {
        const catName = categoryTranslations[currentLang][motion.category] || motion.category;
        const descText = currentLang === "en" ? (motion.enDescription || motion.description) : motion.description;
        const ariaLabel = currentLang === "en" ? `${motion.enName} motion demo simulation` : `${motion.zhName} 动效演示模拟`;
        const copyTitle = uiTranslations[currentLang].copyPromptTitle;
        const cardLabel = currentLang === "en" ? motion.enName : motion.zhName;
        
        let titleHtml = "";
        if (currentLang === "en") {
          titleHtml = `
            <h3 class="card-title-zh">${motion.enName}</h3>
            <span class="card-title-en">${motion.zhName}</span>
          `;
        } else {
          titleHtml = `
            <h3 class="card-title-zh">${motion.zhName}</h3>
            <span class="card-title-en">${motion.enName}</span>
          `;
        }

        return `
          <article class="motion-card" id="card-${motion.id}">
            <a class="motion-card-link" href="${getMotionHref(motion)}" aria-label="${cardLabel}">
              <div class="preview-canvas" aria-hidden="true">
                ${motion.demoHtml}
              </div>
              <div class="card-content">
                <span class="card-tag">${catName}</span>
                <div class="card-title-row">
                  ${titleHtml}
                </div>
                <p class="card-desc">${descText}</p>
              </div>
            </a>
            <div class="card-actions">
              <button class="btn-copy-prompt" type="button" data-motion-id="${motion.id}" title="${copyTitle}" aria-label="${copyTitle}">
                <span class="copy-icon" aria-hidden="true"><svg class="icon icon-copy" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 0 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></span>
              </button>
            </div>
          </article>
        `;
      }).join("");
      
      motionGrid.style.opacity = "1";
      
      // Bind copy buttons in grid
      motionGrid.querySelectorAll(".btn-copy-prompt").forEach(button => {
        button.addEventListener("click", () => {
          const motion = motions.find(item => item.id === button.dataset.motionId);
          if (!motion) return;
          const promptText = currentLang === "en" ? (motion.enPrompt || motion.prompt) : motion.prompt;
          copyToClipboard(promptText);
        });
      });
      
      // Visual simulation updates in JavaScript where CSS isn't enough
      initDynamicSimulations();
      
    }, 200);
  }
}

// Helper to run JS-driven preview simulations if any (e.g. number counting up)
function initDynamicSimulations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".preview-count-box").forEach(box => { box.textContent = "99"; });
    return;
  }
  const countBoxes = document.querySelectorAll(".preview-count-box");
  countBoxes.forEach(box => {
    if (box.dataset.active === "true") return;
    box.dataset.active = "true";
    
    let current = 0;
    const target = 99;
    const interval = setInterval(() => {
      if (!box.isConnected) {
        clearInterval(interval);
        return;
      }
      current += 3;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        setTimeout(() => {
          if (box.isConnected) {
            box.dataset.active = "false";
            const currentBox = document.getElementById(box.closest("article")?.id)?.querySelector(".preview-count-box");
            if (currentBox) initDynamicSimulations();
          }
        }, 1200);
      }
      box.textContent = current;
    }, 40);
  });
}

// 3. Clipboard copy helper with browser fallback
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast())
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
    const successful = document.execCommand('copy');
    if (successful) showToast();
  } catch (err) {
    console.error("无法复制提示词，请手动复制: ", err);
  }
  document.body.removeChild(textArea);
}

// 4. Show Floating Toast Notification
function showToast() {
  if (!toastNotification) return;
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2500);
}

// 5. Scroll Progress & Header shadow effects
function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledVal = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  
  if (progressBar) progressBar.style.width = `${scrolledVal}%`;
  
  if (navbar) {
    if (scrollTop > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  const navItems = document.querySelectorAll(".nav-links .nav-item[href^='#']");
  const sections = [...navItems]
    .map(link => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter(item => item.section);
  let activeSection = sections[0];
  sections.forEach(item => {
    if (item.section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
      activeSection = item;
    }
  });
  sections.forEach(item => {
    const isActive = item === activeSection;
    item.link.classList.toggle("active", isActive);
    if (isActive) item.link.setAttribute("aria-current", "page");
    else item.link.removeAttribute("aria-current");
  });
  
  sessionStorage.setItem("home_scroll_y", scrollTop);
}

// 6. Theme & Mode Switching Handler
function initTheme() {
  let theme = urlParams.get("theme") || localStorage.getItem("theme") || "slate";
  let mode = urlParams.get("mode") || localStorage.getItem("mode");
  
  if (!mode) {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    mode = systemPrefersDark ? "dark" : "light";
  }
  
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-mode", mode);
  
  const themeDots = document.querySelectorAll(".theme-dot");
  themeDots.forEach(dot => {
    if (dot.dataset.themeOpt === theme) {
      dot.classList.add("active");
      dot.setAttribute("aria-checked", "true");
    } else {
      dot.classList.remove("active");
      dot.setAttribute("aria-checked", "false");
    }
  });
  
  const modeToggle = document.getElementById("modeToggle");
  if (modeToggle) {
    const icon = modeToggle.querySelector(".mode-icon");
    if (icon) {
      icon.innerHTML = getThemeModeIcon(mode);
    }
  }
}

function setupThemeEvents() {
  const themeDots = document.querySelectorAll(".theme-dot");
  themeDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const selectedTheme = dot.dataset.themeOpt;
      localStorage.setItem("theme", selectedTheme);
      document.documentElement.setAttribute("data-theme", selectedTheme);
      
      themeDots.forEach(d => {
        if (d.dataset.themeOpt === selectedTheme) {
          d.classList.add("active");
          d.setAttribute("aria-checked", "true");
        } else {
          d.classList.remove("active");
          d.setAttribute("aria-checked", "false");
        }
      });
      syncUrlState();
    });
  });
  
  const modeToggle = document.getElementById("modeToggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      const currentMode = document.documentElement.getAttribute("data-mode") || "light";
      const nextMode = currentMode === "dark" ? "light" : "dark";
      
      localStorage.setItem("mode", nextMode);
      document.documentElement.setAttribute("data-mode", nextMode);
      
      const icon = modeToggle.querySelector(".mode-icon");
      if (icon) {
        icon.innerHTML = getThemeModeIcon(nextMode);
      }
      syncUrlState();
    });
  }
}

// 7. Language Translation Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  syncUrlState();
  translatePage();
}

function translatePage() {
  const t = uiTranslations[currentLang];
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    if (btn.dataset.langOpt === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  const exploreLink = document.querySelector(".nav-links a[href='#gallery']");
  if (exploreLink) exploreLink.textContent = t.exploreNav;

  const faqLink = document.querySelector(".nav-links a[href='#faq-section']");
  if (faqLink) faqLink.textContent = t.faqNav;
  
  const githubLink = document.querySelector(".nav-links a[href*='github.com']");
  if (githubLink) githubLink.textContent = t.githubNav;
  
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (heroSubtitle) {
    const totalCount = motions.length;
    if (currentLang === "en") {
      heroSubtitle.innerHTML = `Curating <span id="totalMotionsCount" style="font-weight: 700; color: var(--accent-color);">${totalCount}</span> classic & modern web motion effects with one-click copyable AI prompts.`;
    } else {
      heroSubtitle.innerHTML = `已收录 <span id="totalMotionsCount" style="font-weight: 700; color: var(--accent-color);">${totalCount}</span> 种经典与现代网页动效，提供一键复制的 AI 开发提示词。`;
    }
  }

  const faqTitle = document.getElementById("faqSectionTitle");
  if (faqTitle) {
    const span = faqTitle.querySelector("span");
    if (span) span.textContent = t.faqTitle;
    else faqTitle.textContent = t.faqTitle;
  }
  const faqSubtitle = document.getElementById("faqSectionSubtitle");
  if (faqSubtitle) faqSubtitle.textContent = t.faqSubtitle;
  renderFaq();
  
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
    searchInput.setAttribute("aria-label", currentLang === "zh" ? "搜索动效" : "Search motions");
  }

  const galleryStatus = document.getElementById("galleryStatus");
  if (galleryStatus) galleryStatus.setAttribute("aria-label", currentLang === "zh" ? "筛选结果" : "Filter results");

  const slateDot = document.querySelector(".theme-dot[data-theme-opt='slate']");
  if (slateDot) {
    slateDot.title = currentLang === "en" ? "Slate Theme" : "石板灰主题";
    slateDot.setAttribute("aria-label", currentLang === "en" ? "Slate Theme" : "石板灰主题");
  }
  const greenDot = document.querySelector(".theme-dot[data-theme-opt='green']");
  if (greenDot) {
    greenDot.title = currentLang === "en" ? "Sage Green Theme" : "莫兰迪绿主题";
    greenDot.setAttribute("aria-label", currentLang === "en" ? "Sage Green Theme" : "莫兰迪绿主题");
  }
  const sandDot = document.querySelector(".theme-dot[data-theme-opt='sand']");
  if (sandDot) {
    sandDot.title = currentLang === "en" ? "Warm Sand Theme" : "秋叶暖沙主题";
    sandDot.setAttribute("aria-label", currentLang === "en" ? "Warm Sand Theme" : "秋叶暖沙主题");
  }
  const modeBtn = document.getElementById("modeToggle");
  if (modeBtn) {
    modeBtn.title = currentLang === "en" ? "Toggle Dark / Light Mode" : "切换深/浅色模式";
    modeBtn.setAttribute("aria-label", currentLang === "en" ? "Toggle Dark / Light Mode" : "切换深浅模式");
  }
  
  const emptyH3 = document.querySelector("#emptyState h2, #emptyState h3");
  if (emptyH3) emptyH3.textContent = t.emptyTitle;
  const emptyP = document.querySelector("#emptyState p");
  if (emptyP) emptyP.textContent = t.emptyDesc;
  
  const footerNote = document.querySelector(".footer-note");
  if (footerNote) footerNote.textContent = t.footerNote;
  
  const toastMsg = document.querySelector("#toastNotification .toast-message");
  if (toastMsg) toastMsg.textContent = t.toastCopySuccess;
  
  renderFilters();
  renderCards();
}

function renderFaq() {
  const faqGrid = document.querySelector(".faq-grid");
  if (!faqGrid) return;
  faqGrid.innerHTML = faqData.map(item => `
    <div class="faq-card">
      <h3>${item.iconSvg} <span>${currentLang === "en" ? item.qEn : item.qZh}</span></h3>
      <p>${currentLang === "en" ? item.aEn : item.aZh}</p>
    </div>
  `).join("");
}

// 8. Background Image Preloader
function preloadImages() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
  ];
  
  const loadAction = () => {
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadAction);
  } else {
    setTimeout(loadAction, 2000);
  }
}

// 9. Search Input & Shortcut Handlers
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    syncUrlState();
    renderCards();
  });
}

if (resetFilters) {
  resetFilters.addEventListener("click", () => {
    activeCategory = "全部";
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    syncUrlState();
    renderFilters();
    renderCards();
    searchInput?.focus();
  });
}

document.addEventListener("keydown", (e) => {
  if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput?.focus();
    searchInput?.select();
  }
});

const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector("#gallery");
    target?.scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   Initialization
   ========================================================================== */
function init() {
  initTheme();
  setupThemeEvents();
  
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.langOpt);
    });
  });
  
  if (searchInput) searchInput.value = searchQuery;

  setLanguage(currentLang);
  
  const savedScroll = sessionStorage.getItem("home_scroll_y");
  if (savedScroll) {
    setTimeout(() => {
      window.scrollTo({
        top: parseInt(savedScroll),
        behavior: "instant"
      });
    }, 250);
  }
  
  window.addEventListener("scroll", handleScroll, { passive: true });
  preloadImages();
}

document.addEventListener("DOMContentLoaded", init);
