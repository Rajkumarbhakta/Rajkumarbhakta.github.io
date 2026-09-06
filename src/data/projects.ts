import type { Project } from "./types";

/**
 * One flat list with a `kind` discriminant. The Projects section derives its
 * filtered views from this, and the grid rhythm keys off array index.
 */
export const projects: Project[] = [
  {
    slug: "kuick",
    title: "Kuick - Order Food Online",
    kind: "professional",
    company: "Redoq Software Services Ltd.",
    description: "Quick online food ordering app with real-time tracking and payment processing.",
    tags: ["Android", "Kotlin", "XML", "Retrofit", "Google Maps API", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    links: { demo: "https://play.google.com/store/apps/details?id=com.redoq.kuick" },
  },
  {
    slug: "kuick-shop-cc",
    title: "Kuick Shop CC",
    kind: "professional",
    company: "Redoq Software Services Ltd.",
    description: "A POS application for restaurants and cafes to manage orders and billing.",
    tags: ["Flutter", "Http", "Provider", "Google Analytics"],
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
    links: { demo: "https://play.google.com/store/apps/details?id=com.redoq.kuick.ccapp" },
  },
  {
    slug: "kuick-studio",
    title: "Kuick Studio",
    kind: "professional",
    company: "Redoq Software Services Ltd.",
    description: "A no-code application builder with drive and database management system.",
    tags: ["Flutter", "Http", "Bloc", "Google Analytics"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    links: { demo: "https://redoq.com/products/kuick-studio" },
  },
  {
    slug: "trutimer",
    title: "Trutimer",
    kind: "professional",
    company: "Sentientgeeks Consultancy and Services",
    description: "An efficient offline-first employee time tracking app.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Room", "Retrofit", "WorkManager", "Google Maps API"],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    links: {},
  },
  {
    slug: "fitlife",
    title: "FitLife",
    kind: "professional",
    company: "Sentientgeeks Consultancy and Services",
    description: "A customized food delivery application focused on healthy meals.",
    tags: ["Flutter", "Dio", "Riverpod", "Google Analytics"],
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&q=80&w=800",
    links: {},
  },
  {
    slug: "olinda",
    title: "Olinda",
    kind: "professional",
    company: "Freelancing",
    description: "An online grocery ordering app with real-time tracking and payment processing.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Retrofit", "Google Maps API", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    links: { demo: "https://play.google.com/store/apps/details?id=com.webworldtech.olindaa" },
  },

  {
    slug: "canvas",
    title: "Canvas",
    kind: "personal",
    description:
      "One shared Kotlin Multiplatform codebase shipped to Android, iOS and Desktop. Offline storage, an undo/redo stack and 10+ customizable brush tools. 17K+ downloads and 4K+ monthly active users.",
    tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Coroutines", "Multiplatform Settings"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    links: {
      demo: "https://me.rkbapps.in/canvas_build",
      github: "https://github.com/Rajkumarbhakta/Canvas",
    },
  },
  {
    slug: "tooai",
    title: "TooAI",
    kind: "personal",
    description:
      "Offline AI utility: real-time OCR, barcode scanning and image segmentation via ML Kit, plus on-device LLM inference (Gemma, DeepSeek, Qwen) through the Google AI Edge SDK and LiteRT runtime. Includes a system-wide writing assistant that runs entirely on local models.",
    tags: ["Kotlin", "ML Kit", "Google AI Edge SDK", "LiteRT-LM", "Coroutines"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    links: {
      demo: "https://play.google.com/store/apps/details?id=com.rkbapps.tooai",
      github: "https://github.com/Rajkumarbhakta/TooAi",
    },
  },
  {
    slug: "nested-menu-bar",
    title: "Nested Menu Bar",
    kind: "personal",
    description: "A Flutter package for creating multi-level nested horizontal menu bars with ease.",
    tags: ["Flutter"],
    image:
        "https://github.com/Rajkumarbhakta/nested_menu_bar/raw/main/screenshot/screenshot.png",
    links: {
      demo: "https://pub.dev/packages/nested_menu_bar",
      github: "https://github.com/Rajkumarbhakta/nested_menu_bar",
    },
  },
  {
    slug: "g-dealz",
    title: "G Dealz",
    kind: "personal",
    description:
      "Real-time game deals and freebies tracker with background notifications scheduled through WorkManager. 10K+ downloads, and featured in Play Store's \"Top New Free Apps\" across the US, Canada and Japan.",
    tags: ["Kotlin", "MVVM", "Retrofit", "WorkManager", "Room", "Compose"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    links: {
      demo: "https://play.google.com/store/apps/details?id=com.rkbapps.gdealz",
      github: "https://github.com/Rajkumarbhakta/GDealz",
    },
  },
  {
    slug: "physics-galaxy",
    title: "Physics Galaxy",
    kind: "personal",
    description:
      "Interactive physics learning app with study materials, online tests, and integrated payments. 2K+ downloads.",
    tags: ["Kotlin", "Jetpack Compose", "Hilt", "Firebase Suite", "Payment Gateway"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    links: { demo: "https://play.google.com/store/apps/details?id=com.rkbapps.physicsgalaxy" },
  },
  {
    slug: "cgpa-calculator-makaut",
    title: "CGPA Calculator - MAKAUT",
    kind: "personal",
    description:
      "A comprehensive CGPA/SGPA calculator designed specifically for MAKAUT students (WBUT).",
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "Hilt"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    links: {
      demo: "https://play.google.com/store/apps/details?id=com.rkbapps.makautsgpaygpacalculator",
      github: "https://github.com/Rajkumarbhakta/cgpa_calculator_makaut",
    },
  },
  {
    slug: "neetflix",
    title: "Neetflix",
    kind: "personal",
    description: "Movie discovery application powered by the TMDB API.",
    tags: ["Android", "Java", "Kotlin", "XML", "Retrofit", "Room DB"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    links: {
      demo: "https://github.com/Rajkumarbhakta/Neetflix/releases",
      github: "https://github.com/Rajkumarbhakta/Neetflix",
    },
  },
  {
    slug: "pixy",
    title: "Pixy",
    kind: "personal",
    description: "Stock image discovery app fetching real-time data from the Unsplash API.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Retrofit", "Room DB"],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800",
    links: { github: "https://github.com/Rajkumarbhakta/Pixy" },
  },
  {
    slug: "video-player",
    title: "Video Player",
    kind: "personal",
    description: "Android video player built with ExoPlayer and Jetpack Compose.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "ExoPlayer"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800",
    links: { github: "https://github.com/Rajkumarbhakta/ExoPlayerDemo" },
  },
];

export const professionalProjects = projects.filter((p) => p.kind === "professional");
export const personalProjects = projects.filter((p) => p.kind === "personal");
