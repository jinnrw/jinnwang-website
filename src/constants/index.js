export const ABOUT_ME = `My area of expertise is frontend development and everything related to the client-side. \n 
My emphasis is frontend technologies and modern Javascript frameworks, and I’m passionate about building web-based UI, interaction and writing high quality codes. \n 
During my early years of career, with backgrounds in Engineering and Psychology, I worked as a UX Designer at a consumer electronics company – BenQ. I was responsible to provide user-centric solutions for various award winning products. Working as a UX designer, I always respect highly on people who can bring great designs to life. And in 2015, I decided to go back to school and train to become a frontend developer. \n
 During the day, I work with an amazing creative team and software engineers in an agile environment, translating design mockups into responsive layouts, tweening interactions and animations, building and managing the frontend of our various web applications. \n
 And after hours, I fire up my code editor and start composing one of my many side projects. I enjoy working as a frontend developer and continue learning new techniques – <mark>JAMStack</mark>, <mark>devOps</mark>, etc. \n I also have experience with <mark>Node.js</mark>, <mark>Express</mark>, <mark>Firebase</mark> and <mark>Three.js</mark>. Check out my Github, if you’d like to see more!`;

export const WORK_EXPERIENCE = [
  {
    id: 1,
    company: "PNI Media",
    title: "Senior Frontend Developer",
    summary: [
      "Web Application Development using JavaScript frameworks",
      "JavaScript Testing",
      "Monitor Code Coverage",
    ],
    period: "Mar 2019 - Now",
  },
  {
    id: 2,
    company: "PNI Media",
    title: "Frontend Developer",
    summary: [
      "Responsive Design, SCSS, Task Runner",
      "JavaScript Animation",
      "Frontend Workflow Setup",
      "AngularJS Web Application",
    ],
    period: "Nov 2016 - Mar 2019",
  },
  {
    id: 3,
    company: "Ph1.ca",
    title: "Freelance Frontend Developer",
    summary: [
      "Create interactive prototypes for iOS apps",
      "Translate design mock-ups into web layouts",
      "Frontend environment and tool setup",
    ],
    period: "Sep 2016 - Nov 2016",
  },
  {
    id: 4,
    company: "BenQ",
    title: "User Experience Designer",
    summary: [
      "Create interactive prototypes for concept validation",
      "Design user interface for iOS, Android & TV apps",
      "Design user interface for on-screen display (OSD) for monitor and projector",
      "Define hardware devices keypads",
    ],
    period: "Mar 2014 - Jun 2015",
  },
];

export const SKILLS = [
  {
    name: "React",
    imgSrc: "./logo_react.png",
  },
  {
    name: "Redux",
    imgSrc: "./logo_redux.png",
  },
  {
    name: "Vue",
    imgSrc: "./logo_vue.png",
  },
  {
    name: "AngularJS",
    imgSrc: "./logo_angular.png",
  },
  {
    name: "GraphQL",
    imgSrc: "./logo_graphql.png",
  },
  {
    name: "SASS",
    imgSrc: "./logo_sass.png",
  },
  {
    name: "TypeScript",
    imgSrc: "./logo_typescript.png",
  },
  {
    name: "Jest",
    imgSrc: "./logo_jest.png",
  },
  {
    name: "Node.js",
    imgSrc: "./logo_node.png",
  },
  {
    name: "Firebase",
    imgSrc: "./logo_firebase.png",
  },
  {
    name: "GSAP",
    imgSrc: "./logo_gsap.png",
  },
  {
    name: "Three.js",
    imgSrc: "./logo_threejs.png",
  },
  {
    name: "Continuous learning",
    imgSrc: "./icon_book.png",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Rick and Morty Search",
    description:
      "Search for Rick and Morty characters via GraphQL using The Rick and Morty API.",
    tags: ["React", "Redux", "GraphQL", "Next.js"],
    imgSrc: "./project_rickandmorty.png",
    linkUrl: "https://github.com/jinnrw/rickandmorty-search",
  },
  {
    id: 2,
    name: "Trello-alike",
    description:
      "A Trello inspired list-making app and is still in progress. The idea is to create a public board and collaborate with your team, with a given url.",
    tags: ["React", "react-beautiful-dnd", "Node.js", "Express.js", "Redis"],
    imgSrc: "./project_trello.png",
    linkUrl: "https://github.com/jinnrw/trello-alike",
  },
  {
    id: 3,
    name: "Note App",
    description:
      "A full stack note taking app built with React, Express, Node and Firebase.",
    tags: ["React", "Node.js", "Express.js", "Firebase"],
    imgSrc: "./project_note_app.png",
    linkUrl: "https://github.com/jinnrw/note-taking-React-Express",
  },
  {
    id: 4,
    name: "YouTube with Lyrics",
    description: "Listen to your favourite YouTube playlists with lyrics.",
    tags: ["Vue", "Vuex", "axios", "Moment.js", "API"],
    imgSrc: "./project_youtube.png",
    linkUrl: "https://github.com/jinnrw/youtube-with-lyrics",
  },
  {
    id: 5,
    name: "3D Cards in Three.js",
    description:
      "Show 3D rendering cards in the web browser, using Three.js, a WebGL library. The idea is to provide a better experience showcasing the foil material on cards.",
    tags: ["WebGL", "Three.js"],
    imgSrc: "./project_3d_cards.png",
    linkUrl: "https://github.com/jinnrw/3D-cards-in-three.js",
  },
  {
    id: 6,
    name: "3D Racing in Three.js",
    description:
      "A 3D racing game in a web browser, using Three.js, a WebGL library.",
    tags: ["WebGL", "Three.js", "Parcel.js"],
    imgSrc: "./project_3d_cars.png",
    linkUrl: "https://github.com/jinnrw/3D-racing-three.js",
  },
  {
    id: 7,
    name: "HTML Canvas Platform Game",
    description:
      "A platform game includes camera, player movements, game physics and controls. \n Definitely small and unfinished, but I really enjoyed being completely lost in the begining but was able to overcome in the end :)",
    tags: ["HTML canvas"],
    imgSrc: "./project_html_platform_game.png",
    linkUrl: "https://github.com/jinnrw/html-canvas-platform-game",
  },
  {
    id: 8,
    name: "Apple TV Prototype with Framer (Using Game Controller)",
    description:
      "An interactive prototype that can be controlled using a PS4 controller. Project was featured on framer.com.",
    tags: ["Coffee Script", "Framer.js"],
    imgSrc: "./project_apple_tv.png",
    linkUrl:
      "https://blog.framer.com/apple-tv-prototype-with-framer-using-game-controller-59f1fc3d3b0f",
  },
  {
    id: 9,
    name: "Music App Animation",
    description:
      "A demo app showcases UI and animations. Built with TweenMax – more than 29,000 views!",
    tags: ["Animation", "TweenMax"],
    imgSrc: "./project_music_app.png",
    linkUrl: "https://codepen.io/jinnrw/full/ggpgVe",
  },
  {
    id: 10,
    name: "Flappy Chicken Web Game",
    description:
      "My first ever game made – a flappy bird clone! And yes, the flappy chicken was designed to be big : ) ",
    tags: ["HTML Canvas", "JavaScript"],
    imgSrc: "./project_flappy_chicken.png",
    linkUrl: "https://jinnrw.surge.sh/",
  },
];

export const PROJECT_FILTERS = [
  "React",
  "Redux",
  "Vue",
  "GraphQL",
  "Node.js",
  "WebGL",
  "Animation",
  "HTML Canvas",
];
