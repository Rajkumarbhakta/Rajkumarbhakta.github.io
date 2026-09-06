import type { Skill, SkillCategory } from "./types";

export const skills: Skill[] = [
  { name: "Kotlin", category: "Languages" },
  { name: "Dart", category: "Languages" },
  { name: "Java", category: "Languages" },

  { name: "Jetpack Compose", category: "Android" },
  { name: "XML Views", category: "Android" },
  { name: "Coroutines & Flow", category: "Android" },
  { name: "Room", category: "Android" },
  { name: "SQLite", category: "Android" },
  { name: "WorkManager", category: "Android" },
  { name: "ViewModel", category: "Android" },

  { name: "Flutter", category: "Cross-Platform" },
  { name: "BLoC / Cubit", category: "Cross-Platform" },
  { name: "Provider", category: "Cross-Platform" },
  { name: "Compose Multiplatform", category: "Cross-Platform" },
  { name: "Kotlin Multiplatform", category: "Cross-Platform" },

  { name: "MVVM", category: "Architecture" },
  { name: "Clean Architecture", category: "Architecture" },
  { name: "SOLID", category: "Architecture" },
  { name: "Modularization", category: "Architecture" },
  { name: "Offline-First", category: "Architecture" },
  { name: "Hilt / Dagger", category: "Architecture" },
  { name: "Koin", category: "Architecture" },

  { name: "Google AI Edge SDK", category: "On-Device AI" },
  { name: "LiteRT", category: "On-Device AI" },
  { name: "ML Kit", category: "On-Device AI" },

  { name: "REST APIs", category: "Backend" },
  { name: "Retrofit", category: "Backend" },
  { name: "Ktor Client", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Supabase", category: "Backend" },

  { name: "JUnit", category: "Testing & CI/CD" },
  { name: "Mockito", category: "Testing & CI/CD" },
  { name: "Espresso", category: "Testing & CI/CD" },
  { name: "Compose UI tests", category: "Testing & CI/CD" },
  { name: "ProGuard / R8", category: "Testing & CI/CD" },
  { name: "Fastlane", category: "Testing & CI/CD" },
  { name: "GitHub Actions", category: "Testing & CI/CD" },

  { name: "Git & GitHub", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Agile / Scrum", category: "Tools" },
  { name: "Play Console", category: "Tools" },
];

/** Categories in first-appearance order, so the filter row is stable. */
export const skillCategories: SkillCategory[] = skills.reduce<SkillCategory[]>(
  (acc, skill) => (acc.includes(skill.category) ? acc : [...acc, skill.category]),
  [],
);
