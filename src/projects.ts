import type { Project } from "~/models.ts";

const projects: Project[] = [
  {
    name: "Flow canvas",
    description:
      "Module for building bot behavior by reacting to user input. This interactive module allows for actions via drag and drop functionality. With this module, programming bot behavior becomes intuitive, without the need for specialized programming languages. Simply select the desired block and connect it with others to create comprehensive bot behavior.",
    keyChallenges: [
      "maintaining 30FPS performance with numerous blocks (over 500),",
      "implement many functionalities such as zooming in/out on scroll, as well as copying and pasting selected blocks or entire sections, and many more user-friendly actions ",
      "providing interactive and user-friendly error notifications within the flow",
    ],
    sectors: ["Finance", "Insurance", "Customer Support", "Marketing"],
    slug: "chatbots",
    id: "chatbots",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redux Tollkit",
      "Redux-Saga",
      "Axios",
      "Zod",
      "SASS",
      "Cypress",
      "Jsplumb",
      "Docker",
      "Jenkins",
    ],
    image: "flow-wireframe.png",
    isWireframe: true,
  },
  {
    name: "Webchat",
    description:
      "An adaptable webchat application designed for seamless integration into any HTML webpage. Offering extensive customization options, users can personalize both the appearance and functionality of the chat interface. This flexibility empowers users to tailor the chat experience to meet their unique requirements, ensuring a personalized interaction for their audience.",
    slug: "webchat",
    keyChallenges: [
      "easy embedding of the application on any webpage with minimal integration required,",
      "extensive configuration options, including custom styles, icons, and behavior,",
      "creating a mechanism to embed a webchat on the client's website using a few lines of JavaScript code (like Google Analytics)",
    ],
    id: "webchat",
    tech: [
      "TypeScript",
      "React",
      "Zustand",
      "SASS",
      "Cypress",
      "React-Query",
      "Vaniila JS",
      "Jenkins",
      "Axios",
      "Zod",
    ],
    image: "webchat-wireframe.png",
    isWireframe: true,
    sectors: [
      "E-commerce",
      "Finance",
      "Insurance",
      "Customer Support",
      "Marketing",
    ],
  },
  {
    name: "Sharable shopping List",
    description:
      "The Shopping List application was created out of personal necessity. I needed an application where I could quickly and easily create a shopping list and share it with family members or friends. The main feature of the application is the simplicity of sharing lists. All it takes is to provide the email address of the person we want to share it with, and they instantly gain access to the list.",
    slug: "shopping-list",
    id: "shopping-list",
    image: "shopping-list.png",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "Postgresql",
      "Google Auth",
      "Next Auth",
      "Docker",
      "Serverless",
      "Vercel",
    ],
    sectors: ["Personal usage", "Created for fun"],
  },
  {
    name: "Platform for creating AI chatbots and voicebots",
    description:
      "A platform for creating AI-powered bots from scratch. This application enables the development of bots with modules such as Natural Language Understanding (NLU), integration with external systems, bot analytics, and connection to various channels. With this platform, users can create bots to embed on websites or connect to external messaging platforms, providing support to users on programmed topics.",
    slug: "platform-chatbots",
    id: "platform-chatbots",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redux Tollkit",
      "Redux-Saga",
      "SASS",
      "Cypress",
      "Jsplumb",
      "Docker",
    ],
    keyChallenges: [
      "building a large-scale application involves several key phases: development, expansion, and maintenance",
    ],
  },

  {
    name: "Internet and social media monitoring",
    description:
      "The Internet monitoring application allows users to track specific phrases or brand names across various online platforms. Users can input keywords they wish to monitor, enabling them to stay informed about discussions and mentions related to their interests or brands in one centralized location. The application encompasses several modules, including a report generation module, alert system, and analytical tools, providing users with comprehensive insights into online conversations and trends.",
    slug: "monitoring",
    id: "monitoring",
    tech: ["JavaScript", "React", "SASS", "Docker", "RefluxJS", "WKHTMLTOPDF"],
    sectors: ["Marketing", "Customer Support"],
  },

  {
    name: "Smart home app",
    description:
      "A simple application for collecting readings from remote sensors and controlling IoT devices within the home. The application is designed for personal use, allowing users to gather data from sensors placed throughout their home and manage IoT devices effortlessly. Users can monitor various parameters such as temperature, humidity, or motion, and control devices like lights, thermostats, or smart locks. The application provides an intuitive interface for users to view sensor readings, set thresholds for alerts, and remotely operate IoT devices, offering convenience and automation tailored to their specific needs.",
    slug: "my-pi-home",
    image: "my-pi-home.png",
    id: "my-pi-home",
    tech: [
      "NestJs",
      "Node.js",
      "React",
      "MongoDB",
      "Docker",
      "Rasberry Pi",
      "Python",
      "pm2",
    ],
  },
  {
    name: "Audio book reader for older people",
    description:
      "An application for listening to audiobooks designed specifically for elderly or visually impaired individuals. The application was created for personal use within the family to assist a loved one who could no longer read books independently due to age-related limitations. Users simply need to upload MP3 files to the device, and through buttons on the exterior of the box, they can easily start and stop the audiobook playback on speakers. This simple and intuitive solution allows individuals to enjoy their favorite books without the need for complex interfaces or assistance.",
    slug: "audio-book-reader",
    id: "audio-book-reader",
    tech: ["Python", "Rasberry Pi", "Node.js", "React", "Docker"],
    keyChallenges: [
      "adapting the application's functionality with minimal buttons on the casing to avoid confusing elderly users",
      "ensuring the interface is intuitive and straightforward, minimizing the need for complex interactions",
      "implementing clear and easily understandable button functions to facilitate smooth operation for older individuals",
    ],
  },
];

export { projects };
