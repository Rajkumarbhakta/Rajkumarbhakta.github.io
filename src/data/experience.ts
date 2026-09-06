import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Sentientgeeks Consultancy and Services",
    companyShort: "SG",
    start: "Mar 2025",
    end: null,
    description:
      "Built and optimized Android apps using Jetpack Compose and MVVM architecture. Developed an offline-first employee tracking app with Room DB and Compose UI. Improved app modularity, scalability, and performance through clean architecture.",
    skills: ["Jetpack Compose", "MVVM", "Room DB", "Clean Architecture", "Android"],
  },
  {
    role: "Junior Android Developer",
    company: "Redoq Software Services Ltd.",
    companyShort: "RQ",
    start: "Sep 2023",
    end: "Mar 2025",
    description:
      "Developed and deployed Android and Flutter applications for enterprise clients. Built a POS system with billing, inventory, and analytics using MVVM + Firebase. Created a no-code website builder enabling real-time drag-and-drop UI generation.",
    skills: ["Android", "Flutter", "MVVM", "Firebase", "Enterprise Apps"],
  },
];
