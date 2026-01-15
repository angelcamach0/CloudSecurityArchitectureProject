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
  LuisMendoza,
  GabrielMauger,
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
    title: "Cloud Security Engineer (Sustainment Test/Validation)",
    company_name: "Emerging Technology Ventures Inc.",
    icon: null,
    iconBg: "#383E56",
    date: "Oct 2023 – Sep 2025",
    points: [
      "Operated and hardened Linux virtualized environments (Proxmox; RHEL/Debian), enforcing least privilege and secure services.",
      "Validated patches/changes with repeatable verification steps, log review, and smoke tests.",
      "Supported CMMC 2.0 / NIST SP 800-171 readiness via SOPs, secure configuration practices, and audit evidence.",
    ],
  },
  {
    title: "Software Developer (Backend & Systems Support)",
    company_name: "NMSU Art Museum (UAM)",
    icon: nmsu,
    iconBg: "#383E56",
    date: "Aug 2020 – Mar 2023",
    points: [
      "Maintained legacy C/PostgreSQL backend with parameterized queries and transaction-safe updates.",
      "Diagnosed production issues via Nginx/system/DB logs and validated fixes with targeted queries.",
      "Migrated WordPress to Cascade CMS and validated auth, permissions, backups, and cutover readiness.",
    ],
  },
  {
    title: "Volunteer Tutor",
    company_name: "Colonias Developmental Council",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2018 – Sep 2019",
    points: [
      "Prepared U.S. residents for citizenship interviews and guided study sessions.",
      "Collaborated with staff to improve learning materials and student outcomes.",
    ],
  },
  {
    title: "IT Systems Administrator (Intern/Assistant)",
    company_name: "Anthony Charter School",
    icon: anthonySchool,
    iconBg: "#E6DEDD",
    date: "Jan 2017 – Jun 2019",
    points: [
      "Administered Linux systems via SSH/Bash; managed users, permissions, and services.",
      "Triaged Wi-Fi and DHCP/DNS issues, escalating upstream when needed and documenting fixes.",
      "Built internal SQL Server reporting backend with schema design, constraints, and exportable reports.",
    ],
  },
  {
    title: "Volunteer & Robotics Club Member",
    company_name: "I Technical Preparatory Academy",
    icon: itech,
    iconBg: "#E6DEDD",
    date: "Jan 2016 – Aug 2017",
    points: [
      "Contributed 200+ community service hours, including event support and campus initiatives.",
      "Led student leadership activities and represented the academy in VEX Robotics competitions.",
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
    image: ZiadArafat,
  },
  {
    testimonial:
      "Trabajar con Angel ha sido un placer. Su pasión por la tecnología, habilidad para resolver problemas y excelente comunicación hacen que cualquier proyecto fluya con naturalidad. Es alguien en quien confío plenamente.",
    name: "Luis Mendoza",
    designation: "Software Engineer",
    company: "Gainwell",
    image: LuisMendoza,
  },
  {
    testimonial:
      "Angel is exactly the kind of engineer you want on a sustainment team. He’s comfortable working in Linux, troubleshooting issues through logs and system tools, and making controlled changes without breaking systems. He learns quickly, takes initiative, and reliably documents his work so systems stay stable and secure.",
    name: "Bradley Ross",
    designation: "Junior Machine Learning Engineer",
    company: "Certilytics",
    image: BradleyRoss,
  },
  {
    testimonial:
      "I've collaborated with Angel on projects and am always impressed by their expertise and results-driven approach. Angel combines technical skill with creativity, making them a standout professional. Highly recommended.",
    name: "Matthew Groover",
    designation: "Graduate Assistant",
    company: "New Mexico State University",
    image: MatthewGroover,
  },
  {
    testimonial:
      "During the 5 years I have known him, I know Angel as both a true creative asset and a technical professional.",
    name: "Gabriel Mauger",
    designation: "Software Engineer",
    company: "Emerging Technology Ventures Inc.",
    image: GabrielMauger,
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
