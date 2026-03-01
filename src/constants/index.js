import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  java,
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
  deeplearning,
  blockchain,
  Amtapitambar,
  nitdgplogo,
  Clan,
  jupiternotebook,
  redis,
  cyberSecurity,
  load_balancer
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Coder",
    icon: web,
  },
  {
    title:"Deep Learning Enthusiast",
    icon: deeplearning,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "CyberSecurty Enthusiast",
    icon: cyberSecurity,
  },
];

const technologies = [
  {
    name:"Java",
    icon: java,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name:"Jupiter Notebook",
    icon: jupiternotebook,
  },
  {
    name:"Redis",
    icon: redis,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "NIT Durgapur",
    icon: nitdgplogo,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - present",
    points: [
      "Mahatma Gandhi Rd, A-Zone, Durgapur, West Bengal 713209",
      "CGPA : 9.00/10.0"
    ],
  },
  
  {
    title: "Higher Secondary Exam class(12th)",
    company_name: "Amta Pitambar High School",
    // company_name: "Tesla",
    icon: Amtapitambar,
    iconBg: "#383E56",
    date: "April 2020 - April 2022",
    points: [
      "Amta, Howrah, West Bengal 742213",
      "Precentage : 94%"
    ],
  },
  {
    title: "Secondary Exam class(10th)",
    company_name: "Amta Pitambar High School",
    icon: Amtapitambar,
    iconBg: "#383E56",
    date: "Jan 2019 - April 2020",
    points: [
      "Amta, Howrah, West Bengal 742213",
      "percentage : 95%"
    ],
  }
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
    name: "Event Management System",
    description:
      "A platform that allows admins to launch events, manage teams, automate account creation, and handle PPT submissions. It features secure authentication and real-time chat using Socket.IO, with planned enhancements including improved UI and integrated video conferencing.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    
    ],
    image: "https://image2url.com/images/1764649394284-7d91a1db-cf1d-4590-aa67-28edf9fe31c3.png",
    source_code_link: "https://techmela.vercel.app/",
  },
  {
    name: "Centrality Detection using Deep Learning ",
    description:
      "This project focuses on analyzing social networks using Graph Convolutional Networks (GCN) to determine centrality measures in complex networks. It leverages deep learning to improve the accuracy of identifying influential nodes in a network.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      }
    ],
    image: "https://www.networkpages.nl/wp-content/uploads/2023/05/Closeness.png",
    source_code_link: "https://github.com/Arnab-Pachal1234/Social-Network",
  },
  {
    name: "Text File Compressor",
    description:
      "Huffman-based text compression and decompression system with binary encoding, bit-level operations, and custom header serialization. Ensures lossless decoding via tree reconstruction and has separate compressor and decoder programs for modularity",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Algorithms",
        color: "green-text-gradient",
      },
     
    ],
    image: "https://image2url.com/images/1764650400548-6696a2ed-6463-496f-a2f4-38b7ffad42b8.png",
    source_code_link: "https://github.com/Arnab-pachal/FileCompressor",
  },
  {
    name: "Priority-Aware Load Balancer",
    description:
      "A high-performance, stateful load balancing system built from scratch using Node.js and raw TCP sockets. It features dynamic request routing via a custom Max-Heap, autonomous horizontal scaling using child processes, and robust fault tolerance. Includes a real-time Vanilla JS and WebSocket dashboard to visualize system mechanics.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "blue-text-gradient",
      },
      {
        name: "system-design",
        color: "pink-text-gradient",
      }
    ],
    image: load_balancer, 
    source_code_link: "https://github.com/Arnab-pachal/LoadBalancer",
  }
];

export { services, technologies, experiences, testimonials, projects };
