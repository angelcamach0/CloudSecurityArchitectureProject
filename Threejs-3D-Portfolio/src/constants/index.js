import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  cpp,
  python,
  linux,
  rhel,
  nmsu,
  anthonySchool,
  itech,
  googleDocs,
  excel,
  ZiadArafat,
  BradleyRoss,
  MatthewGroover,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Security Architecture",
    icon: web,
  },
  {
    title: "Precision Robotics",
    icon: mobile,
  },
  {
    title: "Linux & C/C++ Development",
    icon: backend,
  },
  {
    title: "Bilingual Communication",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java, // Replace 'java' with the appropriate icon reference
  },
  {
    name: "C/C++",
    icon: cpp, // Replace 'cpp' with the appropriate icon reference
  },
  {
    name: "Python",
    icon: python, // Replace 'python' with the appropriate icon reference
  },
  {
    name: "Linux/Unix",
    icon: linux, // This can remain the same if 'linux' is the icon for Linux/Unix
  },
  {
    name: "RHEL",
    icon: rhel, // Replace 'rhel' with the appropriate icon reference
  },
  {
    name: "git",
    icon: git, // This can remain the same
  },
  {
    name: "Google Docs",
    icon: googleDocs, // Replace 'googleDocs' with the appropriate icon reference
  },
  {
    name: "Microsoft Excel",
    icon: excel, // Replace 'excel' with the appropriate icon reference
  },
  {
    name: "docker",
    icon: docker, // This can remain the same if you have experience with Docker
  },
];


const experiences = [
  {
    title: "Web Developer",
    company_name: "NMSU Art Museum",
    icon: nmsu, 
    iconBg: "#383E56",
    date: "August 2020 – March 2023",
    points: [
      "Transitioned the NMSU Art Museum website from WordPress to Cascade CMS.",
      "Served dual roles as a desk attendant and art gallery organizer.",
      "https://uam.nmsu.edu/"
    ],
  },
  {
    title: "Volunteer Tutor",
    company_name: "Colonias Developmental Council",
    icon: meta, // You might need to add an appropriate icon for Colonias
    iconBg: "#E6DEDD",
    date: "May 2018 – September 2019",
    points: [
      "Assisted U.S. residents in preparing for citizenship interviews.",
      "Collaborated with the Colonias council to devise innovative learning methods, enhancing student success rates.",
      "https://colonias.nmsu.edu/"
    ],
  },
  {
    title: "Computation Assistant / Teacher Assistant",
    company_name: "Anthony Charter School",
    icon: anthonySchool, 
    iconBg: "#383E56",
    date: "January 2017 - June 2018",
    points: [
      "Supported teaching staff with IT-related tasks, including cloud file transfers and hardware troubleshooting.",
      "Spearheaded the development of the school's website and provided interim IT consultancy."
    ],
  },
  {
    title: "Volunteer & Robotics Club Member",
    company_name: "I Technical Preparatory Academy",
    icon: itech, 
    iconBg: "#E6DEDD",
    date: "January 2016 - August 2017",
    points: [
      "Contributed over 200 hours to community service initiatives, including street cleaning and marathon organization.",
      "Led student leadership programs and represented the academy in Vex Robotics Competitions at the national level."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I've worked with Angel on his projects, his documentation skills and patience to learn new technologies are excellent.",
    name: "Ziad Arafat",
    designation: "Lead Software Engineer",
    company: "Emerging Technology Ventures Inc.",
    image: "https://drive.google.com/uc?export=view&id=179387kFnfpRU5Z0gSU3PxM-y_lwBAT9B",
  },
  {
    testimonial:
      "Trabajar con Angel ha sido un placer. Su pasión por la tecnología, habilidad para resolver problemas y excelente comunicación hacen que cualquier proyecto fluya con naturalidad. Es alguien en quien confío plenamente.",
    name: "Luis Mendoza",
    designation: "Software Engineer",
    company: "Gainwell",
    image: "https://drive.google.com/uc?export=view&id=1hoQDuqBPhd50OAxYcVAo0ail_rlsuKpD",
  },
  {
    testimonial: "",
    name: "Bradley Ross",
    designation: "Junior Machine Learning Engineer",
    company: "Certilytics",
    image: "https://drive.google.com/uc?export=view&id=17LRa3iAVP9IYWCiSsQUIWK2uEu6M2X3d",
  },
  {
    testimonial:
      "I've collaborated with Angel on projects and am always impressed by their expertise and results-driven approach. Angel combines technical skill with creativity, making them a standout professional. Highly recommended.",
    name: "Matthew Groover",
    designation: "Graduate Assistant",
    company: "New Mexico State University",
    image: "https://drive.google.com/uc?export=view&id=1RBniQoffdb2u5kl91j410uUrzzIkDHgX",
  },
  {
    testimonial:
      "During the 5 years I have known him, I know Angel as both a true creative asset and a technical professional.",
    name: "Gabriel Mauger",
    designation: "Software Engineer",
    company: "Emerging Technology Ventures Inc.",
    image: "https://drive.google.com/uc?export=view&id=1-szop4FOKypZBerT6AOngXAnPlush4_t",
  },
];


const projects = [
  {
    name: "Cloud Security Architecture Project For Portfolio",
    description:
      "Long term project where I attempt to build a strong cloud security architecture portfolio, starting with the infestructure which this website is hosted.",
    tags: [
      {
        name: "OKD, OpenShift, Kubernetes, Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CISSP, CCSP, AWS, Azure, GCP, CEH, Security+",
        color: "green-text-gradient",
      },
      {
        name: "Redhat Enterprise Linux 9",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://angelcamacho.notion.site/angelcamacho/5e26a79809ba4f2cb1baa273c1d213aa?v=8b073962661343d08a9eb6a5cbbfc6f4",
  },
  {
    name: "Reverse Engineering CS479",
    description:
      "Reverse engineering malware is an important skill to combat cyber threats, and can lead to a career as a malware analyst. This course provides students with the necessary knowledge and skills to start a career in malware analysis.",
    tags: [
      {
        name: "Ghidra, control-flow analysis, data-flow analysis",
        color: "blue-text-gradient",
      },
      {
        name: "sandbox environment, resource consumption,  system calls",
        color: "green-text-gradient",
      },
      {
        name: "Memory forensics techniques to detect malware hidden within benign processes",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/angelcamach0/CS479",
  },
  {
    name: "Pandemic Simulation CS371",
    description:
      "The files which make up our simulation and provide supporting files, including the java files are found in main_workspace/working_sim/.",
    tags: [
      {
        name: "JavaFx, Java, Gson",
        color: "blue-text-gradient",
      },
      {
        name: "Simulation pandemic",
        color: "green-text-gradient",
      },
      {
        name: "Scenario Window, Simulation Window, ant",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/angelcamach0/cs371-project-pandemic/tree/master/cs371-project-pandemic-master/cs371-project-pandemic-master",
  },
];

export { services, technologies, experiences, testimonials, projects };
