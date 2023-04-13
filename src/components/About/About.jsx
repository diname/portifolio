import React from 'react';

import './About.css';
// import Person from '../../images/foto-pc.png'
import LM from '../../images/LM-BGBLUE.png'


const About = () => {
    return ( 
        <div>
            <section id="sobre" className="about">
                <div>
                    <h2>A little about 
                        <strong className='cor-da-fonte'>
                            my story
                        </strong>
                    </h2>
                    <p>
                    My love for technology started when I was still little, I saw my father working on his laptop and I wanted to understand how it worked. 
                    <br/><br/>
                    I had an opportunity as a young apprentice at a technology company, where there was the start of my passion for programming.
                    <br/><br/>
                    After discovering my passion, I went after it and graduated in Systems Analysis and Development and in the future I intend to do a postgraduate degree.
                    <br/><br/>
                    I have knowledge in languages ​​such as JavaScript, Python and Node.
                    <br/><br/>
                    The subjects that interest me most are Web and Mobile programming
                    </p>
                </div>
                <img src={LM} alt="I" />
            </section>
        </div>
     );
}
 
export default About;