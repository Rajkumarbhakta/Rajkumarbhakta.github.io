import type { Skill, SkillCategory } from "./types";

export const skills: Skill[] = [
  { name: "Kotlin", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Dart", category: "Languages" },

  { name: "Flutter", category: "Cross-Platform" },
  { name: "Compose Multiplatform", category: "Cross-Platform" },
  { name: "Kotlin Multiplatform", category: "Cross-Platform" },

  { name: "MVVM", category: "Architecture" },

  { name: "Jetpack Compose", category: "Android" },
  { name: "Retrofit", category: "Android" },
  { name: "Room DB", category: "Android" },

  { name: "Hilt", category: "DI" },
  { name: "Koin", category: "DI" },

  { name: "Spring Boot", category: "Backend" },
  { name: "Firebase Suite", category: "Backend" },

  { name: "Ktor Client", category: "Network" },

  { name: "Android Studio", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },

  { name: "GitHub Actions", category: "CI/CD" },

  { name: "JUnit", category: "Testing" },
  { name: "Espresso", category: "Testing" },
];

/** Categories in first-appearance order, so the filter row is stable. */
export const skillCategories: SkillCategory[] = skills.reduce<SkillCategory[]>(
  (acc, skill) => (acc.includes(skill.category) ? acc : [...acc, skill.category]),
  [],
);
