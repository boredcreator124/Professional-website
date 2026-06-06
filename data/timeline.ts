export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "project";
}

export const timeline: TimelineEntry[] = [
  {
    year: "2025",
    title: "It can't be beaten",
    description:
      "Explore coding and game development on Itch.io. Created a simple game and shared it with friends, receiving positive feedback and encouragement to continue learning.",
    type: "project",
  },
  {
    year: "2024",
    title: "Started Computer Science",
    description:
      "Enrolled in Academic University for Computer Science. Began with Python, data structures, and discrete math.",
    type: "education",
  },
  {
    year: "2023",
    title: "First Line of Code",
    description:
      "Built a simple full stack Java application with an integrated database as a fun project. Discovered a passion for creating things with code.",
    type: "project",
  },
];
