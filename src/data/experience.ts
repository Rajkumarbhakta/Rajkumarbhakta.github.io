import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "GeoTech Infoservices Private Limited",
    companyShort: "GT",
    location: "Kolkata, WB",
    start: "Jun 2026",
    end: null,
    highlights: [
      "Engineered a real-time match-tracking module with live ball positioning in Flutter, using Provider for state.",
      "Built Firebase-driven dynamic localization for a sports fan engagement app (Flutter, Cubit).",
    ],
    skills: ["Flutter", "Provider", "Cubit", "Firebase", "Real-time"],
  },
  {
    role: "Software Developer",
    company: "Sentientgeeks Consultancy and Services",
    companyShort: "SG",
    location: "Kolkata, WB",
    start: "Mar 2025",
    end: "Jun 2026",
    highlights: [
      "Built an offline-first employee tracking Android app from scratch in Kotlin and Jetpack Compose, with WorkManager background synchronization and real-time location tracking.",
      "Delivered a food ordering and subscription app in Flutter with secure payment gateway integration.",
      "Optimized a parcel delivery Android app (Kotlin, XML Views) and added interactive map integration.",
    ],
    skills: ["Kotlin", "Jetpack Compose", "WorkManager", "Offline-First", "Flutter"],
  },
  {
    role: "Junior Android Developer",
    company: "Redoq Software Services Ltd.",
    companyShort: "RQ",
    location: "Kolkata, WB",
    start: "Sep 2023",
    end: "Mar 2025",
    highlights: [
      "Improved canvas rendering performance by 90% in a Flutter/BLoC no-code website builder, by optimizing state management and eliminating redundant widget rebuilds.",
      "Refactored a full-scale Point-of-Sale application covering billing, analytics and order management onto Clean Architecture, reducing coupling across legacy modules.",
      "Developed a scalable white-label version of a UK-market food ordering app (Kotlin, XML Views).",
      "Implemented automated CI/CD pipelines with Fastlane for Android and iOS releases.",
    ],
    skills: ["Flutter", "BLoC", "Clean Architecture", "Kotlin", "Fastlane"],
  },
];
