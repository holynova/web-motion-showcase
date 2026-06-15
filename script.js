/* ==========================================================================
   Motion Data Structure (30 Animations)
   ========================================================================== */
const motions = [
  // 1. 进入类 (Entrance)
  {
    id: "fade-in-up",
    zhName: "淡入上移",
    enName: "Fade In Up",
    category: "进入",
    description: "网页最基础的元素显现方式。透明度渐显并伴随微小的自下而上移动，引导焦点且丝毫不显突兀。",
    enDescription: "The most fundamental entrance animation. Fade in combined with a subtle upward movement to guide focus naturally.",
    demoHtml: '<div class="preview-fade-up"></div>',
    prompt: "请帮我实现一个网页动效：淡入上移（Fade In Up）。这是一个基础的进入动效，当页面加载或元素滚动进入视口时，元素透明度平滑从 0 渐显到 1，同时位置从下方轻微上移到原位。",
    enPrompt: "Please help me implement a web motion: Fade In Up. When the page loads or elements scroll into the viewport, elements smoothly fade in from opacity 0 to 1 and slide up slightly from below to their original position."
  },
  {
    id: "scroll-reveal",
    zhName: "滚动显现",
    enName: "Scroll Reveal",
    category: "进入",
    description: "让长页面充满秩序感。当用户向下滚动，页面内容区块在接近视口时自动触发平滑的淡入加载。",
    enDescription: "Brings order to long pages. Automatically triggers a smooth fade-in as cards approach the viewport.",
    demoHtml: '<div class="preview-scroll-reveal"></div>',
    prompt: "请帮我实现一个网页动效：滚动显现（Scroll Reveal）。当用户滚动页面，各种内容卡片或文字在进入浏览器视口时自动淡入并伴随轻微位移显现。",
    enPrompt: "Please help me implement a web motion: Scroll Reveal. As the user scrolls down, various content cards or text blocks automatically fade in and slide up sequentially when entering the viewport."
  },
  {
    id: "line-reveal",
    zhName: "文字逐行显现",
    enName: "Line Reveal",
    category: "进入",
    description: "高级文字排版艺术。将标题或长句按行切分，从下至上错峰淡入出现，常用于首屏的核心主张宣传。",
    enDescription: "Typography art. Splits headings by line and reveals them sequentially from below, ideal for hero sections.",
    demoHtml: `
      <div class="preview-line-reveal">
        <span>Line One</span>
        <span>Line Two</span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：文字逐行显现（Line Reveal）。将大标题按行或字符分割，使每一行文字以稍微错开的延迟时间，从底部淡入上移显现。",
    enPrompt: "Please help me implement a web motion: Line Reveal. Split a large headline by lines or characters, making each line slide up and fade in from behind a mask with a staggered delay."
  },
  {
    id: "blur-reveal",
    zhName: "模糊进入",
    enName: "Blur In / Soft Reveal",
    category: "进入",
    description: "极具氛围感的登场方式。元素在显示时从朦胧的高斯模糊过渡到清晰，适合视觉主图或概念语的设计。",
    enDescription: "Atmospheric entrance. Transitioning from hazy blur to clear focus, perfect for hero images or slogans.",
    demoHtml: '<div class="preview-blur-in"></div>',
    prompt: "请帮我实现一个网页动效：模糊进入（Blur In）。让元素在展现时，伴随透明度从 0 渐显到 1，同时滤镜从高斯模糊过渡到完全清晰。",
    enPrompt: "Please help me implement a web motion: Blur Reveal. Transition elements smoothly from a Gaussian blur and low opacity to full clarity as they load or scroll into view."
  },
  {
    id: "reduced-motion",
    zhName: "减少动态适配",
    enName: "Reduced Motion Support",
    category: "进入",
    description: "无障碍体验的黄金准则。当系统级“减少动态”开启时，网站自动取消视差与长动效，降级为静态呈现。",
    enDescription: "Accessibility priority. Automatically disables high-intensity animations when system reduced motion is enabled.",
    demoHtml: '<div class="preview-reduced-motion"><span>Motion On</span><span>Reduced</span></div>',
    prompt: "请帮我实现网页无障碍支持：减少动态适配（Reduced Motion Support）。在 CSS 中利用 @media (prefers-reduced-motion: reduce) 媒体查询来取消或大幅弱化缩放、滚动等动画。",
    enPrompt: "Please help me implement accessibility support: Reduced Motion. Use the CSS media query @media (prefers-reduced-motion: reduce) to disable or minimize scaling, scrolling, and spinning animations."
  },

  // 2. 滚动交互类 (Scroll)
  {
    id: "parallax-scrolling",
    zhName: "视差滚动",
    enName: "Parallax Scrolling",
    category: "滚动",
    description: "创造三维立体纵深感。使页面背景元素（如图片）的滚动速度慢于前景文字内容，适合视觉故事表达。",
    enDescription: "Creates three-dimensional depth by scrolling background layers slower than foreground content.",
    demoHtml: `
      <div class="preview-parallax-container">
        <div class="preview-parallax-bg"></div>
        <div class="preview-parallax-fg"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：视差滚动（Parallax Scrolling）。这是一种经典的滚动效果，背景层的滚动位移慢于前景文字，从而创造出明显的纵深空间感。",
    enPrompt: "Please help me implement a web motion: Parallax Scrolling. Make background and midground layers move at different scroll speeds relative to the foreground text to create a sense of physical depth."
  },
  {
    id: "sticky-scroll",
    zhName: "粘性滚动叙事",
    enName: "Sticky Scroll Storytelling",
    category: "滚动",
    description: "分步叙事的绝佳搭档。在垂直滚动时，一侧的视觉核心卡片被钉在视口内，另一侧的叙事文本继续滚动。",
    enDescription: "Perfect for split-screen stories. One side stays sticky while the narrative text scrolls on the other side.",
    demoHtml: `
      <div class="preview-sticky-container">
        <div class="preview-sticky-left">
          <div class="preview-sticky-box"></div>
        </div>
        <div class="preview-sticky-right">
          <div class="preview-sticky-item"></div>
          <div class="preview-sticky-item"></div>
          <div class="preview-sticky-item"></div>
          <div class="preview-sticky-item"></div>
        </div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：粘性滚动叙事（Sticky Scroll Storytelling）。多用于双栏拆解，页面滚动时一侧（如图片）固定，另一侧叙事文字正常滚动更新。",
    enPrompt: "Please help me implement a web motion: Sticky Scroll Storytelling. A two-column layout where the visual illustration locks in place while the text scrolls, updating the visual state at key scroll points."
  },
  {
    id: "scroll-progress",
    zhName: "滚动进度条",
    enName: "Scroll Progress Indicator",
    category: "滚动",
    description: "帮助感知阅读进度。固定在页面顶部的高级极细线条，随着阅读页面的下滑按比例平滑伸展填满。",
    enDescription: "A minimal reading progress bar fixed to the top of the page, expanding proportionally as you scroll.",
    demoHtml: `
      <div class="preview-scroll-progress-demo">
        <div class="preview-scroll-progress-line"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：滚动进度条（Scroll Progress Indicator）。在页面顶部固定一条精致细线，长度跟随页面滚动进度实时自 0% 增长到 100%。",
    enPrompt: "Please help me implement a web motion: Scroll Progress Indicator. Place a thin line at the top of the page that scales horizontally from 0% to 100% matching the scroll percentage."
  },
  {
    id: "horizontal-gallery",
    zhName: "横向滚动作品带",
    enName: "Horizontal Scroll Gallery",
    category: "滚动",
    description: "打破纵向流动的单调性。将常规纵向鼠标滚动转化为横向的水平滑轨展示，非常适合画廊作品展。",
    enDescription: "Breaks scrolling monotony. Converts vertical page scroll into a smooth horizontal sliding track.",
    demoHtml: `
      <div class="preview-horizontal-container">
        <div class="preview-horizontal-track">
          <div></div><div></div><div></div>
        </div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：横向滚动作品带（Horizontal Scroll Gallery）。当用户向下滚动页面时，特定区域的卡片带会进行水平横向移动来代替纵向流动展示。",
    enPrompt: "Please help me implement a web motion: Horizontal Scroll Gallery. Intercept vertical scrolling inside a section to translate the grid container horizontally instead of vertically."
  },
  {
    id: "scroll-shadow",
    zhName: "头部阴影渐变",
    enName: "Scroll Shadow",
    category: "滚动",
    description: "建立自然的图层层次。当页面向下滚动偏离顶部时，粘性顶栏背景产生渐变阴影或显现精细底边框。",
    enDescription: "Natural layer hierarchy. Navbar develops a smooth shadow or border when the page scrolls away from the top.",
    demoHtml: `
      <div class="preview-scroll-shadow-demo">
        <div class="preview-scroll-shadow-header">Header</div>
        <div class="preview-scroll-shadow-body"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：头部阴影渐变（Scroll Shadow）。当页面离开顶部向下滚动时，固定顶部的 Header 导航栏渐显阴影或浮雕边界，提示图层悬浮状态。",
    enPrompt: "Please help me implement a web motion: Scroll Shadow. As the user scrolls away from the very top, add a soft shadow to the sticky navbar to indicate elevation."
  },
  {
    id: "infinite-marquee",
    zhName: "无缝跑马灯",
    enName: "Infinite Marquee",
    category: "滚动",
    description: "打造流动视觉张力。文字或标志图案在水平方向上以绝对匀速、无缝对接的形式向单侧进行无限循环。",
    enDescription: "Visual flow energy. Smooth, seamless horizontal loop of text or logos sliding at a constant speed.",
    demoHtml: `
      <div class="preview-marquee-wrapper">
        <div class="preview-marquee-track">
          <span>MOTION</span>
          <span>DESIGN</span>
          <span>MOTION</span>
          <span>DESIGN</span>
        </div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：无缝跑马灯（Infinite Marquee）。文字或一系列 Logo 进行水平无缝循环流动，支持鼠标悬停时自动暂停。",
    enPrompt: "Please help me implement a web motion: Infinite Ticker. Create a horizontal marquee that loops text or logos seamlessly at a constant speed, pausing on mouse hover."
  },

  // 3. 悬停交互类 (Hover)
  {
    id: "hover-lift",
    zhName: "悬停上浮",
    enName: "Hover Lift",
    category: "悬停",
    description: "按钮或卡片的轻微浮动反馈。当光标滑过时，元素向上微调 2-4px，提示当前区域是可点击的链接。",
    enDescription: "Tactile hover feedback. Button or card lifts up by 2-4px on cursor hover to indicate clickability.",
    demoHtml: '<div class="preview-hover-lift"></div>',
    prompt: "请帮我实现一个网页动效：悬停上浮（Hover Lift）。用于卡片或按钮 hover 时向上位移几像素，鼠标离开时平滑降落复位。",
    enPrompt: "Please help me implement a web motion: Hover Lift. Move buttons or cards upward by a few pixels on hover, with smooth transition timings."
  },
  {
    id: "hover-shadow",
    zhName: "悬停阴影增强",
    enName: "Hover Shadow",
    category: "悬停",
    description: "增加悬浮的高度感。在悬停时，底层阴影扩展并加深，使得交互元素从屏幕平面中缓缓浮起。",
    enDescription: "Elevation change. Enhances soft shadows on hover, raising the card from the screen without moving it.",
    demoHtml: '<div class="preview-hover-shadow"></div>',
    prompt: "请帮我实现一个网页动效：悬停阴影增强（Hover Shadow / Elevation Change）。卡片或按钮 hover 时增强阴影模糊度与扩散，使其产生从平面微微抬升的立体感。",
    enPrompt: "Please help me implement a web motion: Hover Shadow. Soften and expand the shadow projection of cards on hover, simulating a light source lift."
  },
  {
    id: "custom-cursor",
    zhName: "鼠标跟随光标",
    enName: "Custom Cursor",
    category: "悬停",
    description: "彰显高端设计感。用自定义的圆形或圆点跟随实际光标，悬停在链接上时，圆环产生伸缩和磁吸吸附。",
    enDescription: "Premium feel. Custom cursor elements follow the mouse with magnetic pull and size transitions on hover.",
    demoHtml: `
      <div class="preview-cursor-container">
        <div class="preview-cursor-dot"></div>
        <div class="preview-cursor-circle"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：鼠标跟随光标（Custom Cursor）。使用自定义的 DOM 元素代替系统默认光标，并使其具有轻微的惯性延迟跟随与尺寸变化。",
    enPrompt: "Please help me implement a web motion: Custom Cursor. Replace the default pointer with custom circles that track the cursor with drag-inertia and adapt size on hover."
  },
  {
    id: "tilt-card",
    zhName: "卡片 3D 倾斜",
    enName: "3D Tilt Card",
    category: "悬停",
    description: "惊艳的透视微交互。卡片平面会随着光标的探入，基于鼠标相对卡片中心的坐标进行三维透视倾斜旋转。",
    enDescription: "3D perspective hover effect. Card rotates dynamically based on cursor coordinates relative to card center.",
    demoHtml: `
      <div class="preview-tilt-card">
        <div class="preview-tilt-inner">3D</div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：卡片 3D 倾斜（3D Tilt Card）。当鼠标在卡片上方移动时，卡片能依据光标相对中心的位置产生 3D 透视旋转反馈。",
    enPrompt: "Please help me implement a web motion: 3D Tilt Card. Rotate the card in 3D perspective based on the mouse position relative to the card's center."
  },

  // 4. 反馈交互类 (Feedback)
  {
    id: "magnetic-effect",
    zhName: "磁吸反馈",
    enName: "Magnetic Button",
    category: "反馈",
    description: "好玩的重力回弹体验。按钮能够感知附近的鼠标，在一定距离内轻微被光标磁吸吸住，移开后瞬间复位。",
    enDescription: "Fun gravity pull. Button attracts to the cursor when it is nearby, snapping back smoothly when mouse leaves.",
    demoHtml: `
      <div class="preview-magnetic-container">
        <div class="preview-magnetic-target"></div>
        <div class="preview-magnetic-cursor"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：磁吸按钮（Magnetic Button）。鼠标靠近按钮时按钮产生轻微向光标方向偏移的磁吸效果，离开后回弹。",
    enPrompt: "Please help me implement a web motion: Magnetic Button. Pull the button towards the cursor when the mouse gets close, spring-snapping it back on leave."
  },
  {
    id: "spring-motion",
    zhName: "弹性缓动",
    enName: "Spring Motion",
    category: "反馈",
    description: "引入真实世界的物理反馈。按钮点击或弹窗弹出时采用弹簧弹性缓动，具备阻尼感的微幅震荡回弹。",
    enDescription: "Implements spring-damper physics for element state changes, providing organic bouncy overshoot feedback.",
    demoHtml: '<div class="preview-spring-box"></div>',
    prompt: "请帮我实现一个网页动效：弹性缓动（Spring Motion）。模拟弹簧阻尼模型，在状态转换时产生具有物理质感的惯性回弹和振荡效果。",
    enPrompt: "Please help me implement a web motion: Spring Motion. Apply spring physics curves to animations to simulate bouncy, organic elasticity rather than linear easing."
  },
  {
    id: "menu-morphing",
    zhName: "汉堡菜单变形",
    enName: "Menu Morphing",
    category: "反馈",
    description: "经典的状态变换。三根横线组成的汉堡菜单图标，在点击展开菜单时瞬间平滑旋转折叠为代表关闭的 'X'。",
    enDescription: "Interactive icon transformation. The three-line hamburger menu transitions smoothly into a close X shape.",
    demoHtml: `
      <div class="preview-morphing-btn">
        <div class="preview-morphing-line line-1"></div>
        <div class="preview-morphing-line line-2"></div>
        <div class="preview-morphing-line line-3"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：汉堡菜单变形（Menu Morphing）。三线条汉堡菜单按钮点击激活时，三根线通过平移和旋转平滑转换为 X 形关闭按钮。",
    enPrompt: "Please help me implement a web motion: Menu Morphing. Transform a three-line hamburger icon into a close X icon using CSS transforms on button click."
  },
  {
    id: "theme-switch",
    zhName: "暗色模式切换",
    enName: "Smooth Theme Switch",
    category: "反馈",
    description: "极具视觉震撼的夜色降临。切换白天暗色时，以按钮为中心自内而外扩散圆形渐变，横扫全屏切换配色。",
    enDescription: "Stunning theme toggle. Dark mode transitions via a circular clipping path mask expanding outwards from button click.",
    demoHtml: `
      <div class="preview-theme-switch">
        <div class="preview-theme-btn"></div>
        <div class="preview-theme-ripple"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：暗色模式平滑切换（Smooth Theme Switch）。点击切换主题时以按钮为圆心产生圆形涟漪裁剪，逐渐扫过全屏过渡配色方案。",
    enPrompt: "Please help me implement a web motion: Smooth Theme Switch. Expand a circle clip-path from the button center to transit the dark/light background."
  },
  {
    id: "button-ripple",
    zhName: "按钮点击波纹",
    enName: "Button Ripple",
    category: "反馈",
    description: "源自 Material 交互灵感。在鼠标或手指按下的准确坐标，由内而外平滑绽放一圈淡雅的圆形扩散光环。",
    enDescription: "Material-inspired response. A soft wave ripple spreads out from the exact clicked coordinates inside the button.",
    demoHtml: `
      <div class="preview-ripple-btn">
        <div class="preview-ripple-wave"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：按钮点击波纹（Button Ripple）。点击按钮时，以鼠标落点为圆心动态生成扩散淡出水波纹反馈特效。",
    enPrompt: "Please help me implement a web motion: Button Ripple. Spawn a circular ripple expanding from the exact click coordinates inside the button."
  },
  {
    id: "color-transition",
    zhName: "颜色过渡",
    enName: "Color Transition",
    category: "反馈",
    description: "消减突兀的视觉跳变。为组件设置毫秒级的平滑过渡，让背景色、边框色、文字色彩的改变细雨无声。",
    enDescription: "Subtle aesthetic timing. Smooth transitions for background and typography colors to avoid harsh flashes.",
    demoHtml: '<div class="preview-color-transition">Hover</div>',
    prompt: "请帮我实现一个网页动效：颜色过渡（Color Transition）。让链接、按钮的背景或文本颜色改变时具备平滑缓冲，而不是瞬间闪变。",
    enPrompt: "Please help me implement a web motion: Color Transition. Smooth out transitions for hover and active state colors rather than instant cuts."
  },
  {
    id: "count-up",
    zhName: "数字滚动",
    enName: "Count Up Animation",
    category: "反馈",
    description: "让冰冷数据活起来。在卡片进入屏幕时，数字指标从 0 开始以流畅的缓动加速度向上滚动增长至终值。",
    enDescription: "Breathes life into stats. Numeric values increment smoothly from zero to target value with easing acceleration.",
    demoHtml: '<div class="preview-count-box">0</div>',
    prompt: "请帮我实现一个网页动效：数字滚动（Count Up Animation）。在特定区域展现数据指标时，数字自 0 平滑滚动增加到目标最终数值。",
    enPrompt: "Please help me implement a web motion: Count Up Animation. Animate count-up metrics from zero to the target number using easing curves on load."
  },

  // 5. 媒介图库类 (Media)
  {
    id: "image-zoom",
    zhName: "图片轻微放大",
    enName: "Image Zoom on Hover",
    category: "图片",
    description: "增添图片的自然呼吸感。当鼠标滑过图片容器时，图片平滑微幅放大，配合外层溢出隐藏，张力十足。",
    enDescription: "Elegantly scales images within overflow-hidden card containers on hover for a natural breathing effect.",
    demoHtml: '<div class="preview-image-zoom"><div class="preview-image-inner"></div></div>',
    prompt: "请帮我实现一个网页动效：图片轻微放大（Subtle Scale / Image Zoom on Hover）。卡片 hover 时，内部图片微幅放大，同时容器圆角不变且超出隐藏。",
    enPrompt: "Please help me implement a web motion: Image Zoom on Hover. Scale the image inside an overflow-hidden card container on hover."
  },
  {
    id: "color-shift",
    zhName: "饱和度增强",
    enName: "Saturation Shift",
    category: "图片",
    description: "点亮视觉焦点。平时卡片呈现淡雅清凉或低对比，鼠标滑入瞬间画面恢复饱满明亮，过滤感极佳。",
    enDescription: "Highlights focus. Images transition from muted grayscale to vivid saturation when cursor hovers.",
    demoHtml: '<div class="preview-color-shift"><div class="preview-color-inner"></div></div>',
    prompt: "请帮我实现一个网页动效：饱和度增强（Saturation & Contrast Shift）。图片 hover 时从灰度或低饱和状态，平滑过渡到全彩明亮色彩。",
    enPrompt: "Please help me implement a web motion: Saturation Shift. Transition an image from low saturation to full color on hover."
  },
  {
    id: "mask-reveal",
    zhName: "图片遮罩揭示",
    enName: "Mask Reveal",
    category: "图片",
    description: "充满艺术策展气韵。图片在视口滑入时，通过 CSS 裁剪路径以对角滑开或圆形绽开的方式徐徐显现。",
    enDescription: "Artistic mask reveals. Images slide into view through dynamic clip-path shapes or diagonal slide lines.",
    demoHtml: '<div class="preview-mask-reveal"></div>',
    prompt: "请帮我实现一个网页动效：图片遮罩揭示（Mask Reveal / Clip-path Reveal）。图片在加载或滚动进入视口时，以左至右撕开或由圆向外揭开的遮罩动效登场。",
    enPrompt: "Please help me implement a web motion: Mask Reveal. Reveal an image using animated clip-path borders when it enters the viewport."
  },
  {
    id: "image-preview",
    zhName: "图片跟随预览",
    enName: "Hover Image Preview",
    category: "图片",
    description: "极简列表的视觉藏宝图。当光标在纯文字的目录项移动时，侧方或跟随光标浮现对应的缩略图预览。",
    enDescription: "Visual teaser. Shows a floating thumbnail image that tracks the cursor when hovering list items.",
    demoHtml: `
      <div class="preview-image-follow-text">
        <span>Portfolio Item</span>
        <div class="preview-image-follow-box"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：图片跟随预览（Hover Image Preview）。鼠标移过文字列表项时，产生跟随光标的小型卡片式预览图浮现效果。",
    enPrompt: "Please help me implement a web motion: Hover Image Preview. Display a floating thumbnail tracking the cursor when hovering list items."
  },

  // 6. 导航布局类 (Layout)
  {
    id: "underline-reveal",
    zhName: "下划线展开",
    enName: "Underline Reveal",
    category: "布局",
    description: "灵动的顶部导航交互。hover 时，文字底下的精致横线由中心点向两端延展或者从一端水平滑出。",
    enDescription: "Interactive line details. Underline slides out from the center or edge on link hover.",
    demoHtml: `
      <div class="preview-underline-text">
        Hover Item
        <div class="preview-underline-line"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：导航下划线展开（Underline Reveal）。导航项 hover 时，下划线以水平伸展（scaleX 自 0 至 1）的方式轻盈呈现。",
    enPrompt: "Please help me implement a web motion: Underline Reveal. Animate navigation link underlines using scaleX from 0 to 1 on hover."
  },
  {
    id: "layout-transition",
    zhName: "网格重排动画",
    enName: "Layout Transition",
    category: "布局",
    description: "打破生硬的筛选重组。在切换分类筛选作品时，卡片网格自适应计算坐标，以流畅的飞行过渡重组排布。",
    enDescription: "Grid items fly smoothly to their new positions during filtering rather than popping instantly.",
    demoHtml: `
      <div class="preview-layout-container">
        <div></div><div></div><div></div><div></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：网格重排动画（Layout Transition）。分类筛选项目或网格重组时，卡片不是突兀闪现，而是计算坐标平滑飞入新位置。",
    enPrompt: "Please help me implement a web motion: Layout Transition. Transition card elements smoothly to their new grid positions when filters change."
  },
  {
    id: "page-transition",
    zhName: "页面转场",
    enName: "Page Transition",
    category: "布局",
    description: "网站多页面的过渡纽带。跳转页面时展现单色幕布拉起、遮罩滑过或全屏淡出，提供无缝过渡体验。",
    enDescription: "Seamless multi-page transition. Sliding screen overlays or fading canvas curtains cover page navigation.",
    demoHtml: `
      <div class="preview-page-transition">
        <div class="preview-page-curtain"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：页面转场（Page Transition）。在用户点击链接切换路由或更新页面内容时，全屏呈现淡入淡出或侧滑幕布平移遮挡转场。",
    enPrompt: "Please help me implement a web motion: Page Transition. Transition views using full-screen sliding curtain covers on page reload."
  },
  {
    id: "accordion-expand",
    zhName: "手风琴折叠",
    enName: "Accordion Smooth Expand",
    category: "布局",
    description: "优雅的垂直内容扩充。点击面板时，内容从 0 高度以平滑曲线展开，推动其下方卡片自然沉降。",
    enDescription: "Sleek dropdown expansion. Panel expands smoothly from height zero, sliding subsequent elements downward.",
    demoHtml: `
      <div class="preview-accordion">
        <div class="preview-accordion-header">Header</div>
        <div class="preview-accordion-content"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：手风琴平滑折叠（Accordion Smooth Expand）。点击菜单或 Q&A 面板展开时，内容高度平滑展开，下方内容跟着平移位退。",
    enPrompt: "Please help me implement a web motion: Accordion Smooth Expand. Animate accordion details panels from max-height 0 to full content height."
  },
  {
    id: "noise-texture",
    zhName: "动态噪点材质",
    enName: "Dynamic Noise Texture",
    category: "反馈",
    description: "利用 SVG Turbulence 滤镜渲染出动态的颗粒噪点纹理，Hover 时改变噪点振动，带来越野工业粗野材质感。",
    enDescription: "Renders SVG feTurbulence noise frequency shifts on hover, offering premium industrial rough texture.",
    demoHtml: '<div class="preview-noise-texture"><span>NOISE</span></div>',
    prompt: "请帮我实现一个网页动效：动态噪点材质（Dynamic Noise Texture）。利用 SVG feTurbulence 噪点滤镜，在卡片或背景图层上渲染动态纤维纹路，Hover 时微调噪点频率模拟动态杂讯颗粒效果。",
    enPrompt: "Please help me implement a web motion: Dynamic Noise Texture. Render SVG feTurbulence grain overlay and shift noise frequency on hover."
  },
  {
    id: "canvas-ripple-grid",
    zhName: "交互式粒子网格",
    enName: "Interactive Ripple Grid",
    category: "悬停",
    description: "使用 HTML5 Canvas 绘制低密度的点阵。当光标划过时，粒子受重力磁吸排开，并使用胡克定律弹力回弹复位。",
    enDescription: "HTML5 Canvas particle matrix. Hover shifts points away via hookian spring mechanics, returning on leave.",
    demoHtml: '<div class="preview-ripple-grid"><canvas></canvas></div>',
    prompt: "请帮我实现一个网页动效：Canvas 交互式粒子网格（Interactive Ripple Grid）。在 Canvas 画布上绘制低密度的粒子点阵，计算鼠标位置向量，使其随鼠标滑过而排开，鼠标移开后像橡皮筋一样平滑弹性回弹复位。",
    enPrompt: "Please help me implement a web motion: Canvas Interactive Ripple Grid. Draw particle dots that shift away from the cursor and rebound."
  },
  {
    id: "svg-path-morphing",
    zhName: "路径形变果冻按钮",
    enName: "SVG Path Jelly Morphing",
    category: "反馈",
    description: "点击时 SVG 的矢量 path 进行贝塞尔曲线点插值变形，从基础按钮变成扁平气泡或果冻，伴随弹性震颤。",
    enDescription: "Bouncy shape interpolation. Morph button borders into rounded gel blobs on click.",
    demoHtml: '<div class="preview-path-morphing"><button class="btn-morphing-effect">Morph Me</button></div>',
    prompt: "请帮我实现一个网页动效：SVG 路径形变果冻按钮（SVG Path Morphing Button）。当点击或 Hover 按钮时，SVG 背景路径的矢量坐标进行贝塞尔点平滑插值过渡，使其形状产生果冻拉伸并伴随回弹震颤反馈。",
    enPrompt: "Please help me implement a web motion: SVG Path Morphing Button. Interpolate SVG path coordinates for gel shape morphs."
  },
  {
    id: "text-wave-hover",
    zhName: "文字波浪反弹悬停",
    enName: "Text Wave Ripple Hover",
    category: "悬停",
    description: "标题文字以单个字符拆分，鼠标滑过时应用立方贝塞尔曲线和延迟差，字母呈波浪状平滑向上反弹。",
    enDescription: "Sequence text waves. Hover triggers character offset ripples using cubic-bezier curves.",
    demoHtml: '<div class="preview-text-wave"><span data-text="WAVE">WAVE</span></div>',
    prompt: "请帮我实现一个网页动效：文字波浪反弹悬停（Text Wave Ripple Hover）。将展示标题拆分为单个字符，在鼠标 Hover 时通过 transition-delay 差值和 cubic-bezier 弹性曲线，让字母呈波浪状顺序向上反弹。",
    enPrompt: "Please help me implement a web motion: Text Wave Ripple Hover. Split text and stagger letter translation offsets on hover."
  }
];

const categories = ["全部", "进入", "滚动", "悬停", "反馈", "图片", "布局"];

/* ==========================================================================
   Translation Config
   ========================================================================== */
let currentLang = localStorage.getItem("lang") || "zh";

const uiTranslations = {
  zh: {
    heroTitle: "克制的网页动效灵感",
    searchPlaceholder: "搜索动效名称或描述...",
    emptyTitle: "未找到匹配的动效",
    emptyDesc: "请尝试搜索其他关键词，或者切换分类标签。",
    toastCopySuccess: "提示词已复制到剪贴板！",
    exploreNav: "探索动效",
    githubNav: "开源仓库",
    footerNote: "动效应当服务于信息传递，克制才是最高级的设计。",
    copyPromptTitle: "复制提示词"
  },
  en: {
    heroTitle: "Restrained Web Motion Inspiration",
    searchPlaceholder: "Search motion name or description...",
    emptyTitle: "No matching motions found",
    emptyDesc: "Please try searching for other keywords or switching category tags.",
    toastCopySuccess: "Prompt copied to clipboard!",
    exploreNav: "Explore",
    githubNav: "GitHub",
    footerNote: "Motion should serve information delivery; restraint is the ultimate design.",
    copyPromptTitle: "Copy Prompt"
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

/* ==========================================================================
   State Variables
   ========================================================================== */
let activeCategory = "全部";
let searchQuery = "";

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const motionGrid = document.getElementById("motionGrid");
const filterContainer = document.getElementById("filterContainer");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const toastNotification = document.getElementById("toastNotification");
const progressBar = document.getElementById("progressBar");
const navbar = document.getElementById("navbar");

/* ==========================================================================
   Functions & Core Logic
   ========================================================================== */

// 1. Render Category Filter Tabs
function renderFilters() {
  filterContainer.innerHTML = categories.map(category => {
    const displayName = categoryTranslations[currentLang][category] || category;
    return `
      <button 
        class="filter-btn ${category === activeCategory ? 'active' : ''}" 
        role="tab" 
        aria-selected="${category === activeCategory}" 
        data-category="${category}"
      >
        ${displayName}
      </button>
    `;
  }).join("");
  
  // Attach Tab Event Listeners
  filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      activeCategory = e.target.dataset.category;
      renderFilters();
      renderCards();
    });
  });
}

// 2. Render Motion Cards based on Filters & Search
function renderCards() {
  const filteredMotions = motions.filter(motion => {
    const matchesCategory = activeCategory === "全部" || motion.category === activeCategory;
    const searchString = `${motion.zhName} ${motion.enName} ${(currentLang === 'en' ? motion.enDescription : motion.description)} ${motion.category}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle Empty State
  if (filteredMotions.length === 0) {
    motionGrid.style.opacity = "0";
    setTimeout(() => {
      motionGrid.style.display = "none";
      emptyState.style.display = "block";
    }, 200);
  } else {
    emptyState.style.display = "none";
    motionGrid.style.display = "grid";
    
    // Smooth transition list re-render
    motionGrid.style.opacity = "0";
    setTimeout(() => {
      motionGrid.innerHTML = filteredMotions.map(motion => {
        const catName = categoryTranslations[currentLang][motion.category] || motion.category;
        const descText = currentLang === "en" ? (motion.enDescription || motion.description) : motion.description;
        const promptText = currentLang === "en" ? (motion.enPrompt || motion.prompt) : motion.prompt;
        const ariaLabel = currentLang === "en" ? `${motion.enName} motion demo simulation` : `${motion.zhName} 动效演示模拟`;
        const copyTitle = uiTranslations[currentLang].copyPromptTitle;
        
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
            <div class="preview-canvas" aria-label="${ariaLabel}">
              ${motion.demoHtml}
            </div>
            <div class="card-content">
              <span class="card-tag">${catName}</span>
              <div class="card-title-row">
                ${titleHtml}
              </div>
              <p class="card-desc">${descText}</p>
              <div class="card-actions">
                <button class="btn-copy-prompt" type="button" data-prompt="${promptText}" title="${copyTitle}" aria-label="${copyTitle}">
                  <span class="copy-icon" aria-hidden="true"><svg class="icon icon-copy" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></span>
                </button>
              </div>
            </div>
          </article>
        `;
      }).join("");
      
      motionGrid.style.opacity = "1";
      
      // Bind copy buttons in grid
      motionGrid.querySelectorAll(".btn-copy-prompt").forEach(button => {
        button.addEventListener("click", () => {
          const promptText = button.getAttribute("data-prompt");
          copyToClipboard(promptText);
        });
      });
      
      // Bind card click navigation to detail page
      motionGrid.querySelectorAll(".motion-card").forEach(card => {
        card.addEventListener("click", (e) => {
          // If the click is on the copy button or inside it, don't navigate
          if (e.target.closest(".btn-copy-prompt")) {
            return;
          }
          const motionId = card.id.replace("card-", "");
          window.open(`detail.html?id=${motionId}`, '_blank');
        });
      });
      
      // Extra code logic for visual simulation updates in JavaScript where CSS isn't enough (e.g. Count Up loop)
      initDynamicSimulations();
      
    }, 200);
  }
}

// Helper to run JS-driven preview simulations if any (e.g., number counting up)
function initDynamicSimulations() {
  const countBoxes = document.querySelectorAll(".preview-count-box");
  countBoxes.forEach(box => {
    // If this box is already active, don't spin up another loop
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
            // Check if still connected before restarting
            const currentBox = document.getElementById(box.closest("article").id)?.querySelector(".preview-count-box");
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
      .catch(err => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

// Fallback method for insecure contexts or older browsers
function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed"; // Avoid scrolling page
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
  toastNotification.classList.add("show");
  // Active tactile state on clicked buttons
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2500);
}

// 5. Scroll Progress & Header shadow effects
function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolledVal = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  
  // Update progress bar
  progressBar.style.width = `${scrolledVal}%`;
  
  // Navbar floating shadow state change
  if (scrollTop > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
  // Save scroll position for back-button navigation fallback
  sessionStorage.setItem("home_scroll_y", scrollTop);
}

// 6. Theme & Mode Switching Handler
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

// 7. Language Translation Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  translatePage();
}

function translatePage() {
  const t = uiTranslations[currentLang];
  
  // Set html element lang
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
  
  // Navbar links
  const exploreLink = document.querySelector(".nav-links a[href='#gallery']");
  if (exploreLink) exploreLink.textContent = t.exploreNav;
  
  const githubLink = document.querySelector(".nav-links a[href*='github.com']");
  if (githubLink) githubLink.textContent = t.githubNav;
  
  // Hero section
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
  
  // Search placeholder
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
    searchInput.setAttribute("aria-label", currentLang === "zh" ? "搜索动效" : "Search motions");
  }
  
  // Empty state
  const emptyH3 = document.querySelector("#emptyState h3");
  if (emptyH3) emptyH3.textContent = t.emptyTitle;
  const emptyP = document.querySelector("#emptyState p");
  if (emptyP) emptyP.textContent = t.emptyDesc;
  
  // Footer
  const footerNote = document.querySelector(".footer-note");
  if (footerNote) footerNote.textContent = t.footerNote;
  
  // Toast message
  const toastMsg = document.querySelector("#toastNotification .toast-message");
  if (toastMsg) toastMsg.textContent = t.toastCopySuccess;
  
  // Re-render categories and grid to apply translated texts
  renderFilters();
  renderCards();
}

// 8. Background Image Preloader
function preloadImages() {
  const imageUrls = [
    "./tilt_card_bg.png",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
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

// 9. Search Input Handler
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderCards();
});

// Smooth scroll logic for secondary hero action button
const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector("#gallery");
    target.scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   Initialization
   ========================================================================== */
function init() {
  // Sort motions to put cool/fancy ones first
  const coolOrder = [
    "tilt-card",
    "parallax-scrolling",
    "custom-cursor",
    "noise-texture",
    "canvas-ripple-grid",
    "magnetic-effect",
    "spring-motion",
    "layout-transition",
    "horizontal-gallery",
    "theme-switch"
  ];
  motions.sort((a, b) => {
    const idxA = coolOrder.indexOf(a.id);
    const idxB = coolOrder.indexOf(b.id);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return 0;
  });

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
  
  // Restore scroll position if back-navigated
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
  
  // Idle-pre-load detailed assets
  preloadImages();
}

document.addEventListener("DOMContentLoaded", init);
