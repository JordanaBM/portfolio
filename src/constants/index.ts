import mobile from "../assets/mobile.png";
import ram from "../assets/RAM-805fc606.png";
import tramita from "../assets/tramita-198b16c3.png";
import feedback from "../assets/feedback-d1521259.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import javascript from "../assets/tech/javascript.png";
import mySQL from "../assets/tech/mysqll.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import jest from "../assets/tech/jest.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import graphQL from "../assets/tech/GraphQL-e06d6345.png";
import meta from "../assets/company/meta.png";
import starbucks from "../assets/company/starbucks.png";
import tesla from "../assets/company/tesla.png";
import shopify from "../assets/company/shopify.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const navLinksEs = [
  {
    id: "about",
    title: "Acerca de mí",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "UX/UI designer",
    icon: creator,
  },
];

const servicesEs = [
  {
    title: "Desarrolladora Web",
    icon: web,
  },
  {
    title: "Desarrolladora React Native",
    icon: mobile,
  },
  {
    title: "Desarrolladora Backend",
    icon: backend,
  },
  {
    title: "Creadora de contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "graphql",
    icon: graphQL,
  },
  {
    name: "jest",
    icon: jest,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Feedback Collection System",
    description:
      "Web application made to measure for the company Zebrands, which allows users to send and receive feedback from their coworkers to improve their work performance.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: feedback,
    source_code_link: "https://github.com/DenisseDB/Dynamic_Tech",
  },
  {
    name: "Tramita la Cultura QRO",
    description:
      "Web and mobile application that allows the management of procedures for the Secretary of Culture of the State of Querétaro, as well as their consultation by citizens.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "graphQL",
        color: "orange-text-gradient",
      },
    ],
    image: tramita,
    source_code_link: "https://github.com/iangg29/tc2007b",
  },
  {
    name: "Despegar de grupo asesores RAM",
    description:
      "An introductory platform for new insurance sales agents, which allows them to learn about the company's products and visualize their performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typeorm",
        color: "pink-text-gradient",
      },
    ],
    image: ram,
    source_code_link: "https://github.com/softwaredelta/GNP",
  },
];

const projectsEs = [
  {
    name: "Sistema de Recolección de Feedback",
    description:
      "Aplicación web hecha a la medida para la empresa Zebrands, que permite a los usuarios enviar y recibir feedback de sus compañeros de trabajo para mejorar su desempeño laboral.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
    ],
    image: feedback,
    source_code_link: "https://github.com/DenisseDB/Dynamic_Tech",
  },
  {
    name: "Tramita la Cultura QRO",
    description:
      "Aplicación web y móvil que permite la gestión de trámites para la Secretaría de Cultura del Estado de Querétaro, así como la consulta de los mismos por parte de los ciudadanos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "graphQL",
        color: "orange-text-gradient",
      },
    ],
    image: tramita,
    source_code_link: "https://github.com/iangg29/tc2007b",
  },
  {
    name: "Despegar de grupo asesores RAM",
    description:
      "Una plataforma de introducción a nuevos agentes de ventas de seguros, que les permite aprender sobre los productos de la empresa y visualizar su rendimiento.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typeorm",
        color: "pink-text-gradient",
      },
    ],
    image: ram,
    source_code_link: "https://github.com/softwaredelta/GNP",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  servicesEs,
  projectsEs,
};
