import React from 'react';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';

import './Main.css'

const Main = () => {
  return (
    <div>
      <section id="home" className="main">
        <div>
            <h1>Hello, 
            <br/> I'm Lucas Medina!</h1>
            <p>
              <Typewriter
              options={{
                strings: ['Software Developer', 'Web Developer', 'Student'],
                autoStart: true,
                loop: true,
                deleteSpeed: 60,
              }}/>
            </p>

            <Link className="call-to-action" to="/projects" > Veja meus projetos </Link>
        </div>
      </section>
    </div>
  );
};

export default Main;