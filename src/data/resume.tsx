import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Smile, Cat, Notebook, FolderOpenDot } from "lucide-react";

export const DATA = {
  name: "Ansh Tyagi",
  initials: "AT",
  url: "https://anshtyagi.me",
  location: "India",
  locationLink: "https://anshtyagi.me",
  description:
    "Experienced Full Stack Developer with a strong focus on API development and cloud-based architecture. Passionate about building robust, scalable, and secure end-to-end applications.",
  summary:
    "Hard-working and enthusiastic web developer with a passion for building dynamic, responsive applications. Pursuing a degree in Computer Science, with a strong focus on clean, efficient code and continuous learning. Actively explores new technologies through personal projects, open-source contributions, and coding challenges.",

  avatarUrl:
    "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/308443832_109109325295191_1674111835950351444_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENRXIJ-jJ1K3t_eCIbMRWdz3iBgLaL9HfPeIGAtov0dxK86MNMwOPmVD5g0-a_dQdpvvgFL6HKCZDl6KREFLcx&_nc_ohc=3n2ER2TspfgQ7kNvgE3TxmB&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=Aq_ffTslBDJDAYin_VulxKw&oh=00_AYDbE7FDW9-UfXMyJTeTEVaXh2GqyT25urlb08siQDc96Q&oe=67353D25",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "AWS",
    "AZURE",
    "MongoDB",
    "Docker",
    "Kubernetes",

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/about",
      icon: FolderOpenDot,
      label: "Projects",
    },
    {
      href: "/frog",
      icon: Cat,
      label: "frog",
    },
    {
      href: "/contact",
      icon: Notebook,
      label: "contact",
    },
  ],
  contact: {
    email: "anshtyagi7845@gmail.com",
    tel: "+91-9027033909",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ansh-699",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ansh-tyagi7845/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Ansh7845",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "www.gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google",
      href: "#",
      badges: [],
      location: "Dreams",
      title: "Fullstack Engineer",
      logoUrl:
        "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2240,c_limit/google-logo.jpg",
      start: "Oct. 2022",
      end: "Present",
      description:
        "i dont work at google.",
    },
    {
      company: "Netflix",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl:
        "https://mir-s3-cdn-cf.behance.net/projects/max_808/74ef7c96929595.Y3JvcCwxMDI0LDgwMCwwLDI1.png",
      start: "June 2019",
      end: "Feb 2021",
      description:
        "i dont work at netflix.",
    },
    {
      company: "Pininterest",
      href: "#",
      badges: [],
      location: "Virtual",
      title: "Chief Technical Officer",
      logoUrl:
        "https://static0.wow2print.com/storage/1619/content/image/1469442687659fccaa7671b2.24947167.png",
      start: "Sept 2021",
      end: "Present",
      description:
        "I wish bro.",
    },
    {
      company: "Adobe",
      href: "https://thewisdomplace.net/",
      badges: [],
      location: "",
      title: "Media Team Lead",
      logoUrl:
        "https://i.pinimg.com/736x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
      start: "Jan. 2020",
      end: "Present",
      description:
        "unemployed.",
    },
  ],
  education: [
    {
      school: "CJDAV Public school",
      href: "https://davmeerut.org/",
      degree: "Primary Education",
      logoUrl:
        "https://davmeerut.org/MyImages/LOGO.png",
      start: "2006",
      end: "2022",
    },
    {
      school: "ABES Engineering College",
      href: "https://abes.ac.in/",
      degree: "B.Tech",
      logoUrl: "https://cdn.universitykart.com//Content/upload/admin/witkmh24.rj3.jpg",
      start: "2023",
      end: "2027",
    },
  ],


  certifications: [
    {
      title: "HTML, CSS, JS ",
      platform: "Harkirit",
      description:
        "Achieved foundational AWS certification covering core cloud concepts, security, and pricing.",
      image:
        "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*l4xICbIIYlz1OTymWCoUTw.jpeg",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },

    {
      title: "Node.js Development",
      platform: "Harkirit",
      description:
        "Covered Node.js fundamentals, asynchronous programming, and building RESTful APIs.",
      image:
        "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },
    {
      title: "TypeScript Essentials",
      platform: "Harkirit",
      description:
        "Learned TypeScript basics, type safety, and interfaces for enhanced JavaScript development.",
      image:
        "https://media.graphassets.com/auto_image/compress/cache=expiry:max/resize=width:640/STChhjrScumkWbmwsni2",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },

    {
      title: "React.js",
      platform: "Harkirit",
      description:
        "Completed React.js course focused on component-based architecture and state management.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },
    {
      title: "Next.js",
      platform: "Harkirit",
      description:
        "Completed Next.js course focused on component-based architecture and state management.",
      image:
        "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/nextjs-icon-dark-background.png?itok=0YHs2vTR",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },
  ],
} as const;
