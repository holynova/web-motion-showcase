/* ==========================================================================
   Motion Database (Aligned with script.js)
   ========================================================================== */
const motions = [
  {
    id: "fade-in-up",
    zhName: "淡入上移",
    enName: "Fade In Up",
    category: "进入",
    description: "当页面加载时，标题和按钮由透明度 0 且偏下 20px 处，平滑滑入到正常位置，是构建网页开屏仪式感的经典基础方案。",
    enDescription: "Fades in and slides up by 20px with staggered delays, creating a refined opening ceremony for web elements.",
    prompt: "请帮我实现一个网页动效：淡入上移（Fade In Up）。当首屏加载时，文字标题和行动按钮以微小的延迟差，平滑地上移并显现。",
    enPrompt: "Please help me implement a web motion: Fade In Up. When the page loads or elements scroll into the viewport, elements smoothly fade in from opacity 0 to 1 and slide up slightly from below to their original position.",
    render: (container) => {
      container.innerHTML = `
        <div class="fade-up-full-page">
          <span class="hero-eyebrow" style="animation: keyframe-fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;">STUDIO REVELATION</span>
          <h1>${currentLang === "en" ? "Creating Sensory Web Narratives" : "创造感官的网页叙事"}</h1>
          <p>${currentLang === "en" ? "This is a high-altitude splash template built using Fade In Up. Elements float up one by one with a breathing rhythm." : "这是一个使用 Fade In Up 实现的高空开屏模板，元素逐个浮起，呼吸感拉满。"}</p>
          <button class="btn btn-primary">${currentLang === "en" ? "Begin the Journey" : "开始探索之旅"}</button>
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
    render: (container) => {
      container.innerHTML = `
        <div class="scroll-reveal-full-page">
          <h1>${currentLang === "en" ? "Scroll Down to Experience" : "向下滚动鼠标体验"}</h1>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${currentLang === "en" ? "01. Visual Focus" : "01. 视觉聚焦"}</h3>
            <p>${currentLang === "en" ? "Reveal content only when it enters the viewport to reduce initial rendering load and improve reading flow." : "只在内容来到视野中时进行展现，减少首屏渲染压力，提升阅读流动感。"}</p>
          </div>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${currentLang === "en" ? "02. Logical Stagger" : "02. 逻辑分层"}</h3>
            <p>${currentLang === "en" ? "Scroll Reveal supports staggered delay offsets, making the hierarchical order clear at a glance." : "滚动显现支持精细的错峰延迟差，让层级顺序一目了然。"}</p>
          </div>
          <div class="scroll-reveal-card" data-reveal>
            <h3>${currentLang === "en" ? "03. Graceful Degrade" : "03. 优雅降级"}</h3>
            <p>${currentLang === "en" ? "If the system prefers reduced motion, cards will render statically by default to prevent visual fatigue." : "如果用户系统设置了减少动态效果，该卡片将会默认直接渲染，免除滚动晃眼。"}</p>
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
    id: "line-reveal",
    zhName: "文字逐行显现",
    enName: "Line Reveal",
    category: "进入",
    description: "利用大字体和溢出截断（overflow: hidden），让每行标题自面罩下像升降机一样升起，带来强烈的策展气场。",
    enDescription: "Splits a headline into lines using overflow hidden, sliding each line up like an elevator for a clean, editorial look.",
    prompt: "请帮我实现一个网页动效：文字逐行显现（Line Reveal）。利用容器溢出裁切，使大标题的文本行自遮罩下方平滑移出。",
    enPrompt: "Please help me implement a web motion: Line Reveal. Split a large headline by lines or characters, making each line slide up and fade in from behind a mask with a staggered delay.",
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
    id: "blur-reveal",
    zhName: "模糊进入",
    enName: "Blur In / Soft Reveal",
    category: "进入",
    description: "用渐变的滤镜模糊（filter: blur）替代粗糙的硬切淡入。背景色块在 1.8 秒内平滑清晰，充满画展艺术的高级感。",
    enDescription: "Atmospheric entrance. Transitioning from hazy blur to clear focus, perfect for hero images or slogans.",
    prompt: "请帮我实现一个网页动效：模糊进入（Blur In）。让元素在展现时，伴随透明度从 0 渐显到 1，同时滤镜从高斯模糊过渡到完全清晰。",
    enPrompt: "Please help me implement a web motion: Blur Reveal. Transition elements smoothly from a Gaussian blur and low opacity to full clarity as they load or scroll into view.",
    render: (container) => {
      container.innerHTML = `
        <div class="blur-in-full-page">
          <div class="blur-in-canvas"></div>
          <div class="blur-in-text">${currentLang === "en" ? "An atmospheric canvas of soft reveal has unfolded." : "朦胧渐显的氛围感画卷已平铺展开"}</div>
        </div>
      `;
    }
  },
  {
    id: "reduced-motion",
    zhName: "减少动态适配",
    enName: "Reduced Motion Support",
    category: "进入",
    description: "当检测到系统级减少动态偏好时，CSS 会强制停止所有演示旋转，以静态展现，确保眩晕症患者的可访问性。",
    enDescription: "Stops all intensive rotations or parallax scroll movements when system-level reduced motion is preferred, ensuring accessibility.",
    prompt: "请帮我实现网页无障碍支持：减少动态适配（Reduced Motion Support）。在 CSS 中利用媒体查询在 reduce 模式下关闭动画。",
    enPrompt: "Please help me implement accessibility support: Reduced Motion. Use the CSS media query @media (prefers-reduced-motion: reduce) to disable or minimize scaling, scrolling, and spinning animations.",
    render: (container) => {
      container.innerHTML = `
        <div class="reduced-motion-full-page">
          <button class="reduced-motion-btn" id="motionBtn">${currentLang === "en" ? "Rotate Component" : "旋转组件"}</button>
          <p style="margin-top: 15px; color: var(--text-secondary); text-align: center;">
            ${currentLang === "en" ? "If you have system-level 'Reduce Motion' enabled, the button remains stationary.<br>Test this by toggling settings in Accessibility -> Motion." : "若您系统开启了“减少动态效果”，按钮将保持静止。<br>可在系统设置（辅助功能 -> 显示）中开关此状态测试。"}
          </p>
        </div>
      `;
    }
  },
  {
    id: "parallax-scrolling",
    zhName: "视差滚动",
    enName: "Parallax Scrolling",
    category: "滚动",
    description: "利用纵向滚动的位移差。当我们滚动时，星空背景、渐变圆环和最上层标题文字按不同位移系数位移，产生深邃的三维空间感。",
    enDescription: "Offsets the movement of background stars, midground circles, and foreground text relative to scroll speed for immersive depth.",
    prompt: "请帮我实现一个网页动效：视差滚动（Parallax Scrolling）。不同深度的元素随着滚动条以不等的系数位移，产生三维空间纵深。",
    enPrompt: "Please help me implement a web motion: Parallax Scrolling. Make background and midground layers move at different scroll speeds relative to the foreground text to create a sense of physical depth.",
    render: (container) => {
      container.innerHTML = `
        <div class="parallax-scroll-full-page">
          <div class="parallax-layer parallax-bg" id="pBg"></div>
          <div class="parallax-layer parallax-stars" id="pStars"></div>
          <div class="parallax-layer parallax-mid" id="pMid">
            <div class="parallax-mid-circle"></div>
          </div>
          <div class="parallax-layer parallax-fg" id="pFg">
            <h1>${currentLang === "en" ? "Parallax Scroll Narrative" : "视差滚动叙事层"}<br><span style="font-size: 1.5rem; font-weight: 500; color: #a78bfa;">${currentLang === "en" ? "Scroll down to preview staggered depth offsets" : "向下滚动预览不同层次的位移差"}</span></h1>
          </div>
        </div>
      `;
      
      const pStars = container.querySelector("#pStars");
      const pMid = container.querySelector("#pMid");
      const pFg = container.querySelector("#pFg");
      
      const onScroll = () => {
        const y = window.scrollY;
        if (pStars) pStars.style.transform = `translateY(${-y * 0.25}px)`;
        if (pMid) pMid.style.transform = `translateY(${-y * 0.5}px)`;
        if (pFg) pFg.style.transform = `translateY(${-y * 0.8}px)`;
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
    }
  },
  {
    id: "sticky-scroll",
    zhName: "粘性滚动叙事",
    enName: "Sticky Scroll Storytelling",
    category: "滚动",
    description: "左侧视觉展示块为 `position: sticky` 锁死，右侧长文字继续流动。在文字流过不同节点时，左侧颜色产生响应演变。",
    enDescription: "Locks the left visual box in place via position sticky while the right narrative text scrolls, changing the visual state dynamically.",
    prompt: "请帮我实现一个网页动效：粘性滚动叙事（Sticky Scroll）。左右双栏，滚动时左栏图表常驻，右栏文字滚动时更新左栏图表状态。",
    enPrompt: "Please help me implement a web motion: Sticky Scroll Storytelling. A two-column layout where the visual illustration locks in place while the text scrolls, updating the visual state at key scroll points.",
    render: (container) => {
      container.innerHTML = `
        <div class="sticky-scroll-full-page">
          <div class="sticky-left-panel">
            <div class="sticky-visual-box" id="visualBox"></div>
          </div>
          <div class="sticky-right-panel">
            <div class="sticky-text-section" data-step="0">
              <h2>${currentLang === "en" ? "Chapter 1. Pure Essence" : "第一章. 极致纯净"}</h2>
              <p>${currentLang === "en" ? "At the beginning of the scroll, the visual block displays its classic original blue, indicating a solid foundation." : "在滚动的起始段落，核心视觉方块呈现最初的经典蓝色，提示稳固的第一步。"}</p>
            </div>
            <div class="sticky-text-section" data-step="1">
              <h2>${currentLang === "en" ? "Chapter 2. Vibrant Collision" : "第二章. 热烈碰撞"}</h2>
              <p>${currentLang === "en" ? "As you scroll down here, the visual core transitions into a vivid magenta combined with a slight rotation." : "随着页面滚动至此，视觉核心平滑过渡为鲜活的紫红色，伴随轻微的角度自转。"}</p>
            </div>
            <div class="sticky-text-section" data-step="2">
              <h2>${currentLang === "en" ? "Chapter 3. Tech Rebirth" : "第三章. 科技新生"}</h2>
              <p>${currentLang === "en" ? "Nearing the end, the block transitions back to a refreshing emerald green with subtle scaling for features overview." : "步入尾声，模块重归清凉的翡翠绿，并微幅缩放，完成分段式的产品特征讲解。"}</p>
            </div>
          </div>
        </div>
      `;
      
      const visualBox = container.querySelector("#visualBox");
      const sections = container.querySelectorAll(".sticky-text-section");
      
      const colors = ["#2563eb", "#ec4899", "#10b981"];
      const transforms = ["rotate(0deg) scale(1)", "rotate(45deg) scale(1.1)", "rotate(90deg) scale(1.0)"];
      
      const onScroll = () => {
        sections.forEach((sec, index) => {
          const rect = sec.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            visualBox.style.backgroundColor = colors[index];
            visualBox.style.transform = transforms[index];
          }
        });
      };
      
      window.addEventListener("scroll", onScroll, { passive: true });
      container.addEventListener("cleanup", () => {
        window.removeEventListener("scroll", onScroll);
      }, { once: true });
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
    render: (container) => {
      container.innerHTML = `
        <div class="scroll-progress-line-top">
          <div class="scroll-progress-line-top-fill" id="topProgressLine"></div>
        </div>
        <div class="scroll-progress-article">
          <h1>${currentLang === "en" ? "Long-form Reading & Progress Tracking" : "长文阅读体验与进度追踪"}</h1>
          <p>${currentLang === "en" ? "This is paragraph one. Motion should not be mere decoration, but a guide. The thin top bar projects page height details subtly to alleviate reading anxiety." : "这是第一段内容。动效不应该是装饰物，而是交互过程的导航者。顶部的细长进度条以一种轻盈且不打扰的形式，将页面的长度数据直接投影给用户，缓解长文阅读焦虑。"}</p>
          <p>${currentLang === "en" ? "This is paragraph two. High-saturation accents should be used with restraint in web design. The progress bar offers a perfect visual output for such highlight colors." : "这是第二段内容。我们在网页设计中应当克制地使用强调色，通常一个页面至多锁定一个高饱和度色调。此时进度条的渐进正是该色调的绝佳宣泄出口。"}</p>
          <p>${currentLang === "en" ? "This is paragraph three. Premium accessibility supports reduced motion preferences. The progress bar will still scale normally as static layout indicators." : "这是第三段内容。优秀的无障碍设计需要适配“减少动态”需求，进度条在纵向运动被禁用的系统中，依然以百分比宽度的形式正常静止伸展，不受干扰。"}</p>
          <p>${currentLang === "en" ? "This is paragraph four. You are near the end of the text, and the line has almost stretched fully across the window. Scroll up to watch it contract." : "这是第四段内容。您已接近文章尾声，此时进度线已在窗口顶部几乎延伸完成。返回顶部即可重新预览递减变化。"}</p>
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
    id: "horizontal-gallery",
    zhName: "横向滚动作品带",
    enName: "Horizontal Scroll Gallery",
    category: "滚动",
    description: "我们拦截滚轮，在用户下拉页面时，横向卡片轨道沿 translateX 平滑移动，模拟滑动相册效果。",
    enDescription: "Captures mouse scroll to slide a track horizontally via translateX, perfect for showcasing portfolio galleries.",
    prompt: "请帮我实现一个网页动效：横向滚动作品带（Horizontal Scroll Gallery）。捕获纵向滚动动作，转化为网格容器的水平位移偏移量。",
    enPrompt: "Please help me implement a web motion: Horizontal Scroll Gallery. Intercept vertical scrolling inside a section to translate the grid container horizontally instead of vertically.",
    render: (container) => {
      container.innerHTML = `
        <div class="horizontal-scroll-full-page">
          <div class="horizontal-scroll-pin-wrapper">
            <div class="horizontal-scroll-track" id="hTrack">
              <div class="horizontal-scroll-item"><h3>01. 艺术策展</h3><span>Art Gallery Curation & Layout</span></div>
              <div class="horizontal-scroll-item"><h3>02. 蒸汽浪潮</h3><span>Vaporwave Pioneer & Retro-futurism</span></div>
              <div class="horizontal-scroll-item"><h3>03. 瑞士版式</h3><span>Swiss Grid Curation & Caster Fonts</span></div>
              <div class="horizontal-scroll-item"><h3>04. 新粗野主义</h3><span>Neo-Brutalisim Bold Borders & Contrast</span></div>
              <div class="horizontal-scroll-item"><h3>05. 玻璃拟态</h3><span>Aero Glassmorphic Acrylic layers</span></div>
              <div class="horizontal-scroll-item"><h3>06. 极简叙事</h3><span>Restrained Narrative & Micro-motions</span></div>
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
    id: "scroll-shadow",
    zhName: "头部阴影渐变",
    enName: "Scroll Shadow",
    category: "滚动",
    description: "模拟真实的物理悬浮高度差。顶栏在页面贴顶时背景呈透明无影，一旦偏离顶部便渐显阴影以隔离底层流动的内容。",
    enDescription: "Fades in a shadow under the sticky header once scroll Y exceeds 10px, separating it from the content sliding underneath.",
    prompt: "请帮我实现一个网页动效：头部阴影渐变（Scroll Shadow）。滚动偏离顶部时为固定 Header 添加阴影底边框，贴顶时去除。",
    enPrompt: "Please help me implement a web motion: Scroll Shadow. As the user scrolls away from the very top, add a soft shadow to the sticky navbar to indicate elevation.",
    render: (container) => {
      container.innerHTML = `
        <header class="scroll-shadow-navbar" id="sNavbar">
          <div class="scroll-shadow-logo">PROTOLABS</div>
          <nav class="scroll-shadow-nav-links">
            <span>${currentLang === "en" ? "Works" : "设计作品"}</span>
            <span>${currentLang === "en" ? "About Us" : "关于我们"}</span>
          </nav>
        </header>
        <div class="scroll-shadow-dummy-content">
          <h1>${currentLang === "en" ? "Scroll Down to Preview Shadow" : "下滑预览导航阴影"}</h1>
          <p>${currentLang === "en" ? "Scroll the page to watch the navbar change. It blends at the top, but develops a bottom shadow when scrolled, indicating elevation." : "滚动本页预览导航栏的变化。贴顶时导航呈自然融入态，滚动一定距离后底部产生阴影边框，示意层级浮空悬浮。"}</p>
          <p>${currentLang === "en" ? "This subtle shadow prevents border lines from dividing content aggressively, establishing a natural foreground depth during motion." : "这种效果可以避免生硬的图层边界线抢夺读者的视线，在滑动中自然建立起前后纵深对比。"}</p>
          <p>${currentLang === "en" ? "Keep scrolling... The header maintains clear division above the text, preventing text overlapping glitches." : "继续向下滑动... 导航栏与底下的文字依然保持完美的层级区分，避免了背景透光造成的字迹干扰。"}</p>
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
    id: "infinite-marquee",
    zhName: "无缝跑马灯",
    enName: "Infinite Marquee",
    category: "滚动",
    description: "利用复制两份相同宽度的文本磁带，在 CSS 动画中按 -50% translateX 无缝循环移动，制造无休止流动的流动效果。",
    enDescription: "Duplicates content and uses CSS keyframes to translate by -50% for an endless, seamless horizontal loop.",
    prompt: "请帮我实现一个网页动效：无缝跑马灯（Infinite Marquee）。两份相同宽度的条带无缝衔接循环位移，实现无缝滚动。",
    enPrompt: "Please help me implement a web motion: Infinite Ticker. Create a horizontal marquee that loops text or logos seamlessly at a constant speed, pausing on mouse hover.",
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
    id: "hover-lift",
    zhName: "悬停上浮",
    enName: "Hover Lift",
    category: "悬停",
    description: "点击本页卡片 hover 体验。元素平滑向上移动 8px，同时阴影底色扩散。极具触感的轻量提拉反馈设计。",
    enDescription: "Smoothly offsets elements vertically by 8px and softens shadow on hover, following standard premium web patterns.",
    prompt: "请帮我实现一个网页动效：悬停上浮（Hover Lift）。hover 时元素向上浮动且阴影增强，移开时平滑落地还原。",
    enPrompt: "Please help me implement a web motion: Hover Lift. Move buttons or cards upward by a few pixels on hover, with smooth transition timings.",
    render: (container) => {
      container.innerHTML = `
        <div class="hover-lift-full-page">
          <div class="hover-lift-card"><h3>${currentLang === "en" ? "Poster Curation" : "精选海报设计"}</h3><p>${currentLang === "en" ? "Card lifts up to signal clickability" : "卡片浮动提示可点击行为"}</p></div>
          <div class="hover-lift-card"><h3>${currentLang === "en" ? "Interactive Code" : "互动程序工程"}</h3><p>${currentLang === "en" ? "Smooth transitions with zero flickering" : "平滑响应，杜绝闪烁感"}</p></div>
          <div class="hover-lift-card"><h3>${currentLang === "en" ? "Brand Identity" : "品牌调性确立"}</h3><p>${currentLang === "en" ? "Subtle offsets in line with Apple guides" : "符合 Apple 交互规范的位移范围"}</p></div>
          <div class="hover-lift-card"><h3>${currentLang === "en" ? "Editorial Grid" : "策展排版研究"}</h3><p>${currentLang === "en" ? "A perfect mix of negative space and depth" : "呼吸空间和物理悬空完美结合"}</p></div>
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
    render: (container) => {
      container.innerHTML = `
        <div class="hover-shadow-full-page">
          <div class="hover-shadow-card"><h3>${currentLang === "en" ? "Basic Plan" : "基础定价"}</h3><p>${currentLang === "en" ? "Hover to experience shadow softening" : "hover 体验阴影软化"}</p></div>
          <div class="hover-shadow-card"><h3>${currentLang === "en" ? "Pro Mode" : "专业模式"}</h3><p>${currentLang === "en" ? "Soft, premium shadow projection" : "投影淡雅柔顺"}</p></div>
          <div class="hover-shadow-card"><h3>${currentLang === "en" ? "Enterprise" : "企业定制"}</h3><p>${currentLang === "en" ? "Subtle scale combined with shadow rise" : "伴随轻微缩放响应"}</p></div>
        </div>
      `;
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
    render: (container) => {
      // Render the scene into container
      container.innerHTML = `
        <div class="fullscreen-cursor-canvas">
          <h1>${currentLang === "en" ? "Move Cursor to Experience Pointer" : "滑动鼠标体验跟随指针"}</h1>
          <div class="cursor-hover-box" id="cTarget">${currentLang === "en" ? "Hover here to scale and attach the pointer" : "鼠标移入此区域，指针发生缩放与磁吸"}</div>
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
    id: "tilt-card",
    zhName: "卡片 3D 倾斜",
    enName: "3D Tilt Card",
    category: "悬停",
    description: "将卡片放入透视矩阵中（perspective）。计算鼠标在卡片上的相对坐标，平滑倾斜卡片并使里面的文字向上浮起。",
    enDescription: "Calculates hover coordinates to rotate the card in 3D space, shifting background image and text layer for depth.",
    prompt: "请帮我实现一个网页动效：卡片 3D 倾斜（3D Tilt Card）。当鼠标在卡片移动时，卡片产生带透视的倾斜跟随效果。",
    enPrompt: "Please help me implement a web motion: 3D Tilt Card. Rotate the card in 3D perspective based on the mouse position relative to the card's center.",
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
                <img src="./tilt_card_bg.png" alt="cyberpunk cityscape"
                  style="
                    width: 110%; height: 110%;
                    object-fit: cover;
                    display: block;
                    margin: -5%;
                    border-radius: inherit;
                    transition: transform 0.08s linear;
                  " id="tImg" />
                <!-- Dark gradient overlay so text stays readable -->
                <div style="
                  position: absolute; inset: 0;
                  background: linear-gradient(160deg, rgba(5,5,20,0.55) 0%, rgba(10,5,40,0.72) 100%);
                  border-radius: inherit;
                "></div>
              </div>
              <!-- Text layer — floats on top with translateZ -->
              <div style="position: relative; z-index: 2; transform: translateZ(30px); transition: transform 0.08s linear;" id="tText">
                <h2 style="color:#fff; text-shadow: 0 0 24px rgba(180,120,255,0.7);">CYBERPUNK</h2>
                <p style="color: rgba(200,200,255,0.85);">${currentLang === "en" ? "Explore 3D tilt perspective.<br>Text and image float on separate depth layers." : "探索极速倾斜的三维世界。<br>文字与卡片层高不一，具有视差深度。"}</p>
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
          <p style="margin-top:24px; color: var(--text-secondary); font-size: 0.85rem; pointer-events:none;">Hover over the card to feel the 3D depth</p>
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
    id: "magnetic-effect",
    zhName: "磁吸反馈",
    enName: "Magnetic Button",
    category: "反馈",
    description: "好玩的重力跟随交互。计算鼠标距离大圆形按钮的中心距离，若小于 80 像素，按钮会被吸过去，越靠近吸力越大。",
    enDescription: "Tracks cursor proximity; if within 80px, pulls the button towards the cursor, returning it with transition physics.",
    prompt: "请帮我实现一个网页动效：磁吸按钮（Magnetic Button）。鼠标靠近按钮边缘时按钮被吸附过去，鼠标移走时自动弹回中心。",
    enPrompt: "Please help me implement a web motion: Magnetic Button. Pull the button towards the cursor when the mouse gets close, spring-snapping it back on leave.",
    render: (container) => {
      container.innerHTML = `
        <div class="magnetic-button-full-page">
          <h2>${currentLang === "en" ? "Move cursor close to the button below" : "将光标平缓移近下方按钮"}</h2>
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
    description: "点击本页卡片。元素加载了模拟物理弹簧超调回弹的缓动曲线，使其点击展开具有灵动的回弹质感。",
    enDescription: "Uses cubic-bezier curves simulating physical spring models to bounce elements organically during click or entrance.",
    prompt: "请帮我实现一个网页动效：弹性缓动（Spring Motion）。模拟弹簧物理效果，让卡片在触发时带有点弹性超重回摆动效。",
    enPrompt: "Please help me implement a web motion: Spring Motion. Apply spring physics curves to animations to simulate bouncy, organic elasticity rather than linear easing.",
    render: (container) => {
      container.innerHTML = `
        <div class="spring-motion-full-page">
          <div class="spring-demo-card" id="sCard">${currentLang === "en" ? "Click card to trigger spring overshoot bouncy effect" : "点击本卡片触发物理弹性弹跳"}</div>
          <button class="btn btn-primary" id="sTrigger" style="width: auto; padding: 0 30px;">${currentLang === "en" ? "Click to Trigger" : "点击触发"}</button>
        </div>
      `;
      
      const card = container.querySelector("#sCard");
      const trigger = container.querySelector("#sTrigger");
      
      const triggerPop = () => {
        card.classList.remove("active");
        void card.offsetWidth; // reflow reset animation
        card.classList.add("active");
      };
      
      card.addEventListener("click", triggerPop);
      trigger.addEventListener("click", triggerPop);
    }
  },
  {
    id: "menu-morphing",
    zhName: "汉堡菜单变形",
    enName: "Menu Morphing",
    category: "反馈",
    description: "三道杠按钮在激活时旋转并融合。中间线淡化成 0 透明度，上下两条线向内靠拢并分别旋转 45 度的 X 状，十分优雅。",
    enDescription: "Rotates and translates top/bottom lines while fading middle line to transparent on click, morphing into an 'X'.",
    prompt: "请帮我实现一个网页动效：汉堡菜单变形（Menu Morphing）。三根线条构成的汉堡图标平滑变化转换为 X 形关闭按钮。",
    enPrompt: "Please help me implement a web motion: Menu Morphing. Transform a three-line hamburger icon into a close X icon using CSS transforms on button click.",
    render: (container) => {
      container.innerHTML = `
        <div class="menu-morphing-full-page">
          <div class="morphing-hamburger-fixed" id="hamburger">
            <div class="preview-morphing-btn" id="burgerIcon">
              <div class="preview-morphing-line line-1"></div>
              <div class="preview-morphing-line line-2"></div>
              <div class="preview-morphing-line line-3"></div>
            </div>
          </div>
          <div class="menu-overlay-panel" id="menuPanel">
            <a href="#">${currentLang === "en" ? "Home" : "首页"}</a>
            <a href="#">${currentLang === "en" ? "Creative Design" : "创意设计"}</a>
            <a href="#">${currentLang === "en" ? "Engineering" : "技术工程"}</a>
          </div>
        </div>
      `;
      
      const hamburger = container.querySelector("#hamburger");
      const burgerIcon = container.querySelector("#burgerIcon");
      const menuPanel = container.querySelector("#menuPanel");
      
      hamburger.addEventListener("click", () => {
        menuPanel.classList.toggle("open");
        const isOpen = menuPanel.classList.contains("open");
        
        // Manual override CSS keyframes toggle for instant interactivity
        if (isOpen) {
          burgerIcon.classList.add("active");
          burgerIcon.querySelector(".line-1").style.transform = "translateY(8.5px) rotate(45deg)";
          burgerIcon.querySelector(".line-2").style.opacity = "0";
          burgerIcon.querySelector(".line-3").style.transform = "translateY(-8.5px) rotate(-45deg)";
        } else {
          burgerIcon.classList.remove("active");
          burgerIcon.querySelector(".line-1").style.transform = "";
          burgerIcon.querySelector(".line-2").style.opacity = "1";
          burgerIcon.querySelector(".line-3").style.transform = "";
        }
      });
    }
  },
  {
    id: "theme-switch",
    zhName: "暗色模式切换",
    enName: "Smooth Theme Switch",
    category: "反馈",
    description: "点击屏幕中的切换按钮。我们记录按钮的物理中心，并在切换时生成一个圆形裁剪圆不断膨胀扩散以扫过整个屏幕。",
    enDescription: "Captures button center Y/X coordinates and expands a circular clip-path full screen to transition between theme modes.",
    prompt: "请帮我实现一个网页动效：暗色模式平滑切换（Smooth Theme Switch）。以按钮为圆心产生圆形涟漪裁剪过渡配色。",
    enPrompt: "Please help me implement a web motion: Smooth Theme Switch. Expand a circle clip-path from the button center to transit the dark/light background.",
    render: (container) => {
      container.innerHTML = `
        <div class="theme-switch-full-page">
          <h1>${currentLang === "en" ? "Smooth Theme Switch Reveal" : "暗色模式平滑扩散切换"}</h1>
          <button class="theme-switch-trigger-btn" id="tsBtn">${currentLang === "en" ? "Turn Off Light" : "点我落幕"}</button>
        </div>
        <div class="theme-switch-curtain-circle" id="tsCurtain"></div>
      `;
      
      const tsBtn = container.querySelector("#tsBtn");
      const tsCurtain = container.querySelector("#tsCurtain");
      
      let themeMode = "light";
      tsBtn.addEventListener("click", (e) => {
        const rect = tsBtn.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Set the curtain color to the color of the target theme
        if (themeMode === "light") {
          tsCurtain.style.backgroundColor = "#090d16"; // Dark mode bg
        } else {
          tsCurtain.style.backgroundColor = "#f8fafc"; // Light mode bg
        }
        
        // Set dynamic clip path starting circle round toggle coordinates
        tsCurtain.style.clipPath = `circle(0% at ${x}px ${y}px)`;
        tsCurtain.classList.add("active");
        tsCurtain.style.clipPath = `circle(150% at ${x}px ${y}px)`;
        
        setTimeout(() => {
          themeMode = themeMode === "light" ? "dark" : "light";
          document.body.setAttribute("data-theme", themeMode);
          if (currentLang === "en") {
            tsBtn.textContent = themeMode === "light" ? "Turn Off Light" : "Turn On Light";
          } else {
            tsBtn.textContent = themeMode === "light" ? "点我落幕" : "迎来黎明";
          }
          
          setTimeout(() => {
            tsCurtain.classList.remove("active");
            tsCurtain.style.clipPath = ""; // Reset inline clipPath so the CSS default circle(0%...) takes effect again
          }, 300);
        }, 850);
      });
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
    render: (container) => {
      container.innerHTML = `
        <div class="button-ripple-full-page">
          <h2>${currentLang === "en" ? "Click different buttons below to trigger ripples" : "点击下方不同的按钮测试水波纹位置"}</h2>
          <button class="ripple-target-btn">${currentLang === "en" ? "Primary Action Ripple" : "点击大水波纹按钮"}</button>
          <button class="ripple-target-btn" style="background-color: var(--accent-hover);">${currentLang === "en" ? "Secondary Action Button" : "辅助行动按钮"}</button>
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
    id: "color-transition",
    zhName: "颜色过渡",
    enName: "Color Transition",
    category: "反馈",
    description: "点击本页展示板。鼠标滑过时，背景色、边框色以极快的 cubic-bezier(0.4, 0, 0.2, 1) 平滑切换，消减闪烁抖动感。",
    enDescription: "Applies millisecond transitions to color changes on interactive elements, smoothing focus and hover states.",
    prompt: "请帮我实现一个网页动效：颜色过渡（Color Transition）。让链接、按钮的背景或文本颜色改变时具备平滑缓冲。",
    enPrompt: "Please help me implement a web motion: Color Transition. Smooth out transitions for hover and active state colors rather than instant cuts.",
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
    id: "count-up",
    zhName: "数字滚动",
    enName: "Count Up Animation",
    category: "反馈",
    description: "数据仪表盘载入时，三组数字基于 requestAnimationFrame 平滑自 0 渐进累加到目标终值，赋予指标视觉以生命力。",
    enDescription: "Runs an active counting loop from 0 to target value on element view, completing with a smooth deceleration curve.",
    prompt: "请帮我实现一个网页动效：数字滚动（Count Up Animation）。在特定区域展现数据指标时，数字自 0 平滑滚动增加到目标数值。",
    enPrompt: "Please help me implement a web motion: Count Up Animation. Animate count-up metrics from zero to the target number using easing curves on load.",
    render: (container) => {
      container.innerHTML = `
        <div class="count-up-full-page">
          <div class="count-up-dashboard-card">
            <h3>核心提效比</h3>
            <div class="count-up-dashboard-number" data-count="94">%</div>
          </div>
          <div class="count-up-dashboard-card">
            <h3>服务客户数</h3>
            <div class="count-up-dashboard-number" data-count="85">k</div>
          </div>
          <div class="count-up-dashboard-card">
            <h3>满意率指标</h3>
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
    id: "image-zoom",
    zhName: "图片轻微放大",
    enName: "Image Zoom on Hover",
    category: "图片",
    description: "卡片 hover 体验。容器开启 overflow: hidden。hover 时内部图片缩放平滑过渡至 1.12，模拟自然呼吸呼吸反馈。",
    enDescription: "Scales the inner image by 5-10% on hover while retaining rounded borders, giving clean photographic zoom feedback.",
    prompt: "请帮我实现一个网页动效：图片轻微放大（Image Zoom on Hover）。卡片 hover 时，内部图片微幅放大且容器圆角不变超隐藏。",
    enPrompt: "Please help me implement a web motion: Image Zoom on Hover. Scale the image inside an overflow-hidden card container on hover.",
    render: (container) => {
      container.innerHTML = `
        <div class="image-zoom-full-page">
          <div class="image-zoom-container"><div class="image-zoom-photo" style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="image-zoom-container"><div class="image-zoom-photo" style="background-image: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80');"></div></div>
        </div>
      `;
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
    render: (container) => {
      container.innerHTML = `
        <div class="color-shift-full-page">
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80');"></div></div>
          <div class="color-shift-container"><div class="color-shift-photo" style="background-image: url('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80');"></div></div>
        </div>
      `;
    }
  },
  {
    id: "mask-reveal",
    zhName: "图片遮罩揭示",
    enName: "Mask Reveal",
    category: "图片",
    description: "开屏的艺术。加载时利用 clip-path: circle 渐次开启面罩，徐徐展现底层的渐变色彩画布，具备极强的展会感。",
    enDescription: "Uses clip-path shapes to slide image curtains open on viewport entrance, delivering premium gallery aesthetics.",
    prompt: "请帮我实现一个网页动效：图片遮罩揭示（Mask Reveal）。图片在加载或进入视口时，以对角裁剪或圆形扩张遮罩滑显。",
    enPrompt: "Please help me implement a web motion: Mask Reveal. Reveal an image using animated clip-path borders when it enters the viewport.",
    render: (container) => {
      container.innerHTML = `
        <div class="mask-reveal-full-page">
          <div class="mask-reveal-visual" style="background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80'); background-size: cover; background-position: center;"></div>
          <h1>IMAGE MASK REVEAL STAGE</h1>
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
    render: (container) => {
      container.innerHTML = `
        <div class="hover-preview-full-page">
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80">01. 摩登都市画卷</div>
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80">02. 蒸汽先锋海报</div>
          <div class="hover-preview-text-link" data-img="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80">03. 赛博极客终端</div>
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
    id: "underline-reveal",
    zhName: "下划线展开",
    enName: "Underline Reveal",
    category: "布局",
    description: "极简菜单设计。当鼠标移至列表项时，底部的 4px 线条利用 `transform: scaleX(0)` 平滑扩展至 `1` 展现。",
    enDescription: "Scales a navigation item's underline from 0 to 1 scaleX on hover, creating elegant visual links.",
    prompt: "请帮我实现一个网页动效：导航下划线展开（Underline Reveal）。导航项 hover 时，下划线以水平伸展（scaleX 自 0 至 1）的方式轻盈呈现。",
    enPrompt: "Please help me implement a web motion: Underline Reveal. Animate navigation link underlines using scaleX from 0 to 1 on hover.",
    render: (container) => {
      container.innerHTML = `
        <div class="underline-slide-full-page">
          <div class="underline-slide-link">品牌词条</div>
          <div class="underline-slide-link">创意设计</div>
          <div class="underline-slide-link">联合实验室</div>
        </div>
      `;
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
    render: (container) => {
      container.innerHTML = `
        <div class="layout-trans-full-page">
          <div class="layout-trans-header-row">
            <h2>作品筛选重排</h2>
            <div class="filter-tags" id="ltFilters">
              <button class="filter-btn active" data-lt="all">全部</button>
              <button class="filter-btn" data-lt="ux">用户体验</button>
              <button class="filter-btn" data-lt="dev">技术实现</button>
            </div>
          </div>
          <div class="layout-trans-grid">
            <div class="layout-trans-grid-card" data-cat="ux"><h3>交互细节 A</h3><p>用户体验设计</p></div>
            <div class="layout-trans-grid-card" data-cat="dev"><h3>底层引擎 B</h3><p>技术开发实现</p></div>
            <div class="layout-trans-grid-card" data-cat="ux"><h3>视觉调性 C</h3><p>品牌与体验设计</p></div>
            <div class="layout-trans-grid-card" data-cat="dev"><h3>动画性能 D</h3><p>渲染加速工程</p></div>
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
    id: "page-transition",
    zhName: "页面转场",
    enName: "Page Transition",
    category: "布局",
    description: "模拟完整的页面跳转过渡。点击“切换页面”时，全屏单色幕布自上滑下盖住视口，平滑更新页面底色与文字后再收起。",
    enDescription: "Displays full-screen sliding curtains or fading masks during routing switches, maintaining visual continuity.",
    prompt: "请帮我实现一个网页动效：页面转场（Page Transition）。在更新页面内容时，全屏呈现淡入淡出或侧滑幕布平移遮挡转场。",
    enPrompt: "Please help me implement a web motion: Page Transition. Transition views using full-screen sliding curtain covers on page reload.",
    render: (container) => {
      container.innerHTML = `
        <div class="page-trans-full-page">
          <h1 id="ptTitle">页面 A：设计策展中心</h1>
          <button class="btn btn-primary" id="ptBtn" style="width: auto; padding: 0 30px;">前往页面 B</button>
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
            ptTitle.textContent = "页面 B：开发控制中心";
            ptBtn.textContent = "返回页面 A";
            state = "B";
          } else {
            ptTitle.textContent = "页面 A：设计策展中心";
            ptBtn.textContent = "前往页面 B";
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
    id: "accordion-expand",
    zhName: "手风琴折叠",
    enName: "Accordion Smooth Expand",
    category: "布局",
    description: "常见 FAQ 交互。点击标题时，为内容框计算精确高度值并利用 transition 平滑展平，而非突兀地伸缩卡顿。",
    enDescription: "Expands vertical details panels with height transitions, sliding other page contents down organically.",
    prompt: "请帮我实现一个网页动效：手风琴平滑折叠（Accordion Smooth Expand）。点击菜单展开时，高度平滑折叠扩展，下方内容平移位退。",
    enPrompt: "Please help me implement a web motion: Accordion Smooth Expand. Animate accordion details panels from max-height 0 to full content height.",
    render: (container) => {
      container.innerHTML = `
        <div class="accordion-full-page">
          <div class="accordion-item-full">
            <button class="accordion-btn-full"><span>手风琴是如何实现高度平滑过渡的？</span><span class="accordion-icon-arrow">▼</span></button>
            <div class="accordion-content-full"><p>我们利用 CSS Transition 配合 JS 动态高度（或 CSS max-height）来改变卡片的物理大小，这样下方的其他卡片就会收到弹性驱动平移，避免硬切。</p></div>
          </div>
          <div class="accordion-item-full">
            <button class="accordion-btn-full"><span>如何在此页面测试该手风琴？</span><span class="accordion-icon-arrow">▼</span></button>
            <div class="accordion-content-full"><p>点击卡片标题的任何位置，面板即会触发顺滑的高度改变展开。</p></div>
          </div>
        </div>
      `;
      
      const items = container.querySelectorAll(".accordion-item-full");
      items.forEach(item => {
        const btn = item.querySelector(".accordion-btn-full");
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
          items.forEach(i => i.classList.remove("open")); // collapse siblings
          if (!isOpen) item.classList.add("open");
        });
      });
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
    id: "canvas-ripple-grid",
    zhName: "交互式粒子网格",
    enName: "Interactive Ripple Grid",
    category: "悬停",
    description: "使用 HTML5 Canvas 绘制低密度的点阵。当光标划过时，粒子受重力磁吸排开，并使用胡克定律弹力回弹复位。",
    enDescription: "Draws a dot grid on Canvas; particles shift from cursor via vectors and rebound using physical elasticity.",
    prompt: "请帮我实现一个网页动效：Canvas 交互式粒子网格（Interactive Ripple Grid）。在 Canvas 画布上绘制低密度的粒子点阵，计算鼠标位置向量，使其随鼠标滑过而排开，鼠标移开后像橡皮筋一样平滑弹性回弹复位。",
    enPrompt: "Please help me implement a web motion: Canvas Interactive Ripple Grid. Draw particle dots that shift away from the cursor and rebound.",
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
    id: "text-wave-hover",
    zhName: "文字波浪反弹悬停",
    enName: "Text Wave Ripple Hover",
    category: "悬停",
    description: "标题文字以单个字符拆分，鼠标滑过时应用立方贝塞尔曲线和延迟差，字母呈波浪状平滑向上反弹。",
    enDescription: "Applies stagger transition delays to split letters, rippling characters up sequentially with elastic easing.",
    prompt: "请帮我实现一个网页动效：文字波浪反弹悬停（Text Wave Ripple Hover）。将展示标题拆分为单个字符，在鼠标 Hover 时通过 transition-delay 差值 and cubic-bezier 弹性曲线，让字母呈波浪状顺序向上反弹。",
    enPrompt: "Please help me implement a web motion: Text Wave Ripple Hover. Split text and stagger letter translation offsets on hover.",
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

  // --- 16 New Trending Motions (35-50) ---
  {
    id: "spotlight-card",
    zhName: "光标聚光灯卡片",
    enName: "Spotlight Border Card",
    category: "悬停",
    description: "Linear / Vercel 标志性卡片。鼠标移动时，径向渐变聚光灯随光标在卡片群中漫游，照亮边框高光与背景纹理。",
    enDescription: "Linear/Vercel style card. Radial spotlight follows the cursor across cards, illuminating border highlights.",
    prompt: "请帮我实现一个网页动效：光标聚光灯卡片（Spotlight Border Card）。监听鼠标在卡片容器上的移动坐标，通过 CSS 变量 --mouse-x 和 --mouse-y 动态更新伪元素上的 radial-gradient 径向渐变，使柔和的聚光灯光晕跟随光标照亮卡片内部与边框。",
    enPrompt: "Please help me implement a web motion: Spotlight Border Card. Track mouse coordinates on cards and update CSS variables --mouse-x and --mouse-y to render a glowing radial gradient spotlight.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-spotlight-container">
          <div class="sandbox-spotlight-header">
            <h2 class="sandbox-hero-title">INTELLIGENT WORKSPACE</h2>
            <p class="sandbox-hero-sub">移动鼠标体验边框跟随聚光灯高光效果</p>
          </div>
          <div class="sandbox-spotlight-grid" id="spotlightGrid">
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">⚡</div>
                <h3>Real-time Engine</h3>
                <p>毫秒级状态同步，基于 CRDT 算法构建的多人协作流体引擎。</p>
                <div class="spotlight-card-tag">Ultra Fast</div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">🛡️</div>
                <h3>End-to-End Vault</h3>
                <p>零知识证明加密存储，保障企业级数据隐私与资产安全。</p>
                <div class="spotlight-card-tag">Zero Trust</div>
              </div>
            </div>
            <div class="spotlight-card-item">
              <div class="spotlight-card-border"></div>
              <div class="spotlight-card-inner">
                <div class="spotlight-card-icon">✨</div>
                <h3>Autonomous AI</h3>
                <p>多智能体自主协作中枢，自动化编排代码分析与重构工作流。</p>
                <div class="spotlight-card-tag">Neural Mesh</div>
              </div>
            </div>
          </div>
        </div>
      `;

      const grid = container.querySelector("#spotlightGrid");
      const cards = container.querySelectorAll(".spotlight-card-item");

      const handleMouseMove = (e) => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("cleanup", () => {
        window.removeEventListener("mousemove", handleMouseMove);
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
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-beam-container">
          <div class="sandbox-beam-card" id="beamCard">
            <div class="sandbox-beam-ray"></div>
            <div class="sandbox-beam-content">
              <div class="sandbox-beam-badge">PRO EDITION</div>
              <h2>Autonomous Neural Core</h2>
              <p>采用下一代超线程异步计算流，全天候监听并自动优化应用吞吐量与渲染帧率。</p>
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
    id: "text-scramble",
    zhName: "黑客密码解密文本",
    enName: "Text Scramble Decrypt",
    category: "反馈",
    description: "Cyberpunk 风格文本动效。加载或悬停时字符像矩阵密码一样高速随机滚动，随后逐字解密定格为真实文案。",
    enDescription: "Cyberpunk text decoding. Characters cycle through random cipher glyphs before locking into words.",
    prompt: "请帮我实现一个网页动效：黑客密码解密文本（Text Scramble Decrypt）。当触发时，通过 JavaScript 高频替换文字中的字符为随机特殊符号（如 !<>-_\\/[]{}—=+*^?#_），随后由左至右逐字收敛锁定为原始文本。",
    enPrompt: "Please help me implement a web motion: Text Scramble Decrypt. Rapidly randomize characters with cipher glyphs and progressively resolve them left-to-right to the final text.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-scramble-wrap">
          <div class="scramble-matrix-tag">STATUS: ENCRYPTED // TERMINAL_V2</div>
          <h1 class="scramble-headline" id="scrambleTarget">INITIALIZING PROTOCOL</h1>
          <div class="scramble-subtext" id="scrambleSub">SECURE_HANDSHAKE_COMPLETED</div>
          <div class="scramble-controls">
            <button class="btn-scramble-trigger" id="btnScrambleTrigger" type="button">
              <span>↻ 重新解密 (Scramble)</span>
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
    id: "dynamic-island",
    zhName: "灵动岛悬浮胶囊",
    enName: "Dynamic Island Morph",
    category: "反馈",
    description: "苹果灵动岛多态交互。极简黑色小药丸，点击时以平滑弹性阻尼物理曲线变形展开为音乐面板、通话或通知卡片。",
    enDescription: "Apple Dynamic Island interaction. Compact capsule morphs smoothly into music player or notification cards with spring physics.",
    prompt: "请帮我实现一个网页动效：灵动岛悬浮胶囊（Dynamic Island Morph）。顶部居中的黑色胶囊卡片，支持 Compact、Music、Alert 多种状态切换，展开与收起时带有自然的弹性阻尼贝塞尔过渡，内容元素平滑淡入交替。",
    enPrompt: "Please help me implement a web motion: Dynamic Island Morph. Morph a centered black pill into expanded music/alert cards using spring-like cubic-bezier physics.",
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
          <div class="island-hint">点击上方按钮或胶囊本身体验 iOS 弹性形变</div>
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
    id: "macos-dock",
    zhName: "拟物鱼眼缩放 Dock",
    enName: "macOS Fisheye Dock",
    category: "悬停",
    description: "经典桌面 Dock 拟物栏。鼠标在底部滑动时，图标根据与光标的距离呈现非线性的高斯鱼眼放大与浮动回弹。",
    enDescription: "Classic macOS dock. Icons scale up based on a cosine/gaussian distance curve as the cursor glides across.",
    prompt: "请帮我实现一个网页动效：macOS 拟物鱼眼缩放 Dock 栏（macOS Fisheye Dock）。在底部固定悬浮的图标栏中监听 mousemove，根据光标与各个图标中心的水平距离计算高斯/余弦缩放系数，使光标周围图标产生连贯的鱼眼放大波浪。",
    enPrompt: "Please help me implement a web motion: macOS Fisheye Dock. Scale dock icons smoothly based on cursor proximity using a gaussian distance function.",
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
    render: (container) => {
      const cardsData = [
        { id: 1, title: "Design Systems", sub: "Token Architecture & Components", icon: "🎨", color: "#3b82f6" },
        { id: 2, title: "Kinetic Motion", sub: "Spring Physics & Cubic Bezier", icon: "⚡", color: "#8b5cf6" },
        { id: 3, title: "Web Performance", sub: "60 FPS GPU Acceleration", icon: "🚀", color: "#10b981" },
        { id: 4, title: "Autonomous AI", sub: "Multi-Agent Orchestration", icon: "✨", color: "#f59e0b" }
      ];

      container.innerHTML = `
        <div class="sandbox-stack-stage">
          <div class="stack-deck-container" id="stackDeck"></div>
          <div class="stack-controls">
            <button class="btn-stack-action" id="btnStackFlick">Swipe Next Card ➔</button>
          </div>
        </div>
      `;

      const deck = container.querySelector("#stackDeck");
      let cardList = [...cardsData];

      const renderDeck = () => {
        deck.innerHTML = "";
        cardList.forEach((card, index) => {
          const el = document.createElement("div");
          el.className = `deck-card-layer layer-${index}`;
          el.style.zIndex = `${cardList.length - index}`;
          el.style.setProperty("--layer-offset", `${index}`);
          el.style.borderTop = `4px solid ${card.color}`;
          el.innerHTML = `
            <div class="deck-card-icon">${card.icon}</div>
            <div class="deck-card-title">${card.title}</div>
            <div class="deck-card-sub">${card.sub}</div>
            <div class="deck-card-num">0${card.id} // 04</div>
          `;
          deck.appendChild(el);
        });
      };

      const flickTopCard = () => {
        const topCard = deck.querySelector(".deck-card-layer.layer-0");
        if (!topCard || topCard.classList.contains("flicking")) return;
        topCard.classList.add("flicking");
        setTimeout(() => {
          const removed = cardList.shift();
          cardList.push(removed);
          renderDeck();
        }, 400);
      };

      renderDeck();
      const flickBtn = container.querySelector("#btnStackFlick");
      flickBtn.addEventListener("click", flickTopCard);
      deck.addEventListener("click", flickTopCard);
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
    id: "confetti-explosion",
    zhName: "物理重力礼花爆炸",
    enName: "Confetti Explosion Burst",
    category: "反馈",
    description: "成就与支付成功必备。点击瞬间从中心喷射出五彩缤纷的纸屑颗粒，并在重力、阻力与旋转模拟下优雅下落散开。",
    enDescription: "Celebratory confetti blast. Spawns colorful particle fragments on click governed by gravity and air drag physics.",
    prompt: "请帮我实现一个网页动效：物理重力礼花爆炸（Confetti Explosion Burst）。使用 HTML5 Canvas 在按钮点击瞬间生成 100+ 随机颜色、形状、初始速度与角度的粒子，通过物理公式模拟重力加速度、风阻与 3D 自转，形成真实的礼花漫天飞散效果。",
    enPrompt: "Please help me implement a web motion: Confetti Explosion. Spawn Canvas confetti particles on click with physics velocity, gravity, and 3D rotation.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-confetti-stage">
          <canvas class="confetti-canvas" id="confettiCanvas"></canvas>
          <div class="confetti-center-ui">
            <h1 class="confetti-title">ACHIEVEMENT UNLOCKED</h1>
            <p class="confetti-sub">点击下方按钮触发全屏重力粒子物理礼花</p>
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
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-mag-stage">
          <div class="mag-btn-wrapper" id="magWrapper">
            <button class="mag-hero-button" id="magBtn">
              <div class="mag-glow-ambient" id="magGlow"></div>
              <span class="mag-btn-text">Explore Galaxies</span>
              <svg class="mag-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </div>
          <div class="mag-stage-hint">将鼠标靠近按钮（140px 磁吸阈值）感受物理引力</div>
        </div>
      `;

      const wrapper = container.querySelector("#magWrapper");
      const btn = container.querySelector("#magBtn");
      const glow = container.querySelector("#magGlow");

      const handleMagMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const dist = Math.hypot(dx, dy);
        const maxThreshold = 150;

        if (dist < maxThreshold) {
          const power = (1 - dist / maxThreshold);
          const moveX = dx * power * 0.35;
          const moveY = dy * power * 0.35;
          btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
          glow.style.opacity = "1";
          glow.style.transform = `translate(${dx * 0.5}px, ${dy * 0.5}px)`;
        } else {
          btn.style.transform = "translate(0px, 0px) scale(1)";
          glow.style.opacity = "0.3";
          glow.style.transform = "translate(0px, 0px)";
        }
      };

      window.addEventListener("mousemove", handleMagMove);
      container.addEventListener("cleanup", () => {
        window.removeEventListener("mousemove", handleMagMove);
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
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-shimmer-stage">
          <div class="shimmer-hero-wrap">
            <div class="shimmer-kicker">APPLE SILICON ARCHITECTURE</div>
            <h1 class="shimmer-monumental-text" id="shimmerHeadline">TITANIUM PRO</h1>
            <p class="shimmer-subhead">Aerospace-grade precision engineered for ultimate computing speed.</p>
          </div>
          <div class="shimmer-palette-bar">
            <button class="palette-chip active" data-palette="titanium">Titanium</button>
            <button class="palette-chip" data-palette="gold">Solar Gold</button>
            <button class="palette-chip" data-palette="emerald">Cyber Emerald</button>
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
    id: "rolling-number-odometer",
    zhName: "机械滚轮数字翻牌器",
    enName: "Rolling Number Odometer",
    category: "反馈",
    description: "老虎机与机械仪表盘质感。数值变动时，每位数字像滚轮一样纵向旋转翻滚过渡，数字感与仪式感拉满。",
    enDescription: "Mechanical slot-machine counter. Each digit rolls vertically along an internal column with staggered easing.",
    prompt: "请帮我实现一个网页动效：机械滚轮数字翻牌器（Rolling Number Odometer）。将多位数字拆分为独立的竖向列，每列包含 0-9 数字序列，当数值更新时通过 translateY 平滑滚动至目标数字，配合各列错开的 transition-delay 营造机械翻牌效果。",
    enPrompt: "Please help me implement a web motion: Rolling Number Odometer. Build vertical columns containing 0-9 digits and animate their translateY offsets with staggered delays.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-odometer-stage">
          <div class="odometer-card">
            <div class="odometer-header">
              <span class="odo-title">TOTAL REVENUE (USD)</span>
              <span class="odo-live-pill">● LIVE LEDGER</span>
            </div>
            <div class="odometer-display" id="odometerDisplay">
              <span class="odo-currency">$</span>
              <div class="odo-digits-rack" id="digitsRack"></div>
            </div>
            <div class="odometer-actions">
              <button class="btn-odo-action" id="btnOdoAdd">+ $12,450</button>
              <button class="btn-odo-action" id="btnOdoRandom">Randomize</button>
            </div>
          </div>
        </div>
      `;

      let currentVal = 8492350;
      const rack = container.querySelector("#digitsRack");

      const updateOdometer = (num) => {
        const formatted = num.toLocaleString("en-US");
        rack.innerHTML = "";

        formatted.split("").forEach((char, idx) => {
          if (char === ",") {
            const sep = document.createElement("span");
            sep.className = "odo-separator";
            sep.textContent = ",";
            rack.appendChild(sep);
          } else {
            const col = document.createElement("div");
            col.className = "odo-digit-column";
            col.style.transitionDelay = `${idx * 0.05}s`;
            const digitNum = parseInt(char, 10);
            col.innerHTML = `
              <div class="odo-digit-strip" style="transform: translateY(-${digitNum * 10}%);">
                <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
              </div>
            `;
            rack.appendChild(col);
          }
        });
      };

      updateOdometer(currentVal);

      container.querySelector("#btnOdoAdd").addEventListener("click", () => {
        currentVal += 12450;
        updateOdometer(currentVal);
      });

      container.querySelector("#btnOdoRandom").addEventListener("click", () => {
        currentVal = Math.floor(Math.random() * 9000000) + 1000000;
        updateOdometer(currentVal);
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
    id: "scroll-drawn-svg",
    zhName: "滚动手绘线条勾勒",
    enName: "Scroll-Drawn SVG Path",
    category: "滚动",
    description: "Stripe 首页同款叙事。页面向下滚动时，复杂的矢量线条与产品架构轮廓依照绝对滚动百分比精准手绘呈现。",
    enDescription: "Stripe-style scroll storytelling. SVG paths trace out dynamically in lockstep with page scroll depth.",
    prompt: "请帮我实现一个网页动效：滚动手绘线条勾勒（Scroll-Drawn SVG Path）。测量 SVG path 的 getTotalLength()，初始化 stroke-dasharray 和 stroke-dashoffset 为全长，监听窗口滚动进度，将滚动百分比实时映射到 dashoffset 实现手绘画线效果。",
    enPrompt: "Please help me implement a web motion: Scroll-Drawn SVG Path. Bind SVG strokeDashoffset to the page scroll percentage using getTotalLength().",
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
    id: "split-text-3d-wave",
    zhName: "文字 3D 逐字波浪飞入",
    enName: "Split-Text 3D Wave",
    category: "进入",
    description: "Codrops 封面级排版。大标题文字在入场时拆分为单字，每个字符带有独立的 3D 空间翻折（rotateX）与模糊递进。",
    enDescription: "Editorial 3D typography. Splits headlines into characters that flip in from rotateX(90deg) with perspective waves.",
    prompt: "请帮我实现一个网页动效：文字 3D 逐字波浪飞入（Split-Text 3D Wave）。在包含 perspective 透视的容器中将文本拆分为 span 字符，初始状态设置 transform: rotateX(90deg) translateY(30px) filter: blur(8px)，通过错开的延时让字符如波浪般顺滑翻折归位。",
    enPrompt: "Please help me implement a web motion: Split-Text 3D Wave. Split text into spans with 3D rotateX and perspective, staggering character arrivals sequentially.",
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
    id: "card-sticky-stacking",
    zhName: "滚动卡片层叠固化",
    enName: "Card Sticky Stacking",
    category: "滚动",
    description: "现代产品介绍页标配。向下滚动时卡片依次在视口顶部吸附固化，后续卡片从下方覆盖上来并伴随缩放与变暗。",
    enDescription: "Product narrative stack. Cards pin to viewport top on scroll, stacking and scaling down as new cards overlay.",
    prompt: "请帮我实现一个网页动效：滚动卡片层叠固化（Card Sticky Stacking）。使用 position: sticky 配合 top 偏移，使多张大卡片在向下滚动时依次吸顶停靠，后一张卡片覆盖上去的同时，前一张卡片通过 scale(0.95) 与 brightness(0.8) 产生纵深层叠堆积感。",
    enPrompt: "Please help me implement a web motion: Card Sticky Stacking. Use position: sticky with progressive top offsets and scale transforms to create stacked card decks on scroll.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-sticky-stack-container">
          <div class="sticky-stack-hero">
            <h1>CRAFTING THE FUTURE</h1>
            <p>向下垂直滚动以观察卡片在视口顶部的逐级层叠与缩放</p>
          </div>
          <div class="sticky-cards-column">
            <div class="sticky-stack-card card-step-1" style="--card-index: 1;">
              <div class="step-badge">PHASE 01</div>
              <h2>Ideate & Conceptualize</h2>
              <p>深入分析用户交互心智模型，绘制高保真动态叙事原型与微交互时间线。</p>
            </div>
            <div class="sticky-stack-card card-step-2" style="--card-index: 2;">
              <div class="step-badge">PHASE 02</div>
              <h2>Fluid Physics Simulation</h2>
              <p>使用胡克定律弹簧算法驱动阻尼运动，确保每一帧位移符合真实物理规律。</p>
            </div>
            <div class="sticky-stack-card card-step-3" style="--card-index: 3;">
              <div class="step-badge">PHASE 03</div>
              <h2>Hardware GPU Acceleration</h2>
              <p>严格限定使用 transform 与 opacity 属性，实现稳态 60 FPS 满帧丝滑呈现。</p>
            </div>
            <div class="sticky-stack-card card-step-4" style="--card-index: 4;">
              <div class="step-badge">PHASE 04</div>
              <h2>Production Delivery</h2>
              <p>零外部依赖纯原生代码库输出，无缝嵌入任何现代前端技术栈。</p>
            </div>
          </div>
        </div>
      `;
    }
  },
  {
    id: "aurora-background",
    zhName: "极光渐变弥散流光",
    enName: "Aurora Glow Background",
    category: "进入",
    description: "Siri / Apple Intelligence 质感流体光晕。多层高斯模糊与多色径向渐变网格，通过连续流体位移与色相轻微自旋，营造极光般的梦幻背景。",
    enDescription: "Apple-inspired ethereal flow. Layered radial gradients and high-blur meshes orbiting smoothly to create ambient aurora illumination.",
    prompt: "请帮我实现一个网页动效：极光渐变弥散流光（Aurora Glow Background）。在深色或纯色背景上放置多个带有 filter: blur(60px) 的绝对定位径向渐变色块，运用 @keyframes 结合 transform: translate() rotate() 与 opacity 呼吸律动，创造高级柔和的极光背景动效。",
    enPrompt: "Please help me implement a web motion: Aurora Glow Background. Combine heavy gaussian blur layers with radial gradients animating along continuous parametric curves.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-aurora-stage">
          <div class="aurora-mesh">
            <div class="aurora-light-orb orb-1"></div>
            <div class="aurora-light-orb orb-2"></div>
            <div class="aurora-light-orb orb-3"></div>
            <div class="aurora-light-orb orb-4"></div>
          </div>
          <div class="aurora-hero-content">
            <div class="aurora-pill-tag">✨ NEXT-GEN AMBIENCE</div>
            <h1 class="aurora-title">Intelligence in Motion</h1>
            <p class="aurora-sub">移动鼠标感受极光光晕的自然漫射与交互式视差流转</p>
            <div class="aurora-palette-ctrl">
              <button class="btn-aurora-theme active" data-theme="siri">Siri Ethereal</button>
              <button class="btn-aurora-theme" data-theme="cyber">Neon Cyber</button>
              <button class="btn-aurora-theme" data-theme="sunset">Warm Sunset</button>
            </div>
          </div>
        </div>
      `;
      const stage = container.querySelector(".sandbox-aurora-stage");
      const orbs = container.querySelectorAll(".aurora-light-orb");
      const themeBtns = container.querySelectorAll(".btn-aurora-theme");

      stage.addEventListener("mousemove", (e) => {
        const rect = stage.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        orbs.forEach((orb, i) => {
          const factor = (i + 1) * 20;
          orb.style.transform = `translate(${nx * factor}px, ${ny * factor}px)`;
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
    description: "深邃夜空氛围动效。带有渐变尾迹的倾斜光束以随机延迟和速度从右上角滑向左下角，伴随头部光斑微闪与渐隐。",
    enDescription: "Ambient cosmic trail. Angled glowing streaks shooting across dark cards with random delays, subtle head glows, and linear trails.",
    prompt: "请帮我实现一个网页动效：流星夜空划过特效（Meteors Shower Background）。通过纯 CSS 生成倾斜 215deg 的流星光束，伪元素头部添加圆点发光阴影，主体使用 linear-gradient 尾迹渐变，通过 @keyframes 从屏幕外滑入并淡出消失。",
    enPrompt: "Please help me implement a web motion: Meteors Shower Background. Render angled meteor streaks with glowing head points and fading gradients shooting across containers.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-meteors-stage">
          <div class="meteors-sky-layer" id="meteorsSky"></div>
          <div class="meteors-center-card">
            <div class="meteor-badge">COSMIC EXPERIENCE</div>
            <h2>Night Sky Serenade</h2>
            <p>20+ 道倾斜流星以物理随机速度穿梭滑过暗夜，点击下方按钮唤醒流星雨风暴。</p>
            <button class="btn-meteor-burst" id="btnMeteorBurst">🌠 触发流星雨爆发</button>
          </div>
        </div>
      `;
      const sky = container.querySelector("#meteorsSky");
      const burstBtn = container.querySelector("#btnMeteorBurst");

      const createMeteors = (count) => {
        sky.innerHTML = "";
        for (let i = 0; i < count; i++) {
          const m = document.createElement("span");
          m.className = "full-meteor-ray";
          m.style.top = Math.random() * 80 + "%";
          m.style.left = Math.random() * 100 + "%";
          m.style.animationDelay = Math.random() * 3 + "s";
          m.style.animationDuration = (Math.random() * 1.5 + 1.2) + "s";
          sky.appendChild(m);
        }
      };

      createMeteors(24);
      burstBtn.addEventListener("click", () => {
        createMeteors(60);
        setTimeout(() => createMeteors(24), 5000);
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
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-typewriter-stage">
          <div class="typewriter-hero-box">
            <span class="tw-prefix">Building the future for</span>
            <div class="tw-headline-rack">
              <span class="tw-dynamic-word" id="twWord"></span>
              <span class="tw-cursor-caret"></span>
            </div>
            <p class="tw-sub">支持自然停顿、随机敲击延迟模拟与平滑退格过渡</p>
            <div class="tw-custom-inputs">
              <input type="text" id="twCustomList" value="Designers, Developers, Creators, Visionaries" placeholder="输入逗号分隔的关键词...">
              <button id="btnTwUpdate">更新轮播词</button>
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
    id: "twinkling-starfield",
    zhName: "闪烁微光星空点阵",
    enName: "Twinkling Starfield Particles",
    category: "进入",
    description: "深色卡片魔法高光。随机分布的微型星芒粒子以不同周期呼吸闪烁与自旋，光标移动时产生极轻微的 2.5D 视差推移。",
    enDescription: "Subtle cosmic sparkle. Multi-sized twinkling star particles breathing and pulsing at varied frequencies with subtle cursor parallax.",
    prompt: "请帮我实现一个网页动效：闪烁微光星空点阵（Twinkling Starfield Particles）。在容器内生成随机坐标的微型星芒（✦ / ✧），各自分配随机动画延时与缩放呼吸周期，模拟夜空繁星闪烁的静谧高级氛围。",
    enPrompt: "Please help me implement a web motion: Twinkling Starfield Particles. Scatter glowing multi-frequency star glyphs with staggered keyframe pulsing and parallax.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-starfield-stage" id="starfieldStage">
          <canvas class="starfield-canvas" id="starCanvas"></canvas>
          <div class="starfield-content-card">
            <span class="star-badge">✨ INFINITE CONSTELLATIONS</span>
            <h2>Celestial Particle System</h2>
            <p>180+ 动态微光星芒，随光标位移产生微小 2.5D 深度视差</p>
          </div>
        </div>
      `;
      const canvas = container.querySelector("#starCanvas");
      const stage = container.querySelector("#starfieldStage");
      const ctx = canvas.getContext("2d");

      let width = canvas.width = stage.clientWidth;
      let height = canvas.height = stage.clientHeight;

      const stars = [];
      for (let i = 0; i < 180; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.8,
          alpha: Math.random(),
          speed: Math.random() * 0.02 + 0.005,
          color: Math.random() > 0.3 ? "#ffffff" : (Math.random() > 0.5 ? "#38bdf8" : "#f472b6")
        });
      }

      let mouseX = width / 2;
      let mouseY = height / 2;

      stage.addEventListener("mousemove", (e) => {
        const rect = stage.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      });

      let animId;
      const render = () => {
        ctx.clearRect(0, 0, width, height);
        const offsetX = (mouseX - width / 2) * 0.04;
        const offsetY = (mouseY - height / 2) * 0.04;

        stars.forEach(s => {
          s.alpha += s.speed;
          const currentAlpha = Math.abs(Math.sin(s.alpha));
          ctx.beginPath();
          ctx.arc(s.x + offsetX * (s.size * 0.5), s.y + offsetY * (s.size * 0.5), s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = currentAlpha * 0.8 + 0.1;
          ctx.fill();
        });
        animId = requestAnimationFrame(render);
      };
      render();
    }
  },
  {
    id: "cursor-trail",
    zhName: "光标轨迹动态拖影",
    enName: "Interactive Cursor Trail",
    category: "悬停",
    description: "创意工作室品牌秀场。当鼠标在页面快速滑过时，在历史坐标路径上留下一串带惯性滞后、随时间渐隐消散的微缩缩略图或光斑粒子。",
    enDescription: "Creative agency gesture trail. Leaves a fluid ribbon of decaying image chips or glowing dots lagging smoothly along the pointer's velocity path.",
    prompt: "请帮我实现一个网页动效：光标轨迹动态拖影（Interactive Cursor Trail）。监听 mousemove 事件并在鼠标移动距离超过阈值时生成历史坐标节点，使用 requestAnimationFrame 驱动历史节点按照生命周期逐步缩小和透明度衰减，并在 500ms 后自动清理 DOM。",
    enPrompt: "Please help me implement a web motion: Interactive Cursor Trail. Spawn ephemeral trailing nodes on mouse trajectory that scale down and fade with inertia.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-trail-stage" id="trailStage">
          <div class="trail-lead-hint">
            <h2>Move Pointer to Cast Fluid Ribbon</h2>
            <p>在画板内快速划动鼠标，观察多级光斑粒子的惯性拖影与生命周期消散</p>
          </div>
        </div>
      `;
      const stage = container.querySelector("#trailStage");

      let lastX = 0, lastY = 0;
      stage.addEventListener("mousemove", (e) => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dist = Math.hypot(x - lastX, y - lastY);
        if (dist > 14) {
          lastX = x;
          lastY = y;
          const bead = document.createElement("div");
          bead.className = "trail-spark-bead";
          bead.style.left = x + "px";
          bead.style.top = y + "px";
          stage.appendChild(bead);
          setTimeout(() => bead.remove(), 450);
        }
      });
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
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-dir-stage">
          <div class="dir-stage-header">
            <h2>Direction-Aware Proximity Grid</h2>
            <p>从不同方向（上/下/左/右）将鼠标移入或移出卡片，观察遮罩层精准从切入边展开</p>
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
    id: "grid-dot-proximity",
    zhName: "点阵网格近邻感应高亮",
    enName: "Grid Dot Matrix Proximity",
    category: "悬停",
    description: "极客开发控制台背景。整齐排列的微型圆点阵列，当光标靠近时，以光标为中心半径内的点阵产生缩放放大与色彩增亮，远离后平滑衰减。",
    enDescription: "Proximity dot illumination. Regular matrix of micro-dots that scale and illuminate when the cursor approaches within an activation radius.",
    prompt: "请帮我实现一个网页动效：点阵网格近邻感应高亮（Grid Dot Matrix Proximity）。在 Canvas 或 DOM Grid 中绘制均匀点阵，在 mousemove 时计算每个点到光标的距离 d，根据距离映射 scale(1 -> 2.5) 与 opacity(0.2 -> 1.0)，离开时通过 transition 平滑复位。",
    enPrompt: "Please help me implement a web motion: Grid Dot Matrix Proximity. Scale and illuminate arrayed dots inversely proportional to Euclidean distance from mouse position.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-dot-prox-stage" id="proxStage">
          <canvas class="dot-prox-canvas" id="dotCanvas"></canvas>
          <div class="dot-prox-hud">
            <h2>Matrix Proximity Field</h2>
            <p>光标周围 150px 欧几里得距离内的点阵呈现高斯衰减高亮与缩放</p>
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
    id: "glass-glare-tilt",
    zhName: "镜面菲涅尔反光 3D 卡片",
    enName: "Glass Glare Tilt Card",
    category: "悬停",
    description: "高端会员卡与资产卡片。在 3D 透视倾斜基础上叠加对角线物理光斑，卡片转动时光斑在磨砂玻璃表面产生真实的漫反射位移。",
    enDescription: "Luxury reflective tilt card. Combines 3D perspective orientation with a dynamic specular sheen layer tracking mouse angles.",
    prompt: "请帮我实现一个网页动效：镜面菲涅尔反光 3D 卡片（Glass Glare Tilt Card）。在卡片 3D 透视旋转的同时，卡片内部叠加一层带 linear-gradient(135deg, rgba(255,255,255,0.4), transparent) 的高光层，高光层根据鼠标相对坐标反向位移，产生逼真的玻璃反光效果。",
    enPrompt: "Please help me implement a web motion: Glass Glare Tilt Card. Pair 3D perspective rotation with a specular highlight sheen layer translating inversely to simulate glass refraction.",
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
          <div class="glare-hint">移动鼠标观察卡片 3D 旋转与高光层的物理菲涅尔反光</div>
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
    id: "sliding-indicator-tabs",
    zhName: "滑动指示器分段标签页",
    enName: "Sliding Indicator Tabs",
    category: "反馈",
    description: "顶流应用标配分段控制器。点击切换 Tab 选项时，背后的药丸高亮胶囊根据目标元素的 offsetLeft 与 offsetWidth，以弹簧阻尼曲线平滑滑动与拉伸变形。",
    enDescription: "Segmented indicator pill. Active highlight bubble smoothly glides, squashes, and snaps to target tab dimensions using spring physics.",
    prompt: "请帮我实现一个网页动效：滑动指示器分段标签页（Sliding Indicator Tabs）。Tab 栏内设置一个绝对定位的背景高亮药丸，切换 Tab 时读取目标按钮的 offsetLeft 和 offsetWidth，通过 transform: translateX() 与 width 配合 spring 弹性曲线平滑滑向目标项。",
    enPrompt: "Please help me implement a web motion: Sliding Indicator Tabs. Measure target tab offsetLeft and offsetWidth to glide an absolute background pill with elastic transition.",
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
            <p>点击上方不同标签项，观察滑动胶囊在各 Tab 间带物理拉伸与阻尼的顺滑飞掠。</p>
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
            <p>当前处于 ${tab.dataset.tab.toUpperCase()} 模块。滑动高亮指示器已自适应匹配按钮宽度并完成平滑就位。</p>
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
    id: "expanding-fab-menu",
    zhName: "折叠展开浮动操作岛",
    enName: "Expanding FAB Island Menu",
    category: "反馈",
    description: "移动端与 AI 助手绝佳入口。右下角常驻悬浮按钮（FAB），点击后由单点以弹性物理曲线膨胀展开为带有多项快捷动作的卡片面板。",
    enDescription: "Expanding floating action button. Compact trigger expands with spring damping into an action dock with staggered item reveals.",
    prompt: "请帮我实现一个网页动效：折叠展开浮动操作岛（Expanding FAB Island Menu）。初始为右下角圆形悬浮图标，点击时触发 CSS 尺寸膨胀与 border-radius 形变，菜单内部图标按 transition-delay 错峰弹出，再次点击或失焦时平滑收起。",
    enPrompt: "Please help me implement a web motion: Expanding FAB Island Menu. Morph circular FAB trigger into a responsive action card with staggered menu item entrances.",
    render: (container) => {
      container.innerHTML = `
        <div class="sandbox-fab-stage">
          <div class="fab-stage-intro">
            <h2>Expanding Action Island</h2>
            <p>点击下方悬浮按钮，观察其由极简圆点膨胀为全功能交互菜单的弹性过渡</p>
          </div>
          <div class="fab-dock-island" id="fabDock">
            <button class="fab-master-trigger" id="fabTrigger">
              <span class="fab-cross">+</span>
            </button>
            <div class="fab-menu-items">
              <button class="fab-action-item"><span class="f-icon">✨</span><span class="f-lbl">New Prompt</span></button>
              <button class="fab-action-item"><span class="f-icon">⚡</span><span class="f-lbl">Quick Boost</span></button>
              <button class="fab-action-item"><span class="f-icon">📊</span><span class="f-lbl">Metrics</span></button>
              <button class="fab-action-item"><span class="f-icon">⚙️</span><span class="f-lbl">Config</span></button>
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
    id: "audio-waveform-visualizer",
    zhName: "波形音频动态可视化",
    enName: "Audio Waveform Visualizer",
    category: "反馈",
    description: "AI 语音助手与播放器交互。多组圆角垂直条柱根据正弦相移算法与声学振幅起伏跳动，真实模拟语音识别与音乐节奏。",
    enDescription: "Acoustic audio wave bars. Staggered vertical pill bars oscillating dynamically via sine waves to simulate live voice synthesis and audio playback.",
    prompt: "请帮我实现一个网页动效：波形音频动态可视化（Audio Waveform Visualizer）。使用 CSS keyframes 或 Web Audio API，让一组等间距圆角垂直条柱根据正弦函数错开高度，结合 scaleY(0.2 -> 1.0) 产生起伏有致的声波律动。",
    enPrompt: "Please help me implement a web motion: Audio Waveform Visualizer. Oscillate array of rounded bars with phase-shifted keyframes and scaleY transforms for voice audio animation.",
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
              <button class="btn-wave-action active" id="btnWavePlay">⏸ 暂停</button>
              <button class="btn-wave-action" id="btnWaveSpeed">⚡ 切换律动速度</button>
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
        playBtn.textContent = isPlaying ? "⏸ 暂停" : "▶ 播放";
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
    id: "circular-progress-meter",
    zhName: "环形刻度进度仪表",
    enName: "Circular Radial Progress Meter",
    category: "反馈",
    description: "健康指标与性能仪表盘。SVG 圆环通过 stroke-dashoffset 随数值递增顺时针描边填充，内部百分比数字同步累加。",
    enDescription: "Radial stroke gauge. SVG circle gauge smoothly fills clockwise via stroke-dashoffset with synchronized digital counter and glow accents.",
    prompt: "请帮我实现一个网页动效：环形刻度进度仪表（Circular Radial Progress Meter）。使用 SVG <circle> 标签计算圆周长 2 * π * r 作为 stroke-dasharray，通过动态修改 stroke-dashoffset 控制进度弧长，中间数字使用 requestAnimationFrame 同步递增累加。",
    enPrompt: "Please help me implement a web motion: Circular Radial Progress Meter. Animate SVG stroke-dashoffset alongside easing digital counter to create smooth radial gauges.",
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
    id: "before-after-slider",
    zhName: "前后对比滑动擦除",
    enName: "Before-After Comparison Slider",
    category: "图片",
    description: "AI 图像与设计交付神器。两层重叠图像，拖动中间手柄分界线时动态改变上层遮罩 clip-path 或宽度，实现无缝拖拽比对。",
    enDescription: "Interactive visual comparison. Overlays two images with a draggable separator divider dynamically slicing top layer via clip-path polygon.",
    prompt: "请帮我实现一个网页动效：前后对比滑动擦除（Before-After Comparison Slider）。两张相同尺寸图片重叠，顶层图片设置 clip-path: polygon(0 0, var(--split-pos) 0, var(--split-pos) 100%, 0 100%)，监听中间手柄拖拽事件动态更新 --split-pos 百分比。",
    enPrompt: "Please help me implement a web motion: Before-After Comparison Slider. Overlay paired images with draggable divider adjusting top layer clip-path dynamically.",
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
          <div class="ba-hint">拖拽中间分界线滑动比对两层视觉效果</div>
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
    id: "organic-morphing-blob",
    zhName: "流体变形有机泡泡",
    enName: "Organic Morphing Blob",
    category: "反馈",
    description: "单细胞流体生命律动。CSS border-radius 八角独立比例连续缓动形变，赋予形状类似水滴、有机泡泡的生命律动感。",
    enDescription: "Organic morphing shape. Continuous multi-axis border-radius keyframing that creates amoeba-like, elastic fluid blobs.",
    prompt: "请帮我实现一个网页动效：流体变形有机泡泡（Organic Morphing Blob）。利用 CSS @keyframes 循环平滑过渡 border-radius 的 8 个控制百分比（如 60% 40% 30% 70% / 60% 30% 70% 40%），配合轻微 rotate 自旋，打造生动的有机水滴/气泡形态。",
    enPrompt: "Please help me implement a web motion: Organic Morphing Blob. Animate multi-value border-radius continuously with subtle rotation for organic fluid blob effects.",
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
          <p class="blob-hint">点击泡泡产生物理挤压弹性波动</p>
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
  }
];

/* ==========================================================================
   Page Routing & Initialization Logic
   ========================================================================== */

// 1. Read 'id' or 'name' from URL query params
const urlParams = new URLSearchParams(window.location.search);
const selectedId = urlParams.get("id");
const selectedName = urlParams.get("name") || urlParams.get("name_en") || urlParams.get("motion");

// Find motion data by id or by name
let currentMotion = null;
if (selectedId) {
  currentMotion = motions.find(m => m.id === selectedId);
}
if (!currentMotion && selectedName) {
  const normSearch = selectedName.toLowerCase().replace(/[^a-z0-9]/g, '');
  currentMotion = motions.find(m => 
    m.enName.toLowerCase().replace(/[^a-z0-9]/g, '') === normSearch ||
    m.id.toLowerCase().replace(/[^a-z0-9]/g, '') === normSearch ||
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

const uiTranslations = {
  zh: {
    backBtnText: "返回动效列表",
    backBtnTitle: "返回动效列表 (快捷键 Esc)",
    promptCardLabel: "AI 提示词",
    copyPromptBtnText: "复制",
    copyPromptSuccessText: "已复制",
    replayBtnText: "重新播放效果",
    floatingExpandText: "动效详情",
    collapseBtnTitle: "收起详情面板 (快捷键 H)",
    expandBtnTitle: "展开详情面板 (快捷键 H)",
    toastCopySuccess: "提示词已复制到剪贴板！",
    loadingDesc: "正在加载动效说明...",
    loadingPrompt: "正在生成提示词...",
    loadingTitle: "加载中..."
  },
  en: {
    backBtnText: "Back to Gallery",
    backBtnTitle: "Back to Gallery (Esc)",
    promptCardLabel: "AI Prompt",
    copyPromptBtnText: "Copy",
    copyPromptSuccessText: "Copied!",
    replayBtnText: "Replay Animation",
    floatingExpandText: "Motion Details",
    collapseBtnTitle: "Collapse Panel (Hotkey H)",
    expandBtnTitle: "Expand Panel (Hotkey H)",
    toastCopySuccess: "Prompt copied to clipboard!",
    loadingDesc: "Loading description...",
    loadingPrompt: "Generating prompt...",
    loadingTitle: "Loading..."
  }
};

const categoryTranslations = {
  zh: {
    "全部": "全部",
    "进入": "进入",
    "滚动": "滚动",
    "悬停": "悬停",
    "反馈": "反馈",
    "图片": "图片",
    "布局": "布局"
  },
  en: {
    "全部": "All",
    "进入": "Entrance",
    "滚动": "Scroll",
    "悬停": "Hover",
    "反馈": "Feedback",
    "图片": "Media",
    "布局": "Layout"
  }
};

// DOM Elements
const demoCanvas = document.getElementById("demoCanvas");
const controlPanel = document.getElementById("controlPanel");
const panelCollapseBtn = document.getElementById("panelCollapseBtn");
const floatingExpandBtn = document.getElementById("floatingExpandBtn");
const copyPromptBtn = document.getElementById("copyPromptBtn");
const copyPromptBtnText = document.getElementById("copyPromptBtnText");
const toastNotification = document.getElementById("toastNotification");

const detailTitleZh = document.getElementById("detailTitleZh");
const detailTitleEn = document.getElementById("detailTitleEn");
const detailCategory = document.getElementById("detailCategory");
const detailDesc = document.getElementById("detailDesc");
const promptText = document.getElementById("promptText");
const replayBtn = document.getElementById("replayBtn");
const panelBackBtn = document.getElementById("panelBackBtn");

// 3. Render Control Panel content
function initControlPanel() {
  if (detailTitleZh) detailTitleZh.textContent = currentLang === "en" ? currentMotion.enName : currentMotion.zhName;
  if (detailTitleEn) detailTitleEn.textContent = currentLang === "en" ? currentMotion.zhName : currentMotion.enName;
  if (detailCategory) detailCategory.textContent = categoryTranslations[currentLang][currentMotion.category] || currentMotion.category;
  if (detailDesc) detailDesc.textContent = currentLang === "en" ? (currentMotion.enDescription || currentMotion.description) : currentMotion.description;
  if (promptText) promptText.textContent = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
}

// 4. Panel Collapse / Expand Handlers
function togglePanel(collapsed) {
  const isCollapsed = collapsed !== undefined ? collapsed : !controlPanel.classList.contains("collapsed");
  if (isCollapsed) {
    controlPanel.classList.add("collapsed");
    floatingExpandBtn.classList.add("visible");
  } else {
    controlPanel.classList.remove("collapsed");
    floatingExpandBtn.classList.remove("visible");
  }
}

// 5. Copy Prompt Callback
if (copyPromptBtn) {
  copyPromptBtn.addEventListener("click", () => {
    const p = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
    copyToClipboard(p);
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
    const successful = document.execCommand('copy');
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

function showToast() {
  if (!toastNotification) return;
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2500);
}

// 6. Initialize Theme from localStorage / URL params
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

// 7. Language Translation Handler
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
  window.scrollTo({ top: 0, behavior: "instant" });
  demoCanvas.dispatchEvent(new CustomEvent("cleanup"));
  demoCanvas.innerHTML = "";
  setTimeout(() => {
    currentMotion.render(demoCanvas);
  }, 50);
}

// 8. Core initialization call
function init() {
  initTheme();
  
  // Panel collapse/expand buttons
  if (panelCollapseBtn) {
    panelCollapseBtn.addEventListener("click", () => togglePanel(true));
  }
  if (floatingExpandBtn) {
    floatingExpandBtn.addEventListener("click", () => togglePanel(false));
  }

  // Back button close helper if opened in a new tab
  if (panelBackBtn) {
    panelBackBtn.addEventListener("click", (e) => {
      if (window.opener) {
        e.preventDefault();
        window.close();
      }
    });
  }
  
  // Replay button handler
  if (replayBtn) {
    replayBtn.addEventListener("click", replayMotion);
  }

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // Ignore if typing inside inputs
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    
    if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      replayMotion();
    } else if (e.key === "h" || e.key === "H") {
      e.preventDefault();
      togglePanel();
    } else if (e.key === "Escape") {
      if (window.opener) {
        window.close();
      } else {
        window.location.href = "index.html";
      }
    }
  });
  
  // Initialize current language state & render motion
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", init);
