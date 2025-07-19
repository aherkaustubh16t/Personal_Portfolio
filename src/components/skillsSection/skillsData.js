import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaFileExcel,
  FaFilePowerpoint,
  FaChartBar,
  FaChartPie,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiPython,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        Icon: FaHtml5,
        projectsUsed: 12,
        experience: "3+ years of semantic, SEO-friendly UI development",
      },
      {
        name: "CSS",
        Icon: FaCss3Alt,
        projectsUsed: 10,
        experience: "Responsive layouts using Flexbox & Grid",
      },
      {
        name: "JavaScript",
        Icon: IoLogoJavascript,
        projectsUsed: 15,
        experience: "Used extensively in frontend/backend development",
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        projectsUsed: 4,
        experience: "Used with React and Node.js for type-safe apps",
      },
      {
        name: "React.js",
        Icon: FaReact,
        projectsUsed: 11,
        experience: "Built multiple dynamic SPAs with Hooks & Router",
      },
      {
        name: "Redux Toolkit",
        Icon: SiRedux,
        projectsUsed: 6,
        experience: "Efficient state management in React projects",
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        projectsUsed: 10,
        experience: "Utility-first responsive UI design",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        Icon: FaNodeJs,
        projectsUsed: 9,
        experience: "Backend logic, routing, and API building",
      },
      {
        name: "Express.js",
        Icon: SiExpress,
        projectsUsed: 9,
        experience: "RESTful APIs and middleware in Node backend",
      },
      {
        name: "Spring Boot",
        Icon: SiSpringboot,
        projectsUsed: 3,
        experience: "Built secure backend APIs using MVC architecture",
      },
      {
        name: "Java",
        Icon: FaJava,
        projectsUsed: 6,
        experience: "OOP-based applications and REST services",
      },
      {
        name: "Python",
        Icon: SiPython,
        projectsUsed: 7,
        experience: "Used for scripting, automation, and basic data analysis",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        Icon: SiMongodb,
        projectsUsed: 8,
        experience: "Schema-less NoSQL data handling with Mongoose",
      },
      {
        name: "MySQL",
        Icon: SiMysql,
        projectsUsed: 5,
        experience: "Relational database modeling and queries",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git & GitHub",
        Icon: FaGithub,
        projectsUsed: 20,
        experience: "Version control and collaboration",
      },
      {
        name: "Docker",
        Icon: SiDocker,
        projectsUsed: 3,
        experience: "Containerized web apps and databases",
      },
      {
        name: "Kubernetes",
        Icon: SiKubernetes,
        projectsUsed: 2,
        experience: "Used for container orchestration in labs",
      },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      {
        name: "AWS (EC2, S3)",
        Icon: FaAws,
        projectsUsed: 3,
        experience: "Deployed and hosted full-stack apps",
      },
    ],
  },
  {
    title: "Data Tools",
    skills: [
      {
        name: "Microsoft Excel",
        Icon: FaFileExcel,
        projectsUsed: 5,
        experience: "Data cleaning, formulas, charts, pivot tables",
      },
      {
        name: "PowerPoint",
        Icon: FaFilePowerpoint,
        projectsUsed: 8,
        experience: "Used to create effective tech and project presentations",
      },
      {
        name: "Power BI",
        Icon: FaChartBar,
        projectsUsed: 3,
        experience: "Dashboard creation, data modeling, and business insights",
      },
      {
        name: "Tableau",
        Icon: FaChartPie,
        projectsUsed: 2,
        experience: "Created interactive visual dashboards and reports",
      },
    ],
  },
];
