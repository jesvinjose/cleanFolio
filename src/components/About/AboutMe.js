import React from 'react'
import './AboutMe.css'
import programmerImage from '../assets/programmerImage.png'

// const AboutMe = () => (
//   <div className='about-me'>
//     <h1 className='about-me__title'>About Me</h1>
//     <div className='about-me__content'>
//       <p>
//         Hey there, I&apos;m Jesvin Jose, and I&apos;m enthusiastic about
//         crafting engaging experiences on the web.
//       </p>
//       <p>
//         Presently, I&apos;m deeply invested in being a MERN stack aficionado,
//         committed to constructing fluid, expandable web applications.
//       </p>
//       <p>
//       I fuel my progress in web development through an insatiable thirst for learning. 
//       </p>
//       <p>
//       Proficient in Node.js, React, JavaScript, Express, HTML, and CSS, I continuously expand my skill set. 
//       </p>
//       <p>
//       I&apos;ve completed two major projects and numerous smaller ones in React, effectively showcasing my abilities.
//       </p>
//     </div>
//   </div>
// )

// export default AboutMe

const AboutMe = () => (
  <div className='about-me'>
    <h1 className='about-me__title'>About Me</h1>
    <div className='about-me__content'>
      <div className="about-me__image-container">
        <img src={programmerImage} alt="Programmer" className="about-me__image" />
      </div>
      <div className="about-me__text">
        <p>
          Hey there, I&apos;m Jesvin Jose, and I&apos;m enthusiastic about
          crafting engaging experiences on the web.
        </p>
        <p>
          Presently, I&apos;m deeply invested in being a MERN stack aficionado,
          committed to constructing fluid, expandable web applications.
        </p>
        <p>
          I fuel my progress in web development through an insatiable thirst for learning.
        </p>
        <p>
          Proficient in Node.js, React, JavaScript, Express, HTML, and CSS, I continuously expand my skill set.
        </p>
        <p>
          I&apos;ve completed two major projects and numerous smaller ones in React, effectively showcasing my abilities.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;