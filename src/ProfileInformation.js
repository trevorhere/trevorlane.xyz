
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from './assets/trevor.png';

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions
import campRank   from './assets/camp-rank.jpg';
import blogApp   from './assets/blog-app.jpg';
import todoApp   from './assets/todo-app.jpg';
import chuckNorris   from './assets/chuck-norris.jpg';
import ticTacToe   from './assets/tic-tac-toe.jpg';
import colorGame   from './assets/color-game.jpg';
import recrootBox from './assets/recrootBox.png';
import taskiveDemo from './assets/takiveDemo.MP4';
import taskive from './assets/taskive.png';
import surveyor from './assets/surveyorHome.png';
import resume from './assets/Resume.pdf';
import fms from './assets/FMS.png'

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.
let portfolioItems = [
  {
    imageUrl: taskive,
    title: "Taskive",
    link: taskiveDemo,
    linkk: "https://github.com/trevorhere/taskive-client",
    linkText: "Watch Demo"
  },
  {
    imageUrl: surveyor,
    title: "Surveyor",
    link: "#",
    linkText: "More Info",
    modal: true
  },
  {
    imageUrl: fms,
    title: "Family Search",
    link: "https://github.com/trevorhere/240/tree/master/FamilyMapClient",
    linkText: "More Info"
  },
  {
    imageUrl: recrootBox,
    title: "RecrootBox",
    link: "https://trevorhere.github.io/recrootBox/",
    linkText: "Open Demo"

  },
  {
    imageUrl: campRank,
    title: "campRank",
    link: "https://desolate-falls-89173.herokuapp.com/",
    linkText: "Open App"

  },
  {
    imageUrl: blogApp,
    title: "Blog App",
    link: "https://boiling-harbor-27900.herokuapp.com",
    linkText: "Open App"
  },
  // {
  //   imageUrl: todoApp,
  //   title: "To-Do Front-End",
  //   link: "http://trevorlane.xyz/todo/"
  // },
  // {
  //   imageUrl: chuckNorris,
  //   title: "API Quote Generator",
  //   link: "#"
  // },
  // {
  //   imageUrl: ticTacToe,
  //   title: "Tic Tac Toe",
  //   link: "http://trevorlane.xyz/tictactoe/"
  // },
  // {
  //   imageUrl: colorGame,
  //   title: "Color Game",
  //   link: "http://trevorlane.xyz/colorGame/"
  // },
]


// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Trevor";
let lastName = "Lane";
let title = "Student / Developer";
let bio = "Hey there, I'm a computer science student at Brigham Young University in Provo, Utah. I like to build web applications using javascript based tech like React.js Node.js and MongoDB." +

" Feel free to take a look at some things i've built here or checkout my code on github."

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.
let links = [
  {
    name: "Email",
    link:"trevor@trevorlane.xyz"
  },
  {
    name: "GitHub",
    link: "https://github.com/trevorhere"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/trevor-lane-8615a9106/"
  },
  {
    name: "Resume",
    link: resume
  },
]

// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = true;

export {
    firstName,
    lastName,
    title,
    bio,
    portfolioItems,
    selfie,
    showFooter,
    links
}