import Reacticon from './components/assets/react-js-icon.png';
import NodeJSicon from './components/assets/nodejs-1-logo.png';
import CSSicon from './components/assets/css-logo.jpg';
import JSicon from './components/assets/logo-javascript.png';
import HTMLicon from './components/assets/html-5-logo.jpg';
import Reduxicon from './components/assets/redux-logo.png';
import Tailwindicon from './components/assets/tailwind-logo.png';
import Bootstrapicon from './components/assets/bootstrap-logo.png';
import Giticon from './components/assets/git-logo.jpg';

import projectBG1 from './components/assets/project-1-bg.png'
import projectBG2 from './components/assets/project-2-bg.png'
import projectBG3 from './components/assets/project-3-bg.png'
import projectBG4 from './components/assets/project-4-bg.png'
import projectBG5 from './components/assets/project-5-bg.png'
import projectBG6 from './components/assets/project-6-bg.png'
import projectBG7 from './components/assets/project-7-bg.png'
import projectBG8 from './components/assets/project-8-bg.png'
import projectBG9 from './components/assets/project-9-bg.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:3000/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jesvin Jose',
  role: 'Full Stack Developer',
  description:
    'I am a Passionate MERN stack developer dedicated to building seamless, scalable web applications.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jesvin-jose-5346647b/',
    github: 'https://github.com/jesvinjose',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'car-rentals: car-rentals is a user-friendly interface that simplifies the entire car booking process.',
    stack: ['NodeJS', 'JavaScript', 'React','tailwind'],
    sourceCode: 'https://github.com/jesvinjose/Car-rentels-frontend',
    livePreview: 'https://car-rentels-frontend.vercel.app/',
    background:projectBG1
  },
  {
    name: 'Project 2',
    description:
      'Netflix Clone: This is a netFlix clone built using React that helps the users to view series and dramas.',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/jesvinjose/netFlix-Clone',
    livePreview: 'https://65cd03c578abe606725343c0--luminous-selkie-ac6021.netlify.app/',
    background:projectBG9
  },
  {
    name: 'Project 3',
    description:
      'My Portfolio: This website shows my past experiences and works before taking up the web development roles',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/jesvinjose/My-OldPortfolio',
    livePreview: 'https://tubular-kashata-ca2ccd.netlify.app/',
    background:projectBG3
  },
  {
    name: 'Project 4',
    description:
      'EMI Calculator: This application gives us the EMI amount based on the loan amount, interest rate and loan tenure given.',
    stack: ['tailwind', 'React'],
    sourceCode: 'https://github.com/jesvinjose/EMICalculator',
    livePreview: 'https://65cc9da6a718c6007e2b9022--sparkling-selkie-2bca52.netlify.app/',
    background:projectBG4
  },
  {
    name: 'Project 5',
    description:
      'Weather App: This application gives real time data of weather at a place such as temperature, humidity and wind speed',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/jesvinjose/Realtime-weather',
    livePreview: 'https://65cc60cfdb914c74fb4628c1--thriving-duckanoo-8613e3.netlify.app/',
    background:projectBG2
  },
  {
    name: 'Project 6',
    description:
      'Analog Clock: This application runs an analog clock with Real-time updates every second and Dynamic hour markings from 1 to 12',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/jesvinjose/reatTime-Analog',
    livePreview: 'https://65cd8c8c7769f25c7e0d1298--melodious-cupcake-80b90d.netlify.app/',
    background:projectBG6
  },
  {
    name: 'Project 7',
    description:
      'SpectsMart: This is an E-commerse web application for spectacles for different categories such as Men, Women and Kids.',
    stack: ['JavaScript', 'NodeJS','Express','EJS'],
    sourceCode: 'https://github.com/jesvinjose/Specs-Mart',
    livePreview: 'https://65cc60cfdb914c74fb4628c1--thriving-duckanoo-8613e3.netlify.app/',
    background:projectBG7
  },
  {
    name: 'Project 8',
    description:
      'ToDo App: This is a simple toDo application that helps the users to organize and manage tasks by allowing them to create, track, and complete tasks within a user-friendly interface.',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/jesvinjose/toDoApp-2',
    livePreview: 'https://65ccfefea4b3550a038e5661--beamish-twilight-4841ef.netlify.app/',
    background:projectBG8
  },
  
  {
    name: 'Project 9',
    description:
      'Calcular App: This application calculates basic mathematical operations like addition, subtraction etc.',
    stack: ['JavaScript', 'React'],
    sourceCode: 'https://github.com/jesvinjose/calculator',
    livePreview: 'https://65cd18f131cf511c6c583bd0--storied-clafoutis-6093da.netlify.app/',
    background:projectBG5
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  {name:'HTML', logo:HTMLicon},
  {name:'CSS',logo:CSSicon},
  {name:"JavaScript",logo:JSicon},
  {name:'Node JS',logo:NodeJSicon},
  {name:'React',logo:Reacticon},
  {name:'Redux',logo:Reduxicon},
  {name:'tailwind.css',logo:Tailwindicon},
  {name:'Bootstrap',logo:Bootstrapicon},
  {name:'Git',logo:Giticon}
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jesvinjose49@gmail.com',
}

export { header, about, projects, skills, contact }
