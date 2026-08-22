/**
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
  {
    id: "fade-in-up",
    zhName: "淡入上移",
    enName: "Fade In Up",
    category: "进入",
    description: "当页面加载时，标题和按钮由透明度 0 且偏下 20px 处，平滑滑入到正常位置，是构建网页开屏仪式感的经典基础方案。",
    enDescription: "Fades in and slides up by 20px with staggered delays, creating a refined opening ceremony for web elements.",
    prompt: "请帮我实现一个网页动效：淡入上移（Fade In Up）。当首屏加载时，文字标题和行动按钮以微小的延迟差，平滑地上移并显现。",
    enPrompt: "Please help me implement a web motion: Fade In Up. When the page loads or elements scroll into the viewport, elements smoothly fade in from opacity 0 to 1 and slide up slightly from below to their original position.",
    demoHtml: "<div class=\"preview-fade-up\"></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="fade-up-full-page">
          <span class="hero-eyebrow" style="animation: keyframe-fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;">STUDIO REVELATION</span>
          <h1>${getCurrentLang() === "en" ? "Creating Sensory Web Narratives" : "创造感官的网页叙事"}</h1>
          <p>${getCurrentLang() === "en" ? "This is a high-altitude splash template built using Fade In Up. Elements float up one by one with a breathing rhythm." : "这是一个使用 Fade In Up 实现的高空开屏模板，元素逐个浮起，呼吸感拉满。"}</p>
          <button class="btn btn-primary">${getCurrentLang() === "en" ? "Begin the Journey" : "开始探索之旅"}</button>
        </div>
      `;
    }
  },
  {
    id: "scroll-reveal",
    zhName: "滚动显现",
    enName: "Scroll Reveal",
    category: "进入",
    description: "内容卡片在向下滚动接近视口时被触发。我们使用 IntersectionObserver 实时监测，使得卡片淡入上浮显现。",
    enDescription: "Reveals content cards as they scroll close to the viewport using IntersectionObserver for staggered, performance-friendly entrances.",
    prompt: "请帮我实现一个网页动效：滚动显现（Scroll Reveal）。当多个卡片进入视口时，按从上到下的顺序依次淡入浮现。",
    enPrompt: "Please help me implement a web motion: Scroll Reveal. As the user scrolls down, various content cards or text blocks automatically fade in and slide up sequentially when entering the viewport.",
    demoHtml: "<div class=\"preview-scroll-reveal\"></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="scroll-reveal-full-page">
          <h1>${getCurrentLang() === "en" ? "Scroll Down to Experience" : "向下滚动鼠标体验"}</h1>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${getCurrentLang() === "en" ? "01. Visual Focus" : "01. 视觉聚焦"}</h3>
            <p>${getCurrentLang() === "en" ? "Reveal content only when it enters the viewport to reduce initial rendering load and improve reading flow." : "只在内容来到视野中时进行展现，减少首屏渲染压力，提升阅读流动感。"}</p>
          </div>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${getCurrentLang() === "en" ? "02. Logical Stagger" : "02. 逻辑分层"}</h3>
            <p>${getCurrentLang() === "en" ? "Scroll Reveal supports staggered delay offsets, making the hierarchical order clear at a glance." : "滚动显现支持精细的错峰延迟差，让层级顺序一目了然。"}</p>
          </div>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${getCurrentLang() === "en" ? "03. Graceful Degrade" : "03. 优雅降级"}</h3>
            <p>${getCurrentLang() === "en" ? "If the system prefers reduced motion, cards will render statically by default to prevent visual fatigue." : "如果用户系统设置了减少动态效果，该卡片将会默认直接渲染，免除滚动晃眼。"}</p>
          </div>
        </div>
      `;
      
      // IntersectionObserver setup
      const cards = container.querySelectorAll("[data-reveal]");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          } else {
            entry.target.classList.remove("revealed"); // allow repeating
          }
        });
      }, { threshold: 0.15 });
      
      cards.forEach(card => observer.observe(card));
      
      // Cleanup observer when canvas is replaced
      container.addEventListener("cleanup", () => {
        cards.forEach(card => observer.unobserve(card));
      }, { once: true });
    }
  },
  {
    id: "hover-lift",
    zhName: "悬停上浮",
    enName: "Hover Lift",
    category: "悬停",
    description: "点击本页卡片 hover 体验。元素平滑向上移动 8px，同时阴影底色扩散。极具触感的轻量提拉反馈设计。",
    enDescription: "Smoothly offsets elements vertically by 8px and softens shadow on hover, following standard premium web patterns.",
    prompt: "请帮我实现一个网页动效：悬停上浮（Hover Lift）。hover 时元素向上浮动且阴影增强，移开时平滑落地还原。",
    enPrompt: "Please help me implement a web motion: Hover Lift. Move buttons or cards upward by a few pixels on hover, with smooth transition timings.",
    demoHtml: "<div class=\"preview-hover-lift\"></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="hover-lift-full-page">
          <div class="hover-lift-card"><h3>${getCurrentLang() === "en" ? "Poster Curation" : "精选海报设计"}</h3><p>${getCurrentLang() === "en" ? "Card lifts up to signal clickability" : "卡片浮动提示可点击行为"}</p></div>
          <div class="hover-lift-card"><h3>${getCurrentLang() === "en" ? "Interactive Code" : "互动程序工程"}</h3><p>${getCurrentLang() === "en" ? "Smooth transitions with zero flickering" : "平滑响应，杜绝闪烁感"}</p></div>
          <div class="hover-lift-card"><h3>${getCurrentLang() === "en" ? "Brand Identity" : "品牌调性确立"}</h3><p>${getCurrentLang() === "en" ? "Subtle offsets in line with Apple guides" : "符合 Apple 交互规范的位移范围"}</p></div>
          <div class="hover-lift-card"><h3>${getCurrentLang() === "en" ? "Editorial Grid" : "策展排版研究"}</h3><p>${getCurrentLang() === "en" ? "A perfect mix of negative space and depth" : "呼吸空间和物理悬空完美结合"}</p></div>
        </div>
      `;
    }
  },
  {
    id: "hover-shadow",
    zhName: "悬停阴影增强",
    enName: "Hover Shadow",
    category: "悬停",
    description: "不改变元素位移，只在悬停时改变阴影（box-shadow）的模糊半径与扩散大小，仿佛卡片从光感中升起。",
    enDescription: "Increases box-shadow blur and spread on hover without shifting layout position, creating an elegant depth effect.",
    prompt: "请帮我实现一个网页动效：悬停阴影增强（Hover Shadow）。hover 状态下只平滑放大卡片投影深度而不改变排版位置。",
    enPrompt: "Please help me implement a web motion: Hover Shadow. Soften and expand the shadow projection of cards on hover, simulating a light source lift.",
    demoHtml: "<div class=\"preview-hover-shadow\"></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="hover-shadow-full-page">
          <div class="hover-shadow-card"><h3>${getCurrentLang() === "en" ? "Basic Plan" : "基础定价"}</h3><p>${getCurrentLang() === "en" ? "Hover to experience shadow softening" : "hover 体验阴影软化"}</p></div>
          <div class="hover-shadow-card"><h3>${getCurrentLang() === "en" ? "Pro Mode" : "专业模式"}</h3><p>${getCurrentLang() === "en" ? "Soft, premium shadow projection" : "投影淡雅柔顺"}</p></div>
          <div class="hover-shadow-card"><h3>${getCurrentLang() === "en" ? "Enterprise" : "企业定制"}</h3><p>${getCurrentLang() === "en" ? "Subtle scale combined with shadow rise" : "伴随轻微缩放响应"}</p></div>
        </div>
      `;
    }
  },
  {
    id: "color-transition",
    zhName: "颜色过渡",
    enName: "Color Transition",
    category: "反馈",
    description: "点击本页展示板。鼠标滑过时，背景色、边框色以极快的 cubic-bezier(0.4, 0, 0.2, 1) 平滑切换，消减闪烁抖动感。",
    enDescription: "Applies millisecond transitions to color changes on interactive elements, smoothing focus and hover states.",
    prompt: "请帮我实现一个网页动效：颜色过渡（Color Transition）。让链接、按钮的背景或文本颜色改变时具备平滑缓冲。",
    enPrompt: "Please help me implement a web motion: Color Transition. Smooth out transitions for hover and active state colors rather than instant cuts.",
    demoHtml: "<div class=\"preview-color-transition\">Hover</div>",
    render: (container) => {
      container.innerHTML = `
        <div class="color-trans-full-page">
          <div class="color-trans-block"></div>
          <div class="color-trans-block" style="border-radius: 50%;"></div>
          <div class="color-trans-block" style="border-radius: var(--radius-lg);"></div>
        </div>
      `;
    }
  },
  {
    id: "underline-reveal",
    zhName: "下划线展开",
    enName: "Underline Reveal",
    category: "布局",
    description: "极简菜单设计。当鼠标移至列表项时，底部的 4px 线条利用 `transform: scaleX(0)` 平滑扩展至 `1` 展现。",
    enDescription: "Scales a navigation item's underline from 0 to 1 scaleX on hover, creating elegant visual links.",
    prompt: "请帮我实现一个网页动效：导航下划线展开（Underline Reveal）。导航项 hover 时，下划线以水平伸展（scaleX 自 0 至 1）的方式轻盈呈现。",
    enPrompt: "Please help me implement a web motion: Underline Reveal. Animate navigation link underlines using scaleX from 0 to 1 on hover.",
    demoHtml: "\n      <div class=\"preview-underline-text\">\n        Hover Item\n        <div class=\"preview-underline-line\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="underline-slide-full-page">
          <div class="underline-slide-link">${getCurrentLang() === "en" ? "Brand Identity" : "品牌词条"}</div>
          <div class="underline-slide-link">${getCurrentLang() === "en" ? "Creative Design" : "创意设计"}</div>
          <div class="underline-slide-link">${getCurrentLang() === "en" ? "Joint Studio" : "联合实验室"}</div>
        </div>
      `;
    }
  },
  {
    id: "scroll-progress",
    zhName: "滚动进度条",
    enName: "Scroll Progress Indicator",
    category: "滚动",
    description: "固定在页面顶部的纤细进度条。当您向下滑动长文章时，它以高精度比率在顶部填满，提醒用户文章还有多少读完。",
    enDescription: "A tiny, high-precision bar at the top of the browser that tracks reading depth to reduce long-form content reading anxiety.",
    prompt: "请帮我实现一个网页动效：滚动进度条（Scroll Progress Indicator）。在浏览器最顶部固定一条进度线，横向缩放比例绑定文章滚动占比。",
    enPrompt: "Please help me implement a web motion: Scroll Progress Indicator. Place a thin line at the top of the page that scales horizontally from 0% to 100% matching the scroll percentage.",
    demoHtml: "\n      <div class=\"preview-scroll-progress-demo\">\n        <div class=\"preview-scroll-progress-line\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="scroll-progress-line-top">
          <div class="scroll-progress-line-top-fill" id="topProgressLine"></div>
        </div>
        <div class="scroll-progress-article">
          <h1>${getCurrentLang() === "en" ? "Long-form Reading & Progress Tracking" : "长文阅读体验与进度追踪"}</h1>
          <p>${getCurrentLang() === "en" ? "This is paragraph one. Motion should not be mere decoration, but a guide. The thin top bar projects page height details subtly to alleviate reading anxiety." : "这是第一段内容。动效不应该是装饰物，而是交互过程的导航者。顶部的细长进度条以一种轻盈且不打扰的形式，将页面的长度数据直接投影给用户，缓解长文阅读焦虑。"}</p>
          <p>${getCurrentLang() === "en" ? "This is paragraph two. High-saturation accents should be used with restraint in web design. The progress bar offers a perfect visual output for such highlight colors." : "这是第二段内容。我们在网页设计中应当克制地使用强调色，通常一个页面至多锁定一个高饱和度色调。此时进度条的渐进正是该色调的绝佳宣泄出口。"}</p>
          <p>${getCurrentLang() === "en" ? "This is paragraph three. Premium accessibility supports reduced motion preferences. The progress bar will still scale normally as static layout indicators." : "这是第三段内容。优秀的无障碍设计需要适配“减少动态”需求，进度条在纵向运动被禁用的系统中，依然以百分比宽度的形式正常静止伸展，不受干扰。"}</p>
          <p>${getCurrentLang() === "en" ? "This is paragraph four. You are near the end of the text, and the line has almost stretched fully across the window. Scroll up to watch it contract." : "这是第四段内容。您已接近文章尾声，此时进度线已在窗口顶部几乎延伸完成。返回顶部即可重新预览递减变化。"}</p>
        </div>
      `;
      
      const fillLine = container.querySelector("#topProgressLine");
      const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (fillLine) fillLine.style.width = `${progress}%`;
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "scroll-shadow",
    zhName: "头部阴影渐变",
    enName: "Scroll Shadow",
    category: "滚动",
    description: "模拟真实的物理悬浮高度差。顶栏在页面贴顶时背景呈透明无影，一旦偏离顶部便渐显阴影以隔离底层流动的内容。",
    enDescription: "Fades in a shadow under the sticky header once scroll Y exceeds 10px, separating it from the content sliding underneath.",
    prompt: "请帮我实现一个网页动效：头部阴影渐变（Scroll Shadow）。滚动偏离顶部时为固定 Header 添加阴影底边框，贴顶时去除。",
    enPrompt: "Please help me implement a web motion: Scroll Shadow. As the user scrolls away from the very top, add a soft shadow to the sticky navbar to indicate elevation.",
    demoHtml: "\n      <div class=\"preview-scroll-shadow-demo\">\n        <div class=\"preview-scroll-shadow-header\">Header</div>\n        <div class=\"preview-scroll-shadow-body\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <header class="scroll-shadow-navbar" id="sNavbar">
          <div class="scroll-shadow-logo">PROTOLABS</div>
          <nav class="scroll-shadow-nav-links">
            <span>${getCurrentLang() === "en" ? "Works" : "设计作品"}</span>
            <span>${getCurrentLang() === "en" ? "About Us" : "关于我们"}</span>
          </nav>
        </header>
        <div class="scroll-shadow-dummy-content">
          <h1>${getCurrentLang() === "en" ? "Scroll Down to Preview Shadow" : "下滑预览导航阴影"}</h1>
          <p>${getCurrentLang() === "en" ? "Scroll the page to watch the navbar change. It blends at the top, but develops a bottom shadow when scrolled, indicating elevation." : "滚动本页预览导航栏的变化。贴顶时导航呈自然融入态，滚动一定距离后底部产生阴影边框，示意层级浮空悬浮。"}</p>
          <p>${getCurrentLang() === "en" ? "This subtle shadow prevents border lines from dividing content aggressively, establishing a natural foreground depth during motion." : "这种效果可以避免生硬的图层边界线抢夺读者的视线，在滑动中自然建立起前后纵深对比。"}</p>
          <p>${getCurrentLang() === "en" ? "Keep scrolling... The header maintains clear division above the text, preventing text overlapping glitches." : "继续向下滑动... 导航栏与底下的文字依然保持完美的层级区分，避免了背景透光造成的字迹干扰。"}</p>
        </div>
      `;
      
      const sNavbar = container.querySelector("#sNavbar");
      const onScroll = () => {
        if (window.scrollY > 10) {
          sNavbar.classList.add("scrolled");
        } else {
          sNavbar.classList.remove("scrolled");
        }
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "button-ripple",
    zhName: "按钮点击波纹",
    enName: "Button Ripple",
    category: "反馈",
    description: "监听按钮点击坐标。根据点击处坐标在按钮内部动态创建一个绝对定位的圆形，从 0 缩放至最大值并随之隐去。",
    enDescription: "Spawns a scaling circle at click coordinates inside the button, expanding to full size before fading away.",
    prompt: "请帮我实现一个网页动效：按钮点击波纹（Button Ripple）。点击按钮时，以鼠标落点为圆心动态生成扩散淡出水波纹特效。",
    enPrompt: "Please help me implement a web motion: Button Ripple. Spawn a circular ripple expanding from the exact click coordinates inside the button.",
    demoHtml: "\n      <div class=\"preview-ripple-btn\">\n        <div class=\"preview-ripple-wave\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="button-ripple-full-page">
          <h2>${getCurrentLang() === "en" ? "Click different buttons below to trigger ripples" : "点击下方不同的按钮测试水波纹位置"}</h2>
          <button class="ripple-target-btn">${getCurrentLang() === "en" ? "Primary Action Ripple" : "点击大水波纹按钮"}</button>
          <button class="ripple-target-btn" style="background-color: var(--accent-hover);">${getCurrentLang() === "en" ? "Secondary Action Button" : "辅助行动按钮"}</button>
        </div>
      `;
      
      const btns = container.querySelectorAll(".ripple-target-btn");
      btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const circle = document.createElement("div");
          circle.classList.add("preview-ripple-wave");
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
          
          btn.appendChild(circle);
          setTimeout(() => {
            circle.remove();
          }, 1200);
        });
      });
    }
  },
  {
    id: "sliding-indicator-tabs",
    zhName: "滑动指示器分段标签页",
    enName: "Sliding Indicator Tabs",
    category: "反馈",
    description: "顶流应用标配分段控制器。点击切换 Tab 选项时，背后的药丸高亮胶囊根据目标元素的 offsetLeft 与 offsetWidth，以弹簧阻尼曲线平滑滑动与拉伸变形。",
    enDescription: "Segmented indicator pill. Active highlight bubble smoothly glides, squashes, and snaps to target tab dimensions using spring physics.",
    prompt: "请帮我实现一个网页动效：滑动指示器分段标签页（Sliding Indicator Tabs）。Tab 栏内设置一个绝对定位的背景高亮药丸，切换 Tab 时读取目标按钮的 offsetLeft 和 offsetWidth，通过 transform: translateX() 与 width 配合 spring 弹性曲线平滑滑向目标项。",
    enPrompt: "Please help me implement a web motion: Sliding Indicator Tabs. Measure target tab offsetLeft and offsetWidth to glide an absolute background pill with elastic transition.",
    demoHtml: "\n      <div class=\"preview-sliding-tabs\">\n        <div class=\"tab-pill-active\"></div>\n        <span class=\"tab-opt active\">Design</span>\n        <span class=\"tab-opt\">Code</span>\n        <span class=\"tab-opt\">Build</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-tabs-stage">
          <div class="segmented-control-bar" id="tabsBar">
            <div class="pill-active-bubble" id="tabBubble"></div>
            <button class="seg-tab-btn active" data-tab="overview">Overview</button>
            <button class="seg-tab-btn" data-tab="performance">Performance</button>
            <button class="seg-tab-btn" data-tab="analytics">Analytics</button>
            <button class="seg-tab-btn" data-tab="security">Security</button>
            <button class="seg-tab-btn" data-tab="settings">Settings</button>
          </div>
          <div class="tab-view-panel" id="tabContent">
            <h3>Overview Dashboard</h3>
            <p>${getCurrentLang() === "en" ? "Click tabs above to watch sliding pill stretch and snap with spring physics." : "点击上方不同标签项，观察滑动胶囊在各 Tab 间带物理拉伸与阻尼的顺滑飞掠。"}</p>
          </div>
        </div>
      `;
      const tabs = container.querySelectorAll(".seg-tab-btn");
      const bubble = container.querySelector("#tabBubble");
      const content = container.querySelector("#tabContent");

      const updateBubble = (target) => {
        bubble.style.width = target.offsetWidth + "px";
        bubble.style.transform = `translateX(${target.offsetLeft}px)`;
      };

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          updateBubble(tab);
          content.innerHTML = `
            <h3>${tab.textContent} View</h3>
            <p>${getCurrentLang() === "en" ? `Currently viewing ${tab.dataset.tab.toUpperCase()} section. Sliding highlight pill adapted smoothly.` : `当前处于 ${tab.dataset.tab.toUpperCase()} 模块。滑动高亮指示器已自适应匹配按钮宽度并完成平滑就位。`}</p>
          `;
        });
      });

      // Init on active
      setTimeout(() => {
        const activeTab = container.querySelector(".seg-tab-btn.active");
        if (activeTab) updateBubble(activeTab);
      }, 50);
    }
  },
  {
    id: "image-zoom",
    zhName: "图片轻微放大",
    enName: "Image Zoom on Hover",
    category: "图片",
    description: "卡片 hover 体验。容器开启 overflow: hidden。hover 时内部图片缩放平滑过渡至 1.12，模拟自然呼吸呼吸反馈。",
    enDescription: "Scales the inner image by 5-10% on hover while retaining rounded borders, giving clean photographic zoom feedback.",
    prompt: "请帮我实现一个网页动效：图片轻微放大（Image Zoom on Hover）。卡片 hover 时，内部图片微幅放大且容器圆角不变超隐藏。",
    enPrompt: "Please help me implement a web motion: Image Zoom on Hover. Scale the image inside an overflow-hidden card container on hover.",
    demoHtml: "<div class=\"preview-image-zoom\"><div class=\"preview-image-inner\"></div></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="image-zoom-full-page">
          <div class="image-zoom-container"><div class="image-zoom-photo" style="background-image: url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="image-zoom-container"><div class="image-zoom-photo" style="background-image: url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');"></div></div>
        </div>
      `;
    }
  },
  {
    id: "count-up",
    zhName: "数字滚动",
    enName: "Count Up Animation",
    category: "反馈",
    description: "数据仪表盘载入时，三组数字基于 requestAnimationFrame 平滑自 0 渐进累加到目标终值，赋予指标视觉以生命力。",
    enDescription: "Runs an active counting loop from 0 to target value on element view, completing with a smooth deceleration curve.",
    prompt: "请帮我实现一个网页动效：数字滚动（Count Up Animation）。在特定区域展现数据指标时，数字自 0 平滑滚动增加到目标数值。",
    enPrompt: "Please help me implement a web motion: Count Up Animation. Animate count-up metrics from zero to the target number using easing curves on load.",
    demoHtml: "\n      <div class=\"preview-count-reel\">\n        <div class=\"count-reel-track r1\">\n          <span>0</span><span>2</span><span>4</span><span>7</span><span>9</span>\n        </div>\n        <div class=\"count-reel-track r2\">\n          <span>0</span><span>3</span><span>6</span><span>8</span><span>5</span>\n        </div>\n        <span class=\"count-plus-badge\">+</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="count-up-full-page">
          <div class="count-up-dashboard-card">
            <h3>${getCurrentLang() === "en" ? "Efficiency Gain" : "核心提效比"}</h3>
            <div class="count-up-dashboard-number" data-count="94">%</div>
          </div>
          <div class="count-up-dashboard-card">
            <h3>${getCurrentLang() === "en" ? "Clients Served" : "服务客户数"}</h3>
            <div class="count-up-dashboard-number" data-count="85">k</div>
          </div>
          <div class="count-up-dashboard-card">
            <h3>${getCurrentLang() === "en" ? "Satisfaction Rate" : "满意率指标"}</h3>
            <div class="count-up-dashboard-number" data-count="99">%</div>
          </div>
        </div>
      `;
      
      const numbers = container.querySelectorAll(".count-up-dashboard-number");
      numbers.forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.textContent;
        let current = 0;
        const duration = 1500; // ms
        const startTime = performance.now();
        
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          
          current = Math.floor(easeProgress * target);
          el.textContent = current + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      });
    }
  },
  {
    id: "spotlight-card",
    zhName: "光标聚光灯卡片",
    enName: "Spotlight Border Card",
    category: "悬停",
    description: "Vercel / Linear 标志性边框光晕。计算光标在卡片内的局部坐标，以径向渐变照亮卡片边框与内部微光，产生精致的现代科技质感。",
    enDescription: "Linear & Vercel signature spotlight. Traces cursor coordinates to project an illuminated radial gradient glare across border and card surface.",
    prompt: "请帮我实现一个网页动效：光标聚光灯卡片（Spotlight Border Card）。通过监听 mousemove 动态更新 CSS 变量 --mouse-x 和 --mouse-y，使用 radial-gradient 在卡片边框与内表面渲染跟随光标移动的高亮聚光灯光晕。",
    enPrompt: "Please help me implement a web motion: Spotlight Border Card. Calculate cursor coordinates via mousemove and project a dynamic radial gradient spotlight along the card borders and surface.",
    demoHtml: `
      <div class="preview-spotlight-wrap">
        <div class="preview-spotlight-cursor"></div>
        <div class="preview-spotlight-card">
          <div class="preview-spotlight-glow"></div>
          <svg class="preview-card-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span>01</span>
        </div>
        <div class="preview-spotlight-card">
          <div class="preview-spotlight-glow"></div>
          <svg class="preview-card-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>02</span>
        </div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-spotlight-stage">
          <div class="sandbox-spotlight-header">
            <span class="spotlight-badge">✦ LINEAR / VERCEL STYLE</span>
            <h2>${getCurrentLang() === "en" ? "Interactive Spotlight Grid" : "聚光灯光晕跟随卡片组"}</h2>
            <p class="sandbox-hero-sub">${getCurrentLang() === "en" ? "Move cursor across the cards to experience high-contrast radial border and surface glare" : "移动光标在卡片间游走，体验高辨识度的边框跟随聚光灯与内表面漫反射高光"}</p>
          </div>
          <div class="sandbox-spotlight-grid">
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <h3>${getCurrentLang() === "en" ? "Hyper Fluid Sync" : "毫秒超快同步"}</h3>
                <p>${getCurrentLang() === "en" ? "Millisecond state synchronization with CRDT-based collaborative engine." : "毫秒级状态同步，基于 CRDT 算法构建的多人协作流体引擎。"}</p>
                <div class="spotlight-card-footer">
                  <span class="spotlight-card-tag">Ultra Fast</span>
                  <span class="spotlight-card-arrow">Explore →</span>
                </div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>${getCurrentLang() === "en" ? "Zero Trust Crypto" : "零信任加密"}</h3>
                <p>${getCurrentLang() === "en" ? "Zero-knowledge encryption ensuring enterprise data privacy & safety." : "零知识证明加密存储，保障企业级数据隐私与资产安全。"}</p>
                <div class="spotlight-card-footer">
                  <span class="spotlight-card-tag">Zero Trust</span>
                  <span class="spotlight-card-arrow">Explore →</span>
                </div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"/></svg>
                </div>
                <h3>${getCurrentLang() === "en" ? "Neural Mesh AI" : "神经架构编排"}</h3>
                <p>${getCurrentLang() === "en" ? "Autonomous multi-agent orchestration for automated code refactoring." : "多智能体自主协作中枢，自动化编排代码分析与重构工作流。"}</p>
                <div class="spotlight-card-footer">
                  <span class="spotlight-card-tag">Neural Mesh</span>
                  <span class="spotlight-card-arrow">Explore →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const cards = container.querySelectorAll(".spotlight-card-item");
      let sweepStep = 0;
      const totalSteps = 45;
      let hasUserInteracted = false;
      
      const introInterval = setInterval(() => {
        if (hasUserInteracted || sweepStep > totalSteps) {
          clearInterval(introInterval);
          return;
        }
        sweepStep++;
        const progress = sweepStep / totalSteps;
        const simulatedX = progress * (container.clientWidth || 1000);
        const simulatedY = (container.clientHeight || 600) * 0.52 + Math.sin(progress * Math.PI * 2) * 40;
        
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = simulatedX - rect.left;
          const y = simulatedY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
          card.classList.add("auto-sweep");
        });
      }, 25);

      const handleMouseMove = (e) => {
        if (!hasUserInteracted) {
          hasUserInteracted = true;
          clearInterval(introInterval);
          cards.forEach(card => card.classList.remove("auto-sweep"));
        }
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("cleanup", () => {
        clearInterval(introInterval);
        container.removeEventListener("mousemove", handleMouseMove);
      }, { once: true });
    }
  },
  {
    id: "line-reveal",
    zhName: "文字逐行显现",
    enName: "Line Reveal",
    category: "进入",
    description: "利用大字体和溢出截断（overflow: hidden），让每行标题自面罩下像升降机一样升起，带来强烈的策展气场。",
    enDescription: "Splits a headline into lines using overflow hidden, sliding each line up like an elevator for a clean, editorial look.",
    prompt: "请帮我实现一个网页动效：文字逐行显现（Line Reveal）。利用容器溢出裁切，使大标题的文本行自遮罩下方平滑移出。",
    enPrompt: "Please help me implement a web motion: Line Reveal. Split a large headline by lines or characters, making each line slide up and fade in from behind a mask with a staggered delay.",
    demoHtml: "\n      <div class=\"preview-line-reveal\">\n        <span>Line One</span>\n        <span>Line Two</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="line-reveal-full-page">
          <div class="line-reveal-row"><h1>WE BELIEVE IN</h1></div>
          <div class="line-reveal-row"><h1 style="color: var(--accent-color);">RESTRAINED MOTION.</h1></div>
          <div class="line-reveal-row"><h1>ESSENCE OF TASTE.</h1></div>
        </div>
      `;
    }
  },
  {
    id: "theme-switch",
    zhName: "暗色模式切换",
    enName: "Smooth Theme Switch",
    category: "反馈",
    description: "优雅克制的昼夜模式过渡。点击切换开关，太阳与月亮图标自旋变形，背景与卡片伴随柔和的色彩插值平滑渐变，无刺眼白光冲击。",
    enDescription: "Smooth day-night transition. Sun and moon icons morph with 360° spin while background interpolates gently without blinding glare.",
    prompt: "请帮我实现一个网页动效：暗色模式平滑切换（Smooth Theme Switch）。点击切换按钮时，通过 CSS transition 与图标自旋转平滑变换深浅主题色调，避免突兀的强光闪烁。",
    enPrompt: "Please help me implement a web motion: Smooth Theme Switch. Morph sun/moon icons with rotation and smoothly interpolate color variables without harsh white flashes.",
    demoHtml: `
      <div class="preview-theme-switch">
        <div class="preview-theme-btn"></div>
        <div class="preview-theme-ripple"></div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-theme-switch-stage" id="tsStage" data-theme-preview="dark">
          <div class="theme-switch-showcase-card">
            <div class="theme-switch-top-pill">
              <span class="ts-status-dot"></span>
              <span id="tsStatusLabel">${getCurrentLang() === "en" ? "NIGHT MODE ACTIVE" : "当前为夜间模式"}</span>
            </div>
            <h1 id="tsTitle">${getCurrentLang() === "en" ? "Restrained Day & Night Flow" : "克制温和的昼夜流转"}</h1>
            <p id="tsDesc">${getCurrentLang() === "en" ? "Click the button below to observe soft background luminance interpolation and tactile icon rotation." : "点击下方按钮体验温和的背景色彩插值与触感图标自旋，杜绝刺眼全屏爆闪。"}</p>
            <div class="theme-switch-btn-wrap">
              <button class="theme-switch-soft-btn" id="tsBtn">
                <span class="ts-icon-box" id="tsIconBox">
                  <svg class="ts-icon-svg" id="tsMoon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  <svg class="ts-icon-svg" id="tsSun" style="display:none;" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </span>
                <span id="tsBtnText">${getCurrentLang() === "en" ? "Switch to Day Mode" : "切换为日间明亮"}</span>
              </button>
            </div>
          </div>
        </div>
      `;
      
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
  },
  {
    id: "layout-transition",
    zhName: "网格重排动画",
    enName: "Layout Transition",
    category: "布局",
    description: "点击分类筛选标签。我们不使用生硬的隐现，而是为卡片添加 `.filtered` 状态以实现带有平滑过渡的重排过滤效果。",
    enDescription: "Calculates layout coordinates to transition grid cards smoothly to their new slots during categorization.",
    prompt: "请帮我实现一个网页动效：网格重排动画（Layout Transition）。分类筛选项目或网格重组时，卡片不是突兀闪现，而是计算坐标平滑飞入新位置。",
    enPrompt: "Please help me implement a web motion: Layout Transition. Transition card elements smoothly to their new grid positions when filters change.",
    demoHtml: "\n      <div class=\"preview-layout-container\">\n        <div></div><div></div><div></div><div></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="layout-trans-full-page">
          <div class="layout-trans-header-row">
            <h2>${getCurrentLang() === "en" ? "Portfolio Filter & Reorder" : "作品筛选重排"}</h2>
            <div class="filter-tags" id="ltFilters">
              <button class="filter-btn active" data-lt="all">${getCurrentLang() === "en" ? "All" : "全部"}</button>
              <button class="filter-btn" data-lt="ux">${getCurrentLang() === "en" ? "UX Design" : "用户体验"}</button>
              <button class="filter-btn" data-lt="dev">${getCurrentLang() === "en" ? "Engineering" : "技术实现"}</button>
            </div>
          </div>
          <div class="layout-trans-grid">
            <div class="layout-trans-grid-card" data-cat="ux"><h3>${getCurrentLang() === "en" ? "Interaction A" : "交互细节 A"}</h3><p>${getCurrentLang() === "en" ? "UX Experience" : "用户体验设计"}</p></div>
            <div class="layout-trans-grid-card" data-cat="dev"><h3>${getCurrentLang() === "en" ? "Core Engine B" : "底层引擎 B"}</h3><p>${getCurrentLang() === "en" ? "Dev Architecture" : "技术开发实现"}</p></div>
            <div class="layout-trans-grid-card" data-cat="ux"><h3>${getCurrentLang() === "en" ? "Visual Identity C" : "视觉调性 C"}</h3><p>${getCurrentLang() === "en" ? "Brand & Identity" : "品牌与体验设计"}</p></div>
            <div class="layout-trans-grid-card" data-cat="dev"><h3>${getCurrentLang() === "en" ? "Motion Perf D" : "动画性能 D"}</h3><p>${getCurrentLang() === "en" ? "Render Pipeline" : "渲染加速工程"}</p></div>
          </div>
        </div>
      `;
      
      const btns = container.querySelectorAll("#ltFilters button");
      const cards = container.querySelectorAll(".layout-trans-grid-card");
      
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          btns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          
          const cat = btn.dataset.lt;
          cards.forEach(card => {
            if (cat === "all" || card.dataset.cat === cat) {
              card.classList.remove("filtered");
            } else {
              card.classList.add("filtered");
            }
          });
        });
      });
    }
  },
  {
    id: "bento-grid-stagger",
    zhName: "便当网格交错入场",
    enName: "Bento Grid Stagger",
    category: "布局",
    description: "Apple / Linear 标志性非对称 Bento 排版。滚动进入视口时按权重与空间顺序交错弹入，并自带微光扫过。",
    enDescription: "Apple/Linear Bento layout. Asymmetrical grid cells pop in sequentially with staggered delays and border glints.",
    prompt: "请帮我实现一个网页动效：便当网格交错入场（Bento Grid Stagger）。使用 CSS Grid 创建 2x2 与多跨度的非对称 Bento 结构，当网格进入视口时，子卡片按照空间顺序以 cubic-bezier(0.16, 1, 0.3, 1) 错峰放大淡入，并伴随边框高光。",
    enPrompt: "Please help me implement a web motion: Bento Grid Stagger. Construct an asymmetric CSS Grid Bento box and animate card reveals with staggered timing.",
    demoHtml: "\n      <div class=\"preview-bento-grid\">\n        <div class=\"bento-box b1\"></div>\n        <div class=\"bento-box b2\"></div>\n        <div class=\"bento-box b3\"></div>\n        <div class=\"bento-box b4\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-bento-stage">
          <div class="bento-stage-header">
            <h2 class="bento-stage-title">ECOSYSTEM PLATFORM</h2>
            <button class="btn-bento-replay" id="btnBentoReplay">↻ Re-trigger Stagger</button>
          </div>
          <div class="bento-grid-wrapper" id="bentoGrid">
            <div class="bento-cell cell-1" style="--stagger-idx: 0">
              <div class="bento-badge">Real-Time</div>
              <h3>Telemetry Streaming</h3>
              <p>50,000 req/sec zero-latency ingestion pipeline.</p>
              <div class="bento-graph-mock">
                <div class="mock-bar b1"></div><div class="mock-bar b2"></div><div class="mock-bar b3"></div><div class="mock-bar b4"></div>
              </div>
            </div>
            <div class="bento-cell cell-2" style="--stagger-idx: 1">
              <div class="bento-badge">Edge</div>
              <h3>Global Mesh</h3>
              <p>280+ POP edge locations world-wide.</p>
            </div>
            <div class="bento-cell cell-3" style="--stagger-idx: 2">
              <div class="bento-badge">Security</div>
              <h3>Zero-Knowledge HSM</h3>
              <p>Hardware-level cryptographic authentication.</p>
            </div>
            <div class="bento-cell cell-4" style="--stagger-idx: 3">
              <div class="bento-badge">AI Synthesis</div>
              <h3>Predictive Cache</h3>
              <p>Pre-renders dynamic UI states before user click.</p>
            </div>
          </div>
        </div>
      `;

      const grid = container.querySelector("#bentoGrid");
      const replayBtn = container.querySelector("#btnBentoReplay");

      const replayStagger = () => {
        grid.classList.remove("play-stagger");
        void grid.offsetWidth;
        grid.classList.add("play-stagger");
      };

      setTimeout(replayStagger, 50);
      replayBtn.addEventListener("click", replayStagger);
    }
  },
  {
    id: "magnetic-effect",
    zhName: "磁吸反馈",
    enName: "Magnetic Button",
    category: "反馈",
    description: "好玩的重力跟随交互。计算鼠标距离大圆形按钮的中心距离，若小于 80 像素，按钮会被吸过去，越靠近吸力越大。",
    enDescription: "Tracks cursor proximity; if within 80px, pulls the button towards the cursor, returning it with transition physics.",
    prompt: "请帮我实现一个网页动效：磁吸按钮（Magnetic Button）。鼠标靠近按钮边缘时按钮被吸附过去，鼠标移走时自动弹回中心。",
    enPrompt: "Please help me implement a web motion: Magnetic Button. Pull the button towards the cursor when the mouse gets close, spring-snapping it back on leave.",
    demoHtml: "\n      <div class=\"preview-magnetic-container\">\n        <div class=\"preview-magnetic-target\"></div>\n        <div class=\"preview-magnetic-cursor\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="magnetic-button-full-page">
          <h2>${getCurrentLang() === "en" ? "Move cursor close to the button below" : "将光标平缓移近下方按钮"}</h2>
          <div class="magnetic-btn-wrapper" id="mWrapper">
            <button class="magnetic-btn-element" id="mBtn">PULL</button>
          </div>
        </div>
      `;
      
      const wrapper = container.querySelector("#mWrapper");
      const btn = container.querySelector("#mBtn");
      
      const onMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect();
        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;
        
        const dx = e.clientX - bx;
        const dy = e.clientY - by;
        const dist = Math.hypot(dx, dy);
        
        const limit = 80; // magnetic pull limit radius
        if (dist < limit) {
          // Attract ratio increases as distance gets closer
          const pull = (limit - dist) / limit;
          btn.style.transform = `translate(${dx * pull * 0.7}px, ${dy * pull * 0.7}px) scale(1.1)`;
        } else {
          btn.style.transform = "";
        }
      };
      
      const onMouseLeave = () => {
        btn.style.transform = "";
      };
      
      window.addEventListener("mousemove", onMouseMove);
      wrapper.addEventListener("mouseleave", onMouseLeave);
      
      container.addEventListener("cleanup", () => {
        window.removeEventListener("mousemove", onMouseMove);
      }, { once: true });
    }
  },
  {
    id: "spring-motion",
    zhName: "弹性缓动",
    enName: "Spring Motion",
    category: "反馈",
    description: "真实弹簧力学阻尼谐振模拟。支持鼠标实时拖拽与惯性甩动释放，内置 iOS / Framer 物理参数预设与触感组件组。",
    enDescription: "Physical spring damped harmonic oscillator simulation. Supports real-time drag-and-release with iOS & Framer physics curves.",
    prompt: "请帮我实现一个网页动效：弹性缓动物理沙盒（Spring Motion Physics Lab）。基于胡克定律与阻尼谐振公式（F = -kx - cv），实现可任意拖拽回弹的物理卡片、实时阻尼波形反馈以及弹性开关、点赞触感按钮等组件。",
    enPrompt: "Please help me implement a web motion: Spring Motion Physics Lab. Implement real-time draggable spring physics using Hooke's Law (F = -kx - cv) with presets (Apple Smooth, Snappy Pop, Elastic Jelly) and tactile bouncy components.",
    demoHtml: `
      <div class="preview-spring-stage">
        <div class="preview-spring-ball">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div class="preview-spring-shadow"></div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-spring-stage">
          <div class="spring-stage-header">
            <span class="spring-stage-badge">✦ REALTIME HOOKE PHYSICS SIMULATOR</span>
            <h2>${getCurrentLang() === "en" ? "Interactive Spring Physics Lab" : "弹簧力学与弹性阻尼物理实验室"}</h2>
            <p class="sandbox-hero-sub">${getCurrentLang() === "en" ? "Drag and fling the central spring puck, or test tactile squashing UI components below" : "可按住中心卡片任意方向拖拽甩动体验真实物理回弹，或点击下方触感组件测试"}</p>
          </div>

          <div class="spring-lab-layout">
            <!-- Preset Selector Pills -->
            <div class="spring-presets-bar">
              <button class="btn-spring-preset active" data-stiffness="320" data-damping="22" data-mass="1.0">
                🍎 ${getCurrentLang() === "en" ? "Apple Smooth" : "iOS 柔和阻尼"}
              </button>
              <button class="btn-spring-preset" data-stiffness="520" data-damping="19" data-mass="1.0">
                ⚡ ${getCurrentLang() === "en" ? "Snappy Pop" : "轻快清脆回弹"}
              </button>
              <button class="btn-spring-preset" data-stiffness="360" data-damping="10" data-mass="1.0">
                🍮 ${getCurrentLang() === "en" ? "Elastic Jelly" : "高弹性果冻"}
              </button>
              <button class="btn-spring-preset" data-stiffness="180" data-damping="28" data-mass="1.2">
                🎈 ${getCurrentLang() === "en" ? "Gentle Float" : "沉静缓释漂移"}
              </button>
            </div>

            <!-- Physics Draggable Arena Box -->
            <div class="spring-puck-arena" id="springArena">
              <div class="spring-arena-axis-x"></div>
              <div class="spring-arena-axis-y"></div>
              <div class="spring-arena-origin"></div>
              <div class="spring-puck-card" id="springPuck">
                <div class="spring-puck-icon">⚡</div>
                <div class="spring-puck-label">SPRING PUCK</div>
                <div class="spring-puck-hint">${getCurrentLang() === "en" ? "Drag & Release" : "拖拽并松开"}</div>
              </div>
            </div>

            <!-- Interactive Tactile Components Grid -->
            <div class="spring-components-row">
              <div class="spring-demo-tile">
                <span class="spring-demo-title">${getCurrentLang() === "en" ? "Tactile Squash & Stretch" : "挤压与拉伸触感按钮"}</span>
                <button class="btn-spring-tactile" id="btnTactilePop">
                  ${getCurrentLang() === "en" ? "Tap to Pop ✦" : "轻触弹起 ✦"}
                </button>
              </div>

              <div class="spring-demo-tile">
                <span class="spring-demo-title">${getCurrentLang() === "en" ? "Fluid Spring Switch" : "弹性超调物理开关"}</span>
                <div class="spring-switch-wrap" id="springSwitch">
                  <div class="spring-switch-thumb"></div>
                </div>
              </div>

              <div class="spring-demo-tile">
                <span class="spring-demo-title">${getCurrentLang() === "en" ? "Harmonic Counter" : "谐振数字气泡"}</span>
                <div class="spring-counter-box">
                  <button class="btn-counter-ctrl" id="btnCountMinus">−</button>
                  <span class="spring-counter-value" id="counterVal">42</span>
                  <button class="btn-counter-ctrl" id="btnCountPlus">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      // 1. Spring Physics Solver for Central Puck
      const arena = container.querySelector("#springArena");
      const puck = container.querySelector("#springPuck");
      const presetBtns = container.querySelectorAll(".btn-spring-preset");

      let stiffness = 320;
      let damping = 22;
      let mass = 1.0;

      let posX = 0, posY = 0;
      let velX = 0, velY = 0;
      let isDragging = false;
      let dragStartX = 0, dragStartY = 0;
      let puckOriginX = 0, puckOriginY = 0;
      let lastDragTime = 0;
      let animFrameId = null;
      let isRunning = true;

      const updatePuckTransform = () => {
        puck.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      };

      // Physics loop
      let lastTime = performance.now();
      const physicsLoop = (now) => {
        if (!isRunning) return;
        const dt = Math.min((now - lastTime) / 1000, 0.033);
        lastTime = now;

        if (!isDragging) {
          // Hooke's Law: F = -k * x - c * v
          const forceX = -stiffness * posX - damping * velX;
          const forceY = -stiffness * posY - damping * velY;
          const accX = forceX / mass;
          const accY = forceY / mass;

          velX += accX * dt;
          velY += accY * dt;
          posX += velX * dt;
          posY += velY * dt;

          if (Math.abs(posX) < 0.05 && Math.abs(posY) < 0.05 && Math.abs(velX) < 0.05 && Math.abs(velY) < 0.05) {
            posX = 0;
            posY = 0;
            velX = 0;
            velY = 0;
          }
          updatePuckTransform();
        }

        animFrameId = requestAnimationFrame(physicsLoop);
      };
      animFrameId = requestAnimationFrame(physicsLoop);

      // Pointer drag handlers
      const onPointerDown = (e) => {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        puckOriginX = posX;
        puckOriginY = posY;
        lastDragTime = performance.now();
        velX = 0;
        velY = 0;
        puck.setPointerCapture(e.pointerId);
      };

      const onPointerMove = (e) => {
        if (!isDragging) return;
        const now = performance.now();
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        const newX = puckOriginX + deltaX;
        const newY = puckOriginY + deltaY;
        
        const dt = (now - lastDragTime) / 1000;
        if (dt > 0) {
          velX = (newX - posX) / dt * 0.4;
          velY = (newY - posY) / dt * 0.4;
        }
        lastDragTime = now;
        posX = newX;
        posY = newY;
        updatePuckTransform();
      };

      const onPointerUp = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { puck.releasePointerCapture(e.pointerId); } catch (_) {}
      };

      puck.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);

      // Preset Switcher
      presetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          presetBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          stiffness = parseFloat(btn.dataset.stiffness);
          damping = parseFloat(btn.dataset.damping);
          mass = parseFloat(btn.dataset.mass);
          
          // Trigger a satisfying nudge bounce to demonstrate new preset
          velY = -350;
          velX = (Math.random() - 0.5) * 200;
        });
      });

      // 2. Interactive Tactile Pop Button
      const tactileBtn = container.querySelector("#btnTactilePop");
      tactileBtn.addEventListener("click", () => {
        tactileBtn.classList.remove("spring-rebound");
        void tactileBtn.offsetWidth;
        tactileBtn.classList.add("spring-rebound");
      });

      // 3. Fluid Bouncy Spring Switch
      const springSwitch = container.querySelector("#springSwitch");
      springSwitch.addEventListener("click", () => {
        springSwitch.classList.toggle("on");
      });

      // 4. Bouncy Counter
      let count = 42;
      const counterVal = container.querySelector("#counterVal");
      const btnMinus = container.querySelector("#btnCountMinus");
      const btnPlus = container.querySelector("#btnCountPlus");

      const updateCount = (newCount) => {
        count = newCount;
        counterVal.textContent = count;
        counterVal.classList.remove("bump");
        void counterVal.offsetWidth;
        counterVal.classList.add("bump");
      };

      btnMinus.addEventListener("click", () => updateCount(count - 1));
      btnPlus.addEventListener("click", () => updateCount(count + 1));

      // Cleanup
      container.addEventListener("cleanup", () => {
        isRunning = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
      }, { once: true });
    }
  },
  {
    id: "menu-morphing",
    zhName: "汉堡菜单变形",
    enName: "Menu Morphing",
    category: "反馈",
    description: "居中导航栏中的汉堡图标在点击时平滑旋转折叠，中间线条淡出，上下线条交叉演化为关闭叉号（X），并展开下拉菜单。",
    enDescription: "Centered navbar hamburger morphs smoothly into a close X icon with rotating lines while sliding down an action drawer.",
    prompt: "请帮我实现一个网页动效：汉堡菜单变形（Menu Morphing）。三根线条构成的汉堡图标平滑变化转换为 X 形关闭按钮，位置居中规整，不与外层导航冲突。",
    enPrompt: "Please help me implement a web motion: Menu Morphing. Smoothly transform a three-line hamburger icon into a clean close X icon inside a centered navigation device mockup.",
    demoHtml: `
      <div class="preview-morphing-btn">
        <div class="preview-morphing-line line-1"></div>
        <div class="preview-morphing-line line-2"></div>
        <div class="preview-morphing-line line-3"></div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
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
                <a href="#" class="m-nav-item"><span>01</span> ${getCurrentLang() === "en" ? "Spatial Architecture" : "空间策展叙事"}</a>
                <a href="#" class="m-nav-item"><span>02</span> ${getCurrentLang() === "en" ? "Kinetic Motion Lab" : "动力学动效工坊"}</a>
                <a href="#" class="m-nav-item"><span>03</span> ${getCurrentLang() === "en" ? "Engineering Systems" : "工程架构系统"}</a>
                <a href="#" class="m-nav-item"><span>04</span> ${getCurrentLang() === "en" ? "Design Intelligence" : "设计智能中心"}</a>
              </div>
            </div>
            <div class="morph-mockup-content">
              <div class="mockup-hero-box">
                <h4>${getCurrentLang() === "en" ? "Centered Morphing Menu" : "居中汉堡图标形变"}</h4>
                <p>${getCurrentLang() === "en" ? "Click the top-right hamburger icon inside this device mockup to observe lines smoothly cross into an X." : "点击右上角汉堡按钮，观察三道线条如何平滑折叠并旋转交叉成为关闭叉号。"}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      
      const burger = container.querySelector("#mockBurger");
      const drawer = container.querySelector("#morphDrawer");
      
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        drawer.classList.toggle("open");
      });
    }
  },
  {
    id: "sticky-scroll",
    zhName: "粘性滚动叙事",
    enName: "Sticky Scroll Storytelling",
    category: "滚动",
    description: "左侧视觉图形卡片 `position: sticky` 吸顶锁死，右侧叙事长文持续流动。随章节滚动，左侧图形实时产生多维动态形态演变。",
    enDescription: "Locks the left visual illustration in place via position sticky while the right narrative text scrolls, dynamically morphing through multi-phase kinetic states.",
    prompt: "请帮我实现一个网页动效：粘性滚动叙事（Sticky Scroll Storytelling）。左右双栏布局，左侧图形展示卡片吸顶常驻，右侧文字滚动到不同章节节点时，左侧图形平滑切换形态、指标与动态图表，并带有进度指示与高亮边框。",
    enPrompt: "Please help me implement a web motion: Sticky Scroll Storytelling. A two-column layout where the left visual graphic locks in place via position sticky while the narrative text scrolls, dynamically updating multi-state kinetic illustrations and telemetry chips.",
    demoHtml: `
      <div class="preview-sticky-container">
        <div class="preview-sticky-left">
          <div class="preview-sticky-box"></div>
        </div>
        <div class="preview-sticky-right">
          <div class="preview-sticky-item"></div>
          <div class="preview-sticky-item"></div>
          <div class="preview-sticky-item"></div>
        </div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
        <div class="sticky-scroll-full-page">
          <!-- Left Sticky Visual Card -->
          <div class="sticky-left-panel">
            <div class="sticky-visual-stage">
              <div class="sticky-visual-card" id="visualCard">
                <div class="sticky-card-header">
                  <div class="sticky-phase-pill" id="visualPhasePill">PHASE 01 / 03</div>
                  <div class="sticky-status-dot"></div>
                </div>

                <div class="sticky-artboard">
                  <!-- State 0: Concentric Radar & Architecture Matrix -->
                  <div class="sticky-state-layer state-layer-0 active" id="stateLayer0">
                    <div class="sticky-graphic-core core-radar">
                      <div class="radar-ring ring-1"></div>
                      <div class="radar-ring ring-2"></div>
                      <div class="radar-ring ring-3"></div>
                      <div class="radar-center-node">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      </div>
                    </div>
                    <div class="sticky-metric-pill">
                      <span class="metric-key">LATENCY</span>
                      <span class="metric-val">12ms · 60 FPS</span>
                    </div>
                  </div>

                  <!-- State 1: Dynamic Waveform & Velocity Flux -->
                  <div class="sticky-state-layer state-layer-1" id="stateLayer1">
                    <div class="sticky-graphic-core core-wave">
                      <div class="wave-bars-container">
                        <div class="wave-bar-col b1"></div>
                        <div class="wave-bar-col b2"></div>
                        <div class="wave-bar-col b3"></div>
                        <div class="wave-bar-col b4"></div>
                        <div class="wave-bar-col b5"></div>
                        <div class="wave-bar-col b6"></div>
                        <div class="wave-bar-col b7"></div>
                      </div>
                      <div class="wave-center-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </div>
                    </div>
                    <div class="sticky-metric-pill">
                      <span class="metric-key">VELOCITY FLUX</span>
                      <span class="metric-val">340 rad/s</span>
                    </div>
                  </div>

                  <!-- State 2: Neural Mesh & Security Shield -->
                  <div class="sticky-state-layer state-layer-2" id="stateLayer2">
                    <div class="sticky-graphic-core core-mesh">
                      <div class="mesh-hex-grid"></div>
                      <div class="mesh-center-shield">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                      </div>
                    </div>
                    <div class="sticky-metric-pill">
                      <span class="metric-key">ECOSYSTEM</span>
                      <span class="metric-val">VERIFIED ✓</span>
                    </div>
                  </div>
                </div>

                <div class="sticky-card-footer-bar">
                  <div class="sticky-track-name" id="visualTrackName">${getCurrentLang() === "en" ? "01. Core Architecture" : "01. 极简架构基座"}</div>
                  <div class="sticky-progress-track">
                    <div class="sticky-progress-fill" id="visualProgressFill" style="width: 33.3%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Narrative Flow -->
          <div class="sticky-right-panel">
            <div class="sticky-story-hero">
              <span class="sticky-story-badge">✦ TWO-COLUMN PINNED NARRATIVE</span>
              <h1>${getCurrentLang() === "en" ? "Interactive Sticky Story" : "双栏粘性滚动叙事"}</h1>
              <p>${getCurrentLang() === "en" ? "Scroll down to see the locked left illustration dynamically transform through multiple narrative phases." : "向下滚动观察左侧图形吸顶锁死，随右侧章节滚动实时产生多维形态与状态演变。"}</p>
              <button class="btn-sticky-story-auto" id="btnStoryAuto">
                ⚡ ${getCurrentLang() === "en" ? "Auto Scroll Story" : "自动演示滚动叙事"}
              </button>
            </div>

            <div class="sticky-text-section active" data-step="0">
              <div class="section-badge">CHAPTER 01</div>
              <h2>${getCurrentLang() === "en" ? "Core Architecture Foundation" : "第一章. 极简架构基座"}</h2>
              <p>${getCurrentLang() === "en" ? "At the initial viewport, the visual card renders its concentric gyro matrix, representing structural stability, ultra-low latency, and mathematical precision." : "在滚动的初始段落，左侧常驻卡片呈现高精度同心陀螺仪矩阵，象征架构基座的极度稳固与纯净数学秩序。"}</p>
              <div class="section-tag-list">
                <span>#Foundation</span><span>#Architecture</span><span>#CleanCode</span>
              </div>
            </div>

            <div class="sticky-text-section" data-step="1">
              <div class="section-badge">CHAPTER 02</div>
              <h2>${getCurrentLang() === "en" ? "Dynamic Fluid Momentum" : "第二章. 动态流体力学"}</h2>
              <p>${getCurrentLang() === "en" ? "As you scroll down, the visual core seamlessly morphs into an oscillating harmonic wave spectrum with live velocity vector flux." : "随着页面向下滚动，左侧视觉核心无缝形变为高频振荡谐波频谱，展现真实物理阻尼动量与流体加速度。"}</p>
              <div class="section-tag-list">
                <span>#KineticPhysics</span><span>#HarmonicWave</span><span>#HookeLaw</span>
              </div>
            </div>

            <div class="sticky-text-section" data-step="2">
              <div class="section-badge">CHAPTER 03</div>
              <h2>${getCurrentLang() === "en" ? "Autonomous Ecosystem" : "第三章. 智能生态闭环"}</h2>
              <p>${getCurrentLang() === "en" ? "Nearing the conclusion, the visual module evolves into an encrypted mesh security shield, validating full-pipeline deployment." : "步入叙事终章，模块最终演进为互联神经网格与安全校验盾牌，宣告全链路工程化闭环交付。"}</p>
              <div class="section-tag-list">
                <span>#Ecosystem</span><span>#ZeroDependency</span><span>#ProductionReady</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const sections = container.querySelectorAll(".sticky-text-section");
      const layers = [
        container.querySelector("#stateLayer0"),
        container.querySelector("#stateLayer1"),
        container.querySelector("#stateLayer2")
      ];
      const phasePill = container.querySelector("#visualPhasePill");
      const trackName = container.querySelector("#visualTrackName");
      const progressFill = container.querySelector("#visualProgressFill");
      const btnAuto = container.querySelector("#btnStoryAuto");

      const phaseTitles = [
        getCurrentLang() === "en" ? "01. Core Architecture" : "01. 极简架构基座",
        getCurrentLang() === "en" ? "02. Dynamic Fluid Momentum" : "02. 动态流体力学",
        getCurrentLang() === "en" ? "03. Autonomous Ecosystem" : "03. 智能生态闭环"
      ];
      const phaseLabels = ["PHASE 01 / 03", "PHASE 02 / 03", "PHASE 03 / 03"];
      const progressWidths = ["33.3%", "66.6%", "100%"];

      let currentActiveIdx = -1;

      const setActiveStep = (idx) => {
        if (idx === currentActiveIdx) return;
        currentActiveIdx = idx;

        layers.forEach((layer, lIdx) => {
          if (layer) {
            if (lIdx === idx) layer.classList.add("active");
            else layer.classList.remove("active");
          }
        });

        sections.forEach((sec, sIdx) => {
          if (sIdx === idx) sec.classList.add("active");
          else sec.classList.remove("active");
        });

        if (phasePill) phasePill.textContent = phaseLabels[idx];
        if (trackName) trackName.textContent = phaseTitles[idx];
        if (progressFill) progressFill.style.width = progressWidths[idx];
      };

      const onScroll = () => {
        const midY = window.innerHeight * 0.5;
        let chosenIdx = 0;
        let minDistance = Infinity;

        sections.forEach((sec, idx) => {
          const rect = sec.getBoundingClientRect();
          const secCenter = rect.top + rect.height / 2;
          const dist = Math.abs(secCenter - midY);
          if (dist < minDistance) {
            minDistance = dist;
            chosenIdx = idx;
          }
        });

        setActiveStep(chosenIdx);
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      if (btnAuto) {
        btnAuto.addEventListener("click", () => {
          const targetY = container.offsetTop + container.scrollHeight - window.innerHeight;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 3600);
        });
      }

      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "parallax-scrolling",
    zhName: "视差滚动",
    enName: "Parallax Scrolling",
    category: "滚动",
    description: "多维空间视差物理分层。背景几何网格、中景环境透镜与前景卡片按不同速度矢量分层位移，色彩与全局主题自适应契合。",
    enDescription: "Spatial parallax narrative. Background grid, midground lens, and foreground cards translate across velocity layers matching the active theme.",
    prompt: "请帮我实现一个网页动效：视差滚动（Parallax Scrolling）。将背景几何网格、中景环境光环和前景卡片按不同 translateY 滚动速率分层移动，与全局主题配色自适应无缝融合。",
    enPrompt: "Please help me implement a web motion: Parallax Scrolling. Coordinate background grids, midground ambient lenses, and foreground cards at varying scroll speed ratios using theme-bound color tokens.",
    demoHtml: `
      <div class="preview-parallax-container">
        <div class="preview-parallax-bg"></div>
        <div class="preview-parallax-grid"></div>
        <div class="preview-parallax-fg"></div>
      </div>
    `,
    render: (container) => {
      container.innerHTML = `
        <div class="parallax-scroll-full-page">
          <div class="parallax-layer parallax-bg" id="pBg"></div>
          <div class="parallax-layer parallax-grid-ambient" id="pGrid"></div>
          <div class="parallax-layer parallax-mid" id="pMid">
            <div class="parallax-emerald-lens"></div>
          </div>
          <div class="parallax-layer parallax-fg" id="pFg">
            <div class="parallax-editorial-hero">
              <span class="parallax-eyebrow">✦ KINETIC ARCHITECTURE</span>
              <h1>${getCurrentLang() === "en" ? "Spatial Parallax Narrative" : "多维空间视差叙事"}</h1>
              <p class="parallax-subhead">${getCurrentLang() === "en" ? "Scroll down to observe multi-layer velocity vectors across geometry and typography" : "向下垂直滚动，观察网格背景、环境透镜与前景卡片以不同速度矢量错峰位移"}</p>
              <button class="btn-parallax-auto" id="btnParallaxAuto">
                ⚡ ${getCurrentLang() === "en" ? "Auto Scroll Demo" : "自动演示视差滚动"}
              </button>
            </div>
          </div>
          <div class="parallax-floating-cards-track">
            <div class="p-float-card card-1" id="pCard1">
              <span class="p-card-index">01</span>
              <h3>${getCurrentLang() === "en" ? "Velocity Ratios" : "速率分层差"}</h3>
              <p>${getCurrentLang() === "en" ? "Background grid moves at 0.18x, midground lens at 0.42x, foreground at 0.75x." : "背景网格 0.18x 缓动，中景透镜 0.42x，前景文字 0.75x。"}</p>
            </div>
            <div class="p-float-card card-2" id="pCard2">
              <span class="p-card-index">02</span>
              <h3>${getCurrentLang() === "en" ? "Theme Harmonization" : "主题自适应契合"}</h3>
              <p>${getCurrentLang() === "en" ? "Colors dynamically adapt to the current theme palette with zero hardcoded tones." : "完全采用主题设计系统变量，在冷杉、石板与暖沙色系间自由呼吸。"}</p>
            </div>
          </div>
        </div>
      `;
      
      const pGrid = container.querySelector("#pGrid");
      const pMid = container.querySelector("#pMid");
      const pFg = container.querySelector("#pFg");
      const pCard1 = container.querySelector("#pCard1");
      const pCard2 = container.querySelector("#pCard2");
      const btnAuto = container.querySelector("#btnParallaxAuto");
      
      const onScroll = () => {
        const y = window.scrollY;
        if (pGrid) pGrid.style.transform = `translateY(${-y * 0.18}px)`;
        if (pMid) pMid.style.transform = `translateY(${-y * 0.42}px) rotate(${y * 0.05}deg)`;
        if (pFg) pFg.style.transform = `translateY(${-y * 0.75}px)`;
        if (pCard1) pCard1.style.transform = `translateY(${-y * 0.35}px)`;
        if (pCard2) pCard2.style.transform = `translateY(${-y * 0.55}px)`;
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      if (btnAuto) {
        btnAuto.addEventListener("click", () => {
          const targetY = container.offsetTop + container.scrollHeight - window.innerHeight;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 3200);
        });
      }

      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "horizontal-gallery",
    zhName: "横向滚动作品带",
    enName: "Horizontal Scroll Gallery",
    category: "滚动",
    description: "我们拦截滚轮，在用户下拉页面时，横向卡片轨道沿 translateX 平滑移动，模拟滑动相册效果。",
    enDescription: "Captures mouse scroll to slide a track horizontally via translateX, perfect for showcasing portfolio galleries.",
    prompt: "请帮我实现一个网页动效：横向滚动作品带（Horizontal Scroll Gallery）。捕获纵向滚动动作，转化为网格容器的水平位移偏移量。",
    enPrompt: "Please help me implement a web motion: Horizontal Scroll Gallery. Intercept vertical scrolling inside a section to translate the grid container horizontally instead of vertically.",
    demoHtml: "\n      <div class=\"preview-horizontal-container\">\n        <div class=\"preview-horizontal-track\">\n          <div></div><div></div><div></div>\n        </div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="horizontal-scroll-full-page">
          <div class="horizontal-scroll-pin-wrapper">
            <div class="horizontal-scroll-track" id="hTrack">
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "01. Art Curation" : "01. 艺术策展"}</h3><span>Art Gallery Curation & Layout</span></div>
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "02. Vaporwave" : "02. 蒸汽浪潮"}</h3><span>Vaporwave Pioneer & Retro-futurism</span></div>
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "03. Swiss Grid" : "03. 瑞士版式"}</h3><span>Swiss Grid Curation & Caster Fonts</span></div>
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "04. Neo-Brutalism" : "04. 新粗野主义"}</h3><span>Neo-Brutalisim Bold Borders & Contrast</span></div>
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "05. Glassmorphism" : "05. 玻璃拟态"}</h3><span>Aero Glassmorphic Acrylic layers</span></div>
              <div class="horizontal-scroll-item"><h3>${getCurrentLang() === "en" ? "06. Restrained Narrative" : "06. 极简叙事"}</h3><span>Restrained Narrative & Micro-motions</span></div>
            </div>
          </div>
        </div>
      `;
      
      const track = container.querySelector("#hTrack");
      const onScroll = () => {
        const scrollTop = window.scrollY;
        // Scroll 280vh, track moves left
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = maxScroll > 0 ? scrollTop / maxScroll : 0;
        const travel = track.scrollWidth - window.innerWidth;
        if (track && travel > 0) {
          track.style.transform = `translateX(${-scrollPercent * travel}px)`;
        }
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "blur-reveal",
    zhName: "模糊进入",
    enName: "Blur In / Soft Reveal",
    category: "进入",
    description: "用渐变的滤镜模糊（filter: blur）替代粗糙的硬切淡入。背景色块在 1.8 秒内平滑清晰，充满画展艺术的高级感。",
    enDescription: "Atmospheric entrance. Transitioning from hazy blur to clear focus, perfect for hero images or slogans.",
    prompt: "请帮我实现一个网页动效：模糊进入（Blur In）。让元素在展现时，伴随透明度从 0 渐显到 1，同时滤镜从高斯模糊过渡到完全清晰。",
    enPrompt: "Please help me implement a web motion: Blur Reveal. Transition elements smoothly from a Gaussian blur and low opacity to full clarity as they load or scroll into view.",
    demoHtml: "<div class=\"preview-blur-in\"></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="blur-in-full-page">
          <div class="blur-in-canvas"></div>
          <div class="blur-in-text">${getCurrentLang() === "en" ? "An atmospheric canvas of soft reveal has unfolded." : "朦胧渐显的氛围感画卷已平铺展开"}</div>
        </div>
      `;
    }
  },
  {
    id: "card-sticky-stacking",
    zhName: "滚动卡片层叠固化",
    enName: "Card Sticky Stacking",
    category: "滚动",
    description: "现代产品介绍页标配。向下滚动时卡片依次在视口顶部吸附固化，后续卡片从下方覆盖上来并伴随缩放与变暗。",
    enDescription: "Product narrative stack. Cards pin to viewport top on scroll, stacking and scaling down as new cards overlay.",
    prompt: "请帮我实现一个网页动效：滚动卡片层叠固化（Card Sticky Stacking）。使用 position: sticky 配合 top 偏移，使多张大卡片在向下滚动时依次吸顶停靠，后一张卡片覆盖上去的同时，前一张卡片通过 scale(0.95) 与 brightness(0.8) 产生纵深层叠堆积感。",
    enPrompt: "Please help me implement a web motion: Card Sticky Stacking. Use position: sticky with progressive top offsets and scale transforms to create stacked card decks on scroll.",
    demoHtml: "\n      <div class=\"preview-sticky-stack\">\n        <div class=\"stack-slice s1\"></div>\n        <div class=\"stack-slice s2\"></div>\n        <div class=\"stack-slice s3\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-sticky-stack-container">
          <div class="sticky-stack-hero">
            <span class="sticky-stack-badge">✦ PROGRESSIVE SCROLL PINNING</span>
            <h1>${getCurrentLang() === "en" ? "Interactive Sticky Card Deck" : "滚动卡片层叠固化沙盒"}</h1>
            <p>${getCurrentLang() === "en" ? "Scroll down to watch cards progressively pin at top, scale down with depth shading, and form a docked deck." : "向下滚动体验卡片在视口顶部依次吸附停靠、阶梯缩放与纵深暗化，形成立体层叠卡组。"}</p>
            <div class="sticky-hero-actions">
              <button class="btn-sticky-auto" id="btnStickyAuto">
                ⚡ ${getCurrentLang() === "en" ? "Auto Scroll Demo" : "自动演示滚动层叠"}
              </button>
            </div>
          </div>
          <div class="sticky-cards-column" id="stickyDeck">
            <div class="sticky-stack-card" style="--card-index: 1;">
              <div class="step-badge">PHASE 01</div>
              <h2>${getCurrentLang() === "en" ? "Ideate & Conceptualize" : "01. 构思与交互心智"}</h2>
              <p>${getCurrentLang() === "en" ? "Deeply analyze user mental models to draft high-fidelity motion prototypes and timing graphs." : "深入分析用户交互心智模型，绘制高保真动态叙事原型与微交互时间线。"}</p>
              <div class="sticky-card-footer">
                <span class="sticky-card-tag">${getCurrentLang() === "en" ? "Architecture" : "概念设计"}</span>
                <span class="sticky-card-num">01 / 04</span>
              </div>
            </div>
            <div class="sticky-stack-card" style="--card-index: 2;">
              <div class="step-badge">PHASE 02</div>
              <h2>${getCurrentLang() === "en" ? "Fluid Physics Simulation" : "02. 物理弹簧力学算法"}</h2>
              <p>${getCurrentLang() === "en" ? "Hooke-law spring physics drive damped motion for natural elasticity and momentum." : "使用胡克定律弹簧阻尼算法驱动位移，确保每一帧运动具有自然的机械惯性与手感。"}</p>
              <div class="sticky-card-footer">
                <span class="sticky-card-tag">${getCurrentLang() === "en" ? "Simulation" : "力学模拟"}</span>
                <span class="sticky-card-num">02 / 04</span>
              </div>
            </div>
            <div class="sticky-stack-card" style="--card-index: 3;">
              <div class="step-badge">PHASE 03</div>
              <h2>${getCurrentLang() === "en" ? "Hardware GPU Acceleration" : "03. GPU 硬件加速管线"}</h2>
              <p>${getCurrentLang() === "en" ? "Strictly isolated to transform & opacity for solid 60 FPS silky smooth performance." : "严格限定使用 transform 与 opacity 属性，规避重排重绘，实现稳态 60 FPS 满帧呈现。"}</p>
              <div class="sticky-card-footer">
                <span class="sticky-card-tag">${getCurrentLang() === "en" ? "Performance" : "硬件加速"}</span>
                <span class="sticky-card-num">03 / 04</span>
              </div>
            </div>
            <div class="sticky-stack-card" style="--card-index: 4;">
              <div class="step-badge">PHASE 04</div>
              <h2>${getCurrentLang() === "en" ? "Production Delivery" : "04. 零依赖工程交付"}</h2>
              <p>${getCurrentLang() === "en" ? "Zero external dependencies, seamlessly embeddable into modern web design stacks." : "零外部依赖纯原生代码库输出，开箱即用，无缝嵌入任何现代前端技术栈。"}</p>
              <div class="sticky-card-footer">
                <span class="sticky-card-tag">${getCurrentLang() === "en" ? "Production" : "工程交付"}</span>
                <span class="sticky-card-num">04 / 04</span>
              </div>
            </div>
          </div>
        </div>
      `;

      const cards = container.querySelectorAll(".sticky-stack-card");
      const btnAuto = container.querySelector("#btnStickyAuto");

      const onScroll = () => {
        const stickyTops = [90, 126, 162, 198];
        cards.forEach((card, idx) => {
          let stackDepth = 0;
          for (let j = idx + 1; j < cards.length; j++) {
            const nextCard = cards[j];
            const nextRect = nextCard.getBoundingClientRect();
            const nextTargetTop = stickyTops[j] || (90 + j * 36);
            const dist = nextRect.top - nextTargetTop;
            if (dist < 260) {
              const factor = Math.min(Math.max((260 - dist) / 260, 0), 1);
              stackDepth += factor;
            }
          }
          const scale = Math.max(1 - stackDepth * 0.045, 0.82);
          const brightness = Math.max(1 - stackDepth * 0.12, 0.65);
          const translateY = -stackDepth * 6;
          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.filter = `brightness(${brightness})`;
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      if (btnAuto) {
        btnAuto.addEventListener("click", () => {
          const targetY = container.offsetTop + container.scrollHeight - window.innerHeight;
          window.scrollTo({ top: targetY, behavior: "smooth" });
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 3600);
        });
      }

      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "spring-drawer",
    zhName: "弹性手势阻尼抽屉",
    enName: "Spring Sheet Drawer",
    category: "反馈",
    description: "现代 App 级底部/侧边抽屉。支持触摸拖拽、阻尼滑动与手势速率感应，松手自动依附或回弹关闭。",
    enDescription: "Native-like bottom drawer. Supports smooth drag gestures, spring damping, and swipe-to-dismiss.",
    prompt: "请帮我实现一个网页动效：弹性手势阻尼抽屉（Spring Sheet Drawer）。实现一个底部弹出的模态抽屉，支持手指/鼠标拖拽顶部 Handle 控制高度，带有越界阻尼感，松手根据滑动距离与速度决定贴靠展开或回弹收起。",
    enPrompt: "Please help me implement a web motion: Spring Sheet Drawer. Build a bottom drawer with drag gestures, rubber-band resistance, and smooth snap points.",
    demoHtml: "\n      <div class=\"preview-spring-drawer\">\n        <div class=\"drawer-handle\"></div>\n        <div class=\"drawer-content-stub\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-drawer-stage">
          <div class="drawer-trigger-center">
            <button class="btn-drawer-open" id="btnDrawerOpen">Open Interactive Drawer</button>
          </div>

          <!-- Modal Backdrop -->
          <div class="drawer-backdrop" id="drawerBackdrop"></div>

          <!-- Bottom Sheet Container -->
          <div class="drawer-sheet" id="drawerSheet">
            <div class="drawer-drag-pill" id="drawerHandle"></div>
            <div class="drawer-sheet-body">
              <div class="drawer-sheet-header">
                <h3>System Configuration</h3>
                <span class="drawer-badge">Active Session</span>
              </div>
              <div class="drawer-options-list">
                <div class="drawer-row"><span>GPU Hardware Acceleration</span><input type="checkbox" checked /></div>
                <div class="drawer-row"><span>Reduced Motion Overrides</span><input type="checkbox" /></div>
                <div class="drawer-row"><span>Audio Feedback Haptics</span><input type="checkbox" checked /></div>
                <div class="drawer-row"><span>High Contrast Borders</span><input type="checkbox" /></div>
              </div>
              <button class="btn-drawer-done" id="btnDrawerDone">Confirm Settings</button>
            </div>
          </div>
        </div>
      `;

      const sheet = container.querySelector("#drawerSheet");
      const backdrop = container.querySelector("#drawerBackdrop");
      const openBtn = container.querySelector("#btnDrawerOpen");
      const doneBtn = container.querySelector("#btnDrawerDone");

      const openDrawer = () => {
        sheet.classList.add("open");
        backdrop.classList.add("open");
      };

      const closeDrawer = () => {
        sheet.classList.remove("open");
        backdrop.classList.remove("open");
      };

      openBtn.addEventListener("click", openDrawer);
      backdrop.addEventListener("click", closeDrawer);
      doneBtn.addEventListener("click", closeDrawer);
    }
  },
  {
    id: "expanding-fab-menu",
    zhName: "折叠展开浮动操作岛",
    enName: "Expanding FAB Island Menu",
    category: "反馈",
    description: "移动端与 AI 助手绝佳入口。右下角常驻悬浮按钮（FAB），点击后由单点以弹性物理曲线膨胀展开为带有多项快捷动作的卡片面板。",
    enDescription: "Expanding floating action button. Compact trigger expands with spring damping into an action dock with staggered item reveals.",
    prompt: "请帮我实现一个网页动效：折叠展开浮动操作岛（Expanding FAB Island Menu）。初始为右下角圆形悬浮图标，点击时触发 CSS 尺寸膨胀与 border-radius 形变，菜单内部图标按 transition-delay 错峰弹出，再次点击或失焦时平滑收起。",
    enPrompt: "Please help me implement a web motion: Expanding FAB Island Menu. Morph circular FAB trigger into a responsive action card with staggered menu item entrances.",
    demoHtml: "\n      <div class=\"preview-fab-dock\">\n        <div class=\"fab-bubble\">\n          <svg class=\"fab-svg-icon\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\n            <line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>\n          </svg>\n        </div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-fab-stage">
          <div class="fab-stage-intro">
            <h2>Expanding Action Island</h2>
            <p>${getCurrentLang() === "en" ? "Click the floating action button to observe elastic expansion into a menu" : "点击下方悬浮按钮，观察其由极简圆点膨胀为全功能交互菜单的弹性过渡"}</p>
          </div>
          <div class="fab-dock-island" id="fabDock">
            <button class="fab-master-trigger" id="fabTrigger" aria-label="Toggle Island Menu">
              <svg class="fab-cross-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <div class="fab-menu-items">
              <button class="fab-action-item">
                <span class="f-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                </span>
                <span class="f-lbl">New Prompt</span>
              </button>
              <button class="fab-action-item">
                <span class="f-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </span>
                <span class="f-lbl">Quick Boost</span>
              </button>
              <button class="fab-action-item">
                <span class="f-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </span>
                <span class="f-lbl">Metrics</span>
              </button>
              <button class="fab-action-item">
                <span class="f-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </span>
                <span class="f-lbl">Config</span>
              </button>
            </div>
          </div>
        </div>
      `;
      const dock = container.querySelector("#fabDock");
      const trigger = container.querySelector("#fabTrigger");

      trigger.addEventListener("click", () => {
        dock.classList.toggle("expanded");
      });
    }
  },
  {
    id: "dynamic-island",
    zhName: "灵动岛悬浮胶囊",
    enName: "Dynamic Island Morph",
    category: "反馈",
    description: "苹果灵动岛多态交互。极简黑色小药丸，点击时以平滑弹性阻尼物理曲线变形展开为音乐面板、通话或通知卡片。",
    enDescription: "Apple Dynamic Island interaction. Compact capsule morphs smoothly into music player or notification cards with spring physics.",
    prompt: "请帮我实现一个网页动效：灵动岛悬浮胶囊（Dynamic Island Morph）。顶部居中的黑色胶囊卡片，支持 Compact、Music、Alert 多种状态切换，展开与收起时带有自然的弹性阻尼贝塞尔过渡，内容元素平滑淡入交替。",
    enPrompt: "Please help me implement a web motion: Dynamic Island Morph. Morph a centered black pill into expanded music/alert cards using spring-like cubic-bezier physics.",
    demoHtml: "<div class=\"preview-dynamic-island\"><div class=\"island-dot\"></div><div class=\"island-bar\"></div></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-island-stage">
          <!-- Island Capsule -->
          <div class="island-chassis state-compact" id="islandChassis">
            <!-- Compact Mode Content -->
            <div class="island-view island-compact-view">
              <div class="island-camera-dot"></div>
              <div class="island-compact-music">
                <span class="island-wave-bar"></span>
                <span class="island-wave-bar"></span>
                <span class="island-wave-bar"></span>
              </div>
            </div>

            <!-- Music Mode Content -->
            <div class="island-view island-music-view">
              <div class="island-album-art">🎵</div>
              <div class="island-music-meta">
                <div class="music-title">Starboy (Liquid Mix)</div>
                <div class="music-artist">The Weeknd & Daft Punk</div>
                <div class="music-progress-bar"><div class="music-progress-fill"></div></div>
              </div>
              <div class="island-music-wave">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>

            <!-- Call Mode Content -->
            <div class="island-view island-call-view">
              <div class="island-avatar">👩‍💻</div>
              <div class="island-call-info">
                <div class="caller-name">Sarah Connor</div>
                <div class="call-status">Cyberdyne Incoming...</div>
              </div>
              <div class="island-call-actions">
                <button class="btn-call-decline" type="button">✕</button>
                <button class="btn-call-accept" type="button">✓</button>
              </div>
            </div>

            <!-- Timer Mode Content -->
            <div class="island-view island-timer-view">
              <div class="timer-pie">⏱️</div>
              <div class="timer-digits">14:59</div>
              <div class="timer-tag">Deep Work</div>
            </div>
          </div>

          <!-- Mode Switches -->
          <div class="island-controller">
            <button class="btn-island-mode active" data-state="state-compact">Compact</button>
            <button class="btn-island-mode" data-state="state-music">Now Playing</button>
            <button class="btn-island-mode" data-state="state-call">Incoming Call</button>
            <button class="btn-island-mode" data-state="state-timer">Timer</button>
          </div>
          <div class="island-hint">${getCurrentLang() === "en" ? "Click buttons above or the island capsule to experience iOS spring physics" : "点击上方按钮或胶囊本身体验 iOS 弹性形变"}</div>
        </div>
      `;

      const chassis = container.querySelector("#islandChassis");
      const modeBtns = container.querySelectorAll(".btn-island-mode");
      const states = ["state-compact", "state-music", "state-call", "state-timer"];

      const setIslandState = (st) => {
        states.forEach(s => chassis.classList.remove(s));
        chassis.classList.add(st);
        modeBtns.forEach(btn => {
          btn.classList.toggle("active", btn.dataset.state === st);
        });
      };

      modeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          setIslandState(btn.dataset.state);
        });
      });

      chassis.addEventListener("click", () => {
        const curIdx = states.findIndex(s => chassis.classList.contains(s));
        const nextIdx = (curIdx + 1) % states.length;
        setIslandState(states[nextIdx]);
      });
    }
  },
  {
    id: "circular-progress-meter",
    zhName: "环形刻度进度仪表",
    enName: "Circular Radial Progress Meter",
    category: "反馈",
    description: "健康指标与性能仪表盘。SVG 圆环通过 stroke-dashoffset 随数值递增顺时针描边填充，内部百分比数字同步累加。",
    enDescription: "Radial stroke gauge. SVG circle gauge smoothly fills clockwise via stroke-dashoffset with synchronized digital counter and glow accents.",
    prompt: "请帮我实现一个网页动效：环形刻度进度仪表（Circular Radial Progress Meter）。使用 SVG <circle> 标签计算圆周长 2 * π * r 作为 stroke-dasharray，通过动态修改 stroke-dashoffset 控制进度弧长，中间数字使用 requestAnimationFrame 同步递增累加。",
    enPrompt: "Please help me implement a web motion: Circular Radial Progress Meter. Animate SVG stroke-dashoffset alongside easing digital counter to create smooth radial gauges.",
    demoHtml: "\n      <div class=\"preview-radial-meter\">\n        <svg viewBox=\"0 0 36 36\" class=\"radial-svg\">\n          <circle class=\"r-bg\" cx=\"18\" cy=\"18\" r=\"14\"/>\n          <circle class=\"r-fg\" cx=\"18\" cy=\"18\" r=\"14\"/>\n        </svg>\n        <span class=\"r-txt\">85%</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-radial-stage">
          <div class="radial-card-box">
            <div class="radial-gauge-wrap">
              <svg viewBox="0 0 160 160" class="radial-master-svg">
                <circle class="gauge-bg" cx="80" cy="80" r="64"/>
                <circle class="gauge-fill" id="gaugeFill" cx="80" cy="80" r="64"/>
              </svg>
              <div class="gauge-center-val">
                <span class="gauge-number" id="gaugeNum">0</span><span class="gauge-unit">%</span>
              </div>
            </div>
            <div class="gauge-legend">PERFORMANCE SCORE</div>
            <div class="gauge-actions-bar">
              <button class="btn-gauge-set" data-val="25">25%</button>
              <button class="btn-gauge-set" data-val="68">68%</button>
              <button class="btn-gauge-set" data-val="94">94%</button>
              <button class="btn-gauge-set" data-val="100">100%</button>
            </div>
          </div>
        </div>
      `;
      const fill = container.querySelector("#gaugeFill");
      const num = container.querySelector("#gaugeNum");
      const btns = container.querySelectorAll(".btn-gauge-set");

      const circumference = 2 * Math.PI * 64; // ~402.12
      fill.style.strokeDasharray = circumference;
      fill.style.strokeDashoffset = circumference;

      const setProgress = (pct) => {
        const offset = circumference - (pct / 100) * circumference;
        fill.style.strokeDashoffset = offset;

        let start = parseInt(num.textContent) || 0;
        const duration = 600;
        const startTime = performance.now();

        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const current = Math.round(start + (pct - start) * progress);
          num.textContent = current;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      setProgress(88);
      btns.forEach(btn => {
        btn.addEventListener("click", () => setProgress(parseInt(btn.dataset.val)));
      });
    }
  },
  {
    id: "typewriter-cycle",
    zhName: "打字机多词轮播交替",
    enName: "Typewriter Multi-Text Cycle",
    category: "进入",
    description: "大标题标语轮播利器。真实光标伴随敲击节奏逐字键入，停留数秒后反向极速删除，无缝无刷新切换下一个关键词。",
    enDescription: "Dynamic headline typewriter. Types words character by character with rhythmic pauses and rapid backspace deletion for cycling keywords.",
    prompt: "请帮我实现一个网页动效：打字机多词轮播交替（Typewriter Multi-Text Cycle）。使用 JS 定时器动态截取字符串，实现逐字输入、自然停顿、快速退格删除，并循环切换数组中的关键词，右侧附带闪烁的竖线光标。",
    enPrompt: "Please help me implement a web motion: Typewriter Multi-Text Cycle. Rhythmic typewriter simulation cycling through word lists with dynamic character slicing and blinking caret.",
    demoHtml: "\n      <div class=\"preview-typewriter\">\n        <span class=\"tw-text\">Designers</span>\n        <span class=\"tw-cursor\"></span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-typewriter-stage">
          <div class="typewriter-hero-box">
            <span class="tw-prefix">Building the future for</span>
            <div class="tw-headline-rack">
              <span class="tw-dynamic-word" id="twWord"></span>
              <span class="tw-cursor-caret"></span>
            </div>
            <p class="tw-sub">${getCurrentLang() === "en" ? "Simulates organic pauses, randomized keystroke delays & smooth backspaces" : "支持自然停顿、随机敲击延迟模拟与平滑退格过渡"}</p>
            <div class="tw-custom-inputs">
              <input type="text" id="twCustomList" value="Designers, Developers, Creators, Visionaries" placeholder="${getCurrentLang() === "en" ? "Comma-separated keywords..." : "输入逗号分隔的关键词..."}">
              <button id="btnTwUpdate">${getCurrentLang() === "en" ? "Update Words" : "更新轮播词"}</button>
            </div>
          </div>
        </div>
      `;
      const wordEl = container.querySelector("#twWord");
      const listInput = container.querySelector("#twCustomList");
      const updateBtn = container.querySelector("#btnTwUpdate");

      let words = ["Designers", "Developers", "Creators", "Visionaries"];
      let wordIdx = 0;
      let charIdx = 0;
      let isDeleting = false;
      let timer = null;

      const typeLoop = () => {
        const currentWord = words[wordIdx % words.length];
        if (isDeleting) {
          wordEl.textContent = currentWord.substring(0, charIdx - 1);
          charIdx--;
        } else {
          wordEl.textContent = currentWord.substring(0, charIdx + 1);
          charIdx++;
        }

        let delta = isDeleting ? 45 : 100 + Math.random() * 40;

        if (!isDeleting && charIdx === currentWord.length) {
          delta = 2000;
          isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
          isDeleting = false;
          wordIdx++;
          delta = 400;
        }

        timer = setTimeout(typeLoop, delta);
      };

      typeLoop();

      updateBtn.addEventListener("click", () => {
        const val = listInput.value.trim();
        if (val) {
          words = val.split(",").map(s => s.trim()).filter(Boolean);
          wordIdx = 0;
          charIdx = 0;
          isDeleting = false;
          clearTimeout(timer);
          typeLoop();
        }
      });
    }
  },
  {
    id: "color-shift",
    zhName: "饱和度增强",
    enName: "Saturation Shift",
    category: "图片",
    description: "通过 hover 触发滤镜过滤（filter: grayscale）。让原本寂静低调的灰度图片过渡为色彩分明的高饱和全彩状态。",
    enDescription: "Fades saturation and contrast from gray to full color on hover, directing attention to the active image card.",
    prompt: "请帮我实现一个网页动效：饱和度增强（Saturation & Contrast Shift）。图片 hover 时从灰度或低饱和状态平滑过渡到全彩明亮状态。",
    enPrompt: "Please help me implement a web motion: Saturation Shift. Transition an image from low saturation to full color on hover.",
    demoHtml: "<div class=\"preview-color-shift\"><div class=\"preview-color-inner\"></div></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="color-shift-full-page">
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80');"></div></div>
        </div>
      `;
    }
  },
  {
    id: "image-preview",
    zhName: "图片跟随预览",
    enName: "Hover Image Preview",
    category: "图片",
    description: "当鼠标在下方文字列表项移动时，侧方会浮现一个微型的预览图。预览图开启跟随光标动画，悬浮质感极佳。",
    enDescription: "Spawns a floating preview card that tracks the mouse with inertia when hovering list elements, hiding on leave.",
    prompt: "请帮我实现一个网页动效：图片跟随预览（Hover Image Preview）。鼠标移过文字项时浮现随鼠标移动的缩略图卡片。",
    enPrompt: "Please help me implement a web motion: Hover Image Preview. Display a floating thumbnail tracking the cursor when hovering list items.",
    demoHtml: "\n      <div class=\"preview-image-follow-text\">\n        <span>Portfolio Item</span>\n        <div class=\"preview-image-follow-box\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="hover-preview-full-page">
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80">${getCurrentLang() === "en" ? "01. Impressionist Flora" : "01. 印象派花卉画卷"}</div>
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80">${getCurrentLang() === "en" ? "02. Aesthetic Composition" : "02. 艺术策展画作"}</div>
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80">${getCurrentLang() === "en" ? "03. Botanical Symphony" : "03. 灵动植物交响"}</div>
          <div class="hover-preview-floating-box" id="fBox"></div>
        </div>
      `;
      
      const links = container.querySelectorAll(".hover-preview-text-link");
      const fBox = container.querySelector("#fBox");
      
      const onMouseMove = (e) => {
        if (fBox) {
          fBox.style.left = `${e.clientX}px`;
          fBox.style.top = `${e.clientY}px`;
        }
      };
      
      links.forEach(link => {
        link.addEventListener("mouseenter", () => {
          if (fBox) {
            fBox.style.backgroundImage = `url('${link.dataset.img}')`;
            fBox.style.backgroundSize = "cover";
            fBox.style.backgroundPosition = "center";
            fBox.classList.add("active");
          }
        });
        link.addEventListener("mouseleave", () => {
          if (fBox) fBox.classList.remove("active");
        });
      });
      
      window.addEventListener("mousemove", onMouseMove);
      container.addEventListener("cleanup", () => {
        window.removeEventListener("mousemove", onMouseMove);
      }, { once: true });
    }
  },
  {
    id: "before-after-slider",
    zhName: "前后对比滑动擦除",
    enName: "Before-After Comparison Slider",
    category: "图片",
    description: "AI 图像与设计交付神器。两层重叠图像，拖动中间手柄分界线时动态改变上层遮罩 clip-path 或宽度，实现无缝拖拽比对。",
    enDescription: "Interactive visual comparison. Overlays two images with a draggable separator divider dynamically slicing top layer via clip-path polygon.",
    prompt: "请帮我实现一个网页动效：前后对比滑动擦除（Before-After Comparison Slider）。两张相同尺寸图片重叠，顶层图片设置 clip-path: polygon(0 0, var(--split-pos) 0, var(--split-pos) 100%, 0 100%)，监听中间手柄拖拽事件动态更新 --split-pos 百分比。",
    enPrompt: "Please help me implement a web motion: Before-After Comparison Slider. Overlay paired images with draggable divider adjusting top layer clip-path dynamically.",
    demoHtml: "\n      <div class=\"preview-ba-slider\">\n        <div class=\"ba-img-after\"></div>\n        <div class=\"ba-img-before\"></div>\n        <div class=\"ba-handle\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-ba-stage">
          <div class="ba-interactive-canvas" id="baContainer">
            <div class="ba-layer ba-after-layer">
              <div class="ba-content-mock modern">
                <span class="ba-badge">✨ AFTER (Enhanced)</span>
                <h2>Clean Motion Experience</h2>
                <p>Hardware-accelerated CSS transforms and spring physics.</p>
              </div>
            </div>
            <div class="ba-layer ba-before-layer" id="baBeforeLayer">
              <div class="ba-content-mock legacy">
                <span class="ba-badge">ORIGINAL (Static)</span>
                <h2>Clean Motion Experience</h2>
                <p>Hardware-accelerated CSS transforms and spring physics.</p>
              </div>
            </div>
            <div class="ba-divider-handle" id="baHandle">
              <div class="ba-handle-knob">↔</div>
            </div>
          </div>
          <div class="ba-hint">${getCurrentLang() === "en" ? "Drag center divider slider to compare both visual layers" : "拖拽中间分界线滑动比对两层视觉效果"}</div>
        </div>
      `;
      const containerBox = container.querySelector("#baContainer");
      const beforeLayer = container.querySelector("#baBeforeLayer");
      const handle = container.querySelector("#baHandle");

      let isDragging = false;
      const updatePosition = (clientX) => {
        const rect = containerBox.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        beforeLayer.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
        handle.style.left = `${pct}%`;
      };

      containerBox.addEventListener("mousedown", () => isDragging = true);
      window.addEventListener("mouseup", () => isDragging = false);
      window.addEventListener("mousemove", (e) => {
        if (isDragging) updatePosition(e.clientX);
      });
      containerBox.addEventListener("click", (e) => updatePosition(e.clientX));

      // Initial pos
      updatePosition(containerBox.getBoundingClientRect().left + containerBox.offsetWidth * 0.5);
    }
  },
  {
    id: "direction-aware-hover",
    zhName: "方向感知卡片划入",
    enName: "Direction-Aware Hover Reveal",
    category: "悬停",
    description: "智能感知光标切入方向。三角函数计算光标从上/下/左/右何处进入卡片，遮罩层严格从光标进入侧平滑抽出，离开时沿对应方向滑出。",
    enDescription: "Vector-aware hover overlay. Calculates entry angle via trigonometry so the overlay slides in strictly from the cursor's entry edge and exits accordingly.",
    prompt: "请帮我实现一个网页动效：方向感知卡片划入（Direction-Aware Hover Reveal）。在 mouseenter / mouseleave 事件中通过 Math.atan2 计算鼠标相对卡片中心的进入角度（0: 上, 1: 右, 2: 下, 3: 左），动态调整浮层的起始与目标 transform: translate()，实现跟随鼠标方向的抽拉效果。",
    enPrompt: "Please help me implement a web motion: Direction-Aware Hover Reveal. Compute cursor entry/exit quadrants using atan2 to animate drawer overlays from 4 cardinal directions.",
    demoHtml: "\n      <div class=\"preview-dir-card\">\n        <div class=\"dir-surface\">Hover Direction</div>\n        <div class=\"dir-curtain\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-dir-stage">
          <div class="dir-stage-header">
            <h2>Direction-Aware Proximity Grid</h2>
            <p>${getCurrentLang() === "en" ? "Hover in & out from different directions to observe directional curtain reveal" : "从不同方向（上/下/左/右）将鼠标移入或移出卡片，观察遮罩层精准从切入边展开"}</p>
          </div>
          <div class="dir-grid-container">
            <div class="dir-interactive-card">
              <div class="dir-card-body"><h3>01. Creative Studio</h3><p>Brand Identity & 3D Visuals</p></div>
              <div class="dir-overlay-sheet"><span class="dir-tag">DISCOVER CASE</span></div>
            </div>
            <div class="dir-interactive-card">
              <div class="dir-card-body"><h3>02. Motion Systems</h3><p>Design Tokens & Transitions</p></div>
              <div class="dir-overlay-sheet"><span class="dir-tag">VIEW WORKFLOW</span></div>
            </div>
            <div class="dir-interactive-card">
              <div class="dir-card-body"><h3>03. Spatial Audio</h3><p>Interactive Audio WebGL</p></div>
              <div class="dir-overlay-sheet"><span class="dir-tag">PLAY DEMO</span></div>
            </div>
          </div>
        </div>
      `;
      const cards = container.querySelectorAll(".dir-interactive-card");

      const getDirection = (e, item) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        // Returns 0: top, 1: right, 2: bottom, 3: left
        return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
      };

      const transMap = [
        { in: "translateY(-100%)", out: "translateY(-100%)" }, // top
        { in: "translateX(100%)", out: "translateX(100%)" },   // right
        { in: "translateY(100%)", out: "translateY(100%)" },   // bottom
        { in: "translateX(-100%)", out: "translateX(-100%)" }  // left
      ];

      cards.forEach(card => {
        const overlay = card.querySelector(".dir-overlay-sheet");
        card.addEventListener("mouseenter", (e) => {
          const dir = getDirection(e, card);
          overlay.style.transition = "none";
          overlay.style.transform = transMap[dir].in;
          overlay.offsetHeight; // force reflow
          overlay.style.transition = "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)";
          overlay.style.transform = "translate(0, 0)";
        });

        card.addEventListener("mouseleave", (e) => {
          const dir = getDirection(e, card);
          overlay.style.transition = "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)";
          overlay.style.transform = transMap[dir].out;
        });
      });
    }
  },
  {
    id: "tilt-card",
    zhName: "卡片 3D 倾斜",
    enName: "3D Tilt Card",
    category: "悬停",
    description: "将卡片放入透视矩阵中（perspective）。计算鼠标在卡片上的相对坐标，平滑倾斜卡片并使里面的文字向上浮起。",
    enDescription: "Calculates hover coordinates to rotate the card in 3D space, shifting background image and text layer for depth.",
    prompt: "请帮我实现一个网页动效：卡片 3D 倾斜（3D Tilt Card）。当鼠标在卡片移动时，卡片产生带透视的倾斜跟随效果。",
    enPrompt: "Please help me implement a web motion: 3D Tilt Card. Rotate the card in 3D perspective based on the mouse position relative to the card's center.",
    demoHtml: "\n      <div class=\"preview-tilt-card\">\n        <div class=\"preview-tilt-inner\">3D</div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="tilt-card-full-page">
          <div class="tilt-card-wrapper" id="tWrapper">
            <div class="tilt-card-inner-box" id="tCard">
              <!-- Background image layer — moves slightly less than text (parallax depth) -->
              <div class="tilt-card-img-layer" id="tImgLayer"
                style="
                  position: absolute; inset: 0;
                  border-radius: inherit;
                  overflow: hidden;
                  z-index: 0;
                ">
                <img src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" alt="artistic botanical canvas"
                  style="
                    width: 110%; height: 110%;
                    object-fit: cover;
                    display: block;
                    margin: -5%;
                    border-radius: inherit;
                    transition: transform 0.08s linear;
                  " id="tImg" />
                <!-- Subtle gradient overlay so text stays crisp while image is visible -->
                <div style="
                  position: absolute; inset: 0;
                  background: linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.65) 100%);
                  border-radius: inherit;
                "></div>
              </div>
              <!-- Text layer — floats on top with translateZ -->
              <div style="position: relative; z-index: 2; transform: translateZ(30px); transition: transform 0.08s linear;" id="tText">
                <h2 style="color: var(--text-inverse, #f8fafc); text-shadow: 0 2px 16px rgba(0,0,0,0.5);">${getCurrentLang() === "en" ? "ART CURATION" : "艺术策展"}</h2>
                <p style="color: rgba(248,250,252,0.9); text-shadow: 0 1px 8px rgba(0,0,0,0.4);">${getCurrentLang() === "en" ? "Explore 3D tilt perspective.<br>Text and image float on separate depth layers." : "探索极速倾斜的三维世界。<br>文字与卡片层高不一，具有视差深度。"}</p>
              </div>
              <!-- Shimmer highlight — reacts to tilt angle -->
              <div id="tShimmer" style="
                position: absolute; inset: 0;
                border-radius: inherit;
                background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 65%);
                pointer-events: none;
                z-index: 3;
                transition: background 0.12s ease;
              "></div>
            </div>
          </div>
          
        </div>
      `;

      const wrapper = container.querySelector("#tWrapper");
      const card    = container.querySelector("#tCard");
      const img     = container.querySelector("#tImg");
      const text    = container.querySelector("#tText");
      const shimmer = container.querySelector("#tShimmer");

      const onMouseMove = (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width  / 2;
        const y = e.clientY - rect.top  - rect.height / 2;

        const rotX = -(y / (rect.height / 2)) * 15;
        const rotY =  (x / (rect.width  / 2)) * 15;

        // Card tilts
        card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

        // Image moves opposite direction at half speed → parallax
        const imgX = -rotY * 0.6;
        const imgY =  rotX * 0.6;
        img.style.transform = `translate(${imgX}px, ${imgY}px) scale(1.05)`;

        // Shimmer highlight follows cursor
        const px = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
        const py = ((e.clientY - rect.top ) / rect.height * 100).toFixed(1);
        shimmer.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.18), transparent 65%)`;
      };

      const onMouseLeave = () => {
        card.style.transform  = "rotateX(0) rotateY(0)";
        img.style.transform   = "translate(0,0) scale(1)";
        shimmer.style.background = "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 65%)";
      };

      wrapper.addEventListener("mousemove",  onMouseMove);
      wrapper.addEventListener("mouseleave", onMouseLeave);

      container.addEventListener("cleanup", () => {
        wrapper.removeEventListener("mousemove",  onMouseMove);
        wrapper.removeEventListener("mouseleave", onMouseLeave);
      }, { once: true });
    }
  },
  {
    id: "glass-glare-tilt",
    zhName: "镜面菲涅尔反光 3D 卡片",
    enName: "Glass Glare Tilt Card",
    category: "悬停",
    description: "高端会员卡与资产卡片。在 3D 透视倾斜基础上叠加对角线物理光斑，卡片转动时光斑在磨砂玻璃表面产生真实的漫反射位移。",
    enDescription: "Luxury reflective tilt card. Combines 3D perspective orientation with a dynamic specular sheen layer tracking mouse angles.",
    prompt: "请帮我实现一个网页动效：镜面菲涅尔反光 3D 卡片（Glass Glare Tilt Card）。在卡片 3D 透视旋转的同时，卡片内部叠加一层带 linear-gradient(135deg, rgba(255,255,255,0.4), transparent) 的高光层，高光层根据鼠标相对坐标反向位移，产生逼真的玻璃反光效果。",
    enPrompt: "Please help me implement a web motion: Glass Glare Tilt Card. Pair 3D perspective rotation with a specular highlight sheen layer translating inversely to simulate glass refraction.",
    demoHtml: "\n      <div class=\"preview-glare-card\">\n        <div class=\"glare-foil\"></div>\n        <div class=\"glare-chip\">✦ VIP BLACK</div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-glare-stage">
          <div class="glare-card-wrapper" id="glareWrap">
            <div class="glare-master-card" id="glareCard">
              <div class="glare-sheen-layer" id="glareSheen"></div>
              <div class="glare-card-body">
                <div class="card-chip-gold">✦ BLACK EDITION</div>
                <div class="card-number">4000 8820 9918 2026</div>
                <div class="card-footer-meta">
                  <span>VALID THRU 12/29</span>
                  <span class="card-brand-logo">NOVA CARD</span>
                </div>
              </div>
            </div>
          </div>
          <div class="glare-hint">${getCurrentLang() === "en" ? "Move cursor to inspect 3D tilt rotation and Fresnel glare reflections" : "移动鼠标观察卡片 3D 旋转与高光层的物理菲涅尔反光"}</div>
        </div>
      `;
      const wrap = container.querySelector("#glareWrap");
      const card = container.querySelector("#glareCard");
      const sheen = container.querySelector("#glareSheen");

      wrap.addEventListener("mousemove", (e) => {
        const rect = wrap.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -16;
        const rotateY = ((x - centerX) / centerX) * 16;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        sheen.style.opacity = "1";
        sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.55) 0%, transparent 60%)`;
      });

      wrap.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        sheen.style.opacity = "0";
      });
    }
  },
  {
    id: "macos-dock",
    zhName: "拟物鱼眼缩放 Dock",
    enName: "macOS Fisheye Dock",
    category: "悬停",
    description: "经典桌面 Dock 拟物栏。鼠标在底部滑动时，图标根据与光标的距离呈现非线性的高斯鱼眼放大与浮动回弹。",
    enDescription: "Classic macOS dock. Icons scale up based on a cosine/gaussian distance curve as the cursor glides across.",
    prompt: "请帮我实现一个网页动效：macOS 拟物鱼眼缩放 Dock 栏（macOS Fisheye Dock）。在底部固定悬浮的图标栏中监听 mousemove，根据光标与各个图标中心的水平距离计算高斯/余弦缩放系数，使光标周围图标产生连贯的鱼眼放大波浪。",
    enPrompt: "Please help me implement a web motion: macOS Fisheye Dock. Scale dock icons smoothly based on cursor proximity using a gaussian distance function.",
    demoHtml: "\n      <div class=\"preview-macos-dock\">\n        <div class=\"dock-mini-icon d1\"></div>\n        <div class=\"dock-mini-icon d2\"></div>\n        <div class=\"dock-mini-icon d3\"></div>\n        <div class=\"dock-mini-icon d4\"></div>\n      </div>\n    ",
    render: (container) => {
      const icons = [
        { 
          label: "Finder", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>' 
        },
        { 
          label: "Browser", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>' 
        },
        { 
          label: "Editor", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' 
        },
        { 
          label: "Terminal", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>' 
        },
        { 
          label: "Notes", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' 
        },
        { 
          label: "Metrics", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' 
        },
        { 
          label: "Search", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' 
        },
        { 
          label: "Settings", 
          svg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' 
        }
      ];

      const iconsHtml = icons.map(ic => `
        <div class="dock-app-item" data-title="${ic.label}">
          <div class="dock-app-icon">${ic.svg}</div>
          <div class="dock-tooltip">${ic.label}</div>
          <div class="dock-app-dot"></div>
        </div>
      `).join("");

      container.innerHTML = `
        <div class="sandbox-dock-stage">
          <div class="dock-scene-title">MACOS DOCK</div>
          <div class="dock-bar-glass" id="dockBar">
            ${iconsHtml}
          </div>
        </div>
      `;

      const dock = container.querySelector("#dockBar");
      const items = container.querySelectorAll(".dock-app-item");
      const baseWidth = 52;
      const maxScale = 1.85;
      const maxDist = 140;

      const handleDockMove = (e) => {
        const mouseX = e.clientX;
        items.forEach(item => {
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const dist = Math.abs(mouseX - itemCenterX);

          if (dist < maxDist) {
            const scale = 1 + (maxScale - 1) * Math.cos((dist / maxDist) * (Math.PI / 2));
            item.style.width = `${baseWidth * scale}px`;
            item.style.height = `${baseWidth * scale}px`;
          } else {
            item.style.width = `${baseWidth}px`;
            item.style.height = `${baseWidth}px`;
          }
        });
      };

      const handleDockLeave = () => {
        items.forEach(item => {
          item.style.width = `${baseWidth}px`;
          item.style.height = `${baseWidth}px`;
        });
      };

      items.forEach(item => {
        item.addEventListener("click", () => {
          item.classList.add("dock-bouncing");
          setTimeout(() => item.classList.remove("dock-bouncing"), 1000);
        });
      });

      dock.addEventListener("mousemove", handleDockMove);
      dock.addEventListener("mouseleave", handleDockLeave);

      container.addEventListener("cleanup", () => {
        dock.removeEventListener("mousemove", handleDockMove);
        dock.removeEventListener("mouseleave", handleDockLeave);
      });
    }
  },
  {
    id: "card-stack-swipe",
    zhName: "层叠卡片手势抽卡",
    enName: "Stack Card Swipe",
    category: "布局",
    description: "Apple Wallet / 探探风格层叠卡片。支持点击或拖拽将顶层卡片飞出，底层卡片平滑缩放补位上升。",
    enDescription: "Layered card stack. Flick the top card away while background cards scale up and take its place.",
    prompt: "请帮我实现一个网页动效：层叠卡片手势抽卡（Stack Card Swipe）。多张卡片以 z-index 和 translateY/scale 叠加放置，用户点击或拖拽最上层卡片使其带有旋转飞出视口，后续卡片平滑放大升入顶层，支持无限循环抽取。",
    enPrompt: "Please help me implement a web motion: Stack Card Swipe. Stack layered cards and animate top cards flying away on click/swipe while lower cards scale up seamlessly.",
    demoHtml: "\n      <div class=\"preview-card-stack\">\n        <div class=\"stack-card c3\"></div>\n        <div class=\"stack-card c2\"></div>\n        <div class=\"stack-card c1\"></div>\n      </div>\n    ",
    render: (container) => {
      const cardsData = [
        { 
          id: 1, 
          title: "Design Systems", 
          sub: "Token Architecture & Components", 
          badge: "UI ARCHITECTURE",
          color: "#3b82f6",
          iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
        },
        { 
          id: 2, 
          title: "Kinetic Motion", 
          sub: "Spring Physics & Cubic Bezier", 
          badge: "PHYSICS ENGINE",
          color: "#8b5cf6",
          iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
        },
        { 
          id: 3, 
          title: "Web Performance", 
          sub: "60 FPS GPU Acceleration", 
          badge: "RENDER PIPELINE",
          color: "#10b981",
          iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`
        },
        { 
          id: 4, 
          title: "Autonomous AI", 
          sub: "Multi-Agent Orchestration", 
          badge: "INTELLIGENCE",
          color: "#f59e0b",
          iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z"/></svg>`
        }
      ];

      container.innerHTML = `
        <div class="sandbox-stack-stage">
          <div class="stack-deck-container" id="stackDeck"></div>
          <div class="stack-controls">
            <button class="btn-stack-action" id="btnSwipeLeft">${getCurrentLang() === "en" ? "👈 Swipe Left" : "👈 向左划出"}</button>
            <button class="btn-stack-action btn-primary" id="btnStackFlick">${getCurrentLang() === "en" ? "⚡ Next Card (Flick)" : "⚡ 下一张卡片 (抽卡)"}</button>
            <button class="btn-stack-action" id="btnSwipeRight">${getCurrentLang() === "en" ? "Swipe Right 👉" : "向右划出 👉"}</button>
          </div>
          <div class="stack-hint">${getCurrentLang() === "en" ? "💡 Drag and flick cards with mouse or touch gestures" : "💡 支持鼠标或触摸直接按住卡片左右拖拽甩出"}</div>
        </div>
      `;

      const deck = container.querySelector("#stackDeck");
      let cardList = [...cardsData];
      let isAnimating = false;

      const renderDeck = () => {
        deck.innerHTML = "";
        cardList.forEach((card, index) => {
          const el = document.createElement("div");
          el.className = `deck-card-layer layer-${index}`;
          el.dataset.index = index;
          el.style.zIndex = `${cardList.length - index}`;
          el.style.setProperty("--layer-offset", `${index}`);
          el.style.borderTop = `4px solid ${card.color}`;
          el.innerHTML = `
            <div class="deck-card-header">
              <span class="deck-card-badge" style="color: ${card.color}; background: ${card.color}15; border: 1px solid ${card.color}40;">${card.badge}</span>
              <span class="deck-card-num">0${card.id} / 04</span>
            </div>
            <div class="deck-card-body">
              <div class="deck-card-icon" style="color: ${card.color};">${card.iconSvg}</div>
              <div class="deck-card-title">${card.title}</div>
              <div class="deck-card-sub">${card.sub}</div>
            </div>
            <div class="deck-card-footer">
              <span class="deck-swipe-guide">← SWIPE TO DISMISS →</span>
            </div>
          `;

          if (index === 0) {
            bindDragEvents(el);
          }

          deck.appendChild(el);
        });
      };

      const flickCard = (direction = 1) => {
        if (isAnimating) return;
        const topCard = deck.querySelector(".deck-card-layer.layer-0");
        if (!topCard) return;
        isAnimating = true;
        
        topCard.style.transition = "transform 420ms cubic-bezier(0.2, 0.9, 0.3, 1), opacity 400ms ease";
        const targetX = direction * (deck.offsetWidth + 200);
        const targetRot = direction * 28;
        topCard.style.transform = `translate3d(${targetX}px, -40px, 0) rotate(${targetRot}deg)`;
        topCard.style.opacity = "0";

        // Promote background cards immediately
        const otherCards = deck.querySelectorAll(".deck-card-layer:not(.layer-0)");
        otherCards.forEach((c, i) => {
          const newOffset = i;
          c.style.transition = "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease";
          c.style.transform = `translate3d(0, calc(${newOffset} * 16px), 0) scale(calc(1 - ${newOffset} * 0.05))`;
          c.style.opacity = `${1 - newOffset * 0.18}`;
        });

        setTimeout(() => {
          const removed = cardList.shift();
          cardList.push(removed);
          renderDeck();
          isAnimating = false;
        }, 400);
      };

      const bindDragEvents = (cardEl) => {
        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;

        const onPointerDown = (e) => {
          if (isAnimating) return;
          isDragging = true;
          startX = e.clientX;
          startY = e.clientY;
          currentX = 0;
          currentY = 0;
          cardEl.setPointerCapture?.(e.pointerId);
          cardEl.style.transition = "none";
        };

        const onPointerMove = (e) => {
          if (!isDragging) return;
          currentX = e.clientX - startX;
          currentY = e.clientY - startY;
          const rot = currentX * 0.08;
          cardEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rot}deg) scale(1.02)`;
        };

        const onPointerUp = () => {
          if (!isDragging) return;
          isDragging = false;
          const threshold = 90;
          if (Math.abs(currentX) > threshold) {
            flickCard(currentX > 0 ? 1 : -1);
          } else {
            // Spring back
            cardEl.style.transition = "transform 360ms cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            cardEl.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
          }
        };

        cardEl.addEventListener("pointerdown", onPointerDown);
        cardEl.addEventListener("pointermove", onPointerMove);
        cardEl.addEventListener("pointerup", onPointerUp);
        cardEl.addEventListener("pointercancel", onPointerUp);
      };

      renderDeck();
      container.querySelector("#btnStackFlick").addEventListener("click", () => flickCard(1));
      container.querySelector("#btnSwipeLeft").addEventListener("click", () => flickCard(-1));
      container.querySelector("#btnSwipeRight").addEventListener("click", () => flickCard(1));
    }
  },
  {
    id: "page-transition",
    zhName: "页面转场",
    enName: "Page Transition",
    category: "布局",
    description: "模拟完整的页面跳转过渡。点击“切换页面”时，全屏单色幕布自上滑下盖住视口，平滑更新页面底色与文字后再收起。",
    enDescription: "Displays full-screen sliding curtains or fading masks during routing switches, maintaining visual continuity.",
    prompt: "请帮我实现一个网页动效：页面转场（Page Transition）。在更新页面内容时，全屏呈现淡入淡出或侧滑幕布平移遮挡转场。",
    enPrompt: "Please help me implement a web motion: Page Transition. Transition views using full-screen sliding curtain covers on page reload.",
    demoHtml: "\n      <div class=\"preview-page-transition\">\n        <div class=\"preview-page-curtain\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="page-trans-full-page">
          <h1 id="ptTitle">${getCurrentLang() === "en" ? "Page A: Design Studio" : "页面 A：设计策展中心"}</h1>
          <button class="btn btn-primary" id="ptBtn" style="width: auto; padding: 0 30px;">${getCurrentLang() === "en" ? "Navigate to Page B" : "前往页面 B"}</button>
        </div>
        <div class="page-trans-curtain-panel" id="ptCurtain"></div>
      `;
      
      const ptBtn = container.querySelector("#ptBtn");
      const ptTitle = container.querySelector("#ptTitle");
      const ptCurtain = container.querySelector("#ptCurtain");
      
      let state = "A";
      ptBtn.addEventListener("click", () => {
        ptCurtain.classList.add("animate");
        
        setTimeout(() => {
          if (state === "A") {
            ptTitle.textContent = getCurrentLang() === "en" ? "Page B: Engineering Hub" : "页面 B：开发控制中心";
            ptBtn.textContent = getCurrentLang() === "en" ? "Back to Page A" : "返回页面 A";
            state = "B";
          } else {
            ptTitle.textContent = getCurrentLang() === "en" ? "Page A: Design Studio" : "页面 A：设计策展中心";
            ptBtn.textContent = getCurrentLang() === "en" ? "Navigate to Page B" : "前往页面 B";
            state = "A";
          }
        }, 500); // Trigger page content switch right behind mid curtain
        
        setTimeout(() => {
          ptCurtain.classList.remove("animate");
        }, 1250);
      });
    }
  },
  {
    id: "metallic-shimmer-text",
    zhName: "金属光泽扫光文字",
    enName: "Metallic Shimmer Text",
    category: "进入",
    description: "苹果发布会级标题质感。高精度金属质感渐变在深色文字上缓缓扫过，散发奢华流光溢彩的工业设计美感。",
    enDescription: "Apple Keynote title aesthetic. A metallic specular sheen sweeps smoothly across high-contrast typography.",
    prompt: "请帮我实现一个网页动效：金属光泽扫光文字（Metallic Shimmer Text）。使用 background-clip: text 和多段高对比金属渐变（Silver/Gold），配合 keyframes 沿 45 度对角线平滑平移 background-position，创造出奢华的金属光影流淌效果。",
    enPrompt: "Please help me implement a web motion: Metallic Shimmer Text. Animate high-contrast linear gradient reflections across text using background-clip: text.",
    demoHtml: "<div class=\"preview-metallic-text\"><span class=\"shimmer-txt\">TITANIUM</span></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-shimmer-stage">
          <div class="shimmer-hero-wrap">
            <div class="shimmer-pill-badge">AEROSPACE GRADE SPECULAR SHEEN</div>
            <h1 class="shimmer-monumental-text theme-titanium" id="shimmerHeadline">TITANIUM PRO</h1>
            <p class="shimmer-subhead">${getCurrentLang() === "en" ? "High-precision specular reflections flowing across metallic contours at 45°." : "多段超高精度镜面反射光栅，以 45° 角度在微米级金属质感轮廓上流淌流动。"}</p>
          </div>
          <div class="shimmer-palette-bar">
            <button class="palette-chip active" data-palette="titanium">✦ Titanium Silver</button>
            <button class="palette-chip" data-palette="gold">★ Solar Gold</button>
            <button class="palette-chip" data-palette="emerald">◆ Cyber Emerald</button>
            <button class="palette-chip" data-palette="rosegold">♥ Desert Rose</button>
            <button class="palette-chip" data-palette="obsidian">● Obsidian Chrome</button>
          </div>
        </div>
      `;

      const headline = container.querySelector("#shimmerHeadline");
      const chips = container.querySelectorAll(".palette-chip");

      chips.forEach(chip => {
        chip.addEventListener("click", () => {
          chips.forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          headline.className = `shimmer-monumental-text theme-${chip.dataset.palette}`;
        });
      });
    }
  },
  {
    id: "border-beam",
    zhName: "流光环形边框",
    enName: "Border Beam Animation",
    category: "进入",
    description: "Magic UI 经典动效。一道高亮炫彩渐变光柱沿着圆角卡片的边缘无缝周游循环，极具科技高级感。",
    enDescription: "Magic UI classic. A glowing gradient beam seamlessly travels along the rounded card perimeter.",
    prompt: "请帮我实现一个网页动效：流光环形边框（Border Beam Animation）。在圆角卡片边框上绘制一段带有高斯模糊和色彩渐变的光柱，利用 CSS conic-gradient 或 offset-path 使光柱沿着矩形外边框持续匀速绕圈旋转。",
    enPrompt: "Please help me implement a web motion: Border Beam Animation. Create an animated gradient ray that travels continuously along the container's border using conic-gradient or offset-path.",
    demoHtml: "<div class=\"preview-border-beam-box\"><div class=\"preview-border-beam-ray\"></div><div class=\"preview-border-beam-inner\">BEAM</div></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-beam-container">
          <div class="sandbox-beam-card" id="beamCard">
            <div class="sandbox-beam-ray"></div>
            <div class="sandbox-beam-content">
              <div class="sandbox-beam-badge">PRO EDITION</div>
              <h2>Autonomous Neural Core</h2>
              <p>${getCurrentLang() === "en" ? "Next-gen asynchronous stream optimizing application throughput and frame rate." : "采用下一代超线程异步计算流，全天候监听并自动优化应用吞吐量与渲染帧率。"}</p>
              <div class="sandbox-beam-stats">
                <div><span class="stat-num">99.99%</span><span class="stat-lbl">Uptime SLA</span></div>
                <div><span class="stat-num">&lt; 1.2ms</span><span class="stat-lbl">Global Latency</span></div>
                <div><span class="stat-num">120 FPS</span><span class="stat-lbl">Fluid Motion</span></div>
              </div>
              <button class="sandbox-beam-btn" type="button">Deploy Node</button>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    id: "animated-flow-beams",
    zhName: "流程连线脉冲光波",
    enName: "Animated Flow Beams",
    category: "进入",
    description: "AI 工作流与系统拓扑图神器。在多个 UI 节点间以贝塞尔曲线相连，发光的脉冲粒子沿着线条持续流动传输。",
    enDescription: "AI workflow visual. Glowing pulse particles continuously travel along SVG bezier paths between nodes.",
    prompt: "请帮我实现一个网页动效：流程连线脉冲光波（Animated Flow Beams）。在多个节点之间绘制 SVG 平滑贝塞尔曲线，利用 stroke-dasharray 和 stroke-dashoffset 制作连续向前流动的发光能量脉冲粒子，模拟数据流动。",
    enPrompt: "Please help me implement a web motion: Animated Flow Beams. Draw SVG bezier paths between UI nodes and animate glowing pulse waves flowing along the paths.",
    demoHtml: "\n      <div class=\"preview-flow-beams-wrap\">\n        <div class=\"preview-beam-node n1\"></div>\n        <div class=\"preview-beam-line\"><div class=\"preview-beam-pulse\"></div></div>\n        <div class=\"preview-beam-node n2\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-flow-container">
          <div class="flow-dag-stage">
            <!-- Left Input Nodes -->
            <div class="flow-col flow-inputs">
              <div class="flow-node" id="nodeUser"><span class="flow-icon">👤</span><span class="flow-txt">User Prompt</span></div>
              <div class="flow-node" id="nodeDocs"><span class="flow-icon">📚</span><span class="flow-txt">API Docs</span></div>
              <div class="flow-node" id="nodeRepo"><span class="flow-icon">📦</span><span class="flow-txt">Codebase</span></div>
            </div>

            <!-- Center Core -->
            <div class="flow-col flow-center">
              <div class="flow-hub-core" id="nodeCore">
                <div class="hub-pulse-ring"></div>
                <div class="hub-icon">⚡</div>
                <div class="hub-title">Agentic Engine</div>
              </div>
            </div>

            <!-- Right Output Nodes -->
            <div class="flow-col flow-outputs">
              <div class="flow-node" id="nodeGen"><span class="flow-icon">🚀</span><span class="flow-txt">Auto Code</span></div>
              <div class="flow-node" id="nodeTest"><span class="flow-icon">🧪</span><span class="flow-txt">CI Verify</span></div>
              <div class="flow-node" id="nodePR"><span class="flow-icon">✨</span><span class="flow-txt">GitHub PR</span></div>
            </div>

            <!-- SVG Connecting Lines -->
            <svg class="flow-svg-canvas" id="flowSvg"></svg>
          </div>
        </div>
      `;

      const svg = container.querySelector("#flowSvg");
      const drawBeams = () => {
        const stage = container.querySelector(".flow-dag-stage");
        if (!stage || !svg) return;
        const sRect = stage.getBoundingClientRect();
        svg.setAttribute("viewBox", `0 0 ${sRect.width} ${sRect.height}`);

        const core = container.querySelector("#nodeCore").getBoundingClientRect();
        const coreX = core.left - sRect.left + core.width / 2;
        const coreY = core.top - sRect.top + core.height / 2;

        const inputs = [container.querySelector("#nodeUser"), container.querySelector("#nodeDocs"), container.querySelector("#nodeRepo")];
        const outputs = [container.querySelector("#nodeGen"), container.querySelector("#nodeTest"), container.querySelector("#nodePR")];

        let pathsHtml = "";

        // Inputs to Core
        inputs.forEach((inp, idx) => {
          const r = inp.getBoundingClientRect();
          const startX = r.right - sRect.left;
          const startY = r.top - sRect.top + r.height / 2;
          const cpx1 = startX + (coreX - startX) * 0.5;
          const cpx2 = startX + (coreX - startX) * 0.5;
          const d = `M ${startX} ${startY} C ${cpx1} ${startY}, ${cpx2} ${coreY}, ${coreX - 40} ${coreY}`;
          pathsHtml += `
            <path class="beam-base-track" d="${d}" />
            <path class="beam-flow-pulse" d="${d}" style="animation-delay: ${idx * 0.4}s;" />
          `;
        });

        // Core to Outputs
        outputs.forEach((out, idx) => {
          const r = out.getBoundingClientRect();
          const endX = r.left - sRect.left;
          const endY = r.top - sRect.top + r.height / 2;
          const cpx1 = coreX + (endX - coreX) * 0.5;
          const cpx2 = coreX + (endX - coreX) * 0.5;
          const d = `M ${coreX + 40} ${coreY} C ${cpx1} ${coreY}, ${cpx2} ${endY}, ${endX} ${endY}`;
          pathsHtml += `
            <path class="beam-base-track" d="${d}" />
            <path class="beam-flow-pulse" d="${d}" style="animation-delay: ${(idx + 3) * 0.35}s;" />
          `;
        });

        svg.innerHTML = pathsHtml;
      };

      setTimeout(drawBeams, 50);
      window.addEventListener("resize", drawBeams);
      container.addEventListener("cleanup", () => {
        window.removeEventListener("resize", drawBeams);
      });
    }
  },
  {
    id: "scroll-drawn-svg",
    zhName: "滚动手绘线条勾勒",
    enName: "Scroll-Drawn SVG Path",
    category: "滚动",
    description: "Stripe 首页同款叙事。页面向下滚动时，复杂的矢量线条与产品架构轮廓依照绝对滚动百分比精准手绘呈现。",
    enDescription: "Stripe-style scroll storytelling. SVG paths trace out dynamically in lockstep with page scroll depth.",
    prompt: "请帮我实现一个网页动效：滚动手绘线条勾勒（Scroll-Drawn SVG Path）。测量 SVG path 的 getTotalLength()，初始化 stroke-dasharray 和 stroke-dashoffset 为全长，监听窗口滚动进度，将滚动百分比实时映射到 dashoffset 实现手绘画线效果。",
    enPrompt: "Please help me implement a web motion: Scroll-Drawn SVG Path. Bind SVG strokeDashoffset to the page scroll percentage using getTotalLength().",
    demoHtml: "\n      <div class=\"preview-scroll-svg\">\n        <svg viewBox=\"0 0 100 40\"><path d=\"M5,20 Q25,5 50,20 T95,20\" class=\"svg-stroke-path\"></path></svg>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-scroll-svg-stage">
          <div class="scroll-svg-hud">
            <span>SCROLL PROGRESS: </span><strong id="svgProgressVal">0%</strong>
          </div>
          <div class="scroll-svg-track">
            <svg class="circuit-svg" viewBox="0 0 600 1200" id="circuitSvg">
              <path class="circuit-path" id="circuitPath" d="M 300 50 L 300 200 L 150 300 L 150 500 L 450 650 L 450 850 L 300 950 L 300 1150" />
            </svg>
            <div class="circuit-milestone m1" style="top: 200px;"><span>01 // INTAKE</span></div>
            <div class="circuit-milestone m2" style="top: 500px;"><span>02 // PARALLEL COMPUTE</span></div>
            <div class="circuit-milestone m3" style="top: 850px;"><span>03 // SYNTHESIS</span></div>
            <div class="circuit-milestone m4" style="top: 1150px;"><span>04 // DISPATCH</span></div>
          </div>
        </div>
      `;

      const path = container.querySelector("#circuitPath");
      const progressText = container.querySelector("#svgProgressVal");
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
        
        path.style.strokeDashoffset = `${length * (1 - progress)}`;
        if (progressText) progressText.textContent = `${Math.round(progress * 100)}%`;
      };

      window.addEventListener("scroll", handleScroll);
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", handleScroll);
      });
    }
  },
  {
    id: "rolling-number-odometer",
    zhName: "机械滚轮数字翻牌器",
    enName: "Rolling Number Odometer",
    category: "反馈",
    description: "老虎机与机械仪表盘质感。数值变动时，每位数字像滚轮一样纵向旋转翻滚过渡，数字感与仪式感拉满。",
    enDescription: "Mechanical slot-machine counter. Each digit rolls vertically along an internal column with staggered easing.",
    prompt: "请帮我实现一个网页动效：机械滚轮数字翻牌器（Rolling Number Odometer）。将多位数字拆分为独立的竖向列，每列包含 0-9 数字序列，当数值更新时通过 translateY 平滑滚动至目标数字，配合各列错开的 transition-delay 营造机械翻牌效果。",
    enPrompt: "Please help me implement a web motion: Rolling Number Odometer. Build vertical columns containing 0-9 digits and animate their translateY offsets with staggered delays.",
    demoHtml: "\n      <div class=\"preview-odometer\">\n        <div class=\"odo-col\"><div class=\"odo-ribbon\"><span>1</span><span>8</span><span>9</span></div></div>\n        <div class=\"odo-col\"><div class=\"odo-ribbon\"><span>4</span><span>5</span><span>6</span></div></div>\n        <div class=\"odo-col\"><div class=\"odo-ribbon\"><span>2</span><span>7</span><span>0</span></div></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-odometer-stage">
          <div class="odometer-card">
            <div class="odometer-header">
              <span class="odo-title">TOTAL REVENUE (USD)</span>
              <span class="odo-live-pill">● LIVE MECHANICAL LEDGER</span>
            </div>
            <div class="odometer-display" id="odometerDisplay">
              <span class="odo-currency">$</span>
              <div class="odo-digits-rack" id="digitsRack"></div>
            </div>
            <div class="odometer-actions">
              <button class="btn-odo-action" id="btnOdoAdd">+ $12,450</button>
              <button class="btn-odo-action" id="btnOdoBig">+ $850,000</button>
              <button class="btn-odo-action" id="btnOdoSub">- $250,000</button>
              <button class="btn-odo-action" id="btnOdoRandom">${getCurrentLang() === "en" ? "⚡ Random" : "⚡ 随机数值"}</button>
            </div>
          </div>
        </div>
      `;

      let currentVal = 8492350;
      const rack = container.querySelector("#digitsRack");

      const renderRackStructure = (formattedStr) => {
        const chars = formattedStr.split("");
        rack.innerHTML = "";
        chars.forEach((char, idx) => {
          if (char === ",") {
            const sep = document.createElement("span");
            sep.className = "odo-separator";
            sep.textContent = ",";
            rack.appendChild(sep);
          } else {
            const col = document.createElement("div");
            col.className = "odo-digit-column";
            const strip = document.createElement("div");
            strip.className = "odo-digit-strip";
            strip.style.transitionDelay = `${(chars.length - 1 - idx) * 0.04}s`;
            strip.innerHTML = "<span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>";
            strip.style.transform = "translateY(0%)";
            col.appendChild(strip);
            rack.appendChild(col);
          }
        });
      };

      const setOdometerValue = (num) => {
        const formatted = Math.max(0, num).toLocaleString("en-US");
        const chars = formatted.split("");
        const digitChars = chars.filter(c => c !== ",");
        
        let existingStrips = rack.querySelectorAll(".odo-digit-strip");
        
        // Re-build rack structure only if column count changed
        if (existingStrips.length !== digitChars.length) {
          renderRackStructure(formatted);
          void rack.offsetHeight; // Force reflow so initial state is committed
          existingStrips = rack.querySelectorAll(".odo-digit-strip");
        }

        // Animate each digit column to its new target translateY
        let digitIdx = 0;
        chars.forEach((char, charIdx) => {
          if (char !== ",") {
            const digit = parseInt(char, 10);
            const strip = existingStrips[digitIdx];
            if (strip) {
              // Stagger delay from right (least significant) to left (most significant)
              strip.style.transitionDelay = `${(chars.length - 1 - charIdx) * 0.04}s`;
              strip.style.transform = `translateY(-${digit * 10}%)`;
            }
            digitIdx++;
          }
        });
      };

      // Initial build & roll up animation
      renderRackStructure(currentVal.toLocaleString("en-US"));
      void rack.offsetHeight;
      setTimeout(() => {
        setOdometerValue(currentVal);
      }, 50);

      container.querySelector("#btnOdoAdd").addEventListener("click", () => {
        currentVal += 12450;
        setOdometerValue(currentVal);
      });

      container.querySelector("#btnOdoBig").addEventListener("click", () => {
        currentVal += 850000;
        setOdometerValue(currentVal);
      });

      container.querySelector("#btnOdoSub").addEventListener("click", () => {
        currentVal = Math.max(10000, currentVal - 250000);
        setOdometerValue(currentVal);
      });

      container.querySelector("#btnOdoRandom").addEventListener("click", () => {
        currentVal = Math.floor(Math.random() * 9000000) + 1000000;
        setOdometerValue(currentVal);
      });
    }
  },
  {
    id: "audio-waveform-visualizer",
    zhName: "波形音频动态可视化",
    enName: "Audio Waveform Visualizer",
    category: "反馈",
    description: "AI 语音助手与播放器交互。多组圆角垂直条柱根据正弦相移算法与声学振幅起伏跳动，真实模拟语音识别与音乐节奏。",
    enDescription: "Acoustic audio wave bars. Staggered vertical pill bars oscillating dynamically via sine waves to simulate live voice synthesis and audio playback.",
    prompt: "请帮我实现一个网页动效：波形音频动态可视化（Audio Waveform Visualizer）。使用 CSS keyframes 或 Web Audio API，让一组等间距圆角垂直条柱根据正弦函数错开高度，结合 scaleY(0.2 -> 1.0) 产生起伏有致的声波律动。",
    enPrompt: "Please help me implement a web motion: Audio Waveform Visualizer. Oscillate array of rounded bars with phase-shifted keyframes and scaleY transforms for voice audio animation.",
    demoHtml: "\n      <div class=\"preview-wave-bars\">\n        <span class=\"w-bar b1\"></span>\n        <span class=\"w-bar b2\"></span>\n        <span class=\"w-bar b3\"></span>\n        <span class=\"w-bar b4\"></span>\n        <span class=\"w-bar b5\"></span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-waveform-stage">
          <div class="waveform-card">
            <div class="waveform-badge">LIVE AUDIO SYNTHESIS</div>
            <div class="waveform-bars-deck" id="waveDeck"></div>
            <div class="waveform-meta-info">
              <div class="track-title">AI Voice Streaming</div>
              <div class="track-freq">48.0 kHz • 24-bit Lossless</div>
            </div>
            <div class="waveform-controls">
              <button class="btn-wave-action active" id="btnWavePlay">${getCurrentLang() === "en" ? "⏸ Pause" : "⏸ 暂停"}</button>
              <button class="btn-wave-action" id="btnWaveSpeed">${getCurrentLang() === "en" ? "⚡ Rhythm Speed" : "⚡ 切换律动速度"}</button>
            </div>
          </div>
        </div>
      `;
      const deck = container.querySelector("#waveDeck");
      const playBtn = container.querySelector("#btnWavePlay");
      const speedBtn = container.querySelector("#btnWaveSpeed");

      const barCount = 28;
      for (let i = 0; i < barCount; i++) {
        const bar = document.createElement("span");
        bar.className = "interactive-wave-bar";
        bar.style.animationDelay = (i * 0.06) + "s";
        deck.appendChild(bar);
      }

      let isPlaying = true;
      playBtn.addEventListener("click", () => {
        isPlaying = !isPlaying;
        playBtn.textContent = getCurrentLang() === "en" ? (isPlaying ? "⏸ Pause" : "▶ Play") : (isPlaying ? "⏸ 暂停" : "▶ 播放");
        deck.classList.toggle("paused", !isPlaying);
      });

      let fast = false;
      speedBtn.addEventListener("click", () => {
        fast = !fast;
        deck.classList.toggle("fast-tempo", fast);
      });
    }
  },
  {
    id: "text-wave-hover",
    zhName: "文字波浪反弹悬停",
    enName: "Text Wave Ripple Hover",
    category: "悬停",
    description: "标题文字以单个字符拆分，鼠标滑过时应用立方贝塞尔曲线和延迟差，字母呈波浪状平滑向上反弹。",
    enDescription: "Applies stagger transition delays to split letters, rippling characters up sequentially with elastic easing.",
    prompt: "请帮我实现一个网页动效：文字波浪反弹悬停（Text Wave Ripple Hover）。将展示标题拆分为单个字符，在鼠标 Hover 时通过 transition-delay 差值 and cubic-bezier 弹性曲线，让字母呈波浪状顺序向上反弹。",
    enPrompt: "Please help me implement a web motion: Text Wave Ripple Hover. Split text and stagger letter translation offsets on hover.",
    demoHtml: "\n      <div class=\"preview-text-wave\">\n        <span class=\"tw-char c1\">W</span>\n        <span class=\"tw-char c2\">A</span>\n        <span class=\"tw-char c3\">V</span>\n        <span class=\"tw-char c4\">E</span>\n      </div>\n    ",
    render: (container) => {
      const text = "MOTION HUB";
      const lettersHtml = text.split("").map((char, idx) => {
        if (char === " ") {
          return `<span style="width: 0.3em; display: inline-block;">&nbsp;</span>`;
        }
        return `<span class="text-wave-char" style="--char-idx: ${idx}">${char}</span>`;
      }).join("");

      container.innerHTML = `
        <div class="text-wave-full-page">
          <h1 class="text-wave-headline">${lettersHtml}</h1>
          <div style="font-size: 0.9rem; color: var(--text-secondary); pointer-events: none;">Hover over the text to trigger the wave transition</div>
        </div>
      `;
    }
  },
  {
    id: "text-scramble",
    zhName: "黑客密码解密文本",
    enName: "Text Scramble Decrypt",
    category: "反馈",
    description: "Cyberpunk 风格文本动效。加载或悬停时字符像矩阵密码一样高速随机滚动，随后逐字解密定格为真实文案。",
    enDescription: "Cyberpunk text decoding. Characters cycle through random cipher glyphs before locking into words.",
    prompt: "请帮我实现一个网页动效：黑客密码解密文本（Text Scramble Decrypt）。当触发时，通过 JavaScript 高频替换文字中的字符为随机特殊符号（如 !<>-_\\/[]{}—=+*^?#_），随后由左至右逐字收敛锁定为原始文本。",
    enPrompt: "Please help me implement a web motion: Text Scramble Decrypt. Rapidly randomize characters with cipher glyphs and progressively resolve them left-to-right to the final text.",
    demoHtml: "\n      <div class=\"preview-text-scramble\">\n        <span class=\"scramble-screen\"></span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-scramble-wrap">
          <div class="scramble-matrix-tag">STATUS: ENCRYPTED // TERMINAL_V2</div>
          <h1 class="scramble-headline" id="scrambleTarget">INITIALIZING PROTOCOL</h1>
          <div class="scramble-subtext" id="scrambleSub">SECURE_HANDSHAKE_COMPLETED</div>
          <div class="scramble-controls">
            <button class="btn-scramble-trigger" id="btnScrambleTrigger" type="button">
              <span>${getCurrentLang() === "en" ? "↻ Re-scramble Text" : "↻ 重新解密 (Scramble)"}</span>
            </button>
            <div class="scramble-presets">
              <button class="preset-chip" data-phrase="QUANTUM COMPUTATION ACTIVE">Quantum</button>
              <button class="preset-chip" data-phrase="NEURAL INTERFACE LINKED">Neural</button>
              <button class="preset-chip" data-phrase="CYBERNETIC ARCHITECTURE">Cyber</button>
            </div>
          </div>
        </div>
      `;

      const chars = "!<>-_\\/[]{}—=+*^?#________0123456789";
      let intervalId = null;

      function scrambleText(element, targetText, duration = 1200) {
        if (intervalId) clearInterval(intervalId);
        const startTime = Date.now();
        const length = targetText.length;

        intervalId = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const resolvedCount = Math.floor(progress * length);

          let output = "";
          for (let i = 0; i < length; i++) {
            if (targetText[i] === " ") {
              output += " ";
            } else if (i < resolvedCount) {
              output += targetText[i];
            } else {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
          }

          element.textContent = output;

          if (progress >= 1) {
            clearInterval(intervalId);
            element.textContent = targetText;
          }
        }, 35);
      }

      const targetEl = container.querySelector("#scrambleTarget");
      const triggerBtn = container.querySelector("#btnScrambleTrigger");
      const chips = container.querySelectorAll(".preset-chip");

      let currentPhrase = "INITIALIZING PROTOCOL";
      scrambleText(targetEl, currentPhrase);

      triggerBtn.addEventListener("click", () => {
        scrambleText(targetEl, currentPhrase);
      });

      chips.forEach(chip => {
        chip.addEventListener("click", () => {
          currentPhrase = chip.dataset.phrase;
          scrambleText(targetEl, currentPhrase);
        });
      });

      container.addEventListener("cleanup", () => {
        if (intervalId) clearInterval(intervalId);
      });
    }
  },
  {
    id: "split-text-3d-wave",
    zhName: "文字 3D 逐字波浪飞入",
    enName: "Split-Text 3D Wave",
    category: "进入",
    description: "Codrops 封面级排版。大标题文字在入场时拆分为单字，每个字符带有独立的 3D 空间翻折（rotateX）与模糊递进。",
    enDescription: "Editorial 3D typography. Splits headlines into characters that flip in from rotateX(90deg) with perspective waves.",
    prompt: "请帮我实现一个网页动效：文字 3D 逐字波浪飞入（Split-Text 3D Wave）。在包含 perspective 透视的容器中将文本拆分为 span 字符，初始状态设置 transform: rotateX(90deg) translateY(30px) filter: blur(8px)，通过错开的延时让字符如波浪般顺滑翻折归位。",
    enPrompt: "Please help me implement a web motion: Split-Text 3D Wave. Split text into spans with 3D rotateX and perspective, staggering character arrivals sequentially.",
    demoHtml: "<div class=\"preview-split-3d\"><span class=\"ch-3d\">F</span><span class=\"ch-3d\">L</span><span class=\"ch-3d\">I</span><span class=\"ch-3d\">P</span></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-split-3d-stage">
          <div class="split-3d-wrapper" id="splitStage"></div>
          <div class="split-3d-input-bar">
            <input type="text" id="splitInput" value="FUTURE AESTHETICS" maxlength="30" />
            <button id="btnSplitPlay" type="button">Animate Text</button>
          </div>
        </div>
      `;

      const stage = container.querySelector("#splitStage");
      const input = container.querySelector("#splitInput");
      const playBtn = container.querySelector("#btnSplitPlay");

      const animateText = (str) => {
        stage.innerHTML = "";
        str.split("").forEach((char, idx) => {
          const span = document.createElement("span");
          span.className = "split-char-3d";
          span.style.setProperty("--char-i", `${idx}`);
          span.innerHTML = char === " " ? "&nbsp;" : char;
          stage.appendChild(span);
        });
      };

      animateText(input.value);
      playBtn.addEventListener("click", () => animateText(input.value));
    }
  },
  {
    id: "magnetic-glow-button",
    zhName: "磁吸吸附光晕按钮",
    enName: "Magnetic Glow Button",
    category: "悬停",
    description: "Awwwards 级高级按钮。光标靠近时按钮主动朝光标方向位移吸附，内部伴随光晕扩散与触感粘滞。",
    enDescription: "Award-winning button. Button magnetically pulls toward the cursor with shifting internal ambient glow.",
    prompt: "请帮我实现一个网页动效：磁吸吸附光晕按钮（Magnetic Glow Button）。计算光标与按钮中心的距离向量，在感应半径内对按钮应用 translate 磁吸吸附偏移，并在按钮内部渲染跟随光标角度的光晕扩散图层，移出时光滑弹回原位。",
    enPrompt: "Please help me implement a web motion: Magnetic Glow Button. Apply magnetic translation toward the cursor within a threshold radius, combined with an internal moving glow layer.",
    demoHtml: "<div class=\"preview-mag-glow-btn\"><div class=\"btn-glow-ring\"></div><span>Explore</span></div>",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-mag-stage">
          <div class="mag-btn-wrapper" id="magWrapper">
            <button class="mag-hero-button" id="magBtn">
              <div class="mag-glow-ambient" id="magGlow"></div>
              <div class="mag-border-beam"></div>
              <span class="mag-sparkle-dot"></span>
              <span class="mag-btn-text">Explore Quantum Realm</span>
              <svg class="mag-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
          <div class="mag-status-telemetry">
            <span id="magDistanceText">${getCurrentLang() === "en" ? "Cursor Distance: 0px" : "光标引力距离: 0px"}</span>
            <span class="mag-stage-hint">${getCurrentLang() === "en" ? "Move cursor close to the button (220px field) to feel damped magnetic attraction and localized glow" : "移动鼠标靠近按钮（220px 物理引力场）感受弹性阻尼磁吸与局部光斑跟随"}</span>
          </div>
        </div>
      `;

      const wrapper = container.querySelector("#magWrapper");
      const btn = container.querySelector("#magBtn");
      const glow = container.querySelector("#magGlow");
      const distText = container.querySelector("#magDistanceText");

      let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
      let targetScale = 1, currentScale = 1;
      let targetGlowOpacity = 0, currentGlowOpacity = 0;
      let animFrame = null;

      const updatePhysics = () => {
        currentX += (targetX - currentX) * 0.16;
        currentY += (targetY - currentY) * 0.16;
        currentScale += (targetScale - currentScale) * 0.16;
        currentGlowOpacity += (targetGlowOpacity - currentGlowOpacity) * 0.18;

        btn.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) scale(${currentScale.toFixed(3)})`;
        glow.style.opacity = currentGlowOpacity.toFixed(2);

        animFrame = requestAnimationFrame(updatePhysics);
      };
      animFrame = requestAnimationFrame(updatePhysics);

      const handlePointerMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.hypot(dx, dy);
        const maxThreshold = 220;

        // Local coordinates for internal spotlight
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;
        btn.style.setProperty("--glow-x", `${localX}px`);
        btn.style.setProperty("--glow-y", `${localY}px`);

        if (dist < maxThreshold) {
          const power = Math.pow(1 - dist / maxThreshold, 1.4);
          targetX = dx * power * 0.42;
          targetY = dy * power * 0.42;
          targetScale = 1.06;
          targetGlowOpacity = 0.95;
          if (distText) distText.textContent = getCurrentLang() === "en" ? `Cursor Distance: ${Math.round(dist)}px (Captured)` : `光标引力距离: ${Math.round(dist)}px (磁吸捕获中)`;
        } else {
          targetX = 0;
          targetY = 0;
          targetScale = 1;
          targetGlowOpacity = 0.15;
          if (distText) distText.textContent = getCurrentLang() === "en" ? `Cursor Distance: ${Math.round(dist)}px (Inactive)` : `光标引力距离: ${Math.round(dist)}px (未激活)`;
        }
      };

      const handlePointerLeave = () => {
        targetX = 0;
        targetY = 0;
        targetScale = 1;
        targetGlowOpacity = 0.15;
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);

      btn.addEventListener("pointerdown", () => {
        targetScale = 0.95;
      });
      btn.addEventListener("pointerup", () => {
        targetScale = 1.08;
        setTimeout(() => { targetScale = 1.05; }, 150);
      });

      container.addEventListener("cleanup", () => {
        if (animFrame) cancelAnimationFrame(animFrame);
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerleave", handlePointerLeave);
      });
    }
  },
  {
    id: "infinite-marquee",
    zhName: "无缝跑马灯",
    enName: "Infinite Marquee",
    category: "滚动",
    description: "利用复制两份相同宽度的文本磁带，在 CSS 动画中按 -50% translateX 无缝循环移动，制造无休止流动的流动效果。",
    enDescription: "Duplicates content and uses CSS keyframes to translate by -50% for an endless, seamless horizontal loop.",
    prompt: "请帮我实现一个网页动效：无缝跑马灯（Infinite Marquee）。两份相同宽度的条带无缝衔接循环位移，实现无缝滚动。",
    enPrompt: "Please help me implement a web motion: Infinite Ticker. Create a horizontal marquee that loops text or logos seamlessly at a constant speed, pausing on mouse hover.",
    demoHtml: "\n      <div class=\"preview-marquee-wrapper\">\n        <div class=\"preview-marquee-track\">\n          <span>MOTION</span>\n          <span>DESIGN</span>\n          <span>MOTION</span>\n          <span>DESIGN</span>\n        </div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="marquee-full-page">
          <div class="marquee-full-page-row">
            <div class="preview-marquee-track">
              <span>VISUAL ART · DESIGN SYSTEMS · MOTION LABS · KINETIC TYPO · </span>
              <span>VISUAL ART · DESIGN SYSTEMS · MOTION LABS · KINETIC TYPO · </span>
            </div>
          </div>
          <div class="marquee-full-page-row">
            <div class="preview-marquee-track">
              <span>AWARDS GALLERY · INNOVATION STUDIO · WEB STANDARD · CRAFT · </span>
              <span>AWARDS GALLERY · INNOVATION STUDIO · WEB STANDARD · CRAFT · </span>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    id: "noise-texture",
    zhName: "动态噪点材质",
    enName: "Dynamic Noise Texture",
    category: "反馈",
    description: "利用 Canvas 逐像素渲染胶片颗粒，噪点附着于卡片表面。Hover 时颗粒高频震动，带来工业粗野的材质激活感。",
    enDescription: "Renders SVG turbulence filter background grain, shifts noise frequency on hover to simulate dynamic film grain.",
    prompt: "请帮我实现一个网页动效：动态噪点材质（Dynamic Noise Texture）。利用 Canvas 逐像素绘制随机颗粒，将噪点覆盖在卡片表面，Hover 时提高颗粒刷新频率并增强透明度，模拟胶片材质激活的粗野质感。",
    enPrompt: "Please help me implement a web motion: Dynamic Noise Texture. Render SVG feTurbulence grain overlay and shift noise frequency on hover.",
    demoHtml: "\n      <div class=\"preview-noise-box\">\n        <div class=\"noise-grain-canvas\"></div>\n        <div class=\"noise-ambient-glow\"></div>\n        <span class=\"noise-badge\">NOISE GRAIN</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="noise-texture-full-page">
          <div class="noise-card-wrapper" id="noiseCard" style="cursor:pointer; position:relative; overflow:hidden; transition: box-shadow 0.3s ease;">
            <canvas id="noiseCanvas" style="
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              border-radius: inherit;
              pointer-events: none;
              opacity: 0.15;
              transition: opacity 0.4s ease;
            "></canvas>
            <div style="position:relative; z-index: 2;">
              <h1>NOISE GRAIN</h1>
              <p>Hover to activate the grain</p>
            </div>
          </div>
        </div>
      `;

      const card   = container.querySelector("#noiseCard");
      const canvas = container.querySelector("#noiseCanvas");
      const ctx    = canvas.getContext("2d");
      let animationFrameId = null;
      let isHovered  = false;
      let frameCount = 0;
      let started    = false;

      function resizeCanvas() {
        const rect = card.getBoundingClientRect();
        // Use devicePixelRatio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width  = Math.floor(rect.width  * dpr);
        canvas.height = Math.floor(rect.height * dpr);
        return canvas.width > 0 && canvas.height > 0;
      }

      function drawGrain() {
        const w = canvas.width;
        const h = canvas.height;
        if (w === 0 || h === 0) return;

        const imageData = ctx.createImageData(w, h);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const v = (Math.random() * 255) | 0;
          data[i] = data[i + 1] = data[i + 2] = v;
          data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
      }

      function tick() {
        frameCount++;
        // Idle: every 6 frames — slow subtle grain
        // Hover: every frame — excited, rapid grain
        if (frameCount % (isHovered ? 1 : 6) === 0) {
          drawGrain();
        }
        animationFrameId = requestAnimationFrame(tick);
      }

      // Defer startup to next rAF so the card has layout dimensions
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const ok = resizeCanvas();
          if (ok) {
            drawGrain();  // show first frame immediately
            tick();
            started = true;
          }
        });
      });

      card.addEventListener("mouseenter", () => {
        isHovered = true;
        canvas.style.opacity = "0.45";
        card.style.boxShadow = "0 0 0 2px var(--accent-color), 0 20px 60px rgba(0,0,0,0.2)";
      });

      card.addEventListener("mouseleave", () => {
        isHovered = false;
        canvas.style.opacity = "0.15";
        card.style.boxShadow = "";
      });

      container.addEventListener("cleanup", () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      });
    }
  },
  {
    id: "grid-dot-proximity",
    zhName: "点阵网格近邻感应高亮",
    enName: "Grid Dot Matrix Proximity",
    category: "悬停",
    description: "极客开发控制台背景。整齐排列的微型圆点阵列，当光标靠近时，以光标为中心半径内的点阵产生缩放放大与色彩增亮，远离后平滑衰减。",
    enDescription: "Proximity dot illumination. Regular matrix of micro-dots that scale and illuminate when the cursor approaches within an activation radius.",
    prompt: "请帮我实现一个网页动效：点阵网格近邻感应高亮（Grid Dot Matrix Proximity）。在 Canvas 或 DOM Grid 中绘制均匀点阵，在 mousemove 时计算每个点到光标的距离 d，根据距离映射 scale(1 -> 2.5) 与 opacity(0.2 -> 1.0)，离开时通过 transition 平滑复位。",
    enPrompt: "Please help me implement a web motion: Grid Dot Matrix Proximity. Scale and illuminate arrayed dots inversely proportional to Euclidean distance from mouse position.",
    demoHtml: "\n      <div class=\"preview-dot-grid\">\n        <div class=\"d-cell active\"></div>\n        <div class=\"d-cell near\"></div>\n        <div class=\"d-cell\"></div>\n        <div class=\"d-cell near\"></div>\n        <div class=\"d-cell\"></div>\n        <div class=\"d-cell\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-dot-prox-stage" id="proxStage">
          <canvas class="dot-prox-canvas" id="dotCanvas"></canvas>
          <div class="dot-prox-hud">
            <h2>Matrix Proximity Field</h2>
            <p>${getCurrentLang() === "en" ? "Dot matrix within 150px euclidean distance illuminates via gaussian falloff" : "光标周围 150px 欧几里得距离内的点阵呈现高斯衰减高亮与缩放"}</p>
          </div>
        </div>
      `;
      const stage = container.querySelector("#proxStage");
      const canvas = container.querySelector("#dotCanvas");
      const ctx = canvas.getContext("2d");

      let width = canvas.width = stage.clientWidth;
      let height = canvas.height = stage.clientHeight;

      const spacing = 32;
      const rows = Math.ceil(height / spacing);
      const cols = Math.ceil(width / spacing);

      let mouseX = -1000, mouseY = -1000;
      stage.addEventListener("mousemove", (e) => {
        const rect = stage.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });
      stage.addEventListener("mouseleave", () => { mouseX = -1000; mouseY = -1000; });

      const drawGrid = () => {
        ctx.clearRect(0, 0, width, height);
        const radius = 140;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const px = c * spacing + spacing / 2;
            const py = r * spacing + spacing / 2;

            const dist = Math.hypot(px - mouseX, py - mouseY);
            let size = 2;
            let alpha = 0.2;
            let color = "var(--text-muted)";

            if (dist < radius) {
              const intensity = (1 - dist / radius);
              size = 2 + intensity * 6;
              alpha = 0.2 + intensity * 0.8;
              color = "var(--accent-color)";
            }

            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = dist < radius ? "#3b82f6" : "#64748b";
            ctx.globalAlpha = alpha;
            ctx.fill();
          }
        }
        requestAnimationFrame(drawGrid);
      };
      drawGrid();
    }
  },
  {
    id: "canvas-ripple-grid",
    zhName: "交互式粒子网格",
    enName: "Interactive Ripple Grid",
    category: "悬停",
    description: "使用 HTML5 Canvas 绘制低密度的点阵。当光标划过时，粒子受重力磁吸排开，并使用胡克定律弹力回弹复位。",
    enDescription: "Draws a dot grid on Canvas; particles shift from cursor via vectors and rebound using physical elasticity.",
    prompt: "请帮我实现一个网页动效：Canvas 交互式粒子网格（Interactive Ripple Grid）。在 Canvas 画布上绘制低密度的粒子点阵，计算鼠标位置向量，使其随鼠标滑过而排开，鼠标移开后像橡皮筋一样平滑弹性回弹复位。",
    enPrompt: "Please help me implement a web motion: Canvas Interactive Ripple Grid. Draw particle dots that shift away from the cursor and rebound.",
    demoHtml: "\n      <div class=\"preview-ripple-mesh\">\n        <span class=\"r-dot d1\"></span>\n        <span class=\"r-dot d2\"></span>\n        <span class=\"r-dot d3\"></span>\n        <span class=\"r-dot d4\"></span>\n        <span class=\"r-dot d5\"></span>\n        <span class=\"r-dot d6\"></span>\n        <span class=\"r-dot d7\"></span>\n        <span class=\"r-dot d8\"></span>\n        <span class=\"r-dot d9\"></span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="ripple-grid-full-page">
          <canvas class="ripple-grid-canvas-element"></canvas>
          <div class="ripple-grid-overlay-content">
            <h1>PARTICLE MATRIX</h1>
            <p>Move your cursor over the grid to disrupt the fields</p>
          </div>
        </div>
      `;
      
      const canvas = container.querySelector(".ripple-grid-canvas-element");
      const ctx = canvas.getContext("2d");
      
      let animationFrameId = null;
      let particles = [];
      const spacing = 32;
      const mouse = { x: -1000, y: -1000, active: false };
      
      const springK = 0.08;
      const damping = 0.86;
      const influenceRadius = 140;
      const pushStrength = 40;
      
      function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        initGrid(rect.width, rect.height);
      }
      
      function initGrid(width, height) {
        particles = [];
        const cols = Math.floor(width / spacing) + 2;
        const rows = Math.floor(height / spacing) + 2;
        const offsetX = (width % spacing) / 2 - spacing/2;
        const offsetY = (height % spacing) / 2 - spacing/2;
        
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = offsetX + i * spacing;
            const y = offsetY + j * spacing;
            particles.push({
              x: x,
              y: y,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0
            });
          }
        }
      }
      
      function onMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      }
      
      function onMouseLeave() {
        mouse.x = -1000;
        mouse.y = -1000;
        mouse.active = false;
      }
      
      function tick() {
        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);
        
        const isDark = document.documentElement.getAttribute("data-mode") === "dark";
        const theme = document.documentElement.getAttribute("data-theme") || "slate";
        
        let particleColor = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(0, 0, 0, 0.2)";
        let activeColor = isDark ? "rgba(99, 102, 241, 0.9)" : "rgba(79, 70, 229, 0.9)";
        
        if (theme === "emerald") {
          activeColor = isDark ? "rgba(52, 211, 153, 0.9)" : "rgba(5, 150, 105, 0.9)";
        } else if (theme === "sand") {
          activeColor = isDark ? "rgba(251, 191, 36, 0.9)" : "rgba(217, 119, 6, 0.9)";
        }
        
        particles.forEach(p => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (mouse.active && dist < influenceRadius) {
            const force = (influenceRadius - dist) / influenceRadius;
            const angle = Math.atan2(dy, dx);
            const pushX = Math.cos(angle) * force * pushStrength;
            const pushY = Math.sin(angle) * force * pushStrength;
            
            p.vx += pushX;
            p.vy += pushY;
          }
          
          const springForceX = -springK * (p.x - p.ox);
          const springForceY = -springK * (p.y - p.oy);
          
          p.vx += springForceX;
          p.vy += springForceY;
          
          p.vx *= damping;
          p.vy *= damping;
          
          p.x += p.vx;
          p.y += p.vy;
          
          const dispX = p.x - p.ox;
          const dispY = p.y - p.oy;
          const displacement = Math.sqrt(dispX * dispX + dispY * dispY);
          const dispRatio = Math.min(displacement / 20, 1.0);
          
          ctx.beginPath();
          const radius = 2 + dispRatio * 2.5;
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          
          if (dispRatio > 0.05) {
            ctx.fillStyle = activeColor;
          } else {
            ctx.fillStyle = particleColor;
          }
          ctx.fill();
        });
        
        animationFrameId = requestAnimationFrame(tick);
      }
      
      window.addEventListener("resize", resizeCanvas);
      canvas.addEventListener("mousemove", onMouseMove);
      canvas.addEventListener("mouseleave", onMouseLeave);
      
      resizeCanvas();
      tick();
      
      container.addEventListener("cleanup", () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        window.removeEventListener("resize", resizeCanvas);
      });
    }
  },
  {
    id: "svg-path-morphing",
    zhName: "路径形变果冻按钮",
    enName: "SVG Path Jelly Morphing",
    category: "反馈",
    description: "点击时 SVG 的矢量 path 进行贝塞尔曲线点插值变形，从基础按钮变成扁平气泡或果冻，伴随弹性震颤。",
    enDescription: "Interpolates SVG path coordinate vectors to morph borders into jelly shapes with bouncy spring damping.",
    prompt: "请帮我实现一个网页动效：SVG 路径形变果冻按钮（SVG Path Morphing Button）。当点击或 Hover 按钮时，SVG 背景路径的矢量坐标进行贝塞尔点平滑插值过渡，使其形状产生果冻拉伸并伴随回弹震颤反馈。",
    enPrompt: "Please help me implement a web motion: SVG Path Morphing Button. Interpolate SVG path coordinates for gel shape morphs.",
    demoHtml: "\n      <div class=\"preview-jelly-morph\">\n        <div class=\"jelly-blob\">\n          <span>Morph</span>\n        </div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="path-morphing-full-page">
          <button class="morphing-jelly-button">
            <svg class="morphing-jelly-svg" viewBox="0 0 240 80" preserveAspectRatio="none">
              <path class="jelly-path" d="M 40,15 Q 120,15 200,15 Q 225,15 225,40 Q 225,65 200,65 Q 120,65 40,65 Q 15,65 15,40 Q 15,15 40,15 Z" />
            </svg>
            <span class="morphing-btn-text">ELASTIC JELLY</span>
          </button>
          <div style="font-size: 0.9rem; color: var(--text-secondary); pointer-events: none;">Click or Hover to feel the spring tension</div>
        </div>
      `;

      const btn = container.querySelector(".morphing-jelly-button");
      const path = btn.querySelector(".jelly-path");

      const states = {
        topY: { current: 15, target: 15, vel: 0 },
        bottomY: { current: 65, target: 65, vel: 0 },
        leftX: { current: 15, target: 15, vel: 0 },
        rightX: { current: 225, target: 225, vel: 0 }
      };

      const springK = 0.18;
      const damping = 0.72;
      let animationFrameId = null;

      function updateSprings() {
        for (const key in states) {
          const s = states[key];
          const force = -springK * (s.current - s.target);
          s.vel += force;
          s.vel *= damping;
          s.current += s.vel;
        }

        const d = `M 40,15 Q 120,${states.topY.current.toFixed(2)} 200,15 Q ${states.rightX.current.toFixed(2)},15 ${states.rightX.current.toFixed(2)},40 Q ${states.rightX.current.toFixed(2)},65 200,65 Q 120,${states.bottomY.current.toFixed(2)} 40,65 Q ${states.leftX.current.toFixed(2)},65 ${states.leftX.current.toFixed(2)},40 Q ${states.leftX.current.toFixed(2)},15 40,15 Z`;
        path.setAttribute("d", d);

        animationFrameId = requestAnimationFrame(updateSprings);
      }

      btn.addEventListener("mouseenter", () => {
        states.topY.target = 5;
        states.bottomY.target = 75;
        states.leftX.target = 5;
        states.rightX.target = 235;
      });

      btn.addEventListener("mouseleave", () => {
        states.topY.target = 15;
        states.bottomY.target = 65;
        states.leftX.target = 15;
        states.rightX.target = 225;
      });

      btn.addEventListener("mousedown", () => {
        states.topY.target = 32;
        states.bottomY.target = 48;
        states.leftX.target = 35;
        states.rightX.target = 205;
      });

      btn.addEventListener("mouseup", () => {
        states.topY.target = 5;
        states.bottomY.target = 75;
        states.leftX.target = 5;
        states.rightX.target = 235;
      });

      updateSprings();

      container.addEventListener("cleanup", () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      });
    }
  },
  {
    id: "organic-morphing-blob",
    zhName: "流体变形有机泡泡",
    enName: "Organic Morphing Blob",
    category: "反馈",
    description: "单细胞流体生命律动。CSS border-radius 八角独立比例连续缓动形变，赋予形状类似水滴、有机泡泡的生命律动感。",
    enDescription: "Organic morphing shape. Continuous multi-axis border-radius keyframing that creates amoeba-like, elastic fluid blobs.",
    prompt: "请帮我实现一个网页动效：流体变形有机泡泡（Organic Morphing Blob）。利用 CSS @keyframes 循环平滑过渡 border-radius 的 8 个控制百分比（如 60% 40% 30% 70% / 60% 30% 70% 40%），配合轻微 rotate 自旋，打造生动的有机水滴/气泡形态。",
    enPrompt: "Please help me implement a web motion: Organic Morphing Blob. Animate multi-value border-radius continuously with subtle rotation for organic fluid blob effects.",
    demoHtml: "\n      <div class=\"preview-morph-blob\">\n        <div class=\"blob-fluid\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-blob-stage">
          <div class="blob-fluid-chassis" id="fluidBlob">
            <span class="blob-core-label">FLUID</span>
          </div>
          <div class="blob-controls-bar">
            <button class="btn-blob-color active" data-grad="sunset">Sunset Glow</button>
            <button class="btn-blob-color" data-grad="ocean">Ocean Wave</button>
            <button class="btn-blob-color" data-grad="aurora">Emerald Aurora</button>
          </div>
          <p class="blob-hint">${getCurrentLang() === "en" ? "Click bubble to trigger physical squash-and-stretch fluid waves" : "点击泡泡产生物理挤压弹性波动"}</p>
        </div>
      `;
      const blob = container.querySelector("#fluidBlob");
      const colorBtns = container.querySelectorAll(".btn-blob-color");

      colorBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          colorBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          blob.setAttribute("data-gradient", btn.dataset.grad);
        });
      });

      blob.addEventListener("click", () => {
        blob.classList.add("squishing");
        setTimeout(() => blob.classList.remove("squishing"), 400);
      });
    }
  },
  {
    id: "twinkling-starfield",
    zhName: "闪烁微光星空点阵",
    enName: "Twinkling Starfield Particles",
    category: "进入",
    description: "深色卡片魔法高光。随机分布的微型星芒粒子以不同周期呼吸闪烁与自旋，光标移动时产生极轻微的 2.5D 视差推移。",
    enDescription: "Subtle cosmic sparkle. Multi-sized twinkling star particles breathing and pulsing at varied frequencies with subtle cursor parallax.",
    prompt: "请帮我实现一个网页动效：闪烁微光星空点阵（Twinkling Starfield Particles）。在容器内生成随机坐标的微型星芒（✦ / ✧），各自分配随机动画延时与缩放呼吸周期，模拟夜空繁星闪烁的静谧高级氛围。",
    enPrompt: "Please help me implement a web motion: Twinkling Starfield Particles. Scatter glowing multi-frequency star glyphs with staggered keyframe pulsing and parallax.",
    demoHtml: "\n      <div class=\"preview-starfield\">\n        <span class=\"star-pt s1\">✦</span>\n        <span class=\"star-pt s2\">✧</span>\n        <span class=\"star-pt s3\">✦</span>\n        <span class=\"star-pt s4\">✧</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-starfield-stage" id="starfieldStage">
          <canvas class="starfield-canvas" id="starCanvas"></canvas>
          <div class="starfield-content-card">
            <span class="star-badge">✦ INFINITE CONSTELLATIONS</span>
            <h2>Pure White Stellar Matrix</h2>
            <p>${getCurrentLang() === "en" ? "180+ pure white micro-starlight array with 2.5D depth parallax and tranquil breathing" : "180+ 纯白微光星芒阵列，随光标位移产生微小 2.5D 深度视差与静谧呼吸"}</p>
          </div>
        </div>
      `;
      const canvas = container.querySelector("#starCanvas");
      const stage = container.querySelector("#starfieldStage");
      const ctx = canvas.getContext("2d");

      let width = canvas.width = stage.clientWidth;
      let height = canvas.height = stage.clientHeight;

      const stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 0.6,
          alpha: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.025 + 0.008,
          isDiamond: Math.random() > 0.85
        });
      }

      let mouseX = width / 2;
      let mouseY = height / 2;

      stage.addEventListener("mousemove", (e) => {
        const rect = stage.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });

      window.addEventListener("resize", () => {
        if (!stage.isConnected) return;
        width = canvas.width = stage.clientWidth;
        height = canvas.height = stage.clientHeight;
      });

      let animId;
      const render = () => {
        if (!stage.isConnected) return;
        ctx.clearRect(0, 0, width, height);
        const offsetX = (mouseX - width / 2) * 0.035;
        const offsetY = (mouseY - height / 2) * 0.035;

        stars.forEach(s => {
          s.alpha += s.speed;
          const currentAlpha = Math.abs(Math.sin(s.alpha)) * 0.85 + 0.15;
          const sx = s.x + offsetX * (s.size * 0.6);
          const sy = s.y + offsetY * (s.size * 0.6);

          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = currentAlpha;

          if (s.isDiamond && s.size > 1.8) {
            // Draw pure white 4-pointed micro diamond sparkle
            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(s.alpha * 0.2);
            ctx.beginPath();
            const arm = s.size * 2.2;
            ctx.moveTo(0, -arm);
            ctx.lineTo(s.size * 0.35, 0);
            ctx.lineTo(0, arm);
            ctx.lineTo(-s.size * 0.35, 0);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(-arm, 0);
            ctx.lineTo(0, s.size * 0.35);
            ctx.lineTo(arm, 0);
            ctx.lineTo(0, -s.size * 0.35);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        animId = requestAnimationFrame(render);
      };
      render();
    }
  },
  {
    id: "aurora-background",
    zhName: "极光渐变弥散流光",
    enName: "Aurora Glow Background",
    category: "进入",
    description: "北极真境极光流体光晕。多层高斯模糊与多色翡翠/青冰/柠金径向渐变网格，通过连续流体位移与有机形变，营造极光般的梦幻背景。",
    enDescription: "Boreal ethereal flow. Layered emerald, cyan and lime radial gradients orbiting smoothly to create ambient aurora illumination.",
    prompt: "请帮我实现一个网页动效：极光渐变弥散流光（Aurora Glow Background）。在深黑夜空背景上放置多个带有 filter: blur(60px) 的翡翠绿/青冰/柠金径向渐变色块，运用 @keyframes 结合 transform: translate() rotate() 与有机形变呼吸律动，创造高级柔和的极光背景动效。",
    enPrompt: "Please help me implement a web motion: Aurora Glow Background. Combine heavy gaussian blur layers with emerald, cyan, and lime gradients animating along continuous parametric curves.",
    demoHtml: "\n      <div class=\"preview-aurora-glow\">\n        <div class=\"aurora-blob a1\"></div>\n        <div class=\"aurora-blob a2\"></div>\n        <div class=\"aurora-blob a3\"></div>\n        <div class=\"aurora-blob a4\"></div>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-aurora-stage" data-aurora-palette="boreal">
          <div class="aurora-mesh">
            <div class="aurora-light-orb orb-1"></div>
            <div class="aurora-light-orb orb-2"></div>
            <div class="aurora-light-orb orb-3"></div>
            <div class="aurora-light-orb orb-4"></div>
            <div class="aurora-light-orb orb-5"></div>
          </div>
          <div class="aurora-hero-content">
            <div class="aurora-pill-tag">✦ NORTHERN BOREALIS AMBIENCE</div>
            <h1 class="aurora-title">Aurora Borealis</h1>
            <p class="aurora-sub">${getCurrentLang() === "en" ? "Emerald & arctic glacial fluid flow. Move cursor to trigger gravitational wave perturbations" : "翡翠绿与极地青冰的高速流体弥散，移动鼠标感受流光幕帘的交互式引力扰动"}</p>
            <div class="aurora-palette-ctrl">
              <button class="btn-aurora-theme active" data-theme="boreal">✦ Boreal Emerald</button>
              <button class="btn-aurora-theme" data-theme="solar">★ Solar Amber</button>
              <button class="btn-aurora-theme" data-theme="arctic">❄ Arctic Glacial</button>
            </div>
          </div>
        </div>
      `;
      const stage = container.querySelector(".sandbox-aurora-stage");
      const orbs = container.querySelectorAll(".aurora-light-orb");
      const themeBtns = container.querySelectorAll(".btn-aurora-theme");

      stage.addEventListener("pointermove", (e) => {
        const rect = stage.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        orbs.forEach((orb, i) => {
          const factor = (i + 1) * 35;
          orb.style.setProperty("--mouse-x", `${(nx * factor).toFixed(1)}px`);
          orb.style.setProperty("--mouse-y", `${(ny * factor).toFixed(1)}px`);
        });
      });

      themeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          themeBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          stage.setAttribute("data-aurora-palette", btn.dataset.theme);
        });
      });
    }
  },
  {
    id: "meteors-background",
    zhName: "流星夜空划过特效",
    enName: "Meteors Shower Background",
    category: "进入",
    description: "深邃奢华夜空天文台动效。超细渐变尾迹光束以真实流星轨道高速划破夜空，头部伴随耀眼钻石高光，点缀微光星海。",
    enDescription: "Luxury observatory night sky. High-speed tapered needle meteors shoot across dark starfields with diamond head glows.",
    prompt: "请帮我实现一个网页动效：流星夜空划过特效（Meteors Shower Background）。通过纯 CSS 生成倾斜 215deg 的针尖流星光束，头部添加白炽发光光斑，主体使用极致平滑的 linear-gradient 尾迹渐变，配合微光星空背景创造奢华夜空动效。",
    enPrompt: "Please help me implement a web motion: Meteors Shower Background. Render angled needle-sharp meteor streaks with diamond head points and fading trails shooting across cosmic starfields.",
    demoHtml: "\n      <div class=\"preview-meteors-box\">\n        <span class=\"m-beam m1\"></span>\n        <span class=\"m-beam m2\"></span>\n        <span class=\"m-beam m3\"></span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-meteors-stage">
          <canvas class="meteors-starfield-canvas" id="meteorsStarfield"></canvas>
          <div class="meteors-sky-layer" id="meteorsSky"></div>
          <div class="meteors-center-card">
            <div class="meteor-badge">OBSERVATORY TELEMETRY</div>
            <div class="meteor-coords">RA 14h 29m 42s // DEC -62° 40′ 46″</div>
            <h2>Night Sky Celestial Flow</h2>
            <p>${getCurrentLang() === "en" ? "Physical celestial trajectory simulation. Pure incandescent meteors with fading ionized trails." : "真实天文流星轨道模拟，纯净白炽星芒与渐隐离子尾迹滑破天际。"}</p>
            <div class="meteor-hud-stats">
              <div class="hud-item"><span class="hud-val" id="hudMeteorCount">28</span><span class="hud-lbl">ACTIVE METEORS</span></div>
              <div class="hud-item"><span class="hud-val">72 km/s</span><span class="hud-lbl">ENTRY VELOCITY</span></div>
            </div>
            <button class="btn-meteor-burst" id="btnMeteorBurst">${getCurrentLang() === "en" ? "🌠 Meteor Burst" : "🌠 唤醒流星雨风暴"}</button>
          </div>
        </div>
      `;

      const canvas = container.querySelector("#meteorsStarfield");
      const ctx = canvas.getContext("2d");
      const sky = container.querySelector("#meteorsSky");
      const burstBtn = container.querySelector("#btnMeteorBurst");
      const countDisplay = container.querySelector("#hudMeteorCount");
      let starAnimId = null;

      // Draw starry night
      const stars = [];
      const resizeStarfield = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        stars.length = 0;
        for (let i = 0; i < 180; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.2 + 0.3,
            alpha: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 0.02 + 0.005,
            phase: Math.random() * Math.PI * 2
          });
        }
      };
      resizeStarfield();
      window.addEventListener("resize", resizeStarfield);

      let t = 0;
      const renderStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t += 0.03;
        stars.forEach(s => {
          const a = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed * 20 + s.phase));
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 232, 240, ${a})`;
          ctx.shadowBlur = s.radius > 1 ? 4 : 0;
          ctx.shadowColor = "#ffffff";
          ctx.fill();
        });
        starAnimId = requestAnimationFrame(renderStars);
      };
      starAnimId = requestAnimationFrame(renderStars);

      const createMeteors = (count) => {
        sky.innerHTML = "";
        if (countDisplay) countDisplay.textContent = count;
        for (let i = 0; i < count; i++) {
          const m = document.createElement("span");
          m.className = "full-meteor-ray";
          m.style.top = (Math.random() * 70 - 10) + "%";
          m.style.left = (Math.random() * 90 + 10) + "%";
          m.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
          m.style.animationDuration = (Math.random() * 1.2 + 1.0).toFixed(2) + "s";
          m.style.setProperty("--trail-len", `${Math.floor(Math.random() * 120 + 160)}px`);
          sky.appendChild(m);
        }
      };

      createMeteors(28);
      burstBtn.addEventListener("click", () => {
        createMeteors(75);
        setTimeout(() => createMeteors(28), 6000);
      });

      container.addEventListener("cleanup", () => {
        if (starAnimId) cancelAnimationFrame(starAnimId);
        window.removeEventListener("resize", resizeStarfield);
      });
    }
  },
  {
    id: "custom-cursor",
    zhName: "鼠标跟随光标",
    enName: "Custom Cursor",
    category: "悬停",
    description: "隐藏了系统自带箭头。页面上有两个 DOM 圆形：一个点在鼠标上，一个大圆在后面，通过摩擦力平滑追赶鼠标。",
    enDescription: "Hides native pointer and runs dual circle elements with lag-behind physics, shrinking and expanding on hover targets.",
    prompt: "请帮我实现一个网页动效：鼠标跟随光标（Custom Cursor）。隐藏原生光标，用双圆点惯性拖随动画模拟现代极简指针。",
    enPrompt: "Please help me implement a web motion: Custom Cursor. Replace the default pointer with custom circles that track the cursor with drag-inertia and adapt size on hover.",
    demoHtml: "\n      <div class=\"preview-cursor-container\">\n        <div class=\"preview-cursor-dot\"></div>\n        <div class=\"preview-cursor-circle\"></div>\n      </div>\n    ",
    render: (container) => {
      // Render the scene into container
      container.innerHTML = `
        <div class="fullscreen-cursor-canvas">
          <h1>${getCurrentLang() === "en" ? "Move Cursor to Experience Pointer" : "滑动鼠标体验跟随指针"}</h1>
          <div class="cursor-hover-box" id="cTarget">${getCurrentLang() === "en" ? "Hover here to scale and attach the pointer" : "鼠标移入此区域，指针发生缩放与磁吸"}</div>
        </div>
      `;

      let mouseX = window.innerWidth  / 2;
      let mouseY = window.innerHeight / 2;
      let ringX  = mouseX;
      let ringY  = mouseY;

      // KEY FIX: append dot & ring to document.body, NOT container.
      // Any ancestor with CSS transform breaks position:fixed, making it
      // relative to that ancestor instead of the viewport.
      const dot = document.createElement("div");
      dot.className = "preview-cursor-dot";
      Object.assign(dot.style, {
        position: "fixed", pointerEvents: "none", zIndex: "9999",
        left: `${mouseX}px`, top: `${mouseY}px`,
        width: "8px", height: "8px",
        backgroundColor: "var(--accent-color, #3b82f6)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.2s ease, opacity 0.2s ease"
      });

      const ring = document.createElement("div");
      ring.className = "preview-cursor-circle";
      Object.assign(ring.style, {
        position: "fixed", pointerEvents: "none", zIndex: "9998",
        left: `${ringX}px`, top: `${ringY}px`,
        width: "32px", height: "32px",
        border: "1.5px solid var(--accent-color, #3b82f6)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.2s ease, border-color 0.2s ease"
      });

      document.body.appendChild(dot);
      document.body.appendChild(ring);
      document.body.classList.add("custom-cursor-body");

      const target = container.querySelector("#cTarget");

      const onMouseMove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top  = `${mouseY}px`;
      };

      let animId;
      const updatePhysics = () => {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.left = `${ringX}px`;
        ring.style.top  = `${ringY}px`;
        animId = requestAnimationFrame(updatePhysics);
      };

      const onEnter = () => {
        target.classList.add("hovered");
        ring.style.transform = "translate(-50%, -50%) scale(2.2)";
        dot.style.transform  = "translate(-50%, -50%) scale(0)";
      };
      const onLeave = () => {
        target.classList.remove("hovered");
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        dot.style.transform  = "translate(-50%, -50%) scale(1)";
      };

      // Hide custom cursor when hovering the control panel
      const cPanel = document.getElementById("controlPanel");
      const onPanelEnter = () => { ring.style.opacity = "0"; dot.style.opacity = "0"; };
      const onPanelLeave = () => { ring.style.opacity = "1"; dot.style.opacity = "1"; };
      if (cPanel) {
        cPanel.addEventListener("mouseenter", onPanelEnter);
        cPanel.addEventListener("mouseleave", onPanelLeave);
      }

      window.addEventListener("mousemove", onMouseMove);
      target.addEventListener("mouseenter", onEnter);
      target.addEventListener("mouseleave", onLeave);
      animId = requestAnimationFrame(updatePhysics);

      container.addEventListener("cleanup", () => {
        document.body.classList.remove("custom-cursor-body");
        window.removeEventListener("mousemove", onMouseMove);
        if (cPanel) {
          cPanel.removeEventListener("mouseenter", onPanelEnter);
          cPanel.removeEventListener("mouseleave", onPanelLeave);
        }
        cancelAnimationFrame(animId);
        // Remove elements we injected directly into body
        dot.remove();
        ring.remove();
      }, { once: true });
    }
  },
  {
    id: "confetti-explosion",
    zhName: "物理重力礼花爆炸",
    enName: "Confetti Explosion Burst",
    category: "反馈",
    description: "成就与支付成功必备。点击瞬间从中心喷射出五彩缤纷的纸屑颗粒，并在重力、阻力与旋转模拟下优雅下落散开。",
    enDescription: "Celebratory confetti blast. Spawns colorful particle fragments on click governed by gravity and air drag physics.",
    prompt: "请帮我实现一个网页动效：物理重力礼花爆炸（Confetti Explosion Burst）。使用 HTML5 Canvas 在按钮点击瞬间生成 100+ 随机颜色、形状、初始速度与角度的粒子，通过物理公式模拟重力加速度、风阻与 3D 自转，形成真实的礼花漫天飞散效果。",
    enPrompt: "Please help me implement a web motion: Confetti Explosion. Spawn Canvas confetti particles on click with physics velocity, gravity, and 3D rotation.",
    demoHtml: "\n      <div class=\"preview-confetti-btn\">\n        <div class=\"confetti-spark s1\"></div>\n        <div class=\"confetti-spark s2\"></div>\n        <div class=\"confetti-spark s3\"></div>\n        <span>🎉 Celebrate</span>\n      </div>\n    ",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-confetti-stage">
          <canvas class="confetti-canvas" id="confettiCanvas"></canvas>
          <div class="confetti-center-ui">
            <h1 class="confetti-title">ACHIEVEMENT UNLOCKED</h1>
            <p class="confetti-sub">${getCurrentLang() === "en" ? "Click button below to trigger fullscreen gravity confetti physics burst" : "点击下方按钮触发全屏重力粒子物理礼花"}</p>
            <button class="btn-confetti-hero" id="btnConfettiHero">
              <span class="hero-confetti-icon">🎉</span>
              <span>Launch Celebration!</span>
            </button>
          </div>
        </div>
      `;

      const canvas = container.querySelector("#confettiCanvas");
      const ctx = canvas.getContext("2d");
      let particles = [];
      let animId = null;

      const resizeCanvas = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#38bdf8", "#fbbf24"];

      class Particle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 16 + 6;
          this.vx = Math.cos(angle) * speed;
          this.vy = Math.sin(angle) * speed - 6;
          this.gravity = 0.35;
          this.drag = 0.95;
          this.rotation = Math.random() * 360;
          this.rotSpeed = (Math.random() - 0.5) * 12;
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.size = Math.random() * 8 + 5;
          this.life = 1;
          this.decay = Math.random() * 0.012 + 0.008;
        }

        update() {
          this.vx *= this.drag;
          this.vy = (this.vy + this.gravity) * this.drag;
          this.x += this.vx;
          this.y += this.vy;
          this.rotation += this.rotSpeed;
          this.life -= this.decay;
        }

        draw(ctx) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate((this.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(this.life, 0);
          ctx.fillStyle = this.color;
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
          ctx.restore();
        }
      }

      const explode = (originX, originY) => {
        for (let i = 0; i < 140; i++) {
          particles.push(new Particle(originX, originY));
        }
      };

      const loop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = particles.filter(p => p.life > 0);
        particles.forEach(p => {
          p.update();
          p.draw(ctx);
        });
        animId = requestAnimationFrame(loop);
      };
      loop();

      const btn = container.querySelector("#btnConfettiHero");
      btn.addEventListener("click", (e) => {
        const rect = btn.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        explode(rect.left - cRect.left + rect.width / 2, rect.top - cRect.top + rect.height / 2);
      });

      container.addEventListener("cleanup", () => {
        if (animId) cancelAnimationFrame(animId);
        window.removeEventListener("resize", resizeCanvas);
      });
    }
  }
];
