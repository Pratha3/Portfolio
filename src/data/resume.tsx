import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pratha Bagtharia",
  initials: "PB",
  location: "Surat , Gujarat",
  description:
    "Full-Stack Developer passionate about creating innovative solutions and empowering others. Always eager to learn and grow.",
  summary:
    "I started my journey in full-stack development with a passion for building dynamic web applications. Over time, I have successfully completed my full-stack course, working on numerous projects that showcase my skills in both front-end and back-end development. I am excited to keep growing and applying my knowledge to create impactful solutions",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Bootstrap",
    "Tailwind CSS",
    "Redux",
    "Firebase",
    "MongoDB",
    "Node.js",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "pratha19bagtharia@gmail.com",
    tel: "+917383884149",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Pratha3",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bpratha11193",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/3Pratha",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  education: [
    {
      institution: "Red and White Multimedia Education",
      degree: "Full-stack Web Development",
      start: "2023",
      end: "2024",
      logoUrl: "/path/to/logo.png", // Add the logo URL
    },
    {
      institution: "Sigma Public School",
      degree: "High School",
      start: "2019",
      end: "2021",
      logoUrl: "/path/to/logo.png", // Add the logo URL
    },
  ],

  projects: [
    {
      title: "Firebase Auth",
      href: "https://firebase-auth-two-phi.vercel.app/",
      dates: "Custom Project Timeline",
      active: true,
      description:
        "Implemented user authentication using Firebase, focusing on secure login, signup, and password reset functionalities.",
      technologies: ["Firebase", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://firebase-auth-two-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Pratha3/Firebase-Auth",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Furniture",
      href: "https://furniture-zn96.onrender.com",
      dates: "Custom Project Timeline",
      active: true,
      description:
        "Developed an e-commerce furniture website with a responsive design and smooth navigation.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://furniture-zn96.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Pratha3/Furniture",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Movie Swatch",
      href: "https://github.com/Pratha3/movie-swatch",
      dates: "Custom Project Timeline",
      active: true,
      description:
        "Built a movie browsing platform featuring advanced search and filtering capabilities for a better user experience.",
      technologies: ["Node.js", "Express.js", "MongoDB", "EJS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Pratha3/movie-swatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "HTTP Server",
      href: "https://github.com/Pratha3/http-server",
      dates: "Custom Project Timeline",
      active: true,
      description:
        "Created a basic HTTP server to handle requests and responses, showcasing understanding of web protocols.",
      technologies: ["Node.js", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Pratha3/http-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
