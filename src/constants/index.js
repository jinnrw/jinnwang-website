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
    tags: ["HTML Canvas"],
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
  {
    id: 11,
    name: "Search with vanilla JavaScript",
    description: "Create a search function and display word count from scratch",
    tags: ["Mini Projects"],
    imgSrc: "./search-mini.png",
    linkUrl: "https://jsfiddle.net/jinnwang/b0v8gkta/",
  },
  {
    id: 12,
    name: " Multiple fetch requests and responses handling",
    description:
      "A proof of concept to show how two API requests can be handled if one relies on another's return. Using Node, Express and JavaScript.",
    tags: ["Node.js", "Mini Projects"],
    imgSrc: "./fetch-poc-mini.png",
    linkUrl:
      "https://codesandbox.io/s/multiple-fetch-requests-and-response-handling-zpvci?file=/public/javascripts/app.js",
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
  "Mini Projects",
];

export const CANVAS_ASSETS = {
  texture: {
    coin: [
      "./logo_react.png",
      "./logo_redux.png",
      "./logo_vue.png",
      "./logo_angular.png",
      "./logo_jest.png",
      "./logo_graphql.png",
      "./logo_node.png",
      "./logo_gsap.png",
      "./logo_threejs.png",
    ],
    cube: "./texture_brick.png",
  },
};
