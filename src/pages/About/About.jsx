import React from 'react';

import './About.css';
import Person from '../../images/foto-pc.png'
import Skills from '../../components/Skills/Skills';
import Tools from '../../components/Tools/Tools';

const About = () => {
    return ( 
        <div>
            <section id="sobre" className="page-about">
                <div>
                    <h2>About 
                        <strong className='cor-da-fonte'>
                            me
                        </strong>
                    </h2>
                    <p>
                    Hello, I'm <strong className='cor-da-fonte'>Lucas Medina</strong>, located in <strong className='cor-da-fonte'>Cotia</strong>.
                    <br/><br/>
                    I'm a <strong className='cor-da-fonte'>self-taught</strong> student.
                    </p>
                    <br/>
                    <p>
                    Besides coding, some other activities I love to do
                        <ul>
                            <li>
                                To read
                            </li>
                            <li>
                                Travel
                            </li>
                            <li>
                                Play games
                            </li>
                            <li>
                                Software projects
                            </li>
                            <li>
                                Learn languages
                            </li>
                        </ul>
                    </p>
                    <blockquote className='citac'>
                        “A tecnologia move o mundo”.  — Steve Jobs
                    </blockquote>
                </div>
                <img src={Person} alt="Foto minha programando" />
            </section>
            <Skills/>
            <Tools/>
        </div>
     );
}
 
export default About;