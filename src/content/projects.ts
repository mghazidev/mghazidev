/**
 * Every project on the site, as data.
 *
 * Each claim here was checked against the project's own code, commits or docs
 * before it was written down — a dependency in pubspec.yaml is not evidence a
 * feature exists, so features are listed only where the code uses them.
 *
 * Media paths point under /public/work/<slug>/. A project with no media yet
 * renders its architecture as the hero instead, so the page never shows an
 * empty frame.
 */

export type Platform = "mobile" | "web";

/** Drives styling only; the label is what readers see. */
export type Status = "open-source" | "production-ready" | "complete" | "in-progress" | "concept";

export type ArchNode = { id: string; label: string; detail?: string };
export type ArchEdge = { from: string; to: string; via: string };

export type Shot = {
  src: string;
  alt: string;
  /** Intrinsic pixel size, so the browser reserves space and nothing shifts. */
  width: number;
  height: number;
  /** Phone screens are framed as a device; web screens as a browser window. */
  frame: "phone" | "browser" | "none";
  caption?: string;
};

/**
 * One product inside a larger project — MenuPK is three of them plus a
 * marketing site. `source` says what the screens are: running code captured
 * locally, or frames from the product's Figma file. Readers are told which.
 */
export type Surface = {
  title: string;
  summary: string;
  source: "live" | "design";
  shots: Shot[];
  video?: { src: string; poster: string; caption: string };
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  platform: Platform;
  status: Status;
  statusLabel: string;
  year: string;
  context: string;
  role: string;
  /** One hex colour that tints the card and the case study. */
  accent: string;
  problem: string;
  built: string;
  stack: { layer: string; items: string[] }[];
  architecture: { nodes: ArchNode[]; edges: ArchEdge[] };
  features: { title: string; detail: string }[];
  decisions: { title: string; detail: string }[];
  metrics: { value: string; label: string }[];
  cover?: Shot;
  gallery: Shot[];
  /** `poster` is shown before playback — the first frame is often an empty state. */
  video?: { src: string; poster: string; caption: string };
  repo?: string;
  /** Company work: screens are redacted and the code is not public. */
  confidential?: boolean;
  /** Shown full width at the top of the work grid. At most one project. */
  flagship?: boolean;
  surfaces?: Surface[];
};

export const projects: Project[] = [
  {
    slug: "menupk",
    title: "MenuPK",
    tagline: "A restaurant platform: a page and a menu for every restaurant, and the back office that runs its orders.",
    summary:
      "DevsquarePK's startup product. I led its frontend: the portal diners order from, the portal restaurants run themselves from, and the back office that takes their orders — three products on one Next.js codebase.",
    platform: "web",
    status: "production-ready",
    statusLabel: "Shipped in beta",
    year: "2023 — 2025",
    context: "DevsquarePK",
    role: "Frontend engineer — led the frontend across three products",
    accent: "#fb7185",
    problem:
      "Small restaurants, food carts and home chefs in Pakistan had little between a paper menu and an aggregator that takes a large cut of every order. DevsquarePK set out to give each of them a page, a menu and an ordering system of their own.",
    built:
      "One Next.js and TypeScript codebase serving three products — a customer portal, a restaurant portal and an online-ordering back office — on a shared component kit, against the team's Express, MongoDB and Redis API. Separately, I built the marketing site.",
    stack: [
      { layer: "Frontend", items: ["Next.js 14", "React 18", "TypeScript", "MUI", "Tailwind + Radix"] },
      { layer: "State and data", items: ["Jotai", "React Query", "axios", "WebSocket"] },
      { layer: "Maps and charts", items: ["Google Maps + Places", "Chart.js"] },
      { layer: "Backend (team)", items: ["Express", "MongoDB", "Redis", "Docker Compose on AWS EC2"] },
      { layer: "Marketing site", items: ["Next.js", "Tailwind", "GSAP", "Framer Motion"] },
    ],
    architecture: {
      nodes: [
        { id: "web", label: "Next.js", detail: "3 products" },
        { id: "api", label: "Express API", detail: "TypeScript" },
        { id: "db", label: "MongoDB", detail: "restaurants · orders" },
        { id: "redis", label: "Redis", detail: "tokens" },
        { id: "maps", label: "Google Maps", detail: "places · zones" },
      ],
      edges: [
        { from: "web", to: "api", via: "REST" },
        { from: "api", to: "web", via: "ws · new order" },
        { from: "api", to: "db", via: "mongoose" },
        { from: "api", to: "redis", via: "cache" },
        { from: "web", to: "maps", via: "js api" },
      ],
    },
    features: [
      { title: "Search and discovery", detail: "Diners search by dish, cuisine or restaurant, filter by cuisine and dining style, and sort by relevance, rating or distance." },
      { title: "A page for every restaurant", detail: "Menu, about, reviews, gallery and feedback, each restaurant on its own route." },
      { title: "Checkout and order tracking", detail: "Orders go from the restaurant's menu through checkout to a page that follows that order." },
      { title: "Five-step onboarding", detail: "Register, restaurant details, location on a map, menu upload and photos — a restaurant is live at the end of it." },
      { title: "Menu management", detail: "Items, categories, deals and add-ons, with a CSV upload for menus that already exist in a spreadsheet." },
      { title: "A QR code for every table", detail: "Each restaurant gets a QR code to its menu, printable straight from the dashboard." },
      { title: "Live new orders", detail: "Orders appear as they are placed, then move through accepted, preparing, dispatched and delivered — or rejected." },
      { title: "Delivery zones and coupons", detail: "Restaurants set delivery areas with their own minimum order, charge and time, and run coupon campaigns." },
    ],
    decisions: [
      {
        title: "Feature modules for three products",
        detail:
          "The app is split into feature modules — restaurant, dashboard, onboarding, online ordering — each owning its components, pages and data hooks. I started the dashboard module and wrote most of it and the restaurant module, so three products grew in one codebase without work on one spilling into another.",
      },
      {
        title: "One component kit, three products",
        detail:
          "menu-ui: about twenty shared components (buttons, cards, drawer, modal, navbar, map, skeletons) and 132 icon components on one MUI theme, so the diner's portal and the restaurant's back office read as the same product.",
      },
      {
        title: "An order you can hear",
        detail:
          "New orders arrive over a WebSocket; the back office shows a notification and rings a bell, so kitchen staff notice an order without watching the screen.",
      },
    ],
    metrics: [
      { value: "75", label: "routes" },
      { value: "3", label: "products" },
      { value: "~800", label: "commits mine" },
    ],
    cover: {
      src: "/work/menupk/site-hero.png",
      width: 2160,
      height: 1350,
      alt: "The MenuPK marketing site: Revitalize your Restaurants Online Presence with Menu Pk, above a preview of the online-ordering dashboard",
      frame: "browser",
    },
    gallery: [],
    confidential: true,
    flagship: true,
    surfaces: [
      {
        title: "Marketing site",
        summary:
          "Mine alone: I took the site's Webflow design into Next.js and built its GSAP scroll sequences. It sells the product and sends restaurants into onboarding.",
        source: "live",
        video: {
          src: "/work/menupk/site-journey.webm",
          poster: "/work/menupk/site-digitize.png",
          caption:
            "The whole page, run locally from its repository with analytics blocked. One mock-up showing a person's contact details is blurred.",
        },
        shots: [
          {
            src: "/work/menupk/site-qr.jpg",
            width: 2160,
            height: 1350,
            alt: "Marketing site section on quick setup and the integrated QR code, beside a Scan to view menu table card",
            frame: "browser",
            caption: "Feature sections, each paired with the product screen it describes.",
          },
          {
            src: "/work/menupk/site-mobile.png",
            width: 585,
            height: 1266,
            alt: "The marketing site's hero at phone width",
            frame: "phone",
            caption: "The same hero at phone width.",
          },
        ],
      },
      {
        title: "Customer portal",
        summary:
          "Where diners find a restaurant, read its menu and order. Desktop and mobile were designed together; I built the restaurant pages, checkout and order tracking.",
        source: "design",
        shots: [
          {
            src: "/work/menupk/customer-home.jpg",
            width: 2160,
            height: 1350,
            alt: "Customer portal home: a search bar over a kitchen photo, a row of top cuisines, and nearby restaurants with delivery times and discounts",
            frame: "browser",
          },
          {
            src: "/work/menupk/customer-restaurant.jpg",
            width: 2160,
            height: 1350,
            alt: "A restaurant page with its rating breakdown, a form to rate and review, and recent reviews",
            frame: "browser",
          },
          {
            src: "/work/menupk/customer-mobile-home.jpg",
            width: 828,
            height: 1794,
            alt: "Customer portal home on a phone",
            frame: "phone",
          },
          {
            src: "/work/menupk/customer-mobile-menu.jpg",
            width: 828,
            height: 1670,
            alt: "A restaurant's menu on a phone, grouped into sections with prices and add buttons",
            frame: "phone",
          },
          {
            src: "/work/menupk/customer-mobile-search.jpg",
            width: 828,
            height: 1382,
            alt: "Search results for pizza on a phone, as a grid of restaurant cards",
            frame: "phone",
          },
        ],
      },
      {
        title: "Restaurant portal",
        summary:
          "Where a restaurant sets itself up and runs its page: onboarding, profile, menu, gallery, reviews, customers and a QR code, with a dashboard on top.",
        source: "design",
        shots: [
          {
            src: "/work/menupk/restaurant-dashboard.png",
            width: 2160,
            height: 1350,
            alt: "Restaurant dashboard: visit and rating figures, activity by hour, and customer feedback by sentiment",
            frame: "browser",
          },
          {
            src: "/work/menupk/onboarding-steps.png",
            width: 2160,
            height: 1350,
            alt: "Digitalize your restaurant with 5 steps: confirm email, restaurant details, location, upload photos, upload menu",
            frame: "browser",
          },
          {
            src: "/work/menupk/menu-management.png",
            width: 2160,
            height: 1350,
            alt: "Menu management: category tabs and menu item cards with availability toggles",
            frame: "browser",
          },
        ],
      },
      {
        title: "Online ordering",
        summary:
          "The back office behind delivery and takeaway: a live order board, order history, customers, coupons and delivery zones.",
        source: "design",
        shots: [
          {
            src: "/work/menupk/ordering-dashboard.jpg",
            width: 2160,
            height: 1350,
            alt: "Online ordering dashboard: orders and sales today, customer visits against orders by hour, order completion, best sellers and a delivery heat map",
            frame: "browser",
          },
          {
            src: "/work/menupk/new-orders.png",
            width: 2160,
            height: 1350,
            alt: "New orders board with columns for placed, accepted and in preparation; customer names and numbers replaced with placeholders",
            frame: "browser",
          },
          {
            src: "/work/menupk/delivery-zones.png",
            width: 2160,
            height: 1350,
            alt: "Delivery zones for Karachi: two zones of named areas, each with minimum order, delivery charge and delivery time",
            frame: "browser",
          },
        ],
      },
      {
        title: "Design language",
        summary:
          "One palette for every surface — brand reds, secondary yellows, neutrals — carried into code as the MUI theme behind the shared component kit.",
        source: "design",
        shots: [
          {
            src: "/work/menupk/colour-system.png",
            width: 2160,
            height: 1350,
            alt: "Colour system: brand red, secondary yellow and neutral scales from 50 to 900",
            frame: "browser",
          },
        ],
      },
    ],
  },
  {
    slug: "softex-chat",
    title: "Softex Chat",
    tagline: "Real-time messaging for a company workspace.",
    summary:
      "Team chat with replies, forwarding, reactions, read receipts and group roles — live over Socket.IO.",
    platform: "mobile",
    status: "production-ready",
    statusLabel: "Production-ready",
    year: "2026",
    context: "Softex Solution",
    role: "Flutter developer — UI system, state and real-time integration",
    accent: "#8b5cf6",
    problem:
      "The company wanted its own internal messenger: conversations, groups and media tied to its own accounts and backend rather than a consumer chat app.",
    built:
      "A Flutter client on Riverpod that loads history over REST with Dio and receives live events over Socket.IO, wrapped in a dark glassmorphic interface.",
    stack: [
      { layer: "Client", items: ["Flutter", "Dart", "Riverpod", "flutter_animate"] },
      { layer: "Transport", items: ["Socket.IO", "Dio (REST)"] },
      { layer: "Media", items: ["image & file picker", "video_player + Chewie", "photo_view", "emoji picker"] },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Flutter", detail: "Riverpod" },
        { id: "socket", label: "Socket.IO", detail: "live events" },
        { id: "api", label: "REST API", detail: "auth · history · media" },
      ],
      edges: [
        { from: "app", to: "socket", via: "ws" },
        { from: "app", to: "api", via: "https" },
      ],
    },
    features: [
      { title: "Replies and forwarding", detail: "Quote any message in a reply, or forward it to another conversation." },
      { title: "Reactions and read receipts", detail: "Emoji reactions under a message, and delivered/read ticks per message." },
      { title: "Groups with roles", detail: "Admins manage members and can switch a group to admin-only messaging." },
      { title: "Search and context", detail: "Search inside a conversation, date separators, and an edited tag on changed messages." },
      { title: "Rich media", detail: "Photos, video and files, with full-screen viewers." },
    ],
    decisions: [
      {
        title: "One source of truth for live state",
        detail:
          "State management was moved to Riverpod mid-build so that socket events and UI state flow through the same providers instead of being patched together.",
      },
      {
        title: "Two transports, two jobs",
        detail:
          "REST for anything that must be complete and ordered — history, auth, uploads. The socket only for what is live — new messages, typing, presence.",
      },
    ],
    metrics: [
      { value: "8", label: "screens" },
      { value: "92", label: "Dart files" },
      { value: "2", label: "transports" },
    ],
    gallery: [],
    confidential: true,
  },
  {
    slug: "finance-intelligence",
    title: "Finance Intelligence",
    tagline: "A local-first finance assistant that never invents a number.",
    summary:
      "Bank statements in; spending, commitments and next month's cost out. A local LLM answers questions by calling the financial engine — never by guessing.",
    platform: "web",
    status: "open-source",
    statusLabel: "Open source",
    year: "2026",
    context: "Personal product",
    role: "Solo — product, architecture, backend, frontend",
    accent: "#22d3ee",
    problem:
      "Finance apps either need your bank login or ask an AI to read your money and hope it adds up. Neither is acceptable for data this sensitive.",
    built:
      "A pipeline that turns statement PDFs into a canonical transaction model, a deterministic engine that owns every figure, and a local assistant that can only reach those figures through controlled tools.",
    stack: [
      { layer: "Web", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind"] },
      { layer: "Backend", items: ["FastAPI", "SQLAlchemy", "Alembic", "SQLite (WAL)"] },
      { layer: "AI", items: ["Ollama", "qwen3:4b", "tool calling"] },
      { layer: "Quality", items: ["pytest", "Vitest", "Playwright"] },
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Next.js", detail: "dashboard · chat" },
        { id: "api", label: "FastAPI", detail: "services" },
        { id: "engine", label: "Engine", detail: "deterministic" },
        { id: "llm", label: "Ollama", detail: "local model" },
      ],
      edges: [
        { from: "ui", to: "api", via: "REST · SSE" },
        { from: "api", to: "engine", via: "calls" },
        { from: "llm", to: "engine", via: "tools" },
      ],
    },
    features: [
      { title: "Statement import with a review queue", detail: "Anything that can't be verified is held for a decision instead of being guessed." },
      { title: "A dashboard that leads with a conclusion", detail: "One sentence on what changed comes before any chart." },
      { title: "Recurring detection with evidence", detail: "Nothing is called recurring until it has happened three times, and each entry says so." },
      { title: "A labelled projection", detail: "Commitments, estimates and what's likely left over are kept apart and marked." },
      { title: "An assistant with visible tool calls", detail: "Every answer shows which part of the engine it asked." },
    ],
    decisions: [
      {
        title: "The model never produces an amount",
        detail:
          "It interprets the question and chooses a tool; arithmetic is always application code. The assistant's answer matches the dashboard to the cent because it is the same calculation.",
      },
      {
        title: "Uncertainty stays uncertain",
        detail:
          "A credit with only a reference number is marked Unconfirmed and held, never promoted to income. A month with no data says so instead of reporting zero spending.",
      },
      {
        title: "Decisions written down",
        detail: "Seven architecture decision records explain the trade-offs, so the reasoning survives the code.",
      },
    ],
    metrics: [
      { value: "964", label: "tests" },
      { value: "7", label: "ADRs" },
      { value: "0", label: "cloud calls" },
    ],
    cover: {
      src: "/work/finance-intelligence/dashboard.png",
      width: 2160,
      height: 1350,
      alt: "Finance Intelligence dashboard for August 2026: 995.19 EUR spent, a category breakdown, recurring payments and next month's outlook",
      frame: "browser",
    },
    gallery: [
      {
        src: "/work/finance-intelligence/chat-answer.png",
        width: 1120,
        height: 310,
        alt: "The assistant's answer with two tool calls, Read spending by category and Read your commitments, shown above it",
        frame: "none",
        caption: "From a live run against a local model: the assistant asks the engine for the figure instead of producing one.",
      },
      {
        src: "/work/finance-intelligence/uncertain-transaction.png",
        width: 1077,
        height: 266,
        alt: "A review card for CREDIT 884213 marked Unconfirmed: this could be income, a refund, or money moved from your own savings",
        frame: "none",
        caption: "A transaction the app can't classify is held for a decision.",
      },
      {
        src: "/work/finance-intelligence/outlook.png",
        width: 480,
        height: 623,
        alt: "September outlook separating already committed costs, estimates, and the likely amount left over",
        frame: "none",
        caption: "Estimates are labelled as estimates wherever they appear.",
      },
      {
        src: "/work/finance-intelligence/commitments.png",
        width: 2160,
        height: 1350,
        alt: "The commitments page offering rent, Netflix and groceries as detected commitments, with salary correctly left out",
        frame: "browser",
        caption: "Detected commitments are offered, not assumed — and salary isn't one.",
      },
      {
        src: "/work/finance-intelligence/transactions.png",
        width: 2160,
        height: 1350,
        alt: "The August transaction list: each normalised merchant name shown above the bank's original wording, and the unidentified credit typed Unknown",
        frame: "browser",
        caption: "Every row keeps the bank's original wording beneath the cleaned-up name.",
      },
    ],
    video: {
      src: "/work/finance-intelligence/journey.webm",
      poster: "/work/finance-intelligence/upload.png",
      caption: "Upload, review, dashboard and commitments in one real take — the deterministic engine, no model in the loop.",
    },
    repo: "https://github.com/mghazidev/finance-intelligence",
  },
  {
    slug: "tiny-giggle",
    title: "Tiny Giggle",
    tagline: "A baby journal, community and care marketplace in one app.",
    summary:
      "Growth tracking, a cloud photo album, a reels feed, music, shopping and booking babysitters — fourteen feature modules behind one parent-facing app.",
    platform: "mobile",
    status: "complete",
    statusLabel: "Feature-complete",
    year: "2026",
    context: "Product build",
    role: "Flutter developer — full refactor, design and API integration",
    accent: "#f472b6",
    problem:
      "New parents juggle a photo app, a notes app, forums, shops and word of mouth for care. The brief was one place for all of it.",
    built:
      "A modular Flutter app on GetX where each area — baby, community, reels, music, shopping, messages, AI assistant — is its own module with controllers, models and views, talking to one API with Pusher for live updates.",
    stack: [
      { layer: "Client", items: ["Flutter", "Dart", "GetX"] },
      { layer: "Realtime", items: ["Pusher Channels"] },
      { layer: "Media", items: ["just_audio", "cached video player", "visibility_detector"] },
      { layer: "Platform", items: ["Google Sign-In", "geolocator", "fl_chart"] },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Flutter", detail: "GetX · 14 modules" },
        { id: "api", label: "REST API", detail: "content · bookings" },
        { id: "rt", label: "Pusher", detail: "live updates" },
      ],
      edges: [
        { from: "app", to: "api", via: "https" },
        { from: "app", to: "rt", via: "channels" },
      ],
    },
    features: [
      { title: "Growth tracking", detail: "A baby's measurements plotted over time." },
      { title: "Cloud album", detail: "Photos stored and organised per baby." },
      { title: "Reels feed", detail: "Short videos that play as they scroll into view and pause as they leave." },
      { title: "Care marketplace", detail: "Find and book babysitters, with searchable listings." },
      { title: "Community, music and shopping", detail: "Parent community, a music player, and a shop with a cart." },
      { title: "AI assistant", detail: "A chat assistant for parenting questions inside the app." },
    ],
    decisions: [
      {
        title: "Modules, not screens",
        detail:
          "Each feature owns its controllers, models, repositories and views, which is what made a late full refactor of the app possible without breaking the rest.",
      },
      {
        title: "Video that respects the scroll",
        detail: "Reels only decode when visible, so a long feed doesn't hold every video in memory.",
      },
    ],
    metrics: [
      { value: "14", label: "modules" },
      { value: "277", label: "Dart files" },
      { value: "50+", label: "commits" },
    ],
    gallery: [],
  },
  {
    slug: "lecture-ai-companion",
    title: "Lecture AI Companion",
    tagline: "Turns a slide deck and a live lecture into structured notes.",
    summary:
      "Upload the slides, press record, and notes are written per slide as the lecture happens — transcription and the language model both run on your own machine.",
    platform: "web",
    status: "open-source",
    statusLabel: "Open source",
    year: "2026",
    context: "Personal product",
    role: "Solo — product, architecture, backend, frontend",
    accent: "#a3e635",
    problem:
      "Slides carry the outline; the explanation around them is where the content is, and it's exactly what gets missed while you're writing.",
    built:
      "A FastAPI backend that extracts the deck, transcribes microphone audio streamed over a WebSocket, and asks a local model to write notes for whichever slide is on screen.",
    stack: [
      { layer: "Web", items: ["Next.js 16", "React 19", "Tiptap", "Tailwind"] },
      { layer: "Backend", items: ["FastAPI", "WebSockets", "PyMuPDF"] },
      { layer: "AI", items: ["faster-whisper (CPU)", "Ollama (GPU)"] },
    ],
    architecture: {
      nodes: [
        { id: "ui", label: "Next.js", detail: "slides · editor" },
        { id: "api", label: "FastAPI", detail: "session" },
        { id: "stt", label: "Whisper", detail: "CPU" },
        { id: "llm", label: "Ollama", detail: "GPU" },
      ],
      edges: [
        { from: "ui", to: "api", via: "audio · ws" },
        { from: "api", to: "stt", via: "PCM" },
        { from: "api", to: "llm", via: "slide + transcript" },
      ],
    },
    features: [
      {
        title: "Slides in, workspace out",
        detail: "Drop a PDF and it opens straight into a workspace: slide rail, the current slide, and its notes.",
      },
      {
        title: "Live transcript, tagged by slide",
        detail: "Speech is transcribed as the lecture goes, and every line is filed under the slide it was said on.",
      },
      {
        title: "Notes from the explanation",
        detail:
          "When the lecturer moves on or recording stops, a local model writes notes from what was said — not just what was on the slide.",
      },
      {
        title: "An editor you own",
        detail: "Notes land in a rich-text editor seeded with the slide's own points, and save automatically.",
      },
      {
        title: "Pre-flight check",
        detail: "Before recording, confirms the model is loaded, there's enough video memory, and transcription is ready.",
      },
    ],
    decisions: [
      {
        title: "Speech on CPU, model on GPU",
        detail: "Transcription is pinned to the CPU so it never competes with the language model for video memory.",
      },
      {
        title: "A failure costs formatting, not content",
        detail:
          "A slide's transcript is only cleared once its notes are written. If generation fails, everything said is still buffered and the slide can be written up again.",
      },
      {
        title: "One model call at a time",
        detail:
          "Generation is queued and serialised, so a slow slide can delay the next one but never overlap it and starve the machine.",
      },
      {
        title: "Fail before the lecture, not during it",
        detail: "The readiness check runs before recording, because a problem discovered mid-lecture means lost notes.",
      },
    ],
    metrics: [
      { value: "2", label: "local models" },
      { value: "0", label: "cloud calls" },
      { value: "1", label: "model call in flight" },
    ],
    cover: {
      src: "/work/lecture-ai-companion/notes.png",
      width: 2160,
      height: 1350,
      alt: "The workspace after recording: the slide Why cache at all on the left, generated notes and the live transcript on the right",
      frame: "browser",
    },
    gallery: [
      {
        src: "/work/lecture-ai-companion/recording.png",
        width: 2160,
        height: 1350,
        alt: "Recording at 13 seconds: the transcript panel shows the lecturer's words appearing under slide 2 while the app listens",
        frame: "browser",
        caption: "Mid-lecture: the transcript fills in live, filed under slide 2.",
      },
      {
        src: "/work/lecture-ai-companion/notes-panel.png",
        width: 836,
        height: 510,
        alt: "Notes for slide 2: the slide's own bullets, followed by generated notes giving memory access at 100 nanoseconds and disk or network access at 100 milliseconds",
        frame: "none",
        caption:
          "The generated notes carry the latency figures the lecturer said aloud — none of them are on the slide.",
      },
      {
        src: "/work/lecture-ai-companion/landing.png",
        width: 2160,
        height: 1350,
        alt: "Landing page: Focus on the lecture. Keep the notes. A drop zone for lecture slides, and an empty recent lectures list",
        frame: "browser",
        caption: "Everything stays on the machine — the landing page says so up front.",
      },
    ],
    video: {
      src: "/work/lecture-ai-companion/journey.webm",
      poster: "/work/lecture-ai-companion/recording.png",
      caption:
        "Upload, record, notes — real transcription and a real local model. The deck and the voice are synthetic, so no course material is shown.",
    },
    repo: "https://github.com/mghazidev/lecture-ai-companion",
  },
  {
    slug: "buy-n-grab",
    title: "Buy n Grab",
    tagline: "A B2C marketplace with shops, orders and paid ad promotion.",
    summary:
      "Browse shops and products, order through a cart, chat with sellers in real time, and promote listings with paid ad plans.",
    platform: "mobile",
    status: "production-ready",
    statusLabel: "Production-ready",
    year: "2026",
    context: "Softex Solution",
    role: "Flutter developer — screens, state and API integration",
    accent: "#f59e0b",
    problem:
      "Local sellers needed one app to list products, reach buyers and pay to stand out — without building a store of their own.",
    built:
      "A GetX app organised into controllers, repositories and pages, with Pusher powering buyer–seller chat and paid ad plans for promoting listings.",
    stack: [
      { layer: "Client", items: ["Flutter", "Dart", "GetX"] },
      { layer: "Realtime", items: ["Pusher Channels"] },
      { layer: "Auth", items: ["Google Sign-In", "Telegram login", "OTP"] },
      { layer: "UI", items: ["staggered grid", "image cropper", "map view"] },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Flutter", detail: "GetX" },
        { id: "api", label: "REST API", detail: "catalogue · orders · ads" },
        { id: "rt", label: "Pusher", detail: "chat" },
      ],
      edges: [
        { from: "app", to: "api", via: "https" },
        { from: "app", to: "rt", via: "channels" },
      ],
    },
    features: [
      { title: "Shops and products", detail: "Categories, search, product pages and per-shop storefronts." },
      { title: "Cart and orders", detail: "From cart to order history." },
      { title: "Paid ad promotion", detail: "Sellers choose a pricing plan to promote a listing." },
      { title: "Buyer–seller chat", detail: "Real-time messaging over Pusher." },
      { title: "Several ways in", detail: "Google, Telegram and OTP sign-in." },
    ],
    decisions: [
      {
        title: "Repositories between UI and API",
        detail: "Pages never call the network directly; repositories do, which kept a fifteen-area app testable and consistent.",
      },
    ],
    metrics: [
      { value: "15", label: "app areas" },
      { value: "153", label: "Dart files" },
      { value: "3", label: "sign-in methods" },
    ],
    gallery: [],
    confidential: true,
  },
  {
    slug: "softex-hrm",
    title: "Softex HRM",
    tagline: "Leave, projects, standups and team reporting in one HR app.",
    summary:
      "Employees apply for leave and log standups; managers approve, track projects and read team reports with charts.",
    platform: "mobile",
    status: "production-ready",
    statusLabel: "Production-ready",
    year: "2026",
    context: "Softex Solution",
    role: "Flutter developer — screens, state and the glass UI system",
    accent: "#34d399",
    problem:
      "Leave requests, standups and project tracking lived in different tools, so nobody had one view of the team.",
    built:
      "A GetX app covering the whole HR loop — leave, people, projects, meetings and reporting — with charts for team and personal reports.",
    stack: [
      { layer: "Client", items: ["Flutter", "Dart", "GetX"] },
      { layer: "Data", items: ["REST (http)", "shared_preferences"] },
      { layer: "UI", items: ["fl_chart", "shimmer"] },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Flutter", detail: "GetX" },
        { id: "api", label: "HR API", detail: "people · leave · projects" },
      ],
      edges: [{ from: "app", to: "api", via: "https" }],
    },
    features: [
      { title: "Leave workflow", detail: "Apply, then track it through pending, accepted or rejected." },
      { title: "People and projects", detail: "Employee directory, adding employees, and project lists." },
      { title: "Meetings and standups", detail: "Create meetings and keep a standup history." },
      { title: "Reports with charts", detail: "Team and personal reports, plus a visualisation view." },
    ],
    decisions: [
      {
        title: "Errors as part of the design",
        detail: "Failures surface in glass dialogs and bottom sheets that match the rest of the interface, rather than raw toasts.",
      },
    ],
    metrics: [
      { value: "18", label: "screens" },
      { value: "144", label: "Dart files" },
      { value: "3", label: "leave states" },
    ],
    gallery: [],
    confidential: true,
  },
  {
    slug: "daily-cook",
    title: "Daily Cook",
    tagline: "A budget-first weekly meal planner.",
    summary:
      "Plan a week of meals within a budget, for a whole household. A Flutter app on a FastAPI and PostgreSQL backend — in active development.",
    platform: "mobile",
    status: "in-progress",
    statusLabel: "In progress",
    year: "2026",
    context: "Personal product",
    role: "Solo — product, architecture, backend, mobile",
    accent: "#fb923c",
    problem:
      "Meal planners start from recipes and leave the cost as a surprise. Daily Cook starts from the budget.",
    built:
      "A FastAPI modular monolith split into catalogue, households and planning, with PostgreSQL, Supabase Auth, and a Flutter client for Android, iOS and web.",
    stack: [
      { layer: "Client", items: ["Flutter (Android · iOS · web)"] },
      { layer: "Backend", items: ["FastAPI", "PostgreSQL 17", "Alembic"] },
      { layer: "Auth", items: ["Supabase Auth"] },
      { layer: "Quality", items: ["ruff", "mypy", "pytest", "e2e smoke"] },
    ],
    architecture: {
      nodes: [
        { id: "app", label: "Flutter", detail: "3 platforms" },
        { id: "api", label: "FastAPI", detail: "modular monolith" },
        { id: "db", label: "PostgreSQL", detail: "17" },
        { id: "auth", label: "Supabase", detail: "auth" },
      ],
      edges: [
        { from: "app", to: "api", via: "https" },
        { from: "api", to: "db", via: "SQL" },
        { from: "app", to: "auth", via: "session" },
      ],
    },
    features: [
      { title: "Budget-first planning", detail: "The week is planned to fit a budget, not the other way round." },
      { title: "Households", detail: "Plans belong to a household rather than one person." },
      { title: "Catalogue", detail: "Ingredients with sample prices. Prices are placeholder estimates for now." },
    ],
    decisions: [
      {
        title: "A modular monolith",
        detail: "Catalogue, households and planning are separate modules in one deployable — boundaries now, without microservice overhead.",
      },
      {
        title: "Quality gates from day one",
        detail: "Formatting, linting, type checking, migration checks and an end-to-end smoke test all gate the backend.",
      },
    ],
    metrics: [
      { value: "3", label: "platforms" },
      { value: "3", label: "backend modules" },
      { value: "MVP", label: "stage" },
    ],
    gallery: [],
  },
  {
    slug: "zyturf",
    title: "ZyTurf",
    tagline: "Book a sports ground in three steps, and run the venue from one dashboard.",
    summary:
      "A turf-booking product for Karachi and Lahore: a marketing site, a three-step booking flow, and an owner dashboard with revenue and booking analytics.",
    platform: "web",
    status: "concept",
    statusLabel: "Product concept",
    year: "2025",
    context: "Personal product",
    role: "Solo — product, design, frontend",
    accent: "#4ade80",
    problem:
      "Booking a sports ground usually means phoning the venue and hoping a slot is free. Owners track bookings on paper and can't see what earns them money.",
    built:
      "The whole product surface as a Next.js front end on shadcn/ui — landing page, a gated three-step booking wizard, and an owner dashboard with Recharts analytics — running on mock data while the backend was prototyped separately.",
    stack: [
      { layer: "Web", items: ["Next.js 15", "TypeScript", "Tailwind", "shadcn/ui"] },
      { layer: "UI", items: ["Radix", "Recharts", "react-day-picker"] },
      { layer: "Backends explored", items: ["Node.js", "Django"] },
    ],
    architecture: {
      nodes: [
        { id: "player", label: "Players", detail: "landing · booking" },
        { id: "ui", label: "Next.js", detail: "shadcn/ui" },
        { id: "owner", label: "Owners", detail: "dashboard" },
      ],
      edges: [
        { from: "player", to: "ui", via: "book" },
        { from: "owner", to: "ui", via: "manage" },
      ],
    },
    features: [
      {
        title: "Three-step booking",
        detail: "Sport, date and slot; then contact details; then a summary and payment method — ending on a confirmation.",
      },
      {
        title: "Slots that show their state",
        detail: "Peak and off-peak slots are labelled, and slots already taken are disabled rather than hidden.",
      },
      {
        title: "Owner dashboard",
        detail: "Revenue, bookings, customers and rating, with charts for revenue, sport mix and booking trends.",
      },
      {
        title: "Recent bookings",
        detail: "A searchable table with each booking's status — confirmed, pending or completed.",
      },
      {
        title: "Marketing site",
        detail: "Featured grounds, sports and prices, and testimonials, set in Karachi and Lahore with prices in rupees.",
      },
    ],
    decisions: [
      {
        title: "Every step is gated",
        detail:
          "Each step's Continue button stays disabled until that step is complete, so an incomplete booking can never reach the payment screen.",
      },
      {
        title: "Prototype the backend twice before committing",
        detail:
          "The same product was built against a Node backend and a Django backend before the front end was settled, to compare the two in practice.",
      },
    ],
    metrics: [
      { value: "3", label: "booking steps" },
      { value: "5", label: "routes" },
      { value: "2", label: "backends tried" },
    ],
    cover: {
      src: "/work/zyturf/landing.png",
      width: 2160,
      height: 1350,
      alt: "ZyTurf landing page: Book Premium Sports Grounds in Karachi & Lahore, with an Explore Grounds button",
      frame: "browser",
    },
    gallery: [
      {
        src: "/work/zyturf/booking-slot.png",
        width: 2160,
        height: 1350,
        alt: "Booking step one: Football selected, October 29th, the 16:00 to 18:00 peak slot chosen, two slots unavailable, 10 players",
        frame: "browser",
        caption: "Step one — taken slots are disabled, and peak hours are labelled.",
      },
      {
        src: "/work/zyturf/booking-payment.png",
        width: 2160,
        height: 1350,
        alt: "Booking step three: a summary of ground, date, time, sport and players with a total of Rs. 3,000, and Digital Wallet selected",
        frame: "browser",
        caption: "Step three — the summary before payment.",
      },
      {
        src: "/work/zyturf/booking-confirmed.png",
        width: 2160,
        height: 1350,
        alt: "Booking Confirmed with the booking details, a Download Receipt button, and a confirmation toast",
        frame: "browser",
        caption: "Confirmation, with a receipt and a toast.",
      },
      {
        src: "/work/zyturf/admin-full.png",
        width: 2160,
        height: 2583,
        alt: "Owner dashboard: revenue, bookings, customers and rating cards; revenue bar chart; sports distribution pie; booking trends line chart; recent bookings table",
        frame: "browser",
        caption: "The owner dashboard, top to bottom.",
      },
    ],
    video: {
      src: "/work/zyturf/journey.webm",
      poster: "/work/zyturf/booking-slot.png",
      caption: "Landing page to confirmed booking to the owner's dashboard, in one take.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** The next project in the list, wrapping round, for the case-study footer. */
export function nextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
