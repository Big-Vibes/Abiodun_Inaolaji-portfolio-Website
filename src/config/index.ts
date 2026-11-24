import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Abiodun Inaolaji — Software Developer",
  author: "Abiodun Inaolaji",
  description:
    "A highly motivated computer scientist, Certified Data Protection Officer NDPC and Research Engineer skilled in React, Go, JavaScript, Python, Docker, and databases. With a strong curiosity for how hardware and software interact, especially in shaping the future of AI.",
  lang: "en",
  siteLogo: "/Vibes-sm.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/AI_Abiodun_INA" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/inaolaji-abiodun/" },
    { text: "Github", href: "https://github.com/Big-Vibes" },
    { text: "Youtube", href: "https://www.youtube.com/@inaolajiabiodun6545" },
    { text: "Dribbble", href: "https://dribbble.com/abiodun-inaolaji" },
  ],
  socialImage: "/vibesPortfolio.png",
  canonicalURL: "https://abiodun-inaolaji-portfolio-website-bk79zgorn.vercel.app", ////
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Abiodun Inaolaji",
    specialty: "Software Developer",
    summary:
          "A highly motivated computer scientist and System Engineer skilled in React, Go, JavaScript, Python, Docker, and databases. With a strong curiosity for how hardware and software interact, especially in shaping the future of AI.",
    email: "abioduninaolaji12@gmail.com",
  },
  experience: [
    {
      company: "BantaHR Technology",
      position: "Lead Software Developer x Product Manager",
      startDate: "May 2026",
      endDate: "2026 till date",
      summary: [
        "Built a Human Resource Information System that manages the recruitment framework, automates payroll, manages attendance, tracks performance, and empowers your people. It increases companies recruitment and workforce management efficiency by 50%. Bantahr is currently serving 40% of organisations in Nigeria.",     
      ],
    },
    {
      company: "Codefest Hackathon",
      position: "Lead Frontend Developer",
      startDate: "May 2025",
      endDate: "Sept 2025",
      summary: [
        "I led a team of developers in builing a Therapeutic web application, integrating advance features such as real-time chat, Ai driven personalized content recommendations, and interactive user interfaces. This resulted in a 30% increase in user engagement and a 25% boost in user retention.",       
      ],
    },
    {
      company: "Vitafoam Nigeria Limited",
      position: "Intern Software and Hardware Engineer",
      startDate: "Jun 2022",
      endDate: "Oct 2022",
      summary: [
        "Developed and integrated a real-time web application using Microsoft Power BI to visualize and analyze business data, improving accuracy and data update in the application. after testing the functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
        "I Engaged in hardware repairs and maintenance, successfully diagnosing and repairing over 100 hardware issues, resulting in a 20% reduction in downtime and a 15% increase in overall system reliability.",
        "I collaborated with engineering team to manage cisco server room, backup data, fix and repair marewares issues, and ensure the security of the network infrastructure, leading to a 25% decrease in network downtime and a 20% improvement in overall system performance.",
      ]
    },
     {
      company: "Apple and Pears Limited",
      position: "HR Officer and Research Analyst, NYSC",
      startDate: "Nov 2024",
      endDate: "Nov 2025",
      summary: [
        "I developed a system applications, the management system upload and takes employee data and generate reports, casual leave, medical leave, and stores their data for easy access, it was developed using React frontend, Express and Typescript Backend, and MongoDB, intiated Ai integration to automate data analysis and reporting, resulting in a 40% reduction in manual data processing time and a 30% increase in accuracy of employee performance insights.",
        "I collaborated with Hardware team to manage and maintain the company's computer Hardwares, scale multiple servers, and ensuring optimal performance and security, leading to a 20% decrease in system downtime and a 15% improvement in overall system reliability.",
      ],
    },
     {
      company: "Jilad Press",
      position: "UI Designer and Frontend Developer",
      startDate: "Jan 2017",
      endDate: "Aug 2019",
      summary: [
        "I designed and developed user friendly interfaces web applications, integrating Html, css, and Javascript to create visually appealing and responsive designs.",
        "I collaborated with the design team to ensure a seamless user experience and implemented responsive design principles to optimize the application for various devices.",
      ],
    },
  ],
  projects: [
    {
      name: "Weekend Online",
      summary: "Full Go backend, Google Cloud Compute Engine, GitHub Action, Docker and ThreeJs Animation and Typescript Discovery, Community Ticketing WebApp client can book, host event, and create community. Payment system | Ticketing | Rewards | Referrals | Communities | Bookings | Revenues",
      linkPreview: "/weekend.png",
      linkSource: "https://www.on-weekend.online",
      image: "/weekend.png",
    },
     {
      name: "BantaHr",
      summary: "Production-grade HR platform with authentication, leave management, contract handling, OCR scanning, and RBAC. E-commerce App | React, Tailwind CSS Responsive storefront with product filtering, checkout, and performance optimizations via lazy-loading.",
      linkPreview: "/BantaHr.png",
      linkSource: "https://www.bantahr.com",
      image: "/BantaHr.png",
    },
    {
      name: "MindPal",
      summary: "A therapeutic platform \"MindPal\" is an AI-powered chatbot that provides basic MHFA triage and support, uniquely trained in Pidgin and Hausa for cultural relevance and empathy, it a replicates the features of BetterHelp.",
      linkPreview: "/MindPal.png",
      linkSource: "https://github.com/Big-Vibes/MindPal",
      image: "/MindPal.png",
    },
    {
      name: "RewardFlow-v2-FULL-TYPESCRIPT",
      summary: "A inspired project from RewardFlow-v1, RewardFlow is a full-stack reward and task-based engagement platform. The project demonstrates real-world system design, Full Typescript Frontend and backend and a scalable database architecture (PrismaORM, Neon Postgres).",
      linkPreview: "/type.png",
      linkSource: "https://github.com/Big-Vibes/TodoApp-RewardHub-Typescript-v1",
      image: "/type.png",
    },
  ],
  about: {
    description: `
    Hi, i'm Abiodun Inaolaji highly motivated computer scientist and System Engineer skilled in React, Go, JavaScript, Python, Docker, and databases. With a strong curiosity for how hardware and software interact, especially in shaping the future of AI, I built a solid foundation in creating practical, user-focused solutions. Driven by the goal of bridging technological gaps, developing impactful digital experiences, and supporting technological growth in rural communities. Also experienced in computer networking, hardware repairs, and UI/UX design.
    `,
    image: "/Vibes.jpg",
  },
};

// #5755ff
