/* ==========================================================================
   Motion Database (Aligned with script.js)
   ========================================================================== */
const motions = [
  {
    "id": "fade-in-up",
    "zhName": "淡入上移",
    "enName": "Fade In Up",
    "category": "进入",
    "description": "当页面加载时，标题和按钮由透明度 0 且偏下 20px 处，平滑滑入到正常位置，是构建网页开屏仪式感的经典基础方案。",
    "enDescription": "Fades in and slides up by 20px with staggered delays, creating a refined opening ceremony for web elements.",
    "prompt": "请帮我实现一个网页动效：淡入上移（Fade In Up）。当首屏加载时，文字标题和行动按钮以微小的延迟差，平滑地上移并显现。",
    "enPrompt": "Please help me implement a web motion: Fade In Up. When the page loads or elements scroll into the viewport, elements smoothly fade in from opacity 0 to 1 and slide up slightly from below to their original position."
  },
  {
    "id": "scroll-reveal",
    "zhName": "滚动显现",
    "enName": "Scroll Reveal",
    "category": "进入",
    "description": "内容卡片在向下滚动接近视口时被触发。我们使用 IntersectionObserver 实时监测，使得卡片淡入上浮显现。",
    "enDescription": "Reveals content cards as they scroll close to the viewport using IntersectionObserver for staggered, performance-friendly entrances.",
    "prompt": "请帮我实现一个网页动效：滚动显现（Scroll Reveal）。当多个卡片进入视口时，按从上到下的顺序依次淡入浮现。",
    "enPrompt": "Please help me implement a web motion: Scroll Reveal. As the user scrolls down, various content cards or text blocks automatically fade in and slide up sequentially when entering the viewport."
  },
  {
    "id": "hover-lift",
    "zhName": "悬停上浮",
    "enName": "Hover Lift",
    "category": "悬停",
    "description": "点击本页卡片 hover 体验。元素平滑向上移动 8px，同时阴影底色扩散。极具触感的轻量提拉反馈设计。",
    "enDescription": "Smoothly offsets elements vertically by 8px and softens shadow on hover, following standard premium web patterns.",
    "prompt": "请帮我实现一个网页动效：悬停上浮（Hover Lift）。hover 时元素向上浮动且阴影增强，移开时平滑落地还原。",
    "enPrompt": "Please help me implement a web motion: Hover Lift. Move buttons or cards upward by a few pixels on hover, with smooth transition timings."
  },
  {
    "id": "hover-shadow",
    "zhName": "悬停阴影增强",
    "enName": "Hover Shadow",
    "category": "悬停",
    "description": "不改变元素位移，只在悬停时改变阴影（box-shadow）的模糊半径与扩散大小，仿佛卡片从光感中升起。",
    "enDescription": "Increases box-shadow blur and spread on hover without shifting layout position, creating an elegant depth effect.",
    "prompt": "请帮我实现一个网页动效：悬停阴影增强（Hover Shadow）。hover 状态下只平滑放大卡片投影深度而不改变排版位置。",
    "enPrompt": "Please help me implement a web motion: Hover Shadow. Soften and expand the shadow projection of cards on hover, simulating a light source lift."
  },
  {
    "id": "color-transition",
    "zhName": "颜色过渡",
    "enName": "Color Transition",
    "category": "反馈",
    "description": "点击本页展示板。鼠标滑过时，背景色、边框色以极快的 cubic-bezier(0.4, 0, 0.2, 1) 平滑切换，消减闪烁抖动感。",
    "enDescription": "Applies millisecond transitions to color changes on interactive elements, smoothing focus and hover states.",
    "prompt": "请帮我实现一个网页动效：颜色过渡（Color Transition）。让链接、按钮的背景或文本颜色改变时具备平滑缓冲。",
    "enPrompt": "Please help me implement a web motion: Color Transition. Smooth out transitions for hover and active state colors rather than instant cuts."
  },
  {
    "id": "underline-reveal",
    "zhName": "下划线展开",
    "enName": "Underline Reveal",
    "category": "布局",
    "description": "极简菜单设计。当鼠标移至列表项时，底部的 4px 线条利用 `transform: scaleX(0)` 平滑扩展至 `1` 展现。",
    "enDescription": "Scales a navigation item's underline from 0 to 1 scaleX on hover, creating elegant visual links.",
    "prompt": "请帮我实现一个网页动效：导航下划线展开（Underline Reveal）。导航项 hover 时，下划线以水平伸展（scaleX 自 0 至 1）的方式轻盈呈现。",
    "enPrompt": "Please help me implement a web motion: Underline Reveal. Animate navigation link underlines using scaleX from 0 to 1 on hover."
  },
  {
    "id": "scroll-progress",
    "zhName": "滚动进度条",
    "enName": "Scroll Progress Indicator",
    "category": "滚动",
    "description": "固定在页面顶部的纤细进度条。当您向下滑动长文章时，它以高精度比率在顶部填满，提醒用户文章还有多少读完。",
    "enDescription": "A tiny, high-precision bar at the top of the browser that tracks reading depth to reduce long-form content reading anxiety.",
    "prompt": "请帮我实现一个网页动效：滚动进度条（Scroll Progress Indicator）。在浏览器最顶部固定一条进度线，横向缩放比例绑定文章滚动占比。",
    "enPrompt": "Please help me implement a web motion: Scroll Progress Indicator. Place a thin line at the top of the page that scales horizontally from 0% to 100% matching the scroll percentage."
  },
  {
    "id": "scroll-shadow",
    "zhName": "头部阴影渐变",
    "enName": "Scroll Shadow",
    "category": "滚动",
    "description": "模拟真实的物理悬浮高度差。顶栏在页面贴顶时背景呈透明无影，一旦偏离顶部便渐显阴影以隔离底层流动的内容。",
    "enDescription": "Fades in a shadow under the sticky header once scroll Y exceeds 10px, separating it from the content sliding underneath.",
    "prompt": "请帮我实现一个网页动效：头部阴影渐变（Scroll Shadow）。滚动偏离顶部时为固定 Header 添加阴影底边框，贴顶时去除。",
    "enPrompt": "Please help me implement a web motion: Scroll Shadow. As the user scrolls away from the very top, add a soft shadow to the sticky navbar to indicate elevation."
  },
  {
    "id": "button-ripple",
    "zhName": "按钮点击波纹",
    "enName": "Button Ripple",
    "category": "反馈",
    "description": "监听按钮点击坐标。根据点击处坐标在按钮内部动态创建一个绝对定位的圆形，从 0 缩放至最大值并随之隐去。",
    "enDescription": "Spawns a scaling circle at click coordinates inside the button, expanding to full size before fading away.",
    "prompt": "请帮我实现一个网页动效：按钮点击波纹（Button Ripple）。点击按钮时，以鼠标落点为圆心动态生成扩散淡出水波纹特效。",
    "enPrompt": "Please help me implement a web motion: Button Ripple. Spawn a circular ripple expanding from the exact click coordinates inside the button."
  },
  {
    "id": "sliding-indicator-tabs",
    "zhName": "滑动指示器分段标签页",
    "enName": "Sliding Indicator Tabs",
    "category": "反馈",
    "description": "顶流应用标配分段控制器。点击切换 Tab 选项时，背后的药丸高亮胶囊根据目标元素的 offsetLeft 与 offsetWidth，以弹簧阻尼曲线平滑滑动与拉伸变形。",
    "enDescription": "Segmented indicator pill. Active highlight bubble smoothly glides, squashes, and snaps to target tab dimensions using spring physics.",
    "prompt": "请帮我实现一个网页动效：滑动指示器分段标签页（Sliding Indicator Tabs）。Tab 栏内设置一个绝对定位的背景高亮药丸，切换 Tab 时读取目标按钮的 offsetLeft 和 offsetWidth，通过 transform: translateX() 与 width 配合 spring 弹性曲线平滑滑向目标项。",
    "enPrompt": "Please help me implement a web motion: Sliding Indicator Tabs. Measure target tab offsetLeft and offsetWidth to glide an absolute background pill with elastic transition."
  },
  {
    "id": "accordion-expand",
    "zhName": "手风琴折叠",
    "enName": "Accordion Smooth Expand",
    "category": "布局",
    "description": "常见 FAQ 交互。点击标题时，为内容框计算精确高度值并利用 transition 平滑展平，而非突兀地伸缩卡顿。",
    "enDescription": "Expands vertical details panels with height transitions, sliding other page contents down organically.",
    "prompt": "请帮我实现一个网页动效：手风琴平滑折叠（Accordion Smooth Expand）。点击菜单展开时，高度平滑折叠扩展，下方内容平移位退。",
    "enPrompt": "Please help me implement a web motion: Accordion Smooth Expand. Animate accordion details panels from max-height 0 to full content height."
  },
  {
    "id": "image-zoom",
    "zhName": "图片轻微放大",
    "enName": "Image Zoom on Hover",
    "category": "图片",
    "description": "卡片 hover 体验。容器开启 overflow: hidden。hover 时内部图片缩放平滑过渡至 1.12，模拟自然呼吸呼吸反馈。",
    "enDescription": "Scales the inner image by 5-10% on hover while retaining rounded borders, giving clean photographic zoom feedback.",
    "prompt": "请帮我实现一个网页动效：图片轻微放大（Image Zoom on Hover）。卡片 hover 时，内部图片微幅放大且容器圆角不变超隐藏。",
    "enPrompt": "Please help me implement a web motion: Image Zoom on Hover. Scale the image inside an overflow-hidden card container on hover."
  },
  {
    "id": "count-up",
    "zhName": "数字滚动",
    "enName": "Count Up Animation",
    "category": "反馈",
    "description": "数据仪表盘载入时，三组数字基于 requestAnimationFrame 平滑自 0 渐进累加到目标终值，赋予指标视觉以生命力。",
    "enDescription": "Runs an active counting loop from 0 to target value on element view, completing with a smooth deceleration curve.",
    "prompt": "请帮我实现一个网页动效：数字滚动（Count Up Animation）。在特定区域展现数据指标时，数字自 0 平滑滚动增加到目标数值。",
    "enPrompt": "Please help me implement a web motion: Count Up Animation. Animate count-up metrics from zero to the target number using easing curves on load."
  },
  {
    "id": "spotlight-card",
    "zhName": "光标聚光灯卡片",
    "enName": "Spotlight Border Card",
    "category": "悬停",
    "description": "Linear / Vercel 标志性卡片。鼠标移动时，径向渐变聚光灯随光标在卡片群中漫游，照亮边框高光与背景纹理。",
    "enDescription": "Linear/Vercel style card. Radial spotlight follows the cursor across cards, illuminating border highlights.",
    "prompt": "请帮我实现一个网页动效：光标聚光灯卡片（Spotlight Border Card）。监听鼠标在卡片容器上的移动坐标，通过 CSS 变量 --mouse-x 和 --mouse-y 动态更新伪元素上的 radial-gradient 径向渐变，使柔和的聚光灯光晕跟随光标照亮卡片内部与边框。",
    "enPrompt": "Please help me implement a web motion: Spotlight Border Card. Track mouse coordinates on cards and update CSS variables --mouse-x and --mouse-y to render a glowing radial gradient spotlight."
  },
  {
    "id": "line-reveal",
    "zhName": "文字逐行显现",
    "enName": "Line Reveal",
    "category": "进入",
    "description": "利用大字体和溢出截断（overflow: hidden），让每行标题自面罩下像升降机一样升起，带来强烈的策展气场。",
    "enDescription": "Splits a headline into lines using overflow hidden, sliding each line up like an elevator for a clean, editorial look.",
    "prompt": "请帮我实现一个网页动效：文字逐行显现（Line Reveal）。利用容器溢出裁切，使大标题的文本行自遮罩下方平滑移出。",
    "enPrompt": "Please help me implement a web motion: Line Reveal. Split a large headline by lines or characters, making each line slide up and fade in from behind a mask with a staggered delay."
  },
  {
    "id": "theme-switch",
    "zhName": "暗色模式切换",
    "enName": "Smooth Theme Switch",
    "category": "反馈",
    "description": "点击屏幕中的切换按钮。我们记录按钮的物理中心，并在切换时生成一个圆形裁剪圆不断膨胀扩散以扫过整个屏幕。",
    "enDescription": "Captures button center Y/X coordinates and expands a circular clip-path full screen to transition between theme modes.",
    "prompt": "请帮我实现一个网页动效：暗色模式平滑切换（Smooth Theme Switch）。以按钮为圆心产生圆形涟漪裁剪过渡配色。",
    "enPrompt": "Please help me implement a web motion: Smooth Theme Switch. Expand a circle clip-path from the button center to transit the dark/light background."
  },
  {
    "id": "layout-transition",
    "zhName": "网格重排动画",
    "enName": "Layout Transition",
    "category": "布局",
    "description": "点击分类筛选标签。我们不使用生硬的隐现，而是为卡片添加 `.filtered` 状态以实现带有平滑过渡的重排过滤效果。",
    "enDescription": "Calculates layout coordinates to transition grid cards smoothly to their new slots during categorization.",
    "prompt": "请帮我实现一个网页动效：网格重排动画（Layout Transition）。分类筛选项目或网格重组时，卡片不是突兀闪现，而是计算坐标平滑飞入新位置。",
    "enPrompt": "Please help me implement a web motion: Layout Transition. Transition card elements smoothly to their new grid positions when filters change."
  },
  {
    "id": "bento-grid-stagger",
    "zhName": "便当网格交错入场",
    "enName": "Bento Grid Stagger",
    "category": "布局",
    "description": "Apple / Linear 标志性非对称 Bento 排版。滚动进入视口时按权重与空间顺序交错弹入，并自带微光扫过。",
    "enDescription": "Apple/Linear Bento layout. Asymmetrical grid cells pop in sequentially with staggered delays and border glints.",
    "prompt": "请帮我实现一个网页动效：便当网格交错入场（Bento Grid Stagger）。使用 CSS Grid 创建 2x2 与多跨度的非对称 Bento 结构，当网格进入视口时，子卡片按照空间顺序以 cubic-bezier(0.16, 1, 0.3, 1) 错峰放大淡入，并伴随边框高光。",
    "enPrompt": "Please help me implement a web motion: Bento Grid Stagger. Construct an asymmetric CSS Grid Bento box and animate card reveals with staggered timing."
  },
  {
    "id": "magnetic-effect",
    "zhName": "磁吸反馈",
    "enName": "Magnetic Button",
    "category": "反馈",
    "description": "好玩的重力跟随交互。计算鼠标距离大圆形按钮的中心距离，若小于 80 像素，按钮会被吸过去，越靠近吸力越大。",
    "enDescription": "Tracks cursor proximity; if within 80px, pulls the button towards the cursor, returning it with transition physics.",
    "prompt": "请帮我实现一个网页动效：磁吸按钮（Magnetic Button）。鼠标靠近按钮边缘时按钮被吸附过去，鼠标移走时自动弹回中心。",
    "enPrompt": "Please help me implement a web motion: Magnetic Button. Pull the button towards the cursor when the mouse gets close, spring-snapping it back on leave."
  },
  {
    "id": "spring-motion",
    "zhName": "弹性缓动",
    "enName": "Spring Motion",
    "category": "反馈",
    "description": "点击本页卡片。元素加载了模拟物理弹簧超调回弹的缓动曲线，使其点击展开具有灵动的回弹质感。",
    "enDescription": "Uses cubic-bezier curves simulating physical spring models to bounce elements organically during click or entrance.",
    "prompt": "请帮我实现一个网页动效：弹性缓动（Spring Motion）。模拟弹簧物理效果，让卡片在触发时带有点弹性超重回摆动效。",
    "enPrompt": "Please help me implement a web motion: Spring Motion. Apply spring physics curves to animations to simulate bouncy, organic elasticity rather than linear easing."
  },
  {
    "id": "reduced-motion",
    "zhName": "减少动态适配",
    "enName": "Reduced Motion Support",
    "category": "进入",
    "description": "当检测到系统级减少动态偏好时，CSS 会强制停止所有演示旋转，以静态展现，确保眩晕症患者的可访问性。",
    "enDescription": "Stops all intensive rotations or parallax scroll movements when system-level reduced motion is preferred, ensuring accessibility.",
    "prompt": "请帮我实现网页无障碍支持：减少动态适配（Reduced Motion Support）。在 CSS 中利用媒体查询在 reduce 模式下关闭动画。",
    "enPrompt": "Please help me implement accessibility support: Reduced Motion. Use the CSS media query @media (prefers-reduced-motion: reduce) to disable or minimize scaling, scrolling, and spinning animations."
  },
  {
    "id": "menu-morphing",
    "zhName": "汉堡菜单变形",
    "enName": "Menu Morphing",
    "category": "反馈",
    "description": "三道杠按钮在激活时旋转并融合。中间线淡化成 0 透明度，上下两条线向内靠拢并分别旋转 45 度的 X 状，十分优雅。",
    "enDescription": "Rotates and translates top/bottom lines while fading middle line to transparent on click, morphing into an 'X'.",
    "prompt": "请帮我实现一个网页动效：汉堡菜单变形（Menu Morphing）。三根线条构成的汉堡图标平滑变化转换为 X 形关闭按钮。",
    "enPrompt": "Please help me implement a web motion: Menu Morphing. Transform a three-line hamburger icon into a close X icon using CSS transforms on button click."
  },
  {
    "id": "sticky-scroll",
    "zhName": "粘性滚动叙事",
    "enName": "Sticky Scroll Storytelling",
    "category": "滚动",
    "description": "左侧视觉展示块为 `position: sticky` 锁死，右侧长文字继续流动。在文字流过不同节点时，左侧颜色产生响应演变。",
    "enDescription": "Locks the left visual box in place via position sticky while the right narrative text scrolls, changing the visual state dynamically.",
    "prompt": "请帮我实现一个网页动效：粘性滚动叙事（Sticky Scroll）。左右双栏，滚动时左栏图表常驻，右栏文字滚动时更新左栏图表状态。",
    "enPrompt": "Please help me implement a web motion: Sticky Scroll Storytelling. A two-column layout where the visual illustration locks in place while the text scrolls, updating the visual state at key scroll points."
  },
  {
    "id": "parallax-scrolling",
    "zhName": "视差滚动",
    "enName": "Parallax Scrolling",
    "category": "滚动",
    "description": "利用纵向滚动的位移差。当我们滚动时，星空背景、渐变圆环和最上层标题文字按不同位移系数位移，产生深邃的三维空间感。",
    "enDescription": "Offsets the movement of background stars, midground circles, and foreground text relative to scroll speed for immersive depth.",
    "prompt": "请帮我实现一个网页动效：视差滚动（Parallax Scrolling）。不同深度的元素随着滚动条以不等的系数位移，产生三维空间纵深。",
    "enPrompt": "Please help me implement a web motion: Parallax Scrolling. Make background and midground layers move at different scroll speeds relative to the foreground text to create a sense of physical depth."
  },
  {
    "id": "horizontal-gallery",
    "zhName": "横向滚动作品带",
    "enName": "Horizontal Scroll Gallery",
    "category": "滚动",
    "description": "我们拦截滚轮，在用户下拉页面时，横向卡片轨道沿 translateX 平滑移动，模拟滑动相册效果。",
    "enDescription": "Captures mouse scroll to slide a track horizontally via translateX, perfect for showcasing portfolio galleries.",
    "prompt": "请帮我实现一个网页动效：横向滚动作品带（Horizontal Scroll Gallery）。捕获纵向滚动动作，转化为网格容器的水平位移偏移量。",
    "enPrompt": "Please help me implement a web motion: Horizontal Scroll Gallery. Intercept vertical scrolling inside a section to translate the grid container horizontally instead of vertically."
  },
  {
    "id": "blur-reveal",
    "zhName": "模糊进入",
    "enName": "Blur In / Soft Reveal",
    "category": "进入",
    "description": "用渐变的滤镜模糊（filter: blur）替代粗糙的硬切淡入。背景色块在 1.8 秒内平滑清晰，充满画展艺术的高级感。",
    "enDescription": "Atmospheric entrance. Transitioning from hazy blur to clear focus, perfect for hero images or slogans.",
    "prompt": "请帮我实现一个网页动效：模糊进入（Blur In）。让元素在展现时，伴随透明度从 0 渐显到 1，同时滤镜从高斯模糊过渡到完全清晰。",
    "enPrompt": "Please help me implement a web motion: Blur Reveal. Transition elements smoothly from a Gaussian blur and low opacity to full clarity as they load or scroll into view."
  },
  {
    "id": "card-sticky-stacking",
    "zhName": "滚动卡片层叠固化",
    "enName": "Card Sticky Stacking",
    "category": "滚动",
    "description": "现代产品介绍页标配。向下滚动时卡片依次在视口顶部吸附固化，后续卡片从下方覆盖上来并伴随缩放与变暗。",
    "enDescription": "Product narrative stack. Cards pin to viewport top on scroll, stacking and scaling down as new cards overlay.",
    "prompt": "请帮我实现一个网页动效：滚动卡片层叠固化（Card Sticky Stacking）。使用 position: sticky 配合 top 偏移，使多张大卡片在向下滚动时依次吸顶停靠，后一张卡片覆盖上去的同时，前一张卡片通过 scale(0.95) 与 brightness(0.8) 产生纵深层叠堆积感。",
    "enPrompt": "Please help me implement a web motion: Card Sticky Stacking. Use position: sticky with progressive top offsets and scale transforms to create stacked card decks on scroll."
  },
  {
    "id": "spring-drawer",
    "zhName": "弹性手势阻尼抽屉",
    "enName": "Spring Sheet Drawer",
    "category": "反馈",
    "description": "现代 App 级底部/侧边抽屉。支持触摸拖拽、阻尼滑动与手势速率感应，松手自动依附或回弹关闭。",
    "enDescription": "Native-like bottom drawer. Supports smooth drag gestures, spring damping, and swipe-to-dismiss.",
    "prompt": "请帮我实现一个网页动效：弹性手势阻尼抽屉（Spring Sheet Drawer）。实现一个底部弹出的模态抽屉，支持手指/鼠标拖拽顶部 Handle 控制高度，带有越界阻尼感，松手根据滑动距离与速度决定贴靠展开或回弹收起。",
    "enPrompt": "Please help me implement a web motion: Spring Sheet Drawer. Build a bottom drawer with drag gestures, rubber-band resistance, and smooth snap points."
  },
  {
    "id": "expanding-fab-menu",
    "zhName": "折叠展开浮动操作岛",
    "enName": "Expanding FAB Island Menu",
    "category": "反馈",
    "description": "移动端与 AI 助手绝佳入口。右下角常驻悬浮按钮（FAB），点击后由单点以弹性物理曲线膨胀展开为带有多项快捷动作的卡片面板。",
    "enDescription": "Expanding floating action button. Compact trigger expands with spring damping into an action dock with staggered item reveals.",
    "prompt": "请帮我实现一个网页动效：折叠展开浮动操作岛（Expanding FAB Island Menu）。初始为右下角圆形悬浮图标，点击时触发 CSS 尺寸膨胀与 border-radius 形变，菜单内部图标按 transition-delay 错峰弹出，再次点击或失焦时平滑收起。",
    "enPrompt": "Please help me implement a web motion: Expanding FAB Island Menu. Morph circular FAB trigger into a responsive action card with staggered menu item entrances."
  },
  {
    "id": "dynamic-island",
    "zhName": "灵动岛悬浮胶囊",
    "enName": "Dynamic Island Morph",
    "category": "反馈",
    "description": "苹果灵动岛多态交互。极简黑色小药丸，点击时以平滑弹性阻尼物理曲线变形展开为音乐面板、通话或通知卡片。",
    "enDescription": "Apple Dynamic Island interaction. Compact capsule morphs smoothly into music player or notification cards with spring physics.",
    "prompt": "请帮我实现一个网页动效：灵动岛悬浮胶囊（Dynamic Island Morph）。顶部居中的黑色胶囊卡片，支持 Compact、Music、Alert 多种状态切换，展开与收起时带有自然的弹性阻尼贝塞尔过渡，内容元素平滑淡入交替。",
    "enPrompt": "Please help me implement a web motion: Dynamic Island Morph. Morph a centered black pill into expanded music/alert cards using spring-like cubic-bezier physics."
  },
  {
    "id": "circular-progress-meter",
    "zhName": "环形刻度进度仪表",
    "enName": "Circular Radial Progress Meter",
    "category": "反馈",
    "description": "健康指标与性能仪表盘。SVG 圆环通过 stroke-dashoffset 随数值递增顺时针描边填充，内部百分比数字同步累加。",
    "enDescription": "Radial stroke gauge. SVG circle gauge smoothly fills clockwise via stroke-dashoffset with synchronized digital counter and glow accents.",
    "prompt": "请帮我实现一个网页动效：环形刻度进度仪表（Circular Radial Progress Meter）。使用 SVG <circle> 标签计算圆周长 2 * π * r 作为 stroke-dasharray，通过动态修改 stroke-dashoffset 控制进度弧长，中间数字使用 requestAnimationFrame 同步递增累加。",
    "enPrompt": "Please help me implement a web motion: Circular Radial Progress Meter. Animate SVG stroke-dashoffset alongside easing digital counter to create smooth radial gauges."
  },
  {
    "id": "typewriter-cycle",
    "zhName": "打字机多词轮播交替",
    "enName": "Typewriter Multi-Text Cycle",
    "category": "进入",
    "description": "大标题标语轮播利器。真实光标伴随敲击节奏逐字键入，停留数秒后反向极速删除，无缝无刷新切换下一个关键词。",
    "enDescription": "Dynamic headline typewriter. Types words character by character with rhythmic pauses and rapid backspace deletion for cycling keywords.",
    "prompt": "请帮我实现一个网页动效：打字机多词轮播交替（Typewriter Multi-Text Cycle）。使用 JS 定时器动态截取字符串，实现逐字输入、自然停顿、快速退格删除，并循环切换数组中的关键词，右侧附带闪烁的竖线光标。",
    "enPrompt": "Please help me implement a web motion: Typewriter Multi-Text Cycle. Rhythmic typewriter simulation cycling through word lists with dynamic character slicing and blinking caret."
  },
  {
    "id": "color-shift",
    "zhName": "饱和度增强",
    "enName": "Saturation Shift",
    "category": "图片",
    "description": "通过 hover 触发滤镜过滤（filter: grayscale）。让原本寂静低调的灰度图片过渡为色彩分明的高饱和全彩状态。",
    "enDescription": "Fades saturation and contrast from gray to full color on hover, directing attention to the active image card.",
    "prompt": "请帮我实现一个网页动效：饱和度增强（Saturation & Contrast Shift）。图片 hover 时从灰度或低饱和状态平滑过渡到全彩明亮状态。",
    "enPrompt": "Please help me implement a web motion: Saturation Shift. Transition an image from low saturation to full color on hover."
  },
  {
    "id": "mask-reveal",
    "zhName": "图片遮罩揭示",
    "enName": "Mask Reveal",
    "category": "图片",
    "description": "开屏的艺术。加载时利用 clip-path: circle 渐次开启面罩，徐徐展现底层的渐变色彩画布，具备极强的展会感。",
    "enDescription": "Uses clip-path shapes to slide image curtains open on viewport entrance, delivering premium gallery aesthetics.",
    "prompt": "请帮我实现一个网页动效：图片遮罩揭示（Mask Reveal）。图片在加载或进入视口时，以对角裁剪或圆形扩张遮罩滑显。",
    "enPrompt": "Please help me implement a web motion: Mask Reveal. Reveal an image using animated clip-path borders when it enters the viewport."
  },
  {
    "id": "image-preview",
    "zhName": "图片跟随预览",
    "enName": "Hover Image Preview",
    "category": "图片",
    "description": "当鼠标在下方文字列表项移动时，侧方会浮现一个微型的预览图。预览图开启跟随光标动画，悬浮质感极佳。",
    "enDescription": "Spawns a floating preview card that tracks the mouse with inertia when hovering list elements, hiding on leave.",
    "prompt": "请帮我实现一个网页动效：图片跟随预览（Hover Image Preview）。鼠标移过文字项时浮现随鼠标移动的缩略图卡片。",
    "enPrompt": "Please help me implement a web motion: Hover Image Preview. Display a floating thumbnail tracking the cursor when hovering list items."
  },
  {
    "id": "before-after-slider",
    "zhName": "前后对比滑动擦除",
    "enName": "Before-After Comparison Slider",
    "category": "图片",
    "description": "AI 图像与设计交付神器。两层重叠图像，拖动中间手柄分界线时动态改变上层遮罩 clip-path 或宽度，实现无缝拖拽比对。",
    "enDescription": "Interactive visual comparison. Overlays two images with a draggable separator divider dynamically slicing top layer via clip-path polygon.",
    "prompt": "请帮我实现一个网页动效：前后对比滑动擦除（Before-After Comparison Slider）。两张相同尺寸图片重叠，顶层图片设置 clip-path: polygon(0 0, var(--split-pos) 0, var(--split-pos) 100%, 0 100%)，监听中间手柄拖拽事件动态更新 --split-pos 百分比。",
    "enPrompt": "Please help me implement a web motion: Before-After Comparison Slider. Overlay paired images with draggable divider adjusting top layer clip-path dynamically."
  },
  {
    "id": "direction-aware-hover",
    "zhName": "方向感知卡片划入",
    "enName": "Direction-Aware Hover Reveal",
    "category": "悬停",
    "description": "智能感知光标切入方向。三角函数计算光标从上/下/左/右何处进入卡片，遮罩层严格从光标进入侧平滑抽出，离开时沿对应方向滑出。",
    "enDescription": "Vector-aware hover overlay. Calculates entry angle via trigonometry so the overlay slides in strictly from the cursor's entry edge and exits accordingly.",
    "prompt": "请帮我实现一个网页动效：方向感知卡片划入（Direction-Aware Hover Reveal）。在 mouseenter / mouseleave 事件中通过 Math.atan2 计算鼠标相对卡片中心的进入角度（0: 上, 1: 右, 2: 下, 3: 左），动态调整浮层的起始与目标 transform: translate()，实现跟随鼠标方向的抽拉效果。",
    "enPrompt": "Please help me implement a web motion: Direction-Aware Hover Reveal. Compute cursor entry/exit quadrants using atan2 to animate drawer overlays from 4 cardinal directions."
  },
  {
    "id": "tilt-card",
    "zhName": "卡片 3D 倾斜",
    "enName": "3D Tilt Card",
    "category": "悬停",
    "description": "将卡片放入透视矩阵中（perspective）。计算鼠标在卡片上的相对坐标，平滑倾斜卡片并使里面的文字向上浮起。",
    "enDescription": "Calculates hover coordinates to rotate the card in 3D space, shifting background image and text layer for depth.",
    "prompt": "请帮我实现一个网页动效：卡片 3D 倾斜（3D Tilt Card）。当鼠标在卡片移动时，卡片产生带透视的倾斜跟随效果。",
    "enPrompt": "Please help me implement a web motion: 3D Tilt Card. Rotate the card in 3D perspective based on the mouse position relative to the card's center."
  },
  {
    "id": "glass-glare-tilt",
    "zhName": "镜面菲涅尔反光 3D 卡片",
    "enName": "Glass Glare Tilt Card",
    "category": "悬停",
    "description": "高端会员卡与资产卡片。在 3D 透视倾斜基础上叠加对角线物理光斑，卡片转动时光斑在磨砂玻璃表面产生真实的漫反射位移。",
    "enDescription": "Luxury reflective tilt card. Combines 3D perspective orientation with a dynamic specular sheen layer tracking mouse angles.",
    "prompt": "请帮我实现一个网页动效：镜面菲涅尔反光 3D 卡片（Glass Glare Tilt Card）。在卡片 3D 透视旋转的同时，卡片内部叠加一层带 linear-gradient(135deg, rgba(255,255,255,0.4), transparent) 的高光层，高光层根据鼠标相对坐标反向位移，产生逼真的玻璃反光效果。",
    "enPrompt": "Please help me implement a web motion: Glass Glare Tilt Card. Pair 3D perspective rotation with a specular highlight sheen layer translating inversely to simulate glass refraction."
  },
  {
    "id": "macos-dock",
    "zhName": "拟物鱼眼缩放 Dock",
    "enName": "macOS Fisheye Dock",
    "category": "悬停",
    "description": "经典桌面 Dock 拟物栏。鼠标在底部滑动时，图标根据与光标的距离呈现非线性的高斯鱼眼放大与浮动回弹。",
    "enDescription": "Classic macOS dock. Icons scale up based on a cosine/gaussian distance curve as the cursor glides across.",
    "prompt": "请帮我实现一个网页动效：macOS 拟物鱼眼缩放 Dock 栏（macOS Fisheye Dock）。在底部固定悬浮的图标栏中监听 mousemove，根据光标与各个图标中心的水平距离计算高斯/余弦缩放系数，使光标周围图标产生连贯的鱼眼放大波浪。",
    "enPrompt": "Please help me implement a web motion: macOS Fisheye Dock. Scale dock icons smoothly based on cursor proximity using a gaussian distance function."
  },
  {
    "id": "card-stack-swipe",
    "zhName": "层叠卡片手势抽卡",
    "enName": "Stack Card Swipe",
    "category": "布局",
    "description": "Apple Wallet / 探探风格层叠卡片。支持点击或拖拽将顶层卡片飞出，底层卡片平滑缩放补位上升。",
    "enDescription": "Layered card stack. Flick the top card away while background cards scale up and take its place.",
    "prompt": "请帮我实现一个网页动效：层叠卡片手势抽卡（Stack Card Swipe）。多张卡片以 z-index 和 translateY/scale 叠加放置，用户点击或拖拽最上层卡片使其带有旋转飞出视口，后续卡片平滑放大升入顶层，支持无限循环抽取。",
    "enPrompt": "Please help me implement a web motion: Stack Card Swipe. Stack layered cards and animate top cards flying away on click/swipe while lower cards scale up seamlessly."
  },
  {
    "id": "page-transition",
    "zhName": "页面转场",
    "enName": "Page Transition",
    "category": "布局",
    "description": "模拟完整的页面跳转过渡。点击“切换页面”时，全屏单色幕布自上滑下盖住视口，平滑更新页面底色与文字后再收起。",
    "enDescription": "Displays full-screen sliding curtains or fading masks during routing switches, maintaining visual continuity.",
    "prompt": "请帮我实现一个网页动效：页面转场（Page Transition）。在更新页面内容时，全屏呈现淡入淡出或侧滑幕布平移遮挡转场。",
    "enPrompt": "Please help me implement a web motion: Page Transition. Transition views using full-screen sliding curtain covers on page reload."
  },
  {
    "id": "metallic-shimmer-text",
    "zhName": "金属光泽扫光文字",
    "enName": "Metallic Shimmer Text",
    "category": "进入",
    "description": "苹果发布会级标题质感。高精度金属质感渐变在深色文字上缓缓扫过，散发奢华流光溢彩的工业设计美感。",
    "enDescription": "Apple Keynote title aesthetic. A metallic specular sheen sweeps smoothly across high-contrast typography.",
    "prompt": "请帮我实现一个网页动效：金属光泽扫光文字（Metallic Shimmer Text）。使用 background-clip: text 和多段高对比金属渐变（Silver/Gold），配合 keyframes 沿 45 度对角线平滑平移 background-position，创造出奢华的金属光影流淌效果。",
    "enPrompt": "Please help me implement a web motion: Metallic Shimmer Text. Animate high-contrast linear gradient reflections across text using background-clip: text."
  },
  {
    "id": "border-beam",
    "zhName": "流光环形边框",
    "enName": "Border Beam Animation",
    "category": "进入",
    "description": "Magic UI 经典动效。一道高亮炫彩渐变光柱沿着圆角卡片的边缘无缝周游循环，极具科技高级感。",
    "enDescription": "Magic UI classic. A glowing gradient beam seamlessly travels along the rounded card perimeter.",
    "prompt": "请帮我实现一个网页动效：流光环形边框（Border Beam Animation）。在圆角卡片边框上绘制一段带有高斯模糊和色彩渐变的光柱，利用 CSS conic-gradient 或 offset-path 使光柱沿着矩形外边框持续匀速绕圈旋转。",
    "enPrompt": "Please help me implement a web motion: Border Beam Animation. Create an animated gradient ray that travels continuously along the container's border using conic-gradient or offset-path."
  },
  {
    "id": "animated-flow-beams",
    "zhName": "流程连线脉冲光波",
    "enName": "Animated Flow Beams",
    "category": "进入",
    "description": "AI 工作流与系统拓扑图神器。在多个 UI 节点间以贝塞尔曲线相连，发光的脉冲粒子沿着线条持续流动传输。",
    "enDescription": "AI workflow visual. Glowing pulse particles continuously travel along SVG bezier paths between nodes.",
    "prompt": "请帮我实现一个网页动效：流程连线脉冲光波（Animated Flow Beams）。在多个节点之间绘制 SVG 平滑贝塞尔曲线，利用 stroke-dasharray 和 stroke-dashoffset 制作连续向前流动的发光能量脉冲粒子，模拟数据流动。",
    "enPrompt": "Please help me implement a web motion: Animated Flow Beams. Draw SVG bezier paths between UI nodes and animate glowing pulse waves flowing along the paths."
  },
  {
    "id": "scroll-drawn-svg",
    "zhName": "滚动手绘线条勾勒",
    "enName": "Scroll-Drawn SVG Path",
    "category": "滚动",
    "description": "Stripe 首页同款叙事。页面向下滚动时，复杂的矢量线条与产品架构轮廓依照绝对滚动百分比精准手绘呈现。",
    "enDescription": "Stripe-style scroll storytelling. SVG paths trace out dynamically in lockstep with page scroll depth.",
    "prompt": "请帮我实现一个网页动效：滚动手绘线条勾勒（Scroll-Drawn SVG Path）。测量 SVG path 的 getTotalLength()，初始化 stroke-dasharray 和 stroke-dashoffset 为全长，监听窗口滚动进度，将滚动百分比实时映射到 dashoffset 实现手绘画线效果。",
    "enPrompt": "Please help me implement a web motion: Scroll-Drawn SVG Path. Bind SVG strokeDashoffset to the page scroll percentage using getTotalLength()."
  },
  {
    "id": "rolling-number-odometer",
    "zhName": "机械滚轮数字翻牌器",
    "enName": "Rolling Number Odometer",
    "category": "反馈",
    "description": "老虎机与机械仪表盘质感。数值变动时，每位数字像滚轮一样纵向旋转翻滚过渡，数字感与仪式感拉满。",
    "enDescription": "Mechanical slot-machine counter. Each digit rolls vertically along an internal column with staggered easing.",
    "prompt": "请帮我实现一个网页动效：机械滚轮数字翻牌器（Rolling Number Odometer）。将多位数字拆分为独立的竖向列，每列包含 0-9 数字序列，当数值更新时通过 translateY 平滑滚动至目标数字，配合各列错开的 transition-delay 营造机械翻牌效果。",
    "enPrompt": "Please help me implement a web motion: Rolling Number Odometer. Build vertical columns containing 0-9 digits and animate their translateY offsets with staggered delays."
  },
  {
    "id": "audio-waveform-visualizer",
    "zhName": "波形音频动态可视化",
    "enName": "Audio Waveform Visualizer",
    "category": "反馈",
    "description": "AI 语音助手与播放器交互。多组圆角垂直条柱根据正弦相移算法与声学振幅起伏跳动，真实模拟语音识别与音乐节奏。",
    "enDescription": "Acoustic audio wave bars. Staggered vertical pill bars oscillating dynamically via sine waves to simulate live voice synthesis and audio playback.",
    "prompt": "请帮我实现一个网页动效：波形音频动态可视化（Audio Waveform Visualizer）。使用 CSS keyframes 或 Web Audio API，让一组等间距圆角垂直条柱根据正弦函数错开高度，结合 scaleY(0.2 -> 1.0) 产生起伏有致的声波律动。",
    "enPrompt": "Please help me implement a web motion: Audio Waveform Visualizer. Oscillate array of rounded bars with phase-shifted keyframes and scaleY transforms for voice audio animation."
  },
  {
    "id": "text-wave-hover",
    "zhName": "文字波浪反弹悬停",
    "enName": "Text Wave Ripple Hover",
    "category": "悬停",
    "description": "标题文字以单个字符拆分，鼠标滑过时应用立方贝塞尔曲线和延迟差，字母呈波浪状平滑向上反弹。",
    "enDescription": "Applies stagger transition delays to split letters, rippling characters up sequentially with elastic easing.",
    "prompt": "请帮我实现一个网页动效：文字波浪反弹悬停（Text Wave Ripple Hover）。将展示标题拆分为单个字符，在鼠标 Hover 时通过 transition-delay 差值 and cubic-bezier 弹性曲线，让字母呈波浪状顺序向上反弹。",
    "enPrompt": "Please help me implement a web motion: Text Wave Ripple Hover. Split text and stagger letter translation offsets on hover."
  },
  {
    "id": "text-scramble",
    "zhName": "黑客密码解密文本",
    "enName": "Text Scramble Decrypt",
    "category": "反馈",
    "description": "Cyberpunk 风格文本动效。加载或悬停时字符像矩阵密码一样高速随机滚动，随后逐字解密定格为真实文案。",
    "enDescription": "Cyberpunk text decoding. Characters cycle through random cipher glyphs before locking into words.",
    "prompt": "请帮我实现一个网页动效：黑客密码解密文本（Text Scramble Decrypt）。当触发时，通过 JavaScript 高频替换文字中的字符为随机特殊符号（如 !<>-_\\/[]{}—=+*^?#_），随后由左至右逐字收敛锁定为原始文本。",
    "enPrompt": "Please help me implement a web motion: Text Scramble Decrypt. Rapidly randomize characters with cipher glyphs and progressively resolve them left-to-right to the final text."
  },
  {
    "id": "split-text-3d-wave",
    "zhName": "文字 3D 逐字波浪飞入",
    "enName": "Split-Text 3D Wave",
    "category": "进入",
    "description": "Codrops 封面级排版。大标题文字在入场时拆分为单字，每个字符带有独立的 3D 空间翻折（rotateX）与模糊递进。",
    "enDescription": "Editorial 3D typography. Splits headlines into characters that flip in from rotateX(90deg) with perspective waves.",
    "prompt": "请帮我实现一个网页动效：文字 3D 逐字波浪飞入（Split-Text 3D Wave）。在包含 perspective 透视的容器中将文本拆分为 span 字符，初始状态设置 transform: rotateX(90deg) translateY(30px) filter: blur(8px)，通过错开的延时让字符如波浪般顺滑翻折归位。",
    "enPrompt": "Please help me implement a web motion: Split-Text 3D Wave. Split text into spans with 3D rotateX and perspective, staggering character arrivals sequentially."
  },
  {
    "id": "magnetic-glow-button",
    "zhName": "磁吸吸附光晕按钮",
    "enName": "Magnetic Glow Button",
    "category": "悬停",
    "description": "Awwwards 级高级按钮。光标靠近时按钮主动朝光标方向位移吸附，内部伴随光晕扩散与触感粘滞。",
    "enDescription": "Award-winning button. Button magnetically pulls toward the cursor with shifting internal ambient glow.",
    "prompt": "请帮我实现一个网页动效：磁吸吸附光晕按钮（Magnetic Glow Button）。计算光标与按钮中心的距离向量，在感应半径内对按钮应用 translate 磁吸吸附偏移，并在按钮内部渲染跟随光标角度的光晕扩散图层，移出时光滑弹回原位。",
    "enPrompt": "Please help me implement a web motion: Magnetic Glow Button. Apply magnetic translation toward the cursor within a threshold radius, combined with an internal moving glow layer."
  },
  {
    "id": "infinite-marquee",
    "zhName": "无缝跑马灯",
    "enName": "Infinite Marquee",
    "category": "滚动",
    "description": "利用复制两份相同宽度的文本磁带，在 CSS 动画中按 -50% translateX 无缝循环移动，制造无休止流动的流动效果。",
    "enDescription": "Duplicates content and uses CSS keyframes to translate by -50% for an endless, seamless horizontal loop.",
    "prompt": "请帮我实现一个网页动效：无缝跑马灯（Infinite Marquee）。两份相同宽度的条带无缝衔接循环位移，实现无缝滚动。",
    "enPrompt": "Please help me implement a web motion: Infinite Ticker. Create a horizontal marquee that loops text or logos seamlessly at a constant speed, pausing on mouse hover."
  },
  {
    "id": "noise-texture",
    "zhName": "动态噪点材质",
    "enName": "Dynamic Noise Texture",
    "category": "反馈",
    "description": "利用 Canvas 逐像素渲染胶片颗粒，噪点附着于卡片表面。Hover 时颗粒高频震动，带来工业粗野的材质激活感。",
    "enDescription": "Renders SVG turbulence filter background grain, shifts noise frequency on hover to simulate dynamic film grain.",
    "prompt": "请帮我实现一个网页动效：动态噪点材质（Dynamic Noise Texture）。利用 Canvas 逐像素绘制随机颗粒，将噪点覆盖在卡片表面，Hover 时提高颗粒刷新频率并增强透明度，模拟胶片材质激活的粗野质感。",
    "enPrompt": "Please help me implement a web motion: Dynamic Noise Texture. Render SVG feTurbulence grain overlay and shift noise frequency on hover."
  },
  {
    "id": "grid-dot-proximity",
    "zhName": "点阵网格近邻感应高亮",
    "enName": "Grid Dot Matrix Proximity",
    "category": "悬停",
    "description": "极客开发控制台背景。整齐排列的微型圆点阵列，当光标靠近时，以光标为中心半径内的点阵产生缩放放大与色彩增亮，远离后平滑衰减。",
    "enDescription": "Proximity dot illumination. Regular matrix of micro-dots that scale and illuminate when the cursor approaches within an activation radius.",
    "prompt": "请帮我实现一个网页动效：点阵网格近邻感应高亮（Grid Dot Matrix Proximity）。在 Canvas 或 DOM Grid 中绘制均匀点阵，在 mousemove 时计算每个点到光标的距离 d，根据距离映射 scale(1 -> 2.5) 与 opacity(0.2 -> 1.0)，离开时通过 transition 平滑复位。",
    "enPrompt": "Please help me implement a web motion: Grid Dot Matrix Proximity. Scale and illuminate arrayed dots inversely proportional to Euclidean distance from mouse position."
  },
  {
    "id": "canvas-ripple-grid",
    "zhName": "交互式粒子网格",
    "enName": "Interactive Ripple Grid",
    "category": "悬停",
    "description": "使用 HTML5 Canvas 绘制低密度的点阵。当光标划过时，粒子受重力磁吸排开，并使用胡克定律弹力回弹复位。",
    "enDescription": "Draws a dot grid on Canvas; particles shift from cursor via vectors and rebound using physical elasticity.",
    "prompt": "请帮我实现一个网页动效：Canvas 交互式粒子网格（Interactive Ripple Grid）。在 Canvas 画布上绘制低密度的粒子点阵，计算鼠标位置向量，使其随鼠标滑过而排开，鼠标移开后像橡皮筋一样平滑弹性回弹复位。",
    "enPrompt": "Please help me implement a web motion: Canvas Interactive Ripple Grid. Draw particle dots that shift away from the cursor and rebound."
  },
  {
    "id": "svg-path-morphing",
    "zhName": "路径形变果冻按钮",
    "enName": "SVG Path Jelly Morphing",
    "category": "反馈",
    "description": "点击时 SVG 的矢量 path 进行贝塞尔曲线点插值变形，从基础按钮变成扁平气泡或果冻，伴随弹性震颤。",
    "enDescription": "Interpolates SVG path coordinate vectors to morph borders into jelly shapes with bouncy spring damping.",
    "prompt": "请帮我实现一个网页动效：SVG 路径形变果冻按钮（SVG Path Morphing Button）。当点击或 Hover 按钮时，SVG 背景路径的矢量坐标进行贝塞尔点平滑插值过渡，使其形状产生果冻拉伸并伴随回弹震颤反馈。",
    "enPrompt": "Please help me implement a web motion: SVG Path Morphing Button. Interpolate SVG path coordinates for gel shape morphs."
  },
  {
    "id": "organic-morphing-blob",
    "zhName": "流体变形有机泡泡",
    "enName": "Organic Morphing Blob",
    "category": "反馈",
    "description": "单细胞流体生命律动。CSS border-radius 八角独立比例连续缓动形变，赋予形状类似水滴、有机泡泡的生命律动感。",
    "enDescription": "Organic morphing shape. Continuous multi-axis border-radius keyframing that creates amoeba-like, elastic fluid blobs.",
    "prompt": "请帮我实现一个网页动效：流体变形有机泡泡（Organic Morphing Blob）。利用 CSS @keyframes 循环平滑过渡 border-radius 的 8 个控制百分比（如 60% 40% 30% 70% / 60% 30% 70% 40%），配合轻微 rotate 自旋，打造生动的有机水滴/气泡形态。",
    "enPrompt": "Please help me implement a web motion: Organic Morphing Blob. Animate multi-value border-radius continuously with subtle rotation for organic fluid blob effects."
  },
  {
    "id": "twinkling-starfield",
    "zhName": "闪烁微光星空点阵",
    "enName": "Twinkling Starfield Particles",
    "category": "进入",
    "description": "深色卡片魔法高光。随机分布的微型星芒粒子以不同周期呼吸闪烁与自旋，光标移动时产生极轻微的 2.5D 视差推移。",
    "enDescription": "Subtle cosmic sparkle. Multi-sized twinkling star particles breathing and pulsing at varied frequencies with subtle cursor parallax.",
    "prompt": "请帮我实现一个网页动效：闪烁微光星空点阵（Twinkling Starfield Particles）。在容器内生成随机坐标的微型星芒（✦ / ✧），各自分配随机动画延时与缩放呼吸周期，模拟夜空繁星闪烁的静谧高级氛围。",
    "enPrompt": "Please help me implement a web motion: Twinkling Starfield Particles. Scatter glowing multi-frequency star glyphs with staggered keyframe pulsing and parallax."
  },
  {
    "id": "aurora-background",
    "zhName": "极光渐变弥散流光",
    "enName": "Aurora Glow Background",
    "category": "进入",
    "description": "北极真境极光流体光晕。多层高斯模糊与多色翡翠/青冰/柠金径向渐变网格，通过连续流体位移与有机形变，营造极光般的梦幻背景。",
    "enDescription": "Boreal ethereal flow. Layered emerald, cyan and lime radial gradients orbiting smoothly to create ambient aurora illumination.",
    "prompt": "请帮我实现一个网页动效：极光渐变弥散流光（Aurora Glow Background）。在深黑夜空背景上放置多个带有 filter: blur(60px) 的翡翠绿/青冰/柠金径向渐变色块，运用 @keyframes 结合 transform: translate() rotate() 与有机形变呼吸律动，创造高级柔和的极光背景动效。",
    "enPrompt": "Please help me implement a web motion: Aurora Glow Background. Combine heavy gaussian blur layers with emerald, cyan, and lime gradients animating along continuous parametric curves."
  },
  {
    "id": "meteors-background",
    "zhName": "流星夜空划过特效",
    "enName": "Meteors Shower Background",
    "category": "进入",
    "description": "深邃奢华夜空天文台动效。超细渐变尾迹光束以真实流星轨道高速划破夜空，头部伴随耀眼钻石高光，点缀微光星海。",
    "enDescription": "Luxury observatory night sky. High-speed tapered needle meteors shoot across dark starfields with diamond head glows.",
    "prompt": "请帮我实现一个网页动效：流星夜空划过特效（Meteors Shower Background）。通过纯 CSS 生成倾斜 215deg 的针尖流星光束，头部添加白炽发光光斑，主体使用极致平滑的 linear-gradient 尾迹渐变，配合微光星空背景创造奢华夜空动效。",
    "enPrompt": "Please help me implement a web motion: Meteors Shower Background. Render angled needle-sharp meteor streaks with diamond head points and fading trails shooting across cosmic starfields."
  },
  {
    "id": "custom-cursor",
    "zhName": "鼠标跟随光标",
    "enName": "Custom Cursor",
    "category": "悬停",
    "description": "隐藏了系统自带箭头。页面上有两个 DOM 圆形：一个点在鼠标上，一个大圆在后面，通过摩擦力平滑追赶鼠标。",
    "enDescription": "Hides native pointer and runs dual circle elements with lag-behind physics, shrinking and expanding on hover targets.",
    "prompt": "请帮我实现一个网页动效：鼠标跟随光标（Custom Cursor）。隐藏原生光标，用双圆点惯性拖随动画模拟现代极简指针。",
    "enPrompt": "Please help me implement a web motion: Custom Cursor. Replace the default pointer with custom circles that track the cursor with drag-inertia and adapt size on hover."
  },
  {
    "id": "cursor-trail",
    "zhName": "光标轨迹动态拖影",
    "enName": "Interactive Cursor Trail",
    "category": "悬停",
    "description": "创意工作室品牌秀场。当鼠标在页面快速滑过时，在历史坐标路径上留下一串带惯性滞后、随时间渐隐消散的微缩缩略图或光斑粒子。",
    "enDescription": "Creative agency gesture trail. Leaves a fluid ribbon of decaying image chips or glowing dots lagging smoothly along the pointer's velocity path.",
    "prompt": "请帮我实现一个网页动效：光标轨迹动态拖影（Interactive Cursor Trail）。监听 mousemove 事件并在鼠标移动距离超过阈值时生成历史坐标节点，使用 requestAnimationFrame 驱动历史节点按照生命周期逐步缩小和透明度衰减，并在 500ms 后自动清理 DOM。",
    "enPrompt": "Please help me implement a web motion: Interactive Cursor Trail. Spawn ephemeral trailing nodes on mouse trajectory that scale down and fade with inertia."
  },
  {
    "id": "confetti-explosion",
    "zhName": "物理重力礼花爆炸",
    "enName": "Confetti Explosion Burst",
    "category": "反馈",
    "description": "成就与支付成功必备。点击瞬间从中心喷射出五彩缤纷的纸屑颗粒，并在重力、阻力与旋转模拟下优雅下落散开。",
    "enDescription": "Celebratory confetti blast. Spawns colorful particle fragments on click governed by gravity and air drag physics.",
    "prompt": "请帮我实现一个网页动效：物理重力礼花爆炸（Confetti Explosion Burst）。使用 HTML5 Canvas 在按钮点击瞬间生成 100+ 随机颜色、形状、初始速度与角度的粒子，通过物理公式模拟重力加速度、风阻与 3D 自转，形成真实的礼花漫天飞散效果。",
    "enPrompt": "Please help me implement a web motion: Confetti Explosion. Spawn Canvas confetti particles on click with physics velocity, gravity, and 3D rotation."
  }
];

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
let activeTab = "prompt"; // "prompt" or "code"

const uiTranslations = {
  zh: {
    backBtnText: "返回动效列表",
    backBtnTitle: "返回动效列表 (快捷键 Esc)",
    promptCardLabel: "AI 提示词",
    codeCardLabel: "源代码",
    copyPromptBtnText: "复制",
    copyPromptSuccessText: "已复制",
    replayBtnText: "重新播放效果",
    floatingExpandText: "动效详情",
    collapseBtnTitle: "收起详情面板 (快捷键 H)",
    expandBtnTitle: "展开详情面板 (快捷键 H)",
    toastCopySuccess: "内容已复制到剪贴板！",
    loadingDesc: "正在加载动效说明...",
    loadingPrompt: "正在生成提示词...",
    loadingTitle: "加载中..."
  },
  en: {
    backBtnText: "Back to Gallery",
    backBtnTitle: "Back to Gallery (Esc)",
    promptCardLabel: "AI Prompt",
    codeCardLabel: "Source Code",
    copyPromptBtnText: "Copy",
    copyPromptSuccessText: "Copied!",
    replayBtnText: "Replay Animation",
    floatingExpandText: "Motion Details",
    collapseBtnTitle: "Collapse Panel (Hotkey H)",
    expandBtnTitle: "Expand Panel (Hotkey H)",
    toastCopySuccess: "Copied to clipboard!",
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
const detailCategory = document.getElementById("detailCategory");
const detailDesc = document.getElementById("detailDesc");
const promptText = document.getElementById("promptText");
const replayBtn = document.getElementById("replayBtn");
const panelBackBtn = document.getElementById("panelBackBtn");

// 3. Render Control Panel content
function initControlPanel() {
  const currentIndex = motions.findIndex(m => m.id === currentMotion.id);
  if (motionIndexBadge && currentIndex !== -1) {
    motionIndexBadge.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${motions.length}`;
  }
  if (detailTitleZh) detailTitleZh.textContent = currentLang === "en" ? currentMotion.enName : currentMotion.zhName;
  if (detailTitleEn) detailTitleEn.textContent = currentLang === "en" ? currentMotion.zhName : currentMotion.enName;
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
  return `<!-- ${motion.zhName} (${motion.enName}) -->
<div class="${motion.id}-wrapper">
  <div class="${motion.id}-element">
    <span>Motion Sample</span>
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
  border: 1px solid var(--border-color, rgba(255,255,255,0.1));
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
  transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

.${motion.id}-element:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.3);
}

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
    floatingExpandBtn.classList.add("visible");
  } else {
    controlPanel.classList.remove("collapsed");
    floatingExpandBtn.classList.remove("visible");
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

  // Previous / Next Motion Navigation
  if (prevMotionBtn) {
    prevMotionBtn.addEventListener("click", () => navigateMotion(-1));
  }
  if (nextMotionBtn) {
    nextMotionBtn.addEventListener("click", () => navigateMotion(1));
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
  
  // Initialize current language state & render motion
  setLanguage(currentLang);
}

document.addEventListener("DOMContentLoaded", init);
