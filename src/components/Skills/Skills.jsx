import React from 'react'
import { 
    DiGit, 
    DiReact, 
    DiNodejsSmall,
    DiJavascript1,
    DiPython,
    DiBootstrap,
    DiMsqlServer,
    DiCss3
} from "react-icons/di";

import { SiNeo4J } from "react-icons/si";
import './Skills.css'

const Skills = () => {
    return ( 
        <div className='my-skills'>
            <h2>My 
                <strong className='cor-da-fonte'>
                    Skills
                </strong>
            </h2>
            <ul className='skills-list'>
                <li className='skill'>
                    <DiGit/>
                </li>
                <li className='skill'>
                    <DiReact/>
                </li>
                <li className='skill'>
                    <DiNodejsSmall/>
                </li>
                <li className='skill'>
                    <DiJavascript1/>
                </li>
                <li className='skill'>
                    <DiPython/>
                </li>
                <li className='skill'>
                    <DiBootstrap/>
                </li>
                <li className='skill'>
                    <DiMsqlServer/>
                </li>
                <li className='skill'>
                    <DiCss3/>
                </li>
                <li className='skill'>
                    <SiNeo4J/>
                </li>
            </ul>
        </div>
     );
}
 
export default Skills;