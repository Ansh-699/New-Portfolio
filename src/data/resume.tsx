import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ansh Tyagi",
  initials: "AT",
  url: "https://anshtyagi.me",
  location: "India",
  locationLink: "https://anshtyagi.me",
  description:
    "Experienced MERN Stack Developer with a strong background in cloud computing, certified as an AWS Cloud Practitioner. Passionate about creating robust and scalable applications.",
  summary:
    "Founded [Enterbox](https://www.enterbox.app), a versatile platform supporting businesses with tools for web creation, hosting, form creation, email campaigns, AI integration, store management, and more. Built the platform from the ground up, handling product design, development, and team coordination to serve the needs of over 200 businesses within its first month.",
  
  avatarUrl:
    "https://scontent-zrh1-1.xx.fbcdn.net/v/t39.30808-6/308443832_109109325295191_1674111835950351444_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENRXIJ-jJ1K3t_eCIbMRWdz3iBgLaL9HfPeIGAtov0dxK86MNMwOPmVD5g0-a_dQdpvvgFL6HKCZDl6KREFLcx&_nc_ohc=3n2ER2TspfgQ7kNvgE3TxmB&_nc_zt=23&_nc_ht=scontent-zrh1-1.xx&_nc_gid=Aq_ffTslBDJDAYin_VulxKw&oh=00_AYDbE7FDW9-UfXMyJTeTEVaXh2GqyT25urlb08siQDc96Q&oe=67353D25",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "AWS",
    "AZURE",
    "Mongoose",
     "Docker",
     "Kubernetes",
     "Java",
     "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://anshtyagi.me",
      icon: NotebookIcon,
      label: "Blog",
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
        url: "https://x.com/iamtempleajuzie",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@templeajuzie",
        icon: Icons.youtube,
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
      logoUrl: "https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-1/300943914_461316889338355_7381212442247797989_n.png?_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=qkFawD9WDGEQ7kNvwGJGwkW&_nc_oc=AdnsgOWak2FgBkFpcI0jkQfeCE_WSPGGdmrfQ-hISn0jURcZkR0bsIzdKMlQZI8LxuE4CTDuHDuAeipz5VbYPwMx&_nc_zt=24&_nc_ht=scontent.fdel27-1.fna&_nc_gid=zGKfxp-RV29p5Lq_QPyeRg&oh=00_AfFdIVawVNlop77FKjKQFeGH3grMkT99On0q3C5smaUCFA&oe=6806ECCA",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Enterbox",
      href: "https://www.enterbox.app",
      dates: "Nov 4 - Presentt",
      active: true,
      description:
        "At Enterbox, we believe every business deserves a powerful, custom-built digital platform. We provide the tools to help you create, manage, and scale your online presence with ease. From startups to established enterprises, our platform is designed to empower growth at every stage.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express Js",
        "Mongo DB",
        "TailwindCSS",
        "Open Ai",
        "Azure",
        "Klip Ai",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.enterbox.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/temple-ajuzie.appspot.com/o/Web%20Images%2FEnterbox%20preview.mp4?alt=media&token=4f72a3fc-96fe-4a36-919d-4279d95fbbc4",
    },
    {
      title: "ABC Networks 24",
      href: "https://www.abcnetworks24.com",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "Designed, developed, and implemented a comprehensive News Platform, CRM, and Ecommerce solution, enabling seamless content management, customer relationship tracking, and online sales. Integrated advanced user engagement features, automated marketing workflows, and payment gateways.",
      technologies: [
        "Typescript",
        "Cloudinary",
        "Mongo DB",
        "Next.js",
        "TailwindCSS",
        "Stripe",
        "Node JS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.abcnetworks24.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abcnetworks247/abc/tree/main/client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/temple-ajuzie.appspot.com/o/Web%20Images%2FScreen%20Recording%202024-11-10%20at%209.58.55%E2%80%AFAM.mov?alt=media&token=e548772c-c9a5-4ae5-9874-33004c484009",
    },
    {
      title: "ABC Admin",
      href: "https://www.abc-admin-gold.vercel.app",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Designed Admin Panel, developed, and implemented a comprehensive News Platform, CRM, and Ecommerce solution, enabling seamless content management, customer relationship tracking, and online sales. Integrated advanced user engagement features, automated marketing workflows, and payment gateways.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node Js",
        "Mongo Db",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://abc-admin-gold.vercel.app/auth/signin",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/temple-ajuzie.appspot.com/o/Web%20Images%2FScreen%20Recording%202024-11-10%20at%2011.42.01%E2%80%AFAM.mov?alt=media&token=5439b1f9-5789-49d8-a117-335ef820bf20",
    },
    {
      title: "Enterbox Admin",
      href: "https://www.enterbox.app",
      dates: "Nov 2024 - Present",
      active: true,
      description:
        "Developed the admin web app, Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models, upload manager, and a 360 CMS System",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.enterbox.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://firebasestorage.googleapis.com/v0/b/temple-ajuzie.appspot.com/o/Web%20Images%2FScreen%20Recording%202024-11-10%20at%2012.32.32%E2%80%AFPM.mov?alt=media&token=13b19cd2-662c-41b7-982c-787c0bf936a9",
    },
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      platform: "Amazon Web Services",
      description:
        "Achieved foundational AWS certification covering core cloud concepts, security, and pricing.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
        },
      ],
    },
    {
      title: "JavaScript",
      platform: "Udemy",
      description:
        "Completed JavaScript course covering ES6+ syntax, DOM manipulation, and basic programming concepts.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "Course",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.udemy.com/course/javascript-basics/",
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
          href: "https://www.udemy.com/course/typescript-essentials/",
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
          href: "https://www.udemy.com/course/nodejs-development/",
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
          href: "https://www.udemy.com/course/reactjs-for-beginners/",
        },
      ],
    },
  ],
} as const;
