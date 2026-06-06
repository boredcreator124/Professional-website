export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Python",
      "Django",
      "Express.js",
      "Supabase",
      "Docker",
      
    ],
  },
  {
    title: "Game Development",
    skills: [
      "Unity",
      "C#",
      "C++",
      "Gdscript",
      "Godot",
      "Game Physics",
      "unreal Engine",
      "Blender",
    ],
  },
  {
    title: "Design Tools",
    skills: [
      "Figma",
      "Photoshop",
      "After Effects",
      "UI/UX Design",
      "Prototyping",
      "Motion Design",
      "DaVinci Resolve",
    ],
  },
];
