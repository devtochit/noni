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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  assessment,
  cloudupload,
  usersclass,
  fingerprint,
  Kuber,
  aws,
  python,
  bash,
  SQl,
  DC,
  bon,
  Gil,
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
    title: "Assessment and Analysis",
    icon: assessment,
  },
  {
    title: "Cloud Adoption and Migration",
    icon: cloudupload,
  },
  {
    title: "Toolchain Selection and Implementation",
    icon: usersclass,
  },
  {
    title: "Content Creator",
    icon: fingerprint,
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
    name: "Kubernetes",
    icon: Kuber,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: python,
  },
  {
    name: "Three JS",
    icon: bash,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: SQl,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud engineer",
    company_name: "Check DC",
    icon: DC,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2023",
    points: [
      "Utilized Terraform and Ansible infrastructure deployment time by 50%.",
      "Created strategies for disaster management with AWS backup , and AWS Disaster Recovery and CloudEndure to minimise future disruption",
      "Orchestrated containerized application using kubernetes on AWS EKS (Elastic kubernetes services)and managed container deployment with AWS Fargate improving scalability and resource utilization",
      "Implemented CI/CD pipelines jekins AWS codepipeline and GitLab CI/CD reducing manual deployment effort by 60%",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Bon voyage travels",
    icon: bon,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Demcember 2019",
    points: [
      "Design, develop, and maintain high-quality software solutions.",
      "Collaborate with cross-functional teams to analyze requirements and deliver scalable, efficient, and maintainable code.",
      "Participate in code reviews, debugging, and troubleshooting to ensure code quality and performance.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Construction scheduler",
    company_name: "Gilbane",
    icon: Gil,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Partnered with management to implement processes and complete special projects.",
      "Liaised with both management and team in constructive and positive manner.",
      "Drafted documents and reports for management review.",
      "Assessed prospect needs and qualified leads through keen knowledge of budget and potential objections.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
