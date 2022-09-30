export const backendCourses = [
  {
    id: 1,
    title: "Complete Python Bootcamp 2021",
    img: "assets/Courses/Python.jpg",
    url: "https://www.udemy.com/course/complete-python-bootcamp/",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    img: "assets/Courses/Interview.jpg",
    url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
  },
  {
    id: 3,
    title: "Unit Testing and TDD",
    img: "assets/Courses/Unit_Testing.jpg",
    url: "https://www.udemy.com/course/unit-testing-and-tdd-in-python/",
  },
];

export const frontendCourses = [
  {
    id: 4,
    title: "Web Developer Bootcamp with Flask",
    img: "assets/Courses/Flask.jpg",
    url: "https://www.udemy.com/course/web-developer-bootcamp-flask-python/",
  },
  {
    id: 5,
    title: "React the Complete Guide",
    img: "assets/Courses/React.jpg",
    url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
];

export const mlCourses = [
  {
    id: 6,
    title: "Machine Learning A-Z",
    img: "assets/Courses/MLAZ.jpg",
    url: "https://www.udemy.com/course/machinelearning/",
  },
  {
    id: 7,
    title: "Mathematical Foundations of ML",
    img: "assets/Courses/Maths.jpg",
    url: "https://www.udemy.com/course/machine-learning-data-science-foundations-masterclass/",
  },
  {
    id: 8,
    title: "Complete Guide to TensorFlow",
    img: "assets/Courses/Tensor1.jpg",
    url: "https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/",
  },
  {
    id: 9,
    title: "Complete Guide to TensorFlow2",
    img: "assets/Courses/Tensor2.jpg",
    url: "https://www.udemy.com/course/complete-tensorflow-2-and-keras-deep-learning-bootcamp/",
  },
];

export const allCourses = backendCourses.concat(frontendCourses, mlCourses);

export const projects = [
  {
    id: 1,
    name: "WordMaster",
    live: "https://wordmaster2022.herokuapp.com/",
    github: "https://github.com/JustinZorch/WordMaster",
    source: "assets/projects/wordmaster.JPG",
    gif: "assets/Project Gifs/wordmaster.gif",
    description:
      "A redesign of the popular Wordle game with some added features.",
    features: [
      "User authentication",
      "3 to 9 letter words daily",
      "Global points ranking system",
    ],
    stack: [
      { name: "PYTHON", source: "assets/stackIcons/python.png" },
      { name: "FLASK", source: "assets/stackIcons/flask.png" },
      { name: "JINJA2", source: "assets/stackIcons/jinja.png" },
      { name: "HTML", source: "assets/stackIcons/html.png" },
      { name: "CSS", source: "assets/stackIcons/css.png" },
      { name: "MONGODB", source: "assets/stackIcons/mongodb.png" },
      { name: "HEROKU", source: "assets/stackIcons/heroku.png" },
    ],
  },

  {
    id: 2,
    name: "JLVL",
    live: "https://jlvl.vercel.app/",
    github: "https://github.com/JustinZorch/Personal-Site",
    source: "assets/projects/jlvl.JPG",
    gif: "assets/Project Gifs/jlvl.gif",
    description: "Personal Software Engineering website.",
    features: [
      "Dynamic reactive styling",
      "Courses, References, Projects",
      "Emailing contact service",
    ],
    stack: [
      { name: "JAVASCRIPT", source: "assets/stackIcons/js.png" },
      { name: "REACT", source: "assets/stackIcons/react.png" },
      { name: "HTML", source: "assets/stackIcons/html.png" },
      { name: "SCSS", source: "assets/stackIcons/sass.png" },
      { name: "EMAILJS", source: "assets/stackIcons/emailjs.png" },
      { name: "VERCEL", source: "assets/stackIcons/vercel.png" },
    ],
  },
  {
    id: 3,
    name: "Justins Pizzeria",
    live: "https://justins-pizzeria-nl.vercel.app/",
    github: "https://github.com/JustinZorch/Justins-Pizzeria",
    source: "assets/projects/pizzeria.JPG",
    gif: "assets/Project Gifs/pizzeria.gif",
    description:
      "Pizzeria order management site with admin and client capabilities.",

    features: [
      "Client order placing",
      "Admin order management",
      "Live SMS order status updates",
    ],
    stack: [
      { name: "JAVASCRIPT", source: "assets/stackIcons/js.png" },
      { name: "REACT", source: "assets/stackIcons/react.png" },
      { name: "NEXT", source: "assets/stackIcons/next.png" },
      { name: "HTML", source: "assets/stackIcons/html.png" },
      { name: "CSS", source: "assets/stackIcons/css.png" },
      { name: "TWILIO", source: "assets/stackIcons/twilio.png" },
      { name: "MONGODB", source: "assets/stackIcons/mongodb.png" },
      { name: "VERCEL", source: "assets/stackIcons/vercel.png" },
    ],
  },
  {
    id: 4,
    name: "Unsplash Search API",
    live: "https://unsplash-api-sigma.vercel.app/",
    github: "https://github.com/JustinZorch/Unsplash-API",
    source: "assets/projects/unsplash.JPG",
    gif: "assets/Project Gifs/unsplash.gif",
    description: "An image search site using the Unsplash API",

    features: [
      "Image search",
      "Filtering and Sorting of Images",
      "Dynamic images grid ",
    ],
    stack: [
      { name: "JAVASCRIPT", source: "assets/stackIcons/js.png" },
      { name: "REACT", source: "assets/stackIcons/react.png" },
      { name: "UNSPLASH", source: "assets/stackIcons/unsplash.png" },
      { name: "VERCEL", source: "assets/stackIcons/vercel.png" },
    ],
  },
  {
    id: 5,
    name: "Great Quotes",
    live: "https://react-http-f7d52.web.app/quotes",
    github: "https://github.com/JustinZorch/Great-Quotes",
    source: "assets/projects/quote.JPG",
    gif: "assets/Project Gifs/quotes.gif",
    description: "Blog style quote app with comments",

    features: [
      "Adding of quotes and comments",
      "Sorting with dynamic params routes",
      "Firebase management",
    ],
    stack: [
      { name: "JAVASCRIPT", source: "assets/stackIcons/js.png" },
      { name: "REACT", source: "assets/stackIcons/react.png" },
      { name: "FIREBASE", source: "assets/stackIcons/firebase.png" },
    ],
  },
];

export const references = [
  {
    id: 1,
    name: "Kuda Nyatsambo",
    title: "Founder and CTO",
    img: "assets/Ref pics/kuda.jpeg",
    linkedin: "https://www.linkedin.com/in/kuda-nyatsambo-b37579234/",
    companyName: "Aeon E and I Health",
    company: "assets/Ref pics/aeon.jpg",
    location: "Johannesburg, South Africa",
    desc: "I had the privilege of meeting Justin whilst we studied Mechanical Engineering together.  We did our final year project as a team in the challenging field of Machine learning applied to ABS systems.  Justin is a brilliant problem solver and is exceptional at grasping new concepts.",
  },
  {
    id: 2,
    name: "Elad Hertshten",
    title: "Managing Director",
    img: "assets/Ref pics/elad.jpg",
    linkedin: "https://www.linkedin.com/in/elad-hertshten-669750a3/",
    companyName: "Futures First",
    company: "assets/Ref pics/ff.png",
    location: "Tel-Aviv, Israel",
    desc: "Working with Justin was an absolute pleasure. He is hard working, committed, self-driven, and thinks outside the box. Justin always goes above and beyond, and I would highly recommend his services.",
    featured: true,
  },
  {
    id: 3,
    name: "Gi-Hyun Pak",
    title: "Elementary School Teacher",
    img: "assets/Ref pics/gihyun.jpg",
    linkedin: "http://www.ungsan.cnees.kr/main.do",
    companyName: "Ungsan Elementary School",
    company: "assets/Ref pics/yesan.png",
    location: "Yesan, South Korea",
    desc: "I worked with Justin at Ungsan Elementary school in Korea. He worked as an English teacher for three years. Working with him, I found him quite a passionate and dedicated man. He treats people and children from the bottom of his heart. He showed himself doing his best at his best in his work",
  },
  {
    id: 4,
    name: "Nicholas Pilkington",
    title: "CTO and Founder",
    img: "assets/Ref pics/nick.png",
    linkedin: "https://www.linkedin.com/in/nicholaspilkington/",
    companyName: "Drone Deploy",
    company: "assets/Ref pics/dd.png",
    location: "San Francisco, USA",
    desc: "Justin is a fast learner and really passionate about coding. I have witnessed his Software Engineering development from bootcamp to Fullstack Developer and his drive to constantly improve. He would be an asset to any team. ",
  },
];
