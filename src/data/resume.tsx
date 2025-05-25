import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon,Smile, Cat ,Notebook ,FolderOpenDot} from "lucide-react";

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
      icon: FolderOpenDot ,
      label: "Projects",
    },
    {
      href: "/frog",
      icon: Cat,
      label: "frog",
    },
    {
      href: "/contact",
      icon: Notebook ,
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
        url: "https://www.linkedin.com/AnshT7845/",
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
      company: "Klipto Inc",
      href: "#",
      badges: [],
      location: "9 Market road, Port Harcourt",
      title: "Fullstack Engineer",
      logoUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocJnmc6IR2Yy7p1Q_EzGeCJ9APIfahM1Z6_SwcD_LwI4-Y5Krg_V=s96-c",
      start: "Oct. 2022",
      end: "Present",
      description:
        "As a Backend Engineer at Kliptolite Technologies, I focus on developing and maintaining server-side applications, ensuring optimal performance, scalability, and security. My role involves designing RESTful APIs, integrating with databases, and collaborating with frontend engineers to deliver complete solutions. Additionally, I am responsible for implementing CI/CD pipelines, monitoring backend services, and optimizing existing code for better efficiency.",
    },
    {
      company: "Kshop Limited",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl:
        "https://pbs.twimg.com/profile_images/1479545028708118528/a2WFqnUb_x96.jpg",
      start: "June 2019",
      end: "Feb 2021",
      description:
        "As a Frontend Engineer at Kshop Limited, I was responsible for creating engaging and interactive user interfaces with React. My role required a keen understanding of frontend technologies and a focus on delivering a seamless user experience. Below are some of the key aspects of my work at Kshop Limited",
    },
    {
      company: "LeadWise Consulting",
      href: "#",
      badges: [],
      location: "Virtual",
      title: "Chief Technical Officer",
      logoUrl:
        "https://pbs.twimg.com/profile_images/3368042704/3c8f962d72b8b73fbbd855d0ea583b4a_400x400.jpeg",
      start: "Sept 2021",
      end: "Present",
      description:
        "I volunteered as the Chief Technology Officer at Lead-wise Consulting, where I was responsible for overseeing the web development, managing technical projects, and ensuring the smooth operation of IT systems.",
    },
    {
      company: "The Wisdom Place",
      href: "https://thewisdomplace.net/",
      badges: [],
      location: "R2QG+8MW, Rumuomasi, Port Harcourt 500102, Rivers, Nigeria",
      title: "Media Team Lead",
      logoUrl:
        "data:image/jpeg;base64,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",
      start: "Jan. 2020",
      end: "Present",
      description:
        "I led the media team at The Wisdom Place, a non-profit organisation.I was responsible for leading a team of 25 media professionals over four years. My leadership involved coordinating activities like live streaming, video editing, and multimedia production.",
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
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.youtube.com/@harkirat1/",
        },
      ],
    },
    
     {
      title: "Node.js Development",
      platform: "Udemy",
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
      platform: "Udemy",
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
      platform: "Udemy",
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
      platform: "Udemy",
      description:
        "Completed React.js course focused on component-based architecture and state management.",
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
