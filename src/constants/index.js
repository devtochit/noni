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
  one,
  two,
  third,
  Awsc,
  cou,
  sec,
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
    title: "Techincal writing",
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
    title: "Cloud Engineer",
    company_name: "Check DC",
    icon: DC,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2023",
    points: [
      "Infrastructure Automation: Utilized Terraform and Ansible to reduce infrastructure deployment time by 50%. Disaster Recovery: Created strategies using AWS Backup, AWS Disaster Recovery, and CloudEndure to minimize future disruptions.",
      "Container Orchestration: Orchestrated containerized applications using Kubernetes on AWS EKS and managed container deployment with AWS Fargate, improving scalability and resource utilization.",
      "CI/CD Implementation: Implemented CI/CD pipelines with Jenkins, AWS CodePipeline, and GitLab CI/CD, reducing manual deployment efforts by 60%. Monitoring and Resolution: Established centralized monitoring with AWS CloudWatch, Grafana, and Prometheus, reducing mean time to resolution (MTTR) by 50%.",
      "Serverless Solutions: Designed and implemented serverless solutions using AWS Lambda, API Gateway, and DynamoDB, reducing operational overhead and improving scalability.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Bon voyage travels",
    icon: bon,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Demcember 2019",
    points: [
      "Software Development: Design, develop, and maintain high-quality software solutions for Bon Voyage Travels.",
      "Collaboration: Work with cross-functional teams to analyze requirements and deliver scalable, efficient, and maintainable code.",
      "Code Quality: Participate in code reviews, debugging, and troubleshooting to ensure code quality and performance.",
      "Continuous Learning: Stay updated on industry trends, best practices, and emerging technologies to continuously improve skills and stay ahead in the field.",
      "Documentation: Document software designs, architecture, and processes to facilitate knowledge sharing and maintainability",
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
    details: "Associate",
    name: "Introduction to Cloud Computing",
    date: "May 21, 2022",
    image: cou,
    link: "https://www.credly.com/badges/869f9cc3-2701-4281-b43d-aef9d8de618c/public_url",
  },
  {
    name: "AWS Solution Architect",
    details: "Associate",
    date: "April 04, 2024",
    link: "https://www.credly.com/badges/c2a162b9-7f5a-48b9-a680-29552702270f/public_url",
    image: Awsc,
  },
  {
    name: "AWS Solution Architect",
    details: "In progress",
    date: "soon",
    link: "",
    image: sec,
  },

  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Launch EC2 Instance",
    description:
      "AWS Lambda can be used to automate the launch of EC2 instances, showcasing the efficiency of AWS automation.",
    tags: [
      {
        name: "Lambda functions",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "green-text-gradient",
      },
      {
        name: "EC2 services",
        color: "pink-text-gradient",
      },
    ],
    image: one,
    source_code_link:
      "https://github.com/lydiauzoma/cloud-computing-/blob/main/Lambda_function",
    medium_link:
      "https://medium.com/@lydiauzoma61/launch-an-ec2-instance-with-lambda-f617ec27962f",
  },

  {
    name: "Amazon Rekognition",
    description:
      "In this article, I’m excited to show you how to build your image label generator using Amazon Rekognition",
    tags: [
      {
        name: "Amazon Rekognition",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Management Console",
        color: "green-text-gradient",
      },
      {
        name: "AWS services",
        color: "pink-text-gradient",
      },
    ],
    image: two,
    source_code_link:
      "https://github.com/lydiauzoma/cloud-computing-/blob/main/demo.py",
    medium_link:
      "https://medium.com/@lydiauzoma61/creating-an-image-labels-generator-with-amazon-rekognition-b15080ef221a",
  },

  {
    name: "AI Apps Made Easy with AWS",
    description:
      "Ever wished you could create an AI app just by describing what you need? Thanks to AWS PartyRock, that’s now possible.",
    tags: [
      {
        name: "AWS PartyRock",
        color: "blue-text-gradient",
      },
      {
        name: "LLM models",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: third,
    source_code_link: "https://github.com/",
    medium_link:
      "https://medium.com/@lydiauzoma61/ai-apps-made-easy-with-aws-partyrock-ba6e357cd229",
  },
];

export { services, technologies, experiences, testimonials, projects };
