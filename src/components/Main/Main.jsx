import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect'

import WorkMan from '../../images/workspace-man.png'
import './Main.css'

const Main = () => {
  return (
    <div>
      <section id="home" className="main">
        <div>
            <h1>Hello, 
            <br/> I'm 
            <strong className='cor-da-fonte'>
              Lucas Medina
            </strong>
            </h1>
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

        <div>
          <img src={WorkMan} alt="Workspace Man" />
        </div>
      </section>
    </div>
  );
};

export default Main;