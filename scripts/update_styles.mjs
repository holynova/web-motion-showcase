import fs from "fs";

// 1. Update detail.css
let detailCss = fs.readFileSync("detail.css", "utf8");

// Replace Parallax Scrolling (lines 913-970)
const parallaxTarget = `/* 6. Parallax Scrolling Full Page */
.parallax-scroll-full-page {
  height: 450vh; /* at least 4 screens scroll depth */
  position: relative;
  background-color: #0b0f19;
}

.parallax-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: transform;
}

.parallax-bg {
  background: radial-gradient(circle, rgba(46, 16, 101, 0.45) 0%, #090514 80%), url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.parallax-stars {
  background-image: radial-gradient(white 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.3;
  z-index: 2;
}

.parallax-mid {
  z-index: 3;
}

.parallax-mid-circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  opacity: 0.8;
  filter: blur(8px);
}

.parallax-fg {
  z-index: 4;
}

.parallax-fg h1 {
  font-size: 4rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  text-align: center;
}`;

const parallaxReplacement = `/* 6. Parallax Scrolling Full Page (Restrained Obsidian & Emerald) */
.parallax-scroll-full-page {
  height: 380vh;
  position: relative;
  background-color: #090d16;
  overflow-x: hidden;
}
.parallax-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: transform;
}
.parallax-bg {
  background: radial-gradient(circle at 50% 30%, rgba(13, 148, 136, 0.15) 0%, #090d16 75%);
  z-index: 1;
}
.parallax-grid-ambient {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.6;
  z-index: 2;
}
.parallax-mid {
  z-index: 3;
}
.parallax-emerald-lens {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(13, 148, 136, 0.4), rgba(5, 150, 105, 0.15));
  border: 1px solid rgba(20, 184, 166, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 0 80px rgba(13, 148, 136, 0.25);
}
.parallax-fg {
  z-index: 4;
}
.parallax-editorial-hero {
  text-align: center;
  max-width: 680px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.parallax-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #14b8a6;
  background: rgba(20, 184, 166, 0.1);
  border: 1px solid rgba(20, 184, 166, 0.2);
  padding: 4px 14px;
  border-radius: 20px;
}
.parallax-fg h1 {
  font-size: 3.2rem;
  font-weight: 900;
  color: #f8fafc;
  letter-spacing: -0.03em;
  line-height: 1.15;
}
.parallax-subhead {
  font-size: 1.05rem;
  color: #94a3b8;
  line-height: 1.6;
}
.parallax-floating-cards-track {
  position: absolute;
  top: 130vh;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 8%;
  z-index: 5;
  pointer-events: none;
}
.p-float-card {
  width: 320px;
  padding: 32px 24px;
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 8px;
  will-change: transform;
}
.p-card-index {
  font-size: 0.72rem;
  font-weight: 800;
  color: #14b8a6;
  font-family: monospace;
}
.p-float-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f8fafc;
}
.p-float-card p {
  font-size: 0.88rem;
  color: #94a3b8;
  line-height: 1.5;
}`;

if (detailCss.includes(parallaxTarget)) {
  detailCss = detailCss.replace(parallaxTarget, parallaxReplacement);
  console.log("Replaced parallaxTarget in detail.css");
}

// Replace Spring Motion (lines 1478-1513)
const springTarget = `/* 17. Spring Motion Full Page */
.spring-motion-full-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 30px;
}

.spring-demo-card {
  width: 280px;
  height: 160px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--panel-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.spring-demo-card.active {
  animation: keyframe-spring-pop 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes keyframe-spring-pop {
  0% { transform: scale(1); }
  30% { transform: scale(0.85); }
  60% { transform: scale(1.15); }
  80% { transform: scale(0.95); }
  100% { transform: scale(1.1); }
}`;

const springReplacement = `/* 17. Aligned Spring Motion Sandbox */
.sandbox-spring-stage {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  background-color: var(--bg-primary);
  gap: 36px;
}
.spring-stage-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 600px;
}
.spring-stage-badge {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--accent-color);
  background: var(--accent-soft);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
}
.spring-stage-header h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.spring-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  max-width: 960px;
  width: 100%;
}
.spring-interactive-card {
  border-radius: var(--radius-lg);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--panel-shadow);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  transform-origin: center center;
}
.spring-interactive-card.springing {
  animation: keyframe-spring-pop 550ms cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
.sp-card-badge {
  align-self: flex-start;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
}
.sp-card-badge.active {
  background: var(--accent-soft);
  color: var(--accent-color);
}
.sp-card-icon {
  color: var(--accent-color);
  display: inline-flex;
}
.spring-interactive-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}
.spring-interactive-card p {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.5;
}
.spring-controls-row {
  display: flex;
  justify-content: center;
}

@keyframes keyframe-spring-pop {
  0% { transform: scale(1); }
  30% { transform: scale(0.88); }
  60% { transform: scale(1.12); }
  80% { transform: scale(0.96); }
  100% { transform: scale(1); }
}`;

if (detailCss.includes(springTarget)) {
  detailCss = detailCss.replace(springTarget, springReplacement);
  console.log("Replaced springTarget in detail.css");
}

// Replace Menu Morphing (lines 1515-1575)
const menuTarget = `/* 18. Menu Morphing Full Page */
.menu-morphing-full-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.morphing-hamburger-fixed {
  position: fixed;
  top: 32px;
  left: 32px;
  z-index: 1001;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.morphing-hamburger-fixed:hover {
  border-color: var(--accent-color);
}

.preview-morphing-btn {
  width: 28px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
}

.preview-morphing-line {
  height: 3px;
  width: 100%;
  background-color: var(--text-primary);
  border-radius: 2px;
  transform-origin: center;
  transition: all var(--transition-normal);
}

.menu-overlay-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-secondary);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  gap: 20px;
  transform: translateY(-100%);
  transition: transform var(--transition-slow);
}

.menu-overlay-panel.open {
  transform: translateY(0);
}

.menu-overlay-panel a {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.menu-overlay-panel a:hover {
  color: var(--accent-color);
}`;

const menuReplacement = `/* 18. Menu Morphing Device Mockup */
.sandbox-morph-stage {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background-color: var(--bg-primary);
}
.morph-device-mockup {
  width: 100%;
  max-width: 380px;
  border-radius: 28px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  position: relative;
}
.morph-mockup-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-tertiary);
}
.mockup-brand-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mockup-brand-logo {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-primary);
}
.morph-burger-trigger {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.morph-burger-trigger:hover {
  border-color: var(--accent-color);
  background: var(--accent-soft);
}
.morph-burger-lines {
  width: 18px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.m-line {
  height: 2px;
  width: 100%;
  background-color: var(--text-primary);
  border-radius: 2px;
  transform-origin: center;
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
}
.morph-burger-trigger.active .line-top {
  transform: translateY(6px) rotate(45deg);
}
.morph-burger-trigger.active .line-mid {
  opacity: 0;
}
.morph-burger-trigger.active .line-bot {
  transform: translateY(-6px) rotate(-45deg);
}
.morph-dropdown-drawer {
  max-height: 0;
  overflow: hidden;
  background-color: var(--bg-tertiary);
  border-bottom: 1px solid transparent;
  transition: max-height 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 300ms ease;
}
.morph-dropdown-drawer.open {
  max-height: 260px;
  border-bottom-color: var(--border-color);
}
.morph-nav-links {
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.m-nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 6px 0;
  transition: color var(--transition-fast), transform var(--transition-fast);
}
.m-nav-item span {
  font-size: 0.72rem;
  color: var(--accent-color);
  font-family: monospace;
}
.m-nav-item:hover {
  color: var(--accent-color);
  transform: translateX(4px);
}
.morph-mockup-content {
  padding: 28px 20px;
}
.mockup-hero-box h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}
.mockup-hero-box p {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.55;
}`;

if (detailCss.includes(menuTarget)) {
  detailCss = detailCss.replace(menuTarget, menuReplacement);
  console.log("Replaced menuTarget in detail.css");
}

// Replace Smooth Theme Switch (lines 1590-1633)
const themeTarget = `/* 19. Smooth Theme Switch Full Page */
.theme-switch-full-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 20px;
}

.theme-switch-full-page h1 {
  font-size: 2.5rem;
  font-weight: 800;
}

.theme-switch-trigger-btn {
  background-color: var(--accent-color);
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: var(--radius-md);
  cursor: pointer;
  box-shadow: var(--shadow-accent);
}

.theme-switch-curtain-circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #090d16;
  z-index: 99999;
  pointer-events: none;
  clip-path: circle(0% at 50% 50%);
  transition: clip-path 800ms cubic-bezier(0.16, 1, 0.3, 1);
}

.theme-switch-curtain-circle.active {
  clip-path: circle(150% at 50% 50%);
}`;

const themeReplacement = `/* 19. Smooth Theme Switch Showcase */
.sandbox-theme-switch-stage {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  transition: background-color 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sandbox-theme-switch-stage[data-theme-preview="dark"] {
  background-color: #0b0f19;
}
.sandbox-theme-switch-stage[data-theme-preview="light"] {
  background-color: #f1f5f9;
}
.theme-switch-showcase-card {
  max-width: 540px;
  width: 100%;
  padding: 48px 36px;
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.25);
  transition: background-color 600ms cubic-bezier(0.16, 1, 0.3, 1), border-color 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sandbox-theme-switch-stage[data-theme-preview="dark"] .theme-switch-showcase-card {
  background-color: #131b2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.sandbox-theme-switch-stage[data-theme-preview="light"] .theme-switch-showcase-card {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.theme-switch-top-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  background: var(--accent-soft);
  color: var(--accent-color);
}
.ts-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
  box-shadow: 0 0 8px currentColor;
}
.theme-switch-showcase-card h1 {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  transition: color 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sandbox-theme-switch-stage[data-theme-preview="dark"] .theme-switch-showcase-card h1 {
  color: #f8fafc;
}
.sandbox-theme-switch-stage[data-theme-preview="light"] .theme-switch-showcase-card h1 {
  color: #0f172a;
}
.theme-switch-showcase-card p {
  font-size: 0.92rem;
  line-height: 1.6;
  transition: color 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sandbox-theme-switch-stage[data-theme-preview="dark"] .theme-switch-showcase-card p {
  color: #94a3b8;
}
.sandbox-theme-switch-stage[data-theme-preview="light"] .theme-switch-showcase-card p {
  color: #64748b;
}
.theme-switch-soft-btn {
  margin-top: 12px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.92rem;
  font-weight: 700;
  border: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.sandbox-theme-switch-stage[data-theme-preview="dark"] .theme-switch-soft-btn {
  background-color: #1e293b;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}
.sandbox-theme-switch-stage[data-theme-preview="light"] .theme-switch-soft-btn {
  background-color: #f8fafc;
  color: #0f172a;
  border-color: rgba(0, 0, 0, 0.12);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.ts-icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}`;

if (detailCss.includes(themeTarget)) {
  detailCss = detailCss.replace(themeTarget, themeReplacement);
  console.log("Replaced themeTarget in detail.css");
}

// Replace Spotlight Border Card (lines 2286-2348)
const spotlightTarget = `.sandbox-spotlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1050px;
  width: 100%;
}
.spotlight-card-item {
  position: relative;
  border-radius: var(--radius-lg);
  background-color: var(--bg-secondary);
  padding: 1px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
}
.spotlight-card-item:hover {
  transform: translateY(-4px);
}
.spotlight-card-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent-color), transparent 70%);
  opacity: 0.6;
  pointer-events: none;
}
.spotlight-card-inner {
  position: relative;
  border-radius: calc(var(--radius-lg) - 1px);
  background-color: var(--bg-secondary);
  padding: 32px 26px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
}
.spotlight-card-icon {
  font-size: 2rem;
  margin-bottom: 4px;
}
.spotlight-card-inner h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}
.spotlight-card-inner p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
}
.spotlight-card-tag {
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-color);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}`;

const spotlightReplacement = `.sandbox-spotlight-stage {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  background-color: var(--bg-primary);
  gap: 36px;
}
.sandbox-spotlight-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 600px;
}
.spotlight-badge {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--accent-color);
  background: var(--accent-soft);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
}
.sandbox-spotlight-header h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.sandbox-spotlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1020px;
  width: 100%;
}
.spotlight-card-item {
  position: relative;
  border-radius: var(--radius-lg);
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  padding: 1.5px;
  overflow: hidden;
  box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.35);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}
.spotlight-card-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.5);
}
.spotlight-card-border {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(380px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent-color), rgba(255, 255, 255, 0.8) 10%, transparent 65%);
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
  z-index: 0;
}
.spotlight-card-item:hover .spotlight-card-border {
  opacity: 1;
}
.spotlight-card-inner {
  position: relative;
  border-radius: calc(var(--radius-lg) - 1.5px);
  background-color: var(--bg-secondary);
  padding: 32px 26px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
  overflow: hidden;
}
.spotlight-card-inner::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--accent-soft), transparent 75%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.spotlight-card-item:hover .spotlight-card-inner::before {
  opacity: 0.85;
}
.spotlight-card-icon {
  color: var(--accent-color);
  display: inline-flex;
  margin-bottom: 4px;
}
.spotlight-card-inner h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
}
.spotlight-card-inner p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex-grow: 1;
}
.spotlight-card-tag {
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-color);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
}`;

if (detailCss.includes(spotlightTarget)) {
  detailCss = detailCss.replace(spotlightTarget, spotlightReplacement);
  console.log("Replaced spotlightTarget in detail.css");
}

// Update Stack Card Controls (lines 2908-2913)
const stackControlsTarget = `.stack-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}`;

const stackControlsReplacement = `.stack-controls {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 20;
  margin-top: 32px;
}`;

if (detailCss.includes(stackControlsTarget)) {
  detailCss = detailCss.replace(stackControlsTarget, stackControlsReplacement);
  console.log("Replaced stackControlsTarget in detail.css");
}

fs.writeFileSync("detail.css", detailCss, "utf8");
console.log("detail.css updated!");

// 2. Update css/previews.css (Parallax Scrolling preview color update & Spotlight glow boost)
let previewsCss = fs.readFileSync("css/previews.css", "utf8");

// Update Parallax preview palette from purple to obsidian emerald
previewsCss = previewsCss.replace(
  /\.preview-parallax-bg \{[^}]*\}/,
  `.preview-parallax-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 60% 40%, rgba(13, 148, 136, 0.45) 0%, #090d16 80%);
  background-size: 200% 200%;
  animation: keyframe-parallax-bg 4s ease-in-out infinite alternate;
}`
);

previewsCss = previewsCss.replace(
  /\.preview-parallax-fg \{[^}]*\}/,
  `.preview-parallax-fg {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6, #059669);
  box-shadow: 0 0 16px rgba(20, 184, 166, 0.5);
  animation: keyframe-parallax-fg 2.5s ease-in-out infinite alternate;
}`
);

// Boost spotlight card preview
previewsCss = previewsCss.replace(
  /\.preview-spotlight-glow \{[^}]*\}/,
  `.preview-spotlight-glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(45px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--accent-color), rgba(255, 255, 255, 0.8) 15%, transparent 70%);
  opacity: 0.95;
  animation: keyframe-spotlight-sweep 3s ease-in-out infinite alternate;
}`
);

fs.writeFileSync("css/previews.css", previewsCss, "utf8");
console.log("css/previews.css updated!");
