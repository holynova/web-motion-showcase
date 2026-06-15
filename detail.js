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
    enName: "Blur Reveal",
    category: "进入",
    description: "用渐变的滤镜模糊（filter: blur）替代粗糙的硬切淡入。背景色块在 1.8 秒内平滑清晰，充满画展艺术的高级感。",
    enDescription: "Replaces harsh fades with a smooth 1.8s Gaussian blur transition, bringing visual elements to life elegantly.",
    prompt: "请帮我实现一个网页动效：模糊渐显（Blur Reveal）。在大图或核心标题载入时，从高斯模糊和低透明度平滑过渡到高清原态。",
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
  }
];

/* ==========================================================================
   Page Routing & Initialization Logic
   ========================================================================== */

// 1. Read 'id' from URL query params
const urlParams = new URLSearchParams(window.location.search);
const selectedId = urlParams.get("id") || "fade-in-up";

// Find motion data
const currentMotion = motions.find(m => m.id === selectedId) || motions[0];

// 2. State & Translation Config
let currentLang = localStorage.getItem("lang") || "zh";

const uiTranslations = {
  zh: {
    panelHeaderTitle: "动效详情",
    descLabel: "动效描述",
    promptLabel: "AI 提示词 (一键复制)",
    copyPromptBtn: "复制此提示词",
    themeLabel: "主题配色",
    langLabel: "界面语言",
    replayBtn: "重新播放效果",
    backBtn: "返回动效列表",
    toastCopySuccess: "提示词已复制到剪贴板！",
    loadingDesc: "正在加载动效说明...",
    loadingPrompt: "正在生成提示词...",
    loadingTitle: "加载中..."
  },
  en: {
    panelHeaderTitle: "Motion Details",
    descLabel: "Description",
    promptLabel: "AI Prompt (Click to Copy)",
    copyPromptBtn: "Copy Prompt",
    themeLabel: "Theme Palette",
    langLabel: "Interface Language",
    replayBtn: "Replay Animation",
    backBtn: "Back to Gallery",
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

function getThemeModeIcon(mode) {
  if (mode === "dark") {
    return `<svg class="icon icon-moon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  } else {
    return `<svg class="icon icon-sun" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

// DOM Elements
const demoCanvas = document.getElementById("demoCanvas");
const controlPanel = document.getElementById("controlPanel");
const panelToggleBtn = document.getElementById("panelToggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const copyPromptBtn = document.getElementById("copyPromptBtn");
const toastNotification = document.getElementById("toastNotification");

const detailTitleZh = document.getElementById("detailTitleZh");
const detailTitleEn = document.getElementById("detailTitleEn");
const detailCategory = document.getElementById("detailCategory");
const detailDesc = document.getElementById("detailDesc");
const promptText = document.getElementById("promptText");

// 3. Render Control Panel content
function initControlPanel() {
  detailTitleZh.textContent = currentLang === "en" ? currentMotion.enName : currentMotion.zhName;
  detailTitleEn.textContent = currentLang === "en" ? currentMotion.zhName : currentMotion.enName;
  detailCategory.textContent = categoryTranslations[currentLang][currentMotion.category] || currentMotion.category;
  detailDesc.textContent = currentLang === "en" ? (currentMotion.enDescription || currentMotion.description) : currentMotion.description;
  promptText.textContent = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
}

// 4. Copy Prompt Callback
copyPromptBtn.addEventListener("click", () => {
  const p = currentLang === "en" ? (currentMotion.enPrompt || currentMotion.prompt) : currentMotion.prompt;
  copyToClipboard(p);
});

// Copy helper with callback toast
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showToast())
      .catch(err => fallbackCopy(text));
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

function showToast() {
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2500);
}

// 5. Initialize Dark/Light Theme based on localStorage
function initTheme() {
  let theme = localStorage.getItem("theme") || "slate";
  let mode = localStorage.getItem("mode");
  
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
    } else {
      dot.classList.remove("active");
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
    dot.addEventListener("click", (e) => {
      const selectedTheme = dot.dataset.themeOpt;
      localStorage.setItem("theme", selectedTheme);
      
      document.documentElement.setAttribute("data-theme", selectedTheme);
      
      themeDots.forEach(d => {
        if (d.dataset.themeOpt === selectedTheme) {
          d.classList.add("active");
        } else {
          d.classList.remove("active");
        }
      });
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
    });
  }
}

// 6. Language Translation Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  translatePage();
  
  // Re-render the canvas demo to localize text inside the canvas!
  demoCanvas.dispatchEvent(new CustomEvent("cleanup"));
  demoCanvas.innerHTML = "";
  setTimeout(() => {
    currentMotion.render(demoCanvas);
  }, 50);
}

function translatePage() {
  const t = uiTranslations[currentLang];
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  
  // Update toggle button active states
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    if (btn.dataset.langOpt === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update headers and labels
  const panelTitle = document.getElementById("panelHeaderTitleText");
  if (panelTitle) panelTitle.textContent = t.panelHeaderTitle;
  
  const descLabel = document.getElementById("descLabel");
  if (descLabel) descLabel.textContent = t.descLabel;
  
  const promptLabel = document.getElementById("promptLabel");
  if (promptLabel) promptLabel.textContent = t.promptLabel;
  
  const copyBtnText = document.getElementById("copyPromptBtnText");
  if (copyBtnText) copyBtnText.textContent = t.copyPromptBtn;
  
  const themeLabel = document.getElementById("themeLabel");
  if (themeLabel) themeLabel.textContent = t.themeLabel;
  
  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = t.langLabel;
  
  const replayBtnText = document.getElementById("replayBtnText");
  if (replayBtnText) replayBtnText.textContent = t.replayBtn;
  
  const backBtnText = document.getElementById("backBtnText");
  if (backBtnText) backBtnText.textContent = t.backBtn;
  
  const toastMsg = document.querySelector("#toastNotification .toast-message");
  if (toastMsg) toastMsg.textContent = t.toastCopySuccess;
  
  // Update browser tab document title
  document.title = currentLang === "en" 
    ? `${currentMotion.enName} | Web Motion Showcase`
    : `${currentMotion.zhName} | 动效体验中心`;

  // Update control panel text values
  initControlPanel();
}

// 7. Core initialization call
function init() {
  initTheme();
  setupThemeEvents();
  
  // Set up language switcher events
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.langOpt);
    });
  });
  
  // Initialize current language state
  setLanguage(currentLang);
  
  // Back button close helper if opened in a new tab
  const backBtn = document.querySelector(".btn-back");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      if (window.opener) {
        e.preventDefault();
        window.close();
      }
    });
  }
  
  // Replay button handler to clear and re-render the demo canvas
  const replayBtn = document.getElementById("replayBtn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      demoCanvas.dispatchEvent(new CustomEvent("cleanup"));
      demoCanvas.innerHTML = "";
      setTimeout(() => {
        currentMotion.render(demoCanvas);
      }, 50);
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
