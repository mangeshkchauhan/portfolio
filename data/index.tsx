import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdAccountCircle, MdReviews } from "react-icons/md";

export const navItems = [
  { name: "About", link: "#about", icon: <FaHome /> },
  { name: "Projects", link: "#projects", icon: <GrProjects /> },
  { name: "Testimonials", link: "#clients", icon: <MdReviews /> },
  { name: "Contact", link: "#contact", icon: <MdAccountCircle /> },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborating with clients, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am constantly improving my skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast driven by a passion for creating innovative apps",
    description: "Here for the love of coding",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a finance app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 4,
    title: "smartGpt - Chat with your documents",
    des: "smartGPT allows you to have conversations with any PDF document. Simply upload your file and start asking questions right way.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/next.svg", "/kinde.svg"],
    link: "https://smart-gpt-phi.vercel.app/",
    linkDisplay: "Visit smartGpt",
  },
  {
    id: 1,
    title: "Cryptonics - A crypto coins tracking app",
    des: "Cryptonics is a one stop destination for all the exchanges and crypto coins available. We provide you with all data you need to analyse a crypto coin. You name it, we have it.",
    img: "/p1.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/next.svg",
      "/css.svg",
      "/redux.svg",
    ],
    link: "https://cryptonics.vercel.app/",
    linkDisplay: "Visit Cryptonics",
  },
  {
    id: 2,
    title: "Recipicious - Find your favorite recipes",
    des: "Recipiciousss is something I have build with my passion for cooking. It takes care of your recipes and you can find any recipe. You can cook anything delicious with RECIPICIOUSSS.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/css.svg", "/redux.svg"],
    link: "https://recipeciousss.vercel.app/",
    linkDisplay: "Visit Recipiecious",
  },
  {
    id: 3,
    title: "Restaurant Menu",
    des: "When you start learning something you have to start somewhere, This is to showcase my begining of web development.",
    img: "/p3.jpg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "javascript.svg",
      "/redux.svg",
    ],
    link: "https://restaurant-menu-mangeshkchauhan.vercel.app/",
    linkDisplay: "Visit Restaurant Menu",
  },
];

export const testimonials = [
  {
    quote:
      "Working with him was fantastic. His technical skills and quick problem-solving impressed me. He is reliable and delivers quality work on time. Highly recommend him.",
    name: "Amit Sharma",
    title: "Software Developer",
  },
  {
    quote:
      "I had a great experience collaborating with him. He is very organized and always ensures everything is on track. His attention to detail made our project successful.",
    name: "Himani Arya",
    title: "Project Manager",
  },
  {
    quote:
      "He is an excellent developer. He communicates clearly and works efficiently.",
    name: "Rahul Nair",
    title: "Backend Engineer",
  },
  {
    quote:
      "I highly recommend working with him. He is creative and always comes up with innovative solutions. His work has significantly improved our website's performance.",
    name: "Deepak Gupta",
    title: "UX Designer",
  },
  {
    quote:
      "He is very knowledgeable and easy to work with. He understood our requirements perfectly and delivered outstanding results. We will definitely work with him again.",
    name: "Arush Mehta",
    title: "Marketing Specialist",
  },
];

export const companies = [
  {
    id: 1,
    name: "Epsilon",
    img: "/epsilonlogo.jpg",
    nameImg: "/epsilonfull.svg",
  },
  {
    id: 2,
    name: "Byjus",
    img: "/byjuslogo.png",
    nameImg: "/byjusfull.png",
  },
  {
    id: 3,
    name: "Fountane",
    img: "/fountanelogo.jpg",
    nameImg: "/fountanefull.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern - Epsilon",
    desc: "Gained experience to develop pixel perfect UI design and developed components with fluid and responsive design",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer - Byjus",
    desc: "Developed UI for BYJU'S tuition center and wrote scripts for automation of manual tasks to reduce manual efforts",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Fronted Engineer - Fountane",
    desc: "Developed a landing page for a 3d printed products and contributed in building a hotel booking platform",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobile App Developer - Fountane",
    desc: "Created a hotel booking experince for iOS and Android platforms",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/mangeshkchauhan",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/mangeshkchauhan",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mangeshkchauhan/",
  },
];
