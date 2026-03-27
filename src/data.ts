import LastTaker from "../src/assets/lastaker.png"
import DailyBudie from "../src/assets/DailyBudie.png"
import Monlist from "../src/assets/Monlist.png"
import AbsentTracker from "../src/assets/AbsentTracker.png"
import ADDU2 from "../src/assets/Adto2.png"


export interface TimelineItem {
  year: string;
  school: string;
  degree: string;
  status: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const education: TimelineItem[] = [
  {
    year: "2022 – Present",
    school: "Ateneo de Davao University",
    degree: "Bachelor of Science in Information Technology",
    status: "Ongoing",
  },
  {
    year: "2020 – 2022",
    school: "GoodSoil Academy INC",
    degree: "Senior High School – GAS Strand",
    status: "Graduated",
  },
   {
    year: "2017 – 2020",
    school: "Sto Niño National Highschool",
    degree: "Junior High School – ICT Strand",
    status: "Graduated",
  },
  {
    year: "2010 – 2017",
    school: "Imelda Elementary School",
    degree: "Student",
    status: "Graduated",
  },
];

export const projects: Project[] = [
  {
    title: "LastTaker",
    description:
      "A strategy game where the player who takes the last box loses. Play against an AI or challenge a friend in Player vs Player mode.",
    tags: ["React", "JavaScript", "CSS", "Animate.css"],
    link: "https://lasttaker.vercel.app",
    image: LastTaker,
  },
  {
    title: "DailyBudie",
    description:
      "An expense tracker web app I made this for my gf because she spent a lot of money — all data is saved locally in localStorage so spending habits are always at a glance.",
    tags: ["React", "JavaScript", "CSS", "Animate.css"],
    link: "https://dailybudie.vercel.app",
    image: DailyBudie,
  },
  {
    title: "Monlist",
    description:
      "A clean, minimal to-do app built to help students stay on top of their tasks and studies day by day.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://monlist.vercel.app",
    image: Monlist,
  },
  {
    title: "AbsentTracker",
    description:
      "A collaborative project with my classmates to track subject absences before hitting the limit — because forgetting counts fast.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://absentracker.vercel.app",
    image: AbsentTracker,
  },
  {
    title: "ADDU2",
    description:
      "A landing page for Ateneo de Davao University built while learning React — practicing layout, responsiveness, and component structure.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://addu2.vercel.app",
    image: ADDU2,
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools & Platforms",
    items: ["Vercel", "Git", "VS Code", "MySQL", "MongoDB"],
  },
];