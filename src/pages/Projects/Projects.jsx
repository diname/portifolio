import React from 'react'

import Projeto1 from "../../images/projeto1.png"
import Projeto2 from "../../images/projeto2.png"
import Projeto3 from "../../images/projeto3.png"

import './Projects.css'

const Projects = () => {
    return (
      <div>
        <section id="projetos" className="page-projects">
          <h2>My <strong>Projects</strong></h2>
          <p>Here are some of my biggest projects.</p>
          <div className="project-list-1">
            <div className="project">
                <img src={Projeto1} alt="Foto do projeto 1" />
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>
            <div className="project">
                <img src={Projeto2} alt="Foto do projeto 2" />
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>
            <div className="project">
                <img src={Projeto3} alt="Foto do projeto 3"/>
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>

            <div className="project">
                <img src={Projeto1} alt="Foto do projeto 1" />
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>
            <div className="project">
                <img src={Projeto2} alt="Foto do projeto 2" />
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>
            <div className="project">
                <img src={Projeto3} alt="Foto do projeto 3"/>
                <span className='project-description' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nobis voluptate tempora maiores alias minima officia reprehenderit quod consectetur asperiores magni veritatis expedita soluta, quis, optio quisquam hic? Mollitia, ipsa.</span>
            </div>
            
          </div>

        </section>
      </div>
    );
  }
  
  export default Projects;