// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// import ProjectsContainer from "./Components/Project";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import node from "./assets/techstack/node.png";
import django from "./assets/techstack/django.png";
import mongodb from "./assets/techstack/mongodb.jpg";


// Porject Images
import natures_cart from "./assets/projects/natures_cart.png";
import projectImage2 from "./assets/projects/busmanagement.jpg";
import LinkUp from "./assets/projects/LinkUp.png";
import gprc from "./assets/projects/gprc.jpg";
import netflix from "./assets/projects/netflix.png";
import examie from "./assets/projects/examie.png";
import resume from "./assets/projects/resume.png"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Bhavesh Patidar",
  tagline: "I build things for web",
  img: profile,
  about: `Hi, I'm Bhavesh Patidar from Indian Institute of Information Technology, Design and Manufacturing, Jabalpur. 
          A Full Stack Web Developer with a passion for crafting beautiful, responsive websites that make a difference for my clients. 
          With having experience and a love for all things tech, I'm always looking for new and innovative ways to improve my skills 
          and create cutting-edge designs.As a web developer, I understand that the key to a successful website is not just how it looks,
          but also how it functions. That's why I specialize in creating sites that are not only visually stunning but also intuitive
          and easy to use. I believe that a website should be a tool that helps businesses achieve their goals and connect with their audience,
          and I work tirelessly to make that a reality for every client I work with`,
};

// Enter your Social Media URLs here


// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Software Developer Intern",
    Company: `Umbrella Corporate Ltd`,
    Location: "Bhopal",
    Type: "Internship",
    Duration: "May 2024 - July 2024",
  },
  {
    Position: "Technical Lead",
    Company: `College Fusion Portal`,
    Location: "IIITDM JABALPUR",
    Type: "College-Project",
    Duration: "Sep 2023 - April 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Electronics & Communication Engineering",
    Company: `Indian Institute of Information Tecnology, Design and Manufacturing,Jabalpur`,
    Location: "Jabalpur",
    Type: "Full Time",
    Duration: "Dec 2021- Present",
  },
  {
    Position: "XII",
    Company: "JAWAHAR NAVODAYA VIDYALAYA",
    Location: "SHAJAPUR",
    Type: "Full Time",
    Duration: "2019-20",
  },
  {
    Position: "X",
    Company: "JAWAHAR NAVODAYA VIDYALAYA",
    Location: "SHAJAPUR",
    Type: "Full Time",
    Duration: "2017-18",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  mongodb:mongodb,
  django:django,
  node:node,
  
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "LinkUp",
    image: LinkUp,
    description: `A dynamic social media platform developed with ReactJS, TailWind CSS, NodeJS, ExpressJS, and MongoDB.
                 It offers secure login, real-time chat capabilities, and interactive post features. The platform focuses 
                 on providing a seamless user experience with robust security measures and scalability. It integrates advanced
                  web technologies to enable dynamic user engagement and fosters effective real-time communication among users.`,
    techstack: "ReactJS, TailWind CSS, NodeJS, ExpressJS, MongoDB",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/bhaveshP443/LinkUp",
    reverseOrder:true
  },
  {
    title: "College Bus Facility",
    image: projectImage2,
    description: `A comprehensive full-stack transportation management system built using Django and SQLite. 
                It features role-based dashboards tailored for different user roles, Google login for easy access,
                and CRUD operations for managing buses, drivers, routes, staff, and students. The system automates
                transportation operations and ensures efficiency. Designed with HTML, CSS, Bootstrap, and JavaScript, 
                it offers a responsive and user-friendly interface, prioritizing security and convenience.`,
    techstack: "Django, SQLite, HTML, CSS, Bootstrap, JavaScript, Django Authentication.",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/BhaveshP443/College-Bus-Facility",
  },
  {
    title: "Natures-Cart",
    image: natures_cart,
    description: ` A scalable e-commerce backend system designed with Node.js microservices architecture and RPC communication 
                  for smooth service interaction. The project employs Docker for containerization and AWS for deployment, 
                  ensuring efficient scalability and reliable cloud hosting. Additionally, automated CI/CD pipelines with Git streamline 
                  the development process, enabling continuous deployment and enhancing the system’s reliability and performance.`,
    techstack: "NodeJs, Microservices, Docker, RPC, AWS",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/BhaveshP443/Natures-Cart",
    reverseOrder:true
  },

];

export const OtherprojectDetails = [
  {
    title: "ResumeCraft",
    image: resume,
    description: `This portfolio website showcases skills, projects, and experience in a clean and interactive design. 
                  Built with modern web technologies, it features a responsive layout, smooth navigation and 
                  dynamic project displays. The site reflects development capabilities, offering visitors an engaging and
                  user-friendly experience across all devices.`,
    techstack:"HTML/CSS, Tailwind CSS, React",
    previewLink: "https://bhaveshpatidar443.netlify.app/",
    githubLink: "https://github.com/BhaveshP443/Updated-Resume",
  },
  {
    title: "Examie",
    image: examie,
    description: `The Student Examination System is a Dockerized application designed for managing examinations for students.
                 It includes an AdminClient, UserClient, and Backend components. The application is deployed using Terraform 
                 and GitHub actions. Unit tests are implemented for basic backend routes.`,
    techstack: "HTML/CSS, JavaScript, HCL",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/BhaveshP443/Examie",
  },
  {
    title: "Streame",
    image: netflix,
    description: `StreamSphere is a sleek Netflix clone frontend designed for a seamless movie and TV show browsing experience.
                   Built with modern web technologies, it features an intuitive user interface, responsive design, and 
                   dynamic content rendering. The platform ensures smooth navigation and engaging visuals for users.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/BhaveshP443/netflix_clone",
  },
  {
    title: "gRPCConnect",
    image: gprc,
    description: `This is a simple gRPC project that demonstrates unary, client-server, bidirectional communication 
                  between a server and a client using Go programming language, while attempting a simple implementation of 
                  containerization and creating a pod/deployment.`,
    techstack: "HTML/CSS, JavaScript, Go, Docker",
    previewLink: "https://nutritiouswhimsicalcache.bhavesh-patidar.repl.co/",
    githubLink: "https://github.com/BhaveshP443/GO_gRPC-project",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "bhaveshpatidar443@gmail.com",
  phone: "+91 7909436492",
};
