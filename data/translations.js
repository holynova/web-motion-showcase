/**
 * Centralized UI and Category Translations
 * Single Source of Truth (SSOT)
 */

export const categories = ["全部", "进入", "滚动", "悬停", "反馈", "图片", "布局"];

export const categoryTranslations = {
  zh: {
    "全部": "全部",
    "进入": "进入",
    "滚动": "滚动",
    "悬停": "悬停",
    "手势": "手势",
    "反馈": "反馈",
    "图片": "图片",
    "布局": "布局"
  },
  en: {
    "全部": "All",
    "进入": "Entrance",
    "滚动": "Scroll",
    "悬停": "Hover",
    "手势": "Gestures",
    "反馈": "Feedback",
    "图片": "Media",
    "布局": "Layout"
  }
};

export const uiTranslations = {
  zh: {
    heroTitle: "克制的网页动效灵感",
    heroDescPrefix: "已收录",
    heroDescSuffix: "种经典与现代网页动效，提供一键复制的 AI 开发提示词。",
    searchPlaceholder: "搜索动效名称或描述...",
    modalTitle: "动效详情",
    modalCopyBtn: "复制 AI 提示词",
    modalCopiedBtn: "已复制到剪贴板！",
    toastCopySuccess: "内容已复制到剪贴板！",
    noResults: "没有找到匹配的动效，换个关键词试试？",
    metaTitle: "Web Motion Showcase | 网页 UI 动效灵感与 AI 开发提示词",
    exploreNav: "探索动效",
    faqNav: "常见问答",
    githubNav: "开源仓库",
    backBtnText: "返回动效列表",
    backBtnTitle: "返回动效列表 (快捷键 Esc)",
    promptCardLabel: "AI 提示词",
    codeCardLabel: "源代码",
    copyPromptBtnText: "复制",
    copyPromptSuccessText: "已复制",
    copyPromptTitle: "复制 AI 提示词",
    replayBtnText: "重新播放效果",
    floatingExpandText: "动效详情",
    collapseBtnTitle: "收起详情面板 (快捷键 H)",
    expandBtnTitle: "展开详情面板 (快捷键 H)",
    faqTitle: "常见问答与技术规范",
    faqSubtitle: "了解本项目的动效哲学、AI 编程协作方法与无障碍工程实践",
    emptyTitle: "未找到相关动效",
    emptyDesc: "换个关键词或切换分类试试吧",
    footerNote: "坚持原生、克制与高性能",
    loadingDesc: "正在加载动效说明...",
    loadingPrompt: "正在生成提示词...",
    loadingTitle: "加载中..."
  },
  en: {
    heroTitle: "Restrained Web Motion Inspiration",
    heroDescPrefix: "A curated collection of",
    heroDescSuffix: "classic & modern web motions, with one-click AI prompts.",
    searchPlaceholder: "Search motion name or description...",
    modalTitle: "Motion Details",
    modalCopyBtn: "Copy AI Prompt",
    modalCopiedBtn: "Copied to clipboard!",
    toastCopySuccess: "Copied to clipboard!",
    noResults: "No matching motions found. Try another keyword?",
    metaTitle: "Web Motion Showcase | Restrained UI Motion Gallery & AI Prompts",
    exploreNav: "Explore",
    faqNav: "FAQ",
    githubNav: "GitHub",
    backBtnText: "Back to Gallery",
    backBtnTitle: "Back to Gallery (Esc)",
    promptCardLabel: "AI Prompt",
    codeCardLabel: "Source Code",
    copyPromptBtnText: "Copy",
    copyPromptSuccessText: "Copied!",
    copyPromptTitle: "Copy AI Prompt",
    replayBtnText: "Replay Animation",
    floatingExpandText: "Motion Details",
    collapseBtnTitle: "Collapse Panel (Hotkey H)",
    expandBtnTitle: "Expand Panel (Hotkey H)",
    faqTitle: "FAQ & Engineering Standards",
    faqSubtitle: "Learn about motion design philosophy, AI prompts, and accessibility",
    emptyTitle: "No Motions Found",
    emptyDesc: "Try another search term or change the category filter.",
    footerNote: "Crafted with native web standards, restraint, and performance.",
    loadingDesc: "Loading description...",
    loadingPrompt: "Generating prompt...",
    loadingTitle: "Loading..."
  }
};

export const faqData = [
  {
    iconSvg: `<svg class="faq-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    qZh: "为什么强调“克制的动效设计”？",
    qEn: "Why emphasize 'Restrained Motion Design'?",
    aZh: "动效的本质是降低用户的认知负荷，引导视觉焦点并传递界面的状态变化。过度的炫技往往导致性能卡顿与视觉疲劳。克制动效以 150ms-400ms 的自然过渡为主，让交互如呼吸般自然顺畅。",
    aEn: "The essence of motion is reducing cognitive load, guiding visual focus, and communicating UI state transitions. Excessive animations cause lag and visual fatigue. Restrained motion focuses on natural 150ms-400ms transitions, making interactions feel as smooth as breathing."
  },
  {
    iconSvg: `<svg class="faq-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    qZh: "如何搭配 Claude / Cursor / DeepSeek 等 AI 编程工具使用？",
    qEn: "How to use with AI coding tools like Claude, Cursor & DeepSeek?",
    aZh: "每个动效卡片均附带经过严谨调优的 AI 提示词。点击卡片右下角或详情页中的“一键复制”，直接粘贴到 Cursor Agent、Claude 或 ChatGPT 聊天框中，AI 即可根据提示词精准生成符合工程规范的原生 CSS / JS / React 动效代码。",
    aEn: "Every motion card includes a rigorously tuned AI prompt. Click 'Copy' on any card or detail page and paste it directly into Cursor, Claude, or ChatGPT to generate production-ready native CSS, JS, or React motion code."
  },
  {
    iconSvg: `<svg class="faq-icon-svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    qZh: "如何处理无障碍（a11y）与减少动态需求？",
    qEn: "How to handle accessibility (a11y) & reduced motion preferences?",
    aZh: "本项目全量适配了 <code>@media (prefers-reduced-motion: reduce)</code> 媒体查询。当用户在操作系统中开启“减少动态效果”时，所有视差、缩放与旋转动效会自动平滑降级为静态展示，保护敏感人群的浏览体验。",
    aEn: "This project fully adheres to the <code>@media (prefers-reduced-motion: reduce)</code> media query. When users enable 'Reduce Motion' in their OS, all parallax, scaling, and rotation effects gracefully degrade to static views to prevent visual fatigue."
  }
];

export function getThemeModeIcon(mode) {
  if (mode === "dark") {
    return `<svg class="icon icon-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    return `<svg class="icon icon-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}
