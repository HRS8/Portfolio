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
  cisco,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  gcp,
  link,
  apssdc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "<About/>",
  },
  {
    id: "work",
    title: "<Work/>",
  },
  {
    id: "contact",
    title: "<Contact/>",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Networking Engineer",
    company_name: "CISCO",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "March 2019 - Jan 2020",
    points: [
      "I successfully completed Assessments given by Cisco","I was able to expand my knowledge in domain of networking and hardware by help of the best","this was done as a part job oriented skill training in diploma"
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "APSSDC",
    icon: apssdc,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - April 2020",
    points: [
      "I was one of 20 students got selected out of 300 across the state based on academics","As a part of final project we,A team of 5 students build a fullstack website and deployed it using BootStrap,SpringBoot,MongoDb "
    ],
  },
  {
    title: "Cloud Architect",
    company_name: "AWS",
    icon: aws,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - April 2021",
    points: [
      "I took my first steps in Cloud by successfully completing AWS Cloud Architect and Engineer courses offered by AWS","I completed all the hands on labs assessed to me which had various tasks in cloud","I was able to join community of AWS Community Builders"
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2021 - August 2021",
    points: [
      "When I wanted to play with backend technologies,I signed up for backend developer course by meta","With help of this I kick started my journey through Backend Technologies","I developed a sample restaurant website from scratch using Django,Oauth by implementing API","It needs to have features like pagination,Throttling,Table Booking InOrder to qualify the test"
    ],
  },
  {
    title: "Cloud Digital Leader",
    company_name: "Google",
    icon: gcp,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Nov 2021",
    points: [
      "At time I am really excited about the cloud and wanted to explore it a bit more and I had the opportunity to be Trained to be a GCP which is a certification offered by Google","I was able to succesfully complete it by successfully complete the tasks and assessments given in the course"
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "LinkedIn",
    icon: link,
    iconBg: "#E6DEDD",
    date: "March 2022 - Sep 2022",
    points: [
      "I really Wanted to explore the world of DevOps and understand it to know whats all the hype for","It was taught by the experts like ernest Muller on the ever growing LinkedIn Learning Platform","I really great opportunity know the basics of the DevOps and a few HandsOn Labs and assessments on it","tech Involved: "
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've secured 3rd rank in a competitive entrance test AP-ECET which is state wide examination in stream of CSE in year 2020",
  },
  {
    testimonial:
      "I've secured 98rd rank in a competitive entrance test TS-ECET which is state wide examination in stream of CSE in in year 2020",
  },
  {
    testimonial:
      "I've attended multiple hackathons and won some of them during my education.I've been to interstate competitions ended up among the top",
  },
];

const projects = [
  {
    name: "GVPCE-NSS",
    description:
      "I was among few members of team and we collectively developed website for NSS club of GVPCE as GVPCE-NSS from ground up which is launched and awarded by Dignitaries of GVPCE",
    tags: [
      {
        name: "tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gvpcenss/website",
  },
  {
    name: "MetaAid",
    description:
      "During my diploma internship I was one of 30 applicants who got selected out of 300 from across the state for the internship offered by APSSDC and as a final assessment we were required to build a full stack web app from scratch",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "saas",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi Channel Alert System",
    description:
      "We Developed a Multi Channel Alert System using Amazon SNS which proved to be 1.5 times profitable forlarge scaled enterprices than the competition.This was done for mini project in 4th semester of Btech",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AWS SNS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };