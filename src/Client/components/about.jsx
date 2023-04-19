import React from 'react';
import '../css/about.css';

export default function About() {
  return (
    <div className='contenedor'>

      <div className='columna-superior'>
        <img src="../img/ramas.jpg"/>
      </div>

      <div className='columna-inferior'>
        <div className='title'>
          <h1 >Hi, i'm Lucas!</h1>
        </div>
        <div className='parraf1'>
          <h2>
            I'm a web developer who is always hungry for knowledge and eager to improve. my commitment to continuous learning and passion is what sets me apart in the industry.

            seeking out new skills and knowledge to stay ahead of the curve.

          </h2>
        </div>

        <div className='parraf2'>
          <h2>
            I'm proficient in a variety of programming languages and frameworks, such as:
            HTML, CSS, JavaScript, React. Which allows me to tackle any challenge that comes my way.
            If you're looking for a web developer who is dedicated, passionate, and always pushing the boundaries of what's possible, look no further
          </h2>
        </div>
      </div>

    </div>
  );
}
