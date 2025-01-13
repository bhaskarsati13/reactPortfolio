
export const HERO_CONTENT = `I am an aspiring Frontend Developer with a strong foundation in HTML, CSS, JavaScript, React, and Redux. Though I am at the beginning of my professional journey, I have dedicated significant time to mastering these technologies and building hands-on projects that showcase my ability to create responsive, dynamic, and user-friendly web applications. I am eager to bring fresh perspectives, problem-solving skills, and a passion for innovation to a team where I can contribute to impactful projects and continue growing as a developer.`
export const ABOUT_TEXT = `I am an aspiring and enthusiastic front-end developer with a passion for crafting engaging and responsive web applications. Although I am at the beginning of my professional journey, I have honed my skills in HTML, CSS, JavaScript, React, and Redux through dedicated learning and personal projects. My curiosity for web development drives me to continuously explore new technologies and improve my craft. I am eager to contribute to collaborative teams, tackle challenging problems, and create intuitive user experiences. Outside of coding, I enjoy exploring creative pursuits and staying updated with the latest trends in technology.`;

// images imports

import shopOnn from '../images/projectImages/ShopOnnnn/home.png'
import country from '../images/projectImages/countryApi/home.png'
import portfolio from '../images/projectImages/reactPortfolio/home.png'
import yt from '../images/projectImages/ytClone/home.png'
import expense from '../images/projectImages/expenseForm/home.png'


export const ourProjects = {
  projects: [
    {
        name: "ShopOn",
        description: "Developed an e-commerce web app using React and Redux, featuring a dark/light mode toggle, real-time product search, and sorting by price and rating. Integrated an expense tracker to monitor spending on cart items. Leveraged Redux for state management, with dispatch and useSelector for seamless data flow across components. The app is fully responsive, ensuring a smooth user experience across devices.",
        technologyUsed: ["HTML", "CSS", "React", "Redux"],
        image: shopOnn, 
        link:"https://bhaskarsati13shoponn.netlify.app/"
      },

    {
        name: "ytClone",
        description: "Built a YouTube clone with React JS and the YouTube Data API. Learned API integration, dynamic rendering, and React state management.",
        technologyUsed: ["HTML", "CSS", "React", "Google YouTube API"],
        image: yt,
        link:"https://bhaskarsati13ytclone.netlify.app/"
      },
    {
      name: "RestCountryAPI",
      description: "A responsive web app that fetches country data via REST APIs, with search/filter functionality, dynamic routing, multiple api fetching  dark/light mode toggle. Gained experience in API integration, Context API, handling asynchronous data, implementing shimmer effects, optimizing state management and conditional rendering.",
      technologyUsed: ["HTML", "CSS", "JavaScript", "React"],
      image: country,
      link:"https://countryyapi.netlify.app/"
    },
    {
        name: "reactPortfolio",
        description: "my skills, projects, and work experience with sections for About , Technologies, Work Experience, Projects, and Contact. The site features smooth animations a well-structured layout and dynamic content.",
        technologyUsed: ["HTML", "CSS", "React", "Framer Motion"],
        image: portfolio,
        link:"https://melodic-lokum-906787.netlify.app/"
      },

    {
      name: "expenseTracker",
      description: "A React-based expense tracker with real time data handling. Includes form validation , custom filters sorting , edit functionality, and local storage for persistent tracking",
      technologyUsed: ["HTML", "CSS", "React"],
      image: expense,
      link:"https://bhaskarsati13-expensetracker.netlify.app/"
    },

  ]
};


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};