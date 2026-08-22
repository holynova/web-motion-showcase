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
  },
  // --- 16 New Trending Motions (35-50) ---
  {
    id: "spotlight-card",
    zhName: "光标聚光灯卡片",
    enName: "Spotlight Border Card",
    category: "悬停",
    description: "Linear / Vercel 标志性卡片。鼠标移动时，径向渐变聚光灯随光标在卡片群中漫游，照亮边框高光与背景纹理。",
    enDescription: "Linear/Vercel style card. Radial spotlight follows the cursor across cards, illuminating border highlights.",
    demoHtml: `
      <div class="preview-spotlight-wrap">
        <div class="preview-spotlight-card"><div class="preview-spotlight-glow"></div><span>01</span></div>
        <div class="preview-spotlight-card"><div class="preview-spotlight-glow"></div><span>02</span></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：光标聚光灯卡片（Spotlight Border Card）。监听鼠标在卡片容器上的移动坐标，通过 CSS 变量 --mouse-x 和 --mouse-y 动态更新伪元素上的 radial-gradient 径向渐变，使柔和的聚光灯光晕跟随光标照亮卡片内部与边框。",
    enPrompt: "Please help me implement a web motion: Spotlight Border Card. Track mouse coordinates on cards and update CSS variables --mouse-x and --mouse-y to render a glowing radial gradient spotlight."
  },
  {
    id: "border-beam",
    zhName: "流光环形边框",
    enName: "Border Beam Animation",
    category: "进入",
    description: "Magic UI 经典动效。一道高亮炫彩渐变光柱沿着圆角卡片的边缘无缝周游循环，极具科技高级感。",
    enDescription: "Magic UI classic. A glowing gradient beam seamlessly travels along the rounded card perimeter.",
    demoHtml: '<div class="preview-border-beam-box"><div class="preview-border-beam-ray"></div><div class="preview-border-beam-inner">BEAM</div></div>',
    prompt: "请帮我实现一个网页动效：流光环形边框（Border Beam Animation）。在圆角卡片边框上绘制一段带有高斯模糊和色彩渐变的光柱，利用 CSS conic-gradient 或 offset-path 使光柱沿着矩形外边框持续匀速绕圈旋转。",
    enPrompt: "Please help me implement a web motion: Border Beam Animation. Create an animated gradient ray that travels continuously along the container's border using conic-gradient or offset-path."
  },
  {
    id: "animated-flow-beams",
    zhName: "流程连线脉冲光波",
    enName: "Animated Flow Beams",
    category: "进入",
    description: "AI 工作流与系统拓扑图神器。在多个 UI 节点间以贝塞尔曲线相连，发光的脉冲粒子沿着线条持续流动传输。",
    enDescription: "AI workflow visual. Glowing pulse particles continuously travel along SVG bezier paths between nodes.",
    demoHtml: `
      <div class="preview-flow-beams-wrap">
        <div class="preview-beam-node n1"></div>
        <div class="preview-beam-line"><div class="preview-beam-pulse"></div></div>
        <div class="preview-beam-node n2"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：流程连线脉冲光波（Animated Flow Beams）。在多个节点之间绘制 SVG 平滑贝塞尔曲线，利用 stroke-dasharray 和 stroke-dashoffset 制作连续向前流动的发光能量脉冲粒子，模拟数据流动。",
    enPrompt: "Please help me implement a web motion: Animated Flow Beams. Draw SVG bezier paths between UI nodes and animate glowing pulse waves flowing along the paths."
  },
  {
    id: "text-scramble",
    zhName: "黑客密码解密文本",
    enName: "Text Scramble Decrypt",
    category: "反馈",
    description: "Cyberpunk 风格文本动效。加载或悬停时字符像矩阵密码一样高速随机滚动，随后逐字解密定格为真实文案。",
    enDescription: "Cyberpunk text decoding. Characters cycle through random cipher glyphs before locking into words.",
    demoHtml: '<div class="preview-text-scramble"><span class="scramble-span">DECRYPT</span></div>',
    prompt: "请帮我实现一个网页动效：黑客密码解密文本（Text Scramble Decrypt）。当触发时，通过 JavaScript 高频替换文字中的字符为随机特殊符号（如 !<>-_\\/[]{}—=+*^?#_），随后由左至右逐字收敛锁定为原始文本。",
    enPrompt: "Please help me implement a web motion: Text Scramble Decrypt. Rapidly randomize characters with cipher glyphs and progressively resolve them left-to-right to the final text."
  },
  {
    id: "dynamic-island",
    zhName: "灵动岛悬浮胶囊",
    enName: "Dynamic Island Morph",
    category: "反馈",
    description: "苹果灵动岛多态交互。极简黑色小药丸，点击时以平滑弹性阻尼物理曲线变形展开为音乐面板、通话或通知卡片。",
    enDescription: "Apple Dynamic Island interaction. Compact capsule morphs smoothly into music player or notification cards with spring physics.",
    demoHtml: '<div class="preview-dynamic-island"><div class="island-dot"></div><div class="island-bar"></div></div>',
    prompt: "请帮我实现一个网页动效：灵动岛悬浮胶囊（Dynamic Island Morph）。顶部居中的黑色胶囊卡片，支持 Compact、Music、Alert 多种状态切换，展开与收起时带有自然的弹性阻尼贝塞尔过渡，内容元素平滑淡入交替。",
    enPrompt: "Please help me implement a web motion: Dynamic Island Morph. Morph a centered black pill into expanded music/alert cards using spring-like cubic-bezier physics."
  },
  {
    id: "macos-dock",
    zhName: "拟物鱼眼缩放 Dock",
    enName: "macOS Fisheye Dock",
    category: "悬停",
    description: "经典桌面 Dock 拟物栏。鼠标在底部滑动时，图标根据与光标的距离呈现非线性的高斯鱼眼放大与浮动回弹。",
    enDescription: "Classic macOS dock. Icons scale up based on a cosine/gaussian distance curve as the cursor glides across.",
    demoHtml: `
      <div class="preview-macos-dock">
        <div class="dock-mini-icon"></div>
        <div class="dock-mini-icon active"></div>
        <div class="dock-mini-icon"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：macOS 拟物鱼眼缩放 Dock 栏（macOS Fisheye Dock）。在底部固定悬浮的图标栏中监听 mousemove，根据光标与各个图标中心的水平距离计算高斯/余弦缩放系数，使光标周围图标产生连贯的鱼眼放大波浪。",
    enPrompt: "Please help me implement a web motion: macOS Fisheye Dock. Scale dock icons smoothly based on cursor proximity using a gaussian distance function."
  },
  {
    id: "card-stack-swipe",
    zhName: "层叠卡片手势抽卡",
    enName: "Stack Card Swipe",
    category: "布局",
    description: "Apple Wallet / 探探风格层叠卡片。支持点击或拖拽将顶层卡片飞出，底层卡片平滑缩放补位上升。",
    enDescription: "Layered card stack. Flick the top card away while background cards scale up and take its place.",
    demoHtml: `
      <div class="preview-card-stack">
        <div class="stack-card c3"></div>
        <div class="stack-card c2"></div>
        <div class="stack-card c1"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：层叠卡片手势抽卡（Stack Card Swipe）。多张卡片以 z-index 和 translateY/scale 叠加放置，用户点击或拖拽最上层卡片使其带有旋转飞出视口，后续卡片平滑放大升入顶层，支持无限循环抽取。",
    enPrompt: "Please help me implement a web motion: Stack Card Swipe. Stack layered cards and animate top cards flying away on click/swipe while lower cards scale up seamlessly."
  },
  {
    id: "spring-drawer",
    zhName: "弹性手势阻尼抽屉",
    enName: "Spring Sheet Drawer",
    category: "反馈",
    description: "现代 App 级底部/侧边抽屉。支持触摸拖拽、阻尼滑动与手势速率感应，松手自动依附或回弹关闭。",
    enDescription: "Native-like bottom drawer. Supports smooth drag gestures, spring damping, and swipe-to-dismiss.",
    demoHtml: `
      <div class="preview-spring-drawer">
        <div class="drawer-handle"></div>
        <div class="drawer-content-stub"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：弹性手势阻尼抽屉（Spring Sheet Drawer）。实现一个底部弹出的模态抽屉，支持手指/鼠标拖拽顶部 Handle 控制高度，带有越界阻尼感，松手根据滑动距离与速度决定贴靠展开或回弹收起。",
    enPrompt: "Please help me implement a web motion: Spring Sheet Drawer. Build a bottom drawer with drag gestures, rubber-band resistance, and smooth snap points."
  },
  {
    id: "confetti-explosion",
    zhName: "物理重力礼花爆炸",
    enName: "Confetti Explosion Burst",
    category: "反馈",
    description: "成就与支付成功必备。点击瞬间从中心喷射出五彩缤纷的纸屑颗粒，并在重力、阻力与旋转模拟下优雅下落散开。",
    enDescription: "Celebratory confetti blast. Spawns colorful particle fragments on click governed by gravity and air drag physics.",
    demoHtml: `
      <div class="preview-confetti-btn">
        <div class="confetti-spark s1"></div>
        <div class="confetti-spark s2"></div>
        <div class="confetti-spark s3"></div>
        <span>🎉 Celebrate</span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：物理重力礼花爆炸（Confetti Explosion Burst）。使用 HTML5 Canvas 在按钮点击瞬间生成 100+ 随机颜色、形状、初始速度与角度的粒子，通过物理公式模拟重力加速度、风阻与 3D 自转，形成真实的礼花漫天飞散效果。",
    enPrompt: "Please help me implement a web motion: Confetti Explosion. Spawn Canvas confetti particles on click with physics velocity, gravity, and 3D rotation."
  },
  {
    id: "magnetic-glow-button",
    zhName: "磁吸吸附光晕按钮",
    enName: "Magnetic Glow Button",
    category: "悬停",
    description: "Awwwards 级高级按钮。光标靠近时按钮主动朝光标方向位移吸附，内部伴随光晕扩散与触感粘滞。",
    enDescription: "Award-winning button. Button magnetically pulls toward the cursor with shifting internal ambient glow.",
    demoHtml: '<div class="preview-mag-glow-btn"><div class="btn-glow-ring"></div><span>Explore</span></div>',
    prompt: "请帮我实现一个网页动效：磁吸吸附光晕按钮（Magnetic Glow Button）。计算光标与按钮中心的距离向量，在感应半径内对按钮应用 translate 磁吸吸附偏移，并在按钮内部渲染跟随光标角度的光晕扩散图层，移出时光滑弹回原位。",
    enPrompt: "Please help me implement a web motion: Magnetic Glow Button. Apply magnetic translation toward the cursor within a threshold radius, combined with an internal moving glow layer."
  },
  {
    id: "metallic-shimmer-text",
    zhName: "金属光泽扫光文字",
    enName: "Metallic Shimmer Text",
    category: "进入",
    description: "苹果发布会级标题质感。高精度金属质感渐变在深色文字上缓缓扫过，散发奢华流光溢彩的工业设计美感。",
    enDescription: "Apple Keynote title aesthetic. A metallic specular sheen sweeps smoothly across high-contrast typography.",
    demoHtml: '<div class="preview-metallic-text"><span class="shimmer-txt">TITANIUM</span></div>',
    prompt: "请帮我实现一个网页动效：金属光泽扫光文字（Metallic Shimmer Text）。使用 background-clip: text 和多段高对比金属渐变（Silver/Gold），配合 keyframes 沿 45 度对角线平滑平移 background-position，创造出奢华的金属光影流淌效果。",
    enPrompt: "Please help me implement a web motion: Metallic Shimmer Text. Animate high-contrast linear gradient reflections across text using background-clip: text."
  },
  {
    id: "rolling-number-odometer",
    zhName: "机械滚轮数字翻牌器",
    enName: "Rolling Number Odometer",
    category: "反馈",
    description: "老虎机与机械仪表盘质感。数值变动时，每位数字像滚轮一样纵向旋转翻滚过渡，数字感与仪式感拉满。",
    enDescription: "Mechanical slot-machine counter. Each digit rolls vertically along an internal column with staggered easing.",
    demoHtml: `
      <div class="preview-odometer">
        <div class="odo-col"><div class="odo-ribbon"><span>1</span><span>8</span><span>9</span></div></div>
        <div class="odo-col"><div class="odo-ribbon"><span>4</span><span>5</span><span>6</span></div></div>
        <div class="odo-col"><div class="odo-ribbon"><span>2</span><span>7</span><span>0</span></div></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：机械滚轮数字翻牌器（Rolling Number Odometer）。将多位数字拆分为独立的竖向列，每列包含 0-9 数字序列，当数值更新时通过 translateY 平滑滚动至目标数字，配合各列错开的 transition-delay 营造机械翻牌效果。",
    enPrompt: "Please help me implement a web motion: Rolling Number Odometer. Build vertical columns containing 0-9 digits and animate their translateY offsets with staggered delays."
  },
  {
    id: "bento-grid-stagger",
    zhName: "便当网格交错入场",
    enName: "Bento Grid Stagger",
    category: "布局",
    description: "Apple / Linear 标志性非对称 Bento 排版。滚动进入视口时按权重与空间顺序交错弹入，并自带微光扫过。",
    enDescription: "Apple/Linear Bento layout. Asymmetrical grid cells pop in sequentially with staggered delays and border glints.",
    demoHtml: `
      <div class="preview-bento-grid">
        <div class="bento-box b1"></div>
        <div class="bento-box b2"></div>
        <div class="bento-box b3"></div>
        <div class="bento-box b4"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：便当网格交错入场（Bento Grid Stagger）。使用 CSS Grid 创建 2x2 与多跨度的非对称 Bento 结构，当网格进入视口时，子卡片按照空间顺序以 cubic-bezier(0.16, 1, 0.3, 1) 错峰放大淡入，并伴随边框高光。",
    enPrompt: "Please help me implement a web motion: Bento Grid Stagger. Construct an asymmetric CSS Grid Bento box and animate card reveals with staggered timing."
  },
  {
    id: "scroll-drawn-svg",
    zhName: "滚动手绘线条勾勒",
    enName: "Scroll-Drawn SVG Path",
    category: "滚动",
    description: "Stripe 首页同款叙事。页面向下滚动时，复杂的矢量线条与产品架构轮廓依照绝对滚动百分比精准手绘呈现。",
    enDescription: "Stripe-style scroll storytelling. SVG paths trace out dynamically in lockstep with page scroll depth.",
    demoHtml: `
      <div class="preview-scroll-svg">
        <svg viewBox="0 0 100 40"><path d="M5,20 Q25,5 50,20 T95,20" class="svg-stroke-path"></path></svg>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：滚动手绘线条勾勒（Scroll-Drawn SVG Path）。测量 SVG path 的 getTotalLength()，初始化 stroke-dasharray 和 stroke-dashoffset 为全长，监听窗口滚动进度，将滚动百分比实时映射到 dashoffset 实现手绘画线效果。",
    enPrompt: "Please help me implement a web motion: Scroll-Drawn SVG Path. Bind SVG strokeDashoffset to the page scroll percentage using getTotalLength()."
  },
  {
    id: "split-text-3d-wave",
    zhName: "文字 3D 逐字波浪飞入",
    enName: "Split-Text 3D Wave",
    category: "进入",
    description: "Codrops 封面级排版。大标题文字在入场时拆分为单字，每个字符带有独立的 3D 空间翻折（rotateX）与模糊递进。",
    enDescription: "Editorial 3D typography. Splits headlines into characters that flip in from rotateX(90deg) with perspective waves.",
    demoHtml: '<div class="preview-split-3d"><span class="ch-3d">F</span><span class="ch-3d">L</span><span class="ch-3d">I</span><span class="ch-3d">P</span></div>',
    prompt: "请帮我实现一个网页动效：文字 3D 逐字波浪飞入（Split-Text 3D Wave）。在包含 perspective 透视的容器中将文本拆分为 span 字符，初始状态设置 transform: rotateX(90deg) translateY(30px) filter: blur(8px)，通过错开的延时让字符如波浪般顺滑翻折归位。",
    enPrompt: "Please help me implement a web motion: Split-Text 3D Wave. Split text into spans with 3D rotateX and perspective, staggering character arrivals sequentially."
  },
  {
    id: "card-sticky-stacking",
    zhName: "滚动卡片层叠固化",
    enName: "Card Sticky Stacking",
    category: "滚动",
    description: "现代产品介绍页标配。向下滚动时卡片依次在视口顶部吸附固化，后续卡片从下方覆盖上来并伴随缩放与变暗。",
    enDescription: "Product narrative stack. Cards pin to viewport top on scroll, stacking and scaling down as new cards overlay.",
    demoHtml: `
      <div class="preview-sticky-stack">
        <div class="stack-slice s1"></div>
        <div class="stack-slice s2"></div>
        <div class="stack-slice s3"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：滚动卡片层叠固化（Card Sticky Stacking）。使用 position: sticky 配合 top 偏移，使多张大卡片在向下滚动时依次吸顶停靠，后一张卡片覆盖上去的同时，前一张卡片通过 scale(0.95) 与 brightness(0.8) 产生纵深层叠堆积感。",
    enPrompt: "Please help me implement a web motion: Card Sticky Stacking. Use position: sticky with progressive top offsets and scale transforms to create stacked card decks on scroll."
  },
  {
    id: "aurora-background",
    zhName: "极光渐变弥散流光",
    enName: "Aurora Glow Background",
    category: "进入",
    description: "Siri / Apple Intelligence 质感流体光晕。多层高斯模糊与多色径向渐变网格，通过连续流体位移与色相轻微自旋，营造极光般的梦幻背景。",
    enDescription: "Apple-inspired ethereal flow. Layered radial gradients and high-blur meshes orbiting smoothly to create ambient aurora illumination.",
    demoHtml: `
      <div class="preview-aurora-glow">
        <div class="aurora-blob a1"></div>
        <div class="aurora-blob a2"></div>
        <div class="aurora-blob a3"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：极光渐变弥散流光（Aurora Glow Background）。在深色或纯色背景上放置多个带有 filter: blur(60px) 的绝对定位径向渐变色块，运用 @keyframes 结合 transform: translate() rotate() 与 opacity 呼吸律动，创造高级柔和的极光背景动效。",
    enPrompt: "Please help me implement a web motion: Aurora Glow Background. Combine heavy gaussian blur layers with radial gradients animating along continuous parametric curves."
  },
  {
    id: "meteors-background",
    zhName: "流星夜空划过特效",
    enName: "Meteors Shower Background",
    category: "进入",
    description: "深邃夜空氛围动效。带有渐变尾迹的倾斜光束以随机延迟和速度从右上角滑向左下角，伴随头部光斑微闪与渐隐。",
    enDescription: "Ambient cosmic trail. Angled glowing streaks shooting across dark cards with random delays, subtle head glows, and linear trails.",
    demoHtml: `
      <div class="preview-meteors-box">
        <span class="m-beam m1"></span>
        <span class="m-beam m2"></span>
        <span class="m-beam m3"></span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：流星夜空划过特效（Meteors Shower Background）。通过纯 CSS 生成倾斜 215deg 的流星光束，伪元素头部添加圆点发光阴影，主体使用 linear-gradient 尾迹渐变，通过 @keyframes 从屏幕外滑入并淡出消失。",
    enPrompt: "Please help me implement a web motion: Meteors Shower Background. Render angled meteor streaks with glowing head points and fading gradients shooting across containers."
  },
  {
    id: "typewriter-cycle",
    zhName: "打字机多词轮播交替",
    enName: "Typewriter Multi-Text Cycle",
    category: "进入",
    description: "大标题标语轮播利器。真实光标伴随敲击节奏逐字键入，停留数秒后反向极速删除，无缝无刷新切换下一个关键词。",
    enDescription: "Dynamic headline typewriter. Types words character by character with rhythmic pauses and rapid backspace deletion for cycling keywords.",
    demoHtml: `
      <div class="preview-typewriter">
        <span class="tw-text">Designers</span>
        <span class="tw-cursor"></span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：打字机多词轮播交替（Typewriter Multi-Text Cycle）。使用 JS 定时器动态截取字符串，实现逐字输入、自然停顿、快速退格删除，并循环切换数组中的关键词，右侧附带闪烁的竖线光标。",
    enPrompt: "Please help me implement a web motion: Typewriter Multi-Text Cycle. Rhythmic typewriter simulation cycling through word lists with dynamic character slicing and blinking caret."
  },
  {
    id: "twinkling-starfield",
    zhName: "闪烁微光星空点阵",
    enName: "Twinkling Starfield Particles",
    category: "进入",
    description: "深色卡片魔法高光。随机分布的微型星芒粒子以不同周期呼吸闪烁与自旋，光标移动时产生极轻微的 2.5D 视差推移。",
    enDescription: "Subtle cosmic sparkle. Multi-sized twinkling star particles breathing and pulsing at varied frequencies with subtle cursor parallax.",
    demoHtml: `
      <div class="preview-starfield">
        <span class="star-pt s1">✦</span>
        <span class="star-pt s2">✧</span>
        <span class="star-pt s3">✦</span>
        <span class="star-pt s4">✧</span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：闪烁微光星空点阵（Twinkling Starfield Particles）。在容器内生成随机坐标的微型星芒（✦ / ✧），各自分配随机动画延时与缩放呼吸周期，模拟夜空繁星闪烁的静谧高级氛围。",
    enPrompt: "Please help me implement a web motion: Twinkling Starfield Particles. Scatter glowing multi-frequency star glyphs with staggered keyframe pulsing and parallax."
  },
  {
    id: "cursor-trail",
    zhName: "光标轨迹动态拖影",
    enName: "Interactive Cursor Trail",
    category: "悬停",
    description: "创意工作室品牌秀场。当鼠标在页面快速滑过时，在历史坐标路径上留下一串带惯性滞后、随时间渐隐消散的微缩缩略图或光斑粒子。",
    enDescription: "Creative agency gesture trail. Leaves a fluid ribbon of decaying image chips or glowing dots lagging smoothly along the pointer's velocity path.",
    demoHtml: `
      <div class="preview-cursor-trail">
        <div class="trail-ghost g1"></div>
        <div class="trail-ghost g2"></div>
        <div class="trail-ghost g3"></div>
        <div class="trail-head"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：光标轨迹动态拖影（Interactive Cursor Trail）。监听 mousemove 事件并在鼠标移动距离超过阈值时生成历史坐标节点，使用 requestAnimationFrame 驱动历史节点按照生命周期逐步缩小和透明度衰减，并在 500ms 后自动清理 DOM。",
    enPrompt: "Please help me implement a web motion: Interactive Cursor Trail. Spawn ephemeral trailing nodes on mouse trajectory that scale down and fade with inertia."
  },
  {
    id: "direction-aware-hover",
    zhName: "方向感知卡片划入",
    enName: "Direction-Aware Hover Reveal",
    category: "悬停",
    description: "智能感知光标切入方向。三角函数计算光标从上/下/左/右何处进入卡片，遮罩层严格从光标进入侧平滑抽出，离开时沿对应方向滑出。",
    enDescription: "Vector-aware hover overlay. Calculates entry angle via trigonometry so the overlay slides in strictly from the cursor's entry edge and exits accordingly.",
    demoHtml: `
      <div class="preview-dir-card">
        <div class="dir-surface">Hover Direction</div>
        <div class="dir-curtain"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：方向感知卡片划入（Direction-Aware Hover Reveal）。在 mouseenter / mouseleave 事件中通过 Math.atan2 计算鼠标相对卡片中心的进入角度（0: 上, 1: 右, 2: 下, 3: 左），动态调整浮层的起始与目标 transform: translate()，实现跟随鼠标方向的抽拉效果。",
    enPrompt: "Please help me implement a web motion: Direction-Aware Hover Reveal. Compute cursor entry/exit quadrants using atan2 to animate drawer overlays from 4 cardinal directions."
  },
  {
    id: "grid-dot-proximity",
    zhName: "点阵网格近邻感应高亮",
    enName: "Grid Dot Matrix Proximity",
    category: "悬停",
    description: "极客开发控制台背景。整齐排列的微型圆点阵列，当光标靠近时，以光标为中心半径内的点阵产生缩放放大与色彩增亮，远离后平滑衰减。",
    enDescription: "Proximity dot illumination. Regular matrix of micro-dots that scale and illuminate when the cursor approaches within an activation radius.",
    demoHtml: `
      <div class="preview-dot-grid">
        <div class="d-cell active"></div>
        <div class="d-cell near"></div>
        <div class="d-cell"></div>
        <div class="d-cell near"></div>
        <div class="d-cell"></div>
        <div class="d-cell"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：点阵网格近邻感应高亮（Grid Dot Matrix Proximity）。在 Canvas 或 DOM Grid 中绘制均匀点阵，在 mousemove 时计算每个点到光标的距离 d，根据距离映射 scale(1 -> 2.5) 与 opacity(0.2 -> 1.0)，离开时通过 transition 平滑复位。",
    enPrompt: "Please help me implement a web motion: Grid Dot Matrix Proximity. Scale and illuminate arrayed dots inversely proportional to Euclidean distance from mouse position."
  },
  {
    id: "glass-glare-tilt",
    zhName: "镜面菲涅尔反光 3D 卡片",
    enName: "Glass Glare Tilt Card",
    category: "悬停",
    description: "高端会员卡与资产卡片。在 3D 透视倾斜基础上叠加对角线物理光斑，卡片转动时光斑在磨砂玻璃表面产生真实的漫反射位移。",
    enDescription: "Luxury reflective tilt card. Combines 3D perspective orientation with a dynamic specular sheen layer tracking mouse angles.",
    demoHtml: `
      <div class="preview-glare-card">
        <div class="glare-foil"></div>
        <div class="glare-chip">✦ VIP BLACK</div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：镜面菲涅尔反光 3D 卡片（Glass Glare Tilt Card）。在卡片 3D 透视旋转的同时，卡片内部叠加一层带 linear-gradient(135deg, rgba(255,255,255,0.4), transparent) 的高光层，高光层根据鼠标相对坐标反向位移，产生逼真的玻璃反光效果。",
    enPrompt: "Please help me implement a web motion: Glass Glare Tilt Card. Pair 3D perspective rotation with a specular highlight sheen layer translating inversely to simulate glass refraction."
  },
  {
    id: "sliding-indicator-tabs",
    zhName: "滑动指示器分段标签页",
    enName: "Sliding Indicator Tabs",
    category: "反馈",
    description: "顶流应用标配分段控制器。点击切换 Tab 选项时，背后的药丸高亮胶囊根据目标元素的 offsetLeft 与 offsetWidth，以弹簧阻尼曲线平滑滑动与拉伸变形。",
    enDescription: "Segmented indicator pill. Active highlight bubble smoothly glides, squashes, and snaps to target tab dimensions using spring physics.",
    demoHtml: `
      <div class="preview-sliding-tabs">
        <div class="tab-pill-active"></div>
        <span class="tab-opt active">Overview</span>
        <span class="tab-opt">Docs</span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：滑动指示器分段标签页（Sliding Indicator Tabs）。Tab 栏内设置一个绝对定位的背景高亮药丸，切换 Tab 时读取目标按钮的 offsetLeft 和 offsetWidth，通过 transform: translateX() 与 width 配合 spring 弹性曲线平滑滑向目标项。",
    enPrompt: "Please help me implement a web motion: Sliding Indicator Tabs. Measure target tab offsetLeft and offsetWidth to glide an absolute background pill with elastic transition."
  },
  {
    id: "expanding-fab-menu",
    zhName: "折叠展开浮动操作岛",
    enName: "Expanding FAB Island Menu",
    category: "反馈",
    description: "移动端与 AI 助手绝佳入口。右下角常驻悬浮按钮（FAB），点击后由单点以弹性物理曲线膨胀展开为带有多项快捷动作的卡片面板。",
    enDescription: "Expanding floating action button. Compact trigger expands with spring damping into an action dock with staggered item reveals.",
    demoHtml: `
      <div class="preview-fab-dock">
        <div class="fab-bubble"><span class="fab-plus">+</span></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：折叠展开浮动操作岛（Expanding FAB Island Menu）。初始为右下角圆形悬浮图标，点击时触发 CSS 尺寸膨胀与 border-radius 形变，菜单内部图标按 transition-delay 错峰弹出，再次点击或失焦时平滑收起。",
    enPrompt: "Please help me implement a web motion: Expanding FAB Island Menu. Morph circular FAB trigger into a responsive action card with staggered menu item entrances."
  },
  {
    id: "audio-waveform-visualizer",
    zhName: "波形音频动态可视化",
    enName: "Audio Waveform Visualizer",
    category: "反馈",
    description: "AI 语音助手与播放器交互。多组圆角垂直条柱根据正弦相移算法与声学振幅起伏跳动，真实模拟语音识别与音乐节奏。",
    enDescription: "Acoustic audio wave bars. Staggered vertical pill bars oscillating dynamically via sine waves to simulate live voice synthesis and audio playback.",
    demoHtml: `
      <div class="preview-wave-bars">
        <span class="w-bar b1"></span>
        <span class="w-bar b2"></span>
        <span class="w-bar b3"></span>
        <span class="w-bar b4"></span>
        <span class="w-bar b5"></span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：波形音频动态可视化（Audio Waveform Visualizer）。使用 CSS keyframes 或 Web Audio API，让一组等间距圆角垂直条柱根据正弦函数错开高度，结合 scaleY(0.2 -> 1.0) 产生起伏有致的声波律动。",
    enPrompt: "Please help me implement a web motion: Audio Waveform Visualizer. Oscillate array of rounded bars with phase-shifted keyframes and scaleY transforms for voice audio animation."
  },
  {
    id: "circular-progress-meter",
    zhName: "环形刻度进度仪表",
    enName: "Circular Radial Progress Meter",
    category: "反馈",
    description: "健康指标与性能仪表盘。SVG 圆环通过 stroke-dashoffset 随数值递增顺时针描边填充，内部百分比数字同步累加。",
    enDescription: "Radial stroke gauge. SVG circle gauge smoothly fills clockwise via stroke-dashoffset with synchronized digital counter and glow accents.",
    demoHtml: `
      <div class="preview-radial-meter">
        <svg viewBox="0 0 36 36" class="radial-svg">
          <circle class="r-bg" cx="18" cy="18" r="14"/>
          <circle class="r-fg" cx="18" cy="18" r="14"/>
        </svg>
        <span class="r-txt">85%</span>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：环形刻度进度仪表（Circular Radial Progress Meter）。使用 SVG <circle> 标签计算圆周长 2 * π * r 作为 stroke-dasharray，通过动态修改 stroke-dashoffset 控制进度弧长，中间数字使用 requestAnimationFrame 同步递增累加。",
    enPrompt: "Please help me implement a web motion: Circular Radial Progress Meter. Animate SVG stroke-dashoffset alongside easing digital counter to create smooth radial gauges."
  },
  {
    id: "before-after-slider",
    zhName: "前后对比滑动擦除",
    enName: "Before-After Comparison Slider",
    category: "图片",
    description: "AI 图像与设计交付神器。两层重叠图像，拖动中间手柄分界线时动态改变上层遮罩 clip-path 或宽度，实现无缝拖拽比对。",
    enDescription: "Interactive visual comparison. Overlays two images with a draggable separator divider dynamically slicing top layer via clip-path polygon.",
    demoHtml: `
      <div class="preview-ba-slider">
        <div class="ba-img-after"></div>
        <div class="ba-img-before"></div>
        <div class="ba-handle"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：前后对比滑动擦除（Before-After Comparison Slider）。两张相同尺寸图片重叠，顶层图片设置 clip-path: polygon(0 0, var(--split-pos) 0, var(--split-pos) 100%, 0 100%)，监听中间手柄拖拽事件动态更新 --split-pos 百分比。",
    enPrompt: "Please help me implement a web motion: Before-After Comparison Slider. Overlay paired images with draggable divider adjusting top layer clip-path dynamically."
  },
  {
    id: "organic-morphing-blob",
    zhName: "流体变形有机泡泡",
    enName: "Organic Morphing Blob",
    category: "反馈",
    description: "单细胞流体生命律动。CSS border-radius 八角独立比例连续缓动形变，赋予形状类似水滴、有机泡泡的生命律动感。",
    enDescription: "Organic morphing shape. Continuous multi-axis border-radius keyframing that creates amoeba-like, elastic fluid blobs.",
    demoHtml: `
      <div class="preview-morph-blob">
        <div class="blob-fluid"></div>
      </div>
    `,
    prompt: "请帮我实现一个网页动效：流体变形有机泡泡（Organic Morphing Blob）。利用 CSS @keyframes 循环平滑过渡 border-radius 的 8 个控制百分比（如 60% 40% 30% 70% / 60% 30% 70% 40%），配合轻微 rotate 自旋，打造生动的有机水滴/气泡形态。",
    enPrompt: "Please help me implement a web motion: Organic Morphing Blob. Animate multi-value border-radius continuously with subtle rotation for organic fluid blob effects."
  }
];

const categories = ["全部", "进入", "滚动", "悬停", "反馈", "图片", "布局"];

/* ==========================================================================
   Translation Config
   ========================================================================== */
const urlParams = new URLSearchParams(window.location.search);
let currentLang = urlParams.get("lang") || localStorage.getItem("lang") || "zh";

const uiTranslations = {
  zh: {
    heroTitle: "克制的网页动效灵感",
    searchPlaceholder: "搜索动效名称或描述...",
    emptyTitle: "未找到匹配的动效",
    emptyDesc: "请尝试搜索其他关键词，或者切换分类标签。",
    toastCopySuccess: "提示词已复制到剪贴板！",
    exploreNav: "探索动效",
    faqNav: "常见问答",
    githubNav: "开源仓库",
    faqTitle: "动效设计与 AI 提示词常见问题",
    faqSubtitle: "探索如何将克制动效哲学融入现代 Web 与前端工程实践",
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
    faqNav: "FAQ",
    githubNav: "GitHub",
    faqTitle: "Motion Design & AI Prompt FAQ",
    faqSubtitle: "Discover how to integrate restrained motion philosophy into modern frontend engineering",
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

const faqData = [
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
          <article class="motion-card" id="card-${motion.id}" tabindex="0" role="link" aria-label="${currentLang === "en" ? motion.enName : motion.zhName}">
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
      
      // Bind card click and keyboard navigation to detail page
      motionGrid.querySelectorAll(".motion-card").forEach(card => {
        const navigateToDetail = () => {
          const motionId = card.id.replace("card-", "");
          const motion = motions.find(m => m.id === motionId);
          const nameParam = motion && motion.enName ? `&name=${encodeURIComponent(motion.enName)}` : "";
          window.open(`detail.html?id=${motionId}${nameParam}`, '_blank');
        };

        card.addEventListener("click", (e) => {
          if (e.target.closest(".btn-copy-prompt")) return;
          navigateToDetail();
        });

        card.addEventListener("keydown", (e) => {
          if (e.target.closest(".btn-copy-prompt")) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            navigateToDetail();
          }
        });
      });
      
      // Extra code logic for visual simulation updates in JavaScript where CSS isn't enough (e.g. Count Up loop)
      initDynamicSimulations();
      
    }, 200);
  }
}

// Helper to run JS-driven preview simulations if any (e.g., number counting up)
function initDynamicSimulations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".preview-count-box").forEach(box => { box.textContent = "99"; });
    return;
  }
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
  const urlParams = new URLSearchParams(window.location.search);
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

  const faqLink = document.querySelector(".nav-links a[href='#faq-section']");
  if (faqLink) faqLink.textContent = t.faqNav;
  
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

  // FAQ section headers & cards
  const faqTitle = document.getElementById("faqSectionTitle");
  if (faqTitle) {
    const span = faqTitle.querySelector("span");
    if (span) span.textContent = t.faqTitle;
    else faqTitle.textContent = t.faqTitle;
  }
  const faqSubtitle = document.getElementById("faqSectionSubtitle");
  if (faqSubtitle) faqSubtitle.textContent = t.faqSubtitle;
  renderFaq();
  
  // Search placeholder & accessibility
  if (searchInput) {
    searchInput.placeholder = t.searchPlaceholder;
    searchInput.setAttribute("aria-label", currentLang === "zh" ? "搜索动效" : "Search motions");
  }

  // Theme dots & mode toggle tooltips & aria-labels
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

// Global Search Keyboard Shortcut (/ or Cmd+K / Ctrl+K)
document.addEventListener("keydown", (e) => {
  if ((e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput?.focus();
    searchInput?.select();
  }
});

// Smooth scroll logic for secondary hero action button
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
  
  // Handle initial URL parameters for filter/search
  const filterParam = urlParams.get("filter") || urlParams.get("category");
  if (filterParam && categories.includes(filterParam)) {
    activeCategory = filterParam;
  }
  const searchParam = urlParams.get("q") || urlParams.get("search");
  if (searchParam) {
    searchQuery = searchParam;
    if (searchInput) searchInput.value = searchParam;
  }

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
