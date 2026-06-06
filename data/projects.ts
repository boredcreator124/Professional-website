export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web Development" | "Game Development" | "Design" | "AI Projects";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imagePlaceholder: string;
  image?: string; // Path to project image, e.g., "/projects/project-1.jpg"
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Website Developer  ",
    description:
      "I created this begginner portfolio website using Next.js, showcasing my projects and skills. It features a clean design, responsive layout, and smooth animations. The site is optimized for performance and SEO, demonstrating my proficiency in modern web development practices.",
    category: "Web Development",
    technologies: ["Next.js"],
    githubUrl: "https://github.com/boredcreator124/My-portfolio",
    liveUrl: "my-portfolio-lv1hy4zih-jacob-baddoos-projects.vercel.app",
    imagePlaceholder: "SB",
    image: "/projects/project-1.png",
  },
  {
    id: "project-2",
    title: "It can't be beaten",
    description:
      "A 2D  puzzle-platformer built in Unity. Navigate a surreal void world using basic mechanics. Features coin collection and procedural level generation.",
    category: "Game Development",
    technologies: ["Unity", "C#",],
    githubUrl: "https://boredcreator124.itch.io/it-cant-be-beaten",
    liveUrl: "https://boredcreator124.itch.io/it-cant-be-beaten",
    imagePlaceholder: "ICB",
    image: "/projects/game.jpg",
  },
  {
    id: "project-3",
    title: "Restore Ghana",
    description:
      "A National Galamsey Recovery Dashboard built to reverse the effects of illegal mining and restore the Earth. This platform acts as a civic tech solution where Ghanaians report illegal mining damage, AI detects patterns, and the public tracks environmental recovery—tied to SDGs 3 (Good Health), 6 (Clean Water), and 4 (Quality Education).",
    category: "AI Projects",
    technologies: [" Next.js ","Tailwind CSS","Python", "Supabase", "Docker"],

    githubUrl: "https://github.com/boredcreator124/restoreghana",
    liveUrl: "https://lnkd.in/dCk_5VPU",
    imagePlaceholder: "ML",
    image: "/projects/restoreghana.jpg",
  },
  {
    id: "project-4",
    title: "Apocolypse",
    description:
      "A audio visualisor tool  created in blender exploring, auddio simmulation and visualisation.this helps bridge the gap so artists and musicians to create unique and interesting visuals and audience caan beter undersatnad their music.",
    category: "Design",
    technologies: ["Blender"],
    githubUrl: "https://boredcreator124.itch.io/apocolyse",
    liveUrl: "https://boredcreator124.itch.io/apocolyse",
    imagePlaceholder: "AP",
    image: "/projects/apocolypse.jpg",
  },
  
  {
    id: "project-6",
    title: "Campus companion AI",
    description:
      "A generative art project using neural network activations to create abstract visual compositions. Trained on a custom dataset of classical paintings.",
    category: "AI Projects",
    technologies: ["Python", "PyTorch", "OpenCV", "Flask", "React"],
    githubUrl: "https://github.com/boredcreator124/Campus-companion-Ai",
    liveUrl: "https://campus-companion-ai-pearl.vercel.app/",
    imagePlaceholder: "NG",
    image: "/projects/campus-ai.png",
  },
];
