import React from 'react'
import { 
    DiGithubBadge, 
    DiVisualstudio, 
    DiWindows,
    DiTrello
} from "react-icons/di";

import { SiPostman, SiJira, SiNotion, SiVisualstudiocode } from "react-icons/si";
import './Tools.css'

const Tools = () => {
    return ( 
        <div className='my-tools'>
            <h2> 
                <strong className='cor-da-fonte'>
                    Tools 
                </strong>
                I use
            </h2>
            <ul className='tools-list'>
                <li className='tool'>
                    <DiGithubBadge/>
                </li>
                <li className='tool'>
                    <DiVisualstudio/>
                </li>
                <li className='tool'>
                    <DiWindows/>
                </li>
                <li className='tool'>
                    <DiTrello/>
                </li>
                <li className='tool'>
                    <SiPostman/>
                </li>
                <li className='tool'>
                    <SiJira/>
                </li>
                <li className='tool'>
                    <SiNotion/>
                </li>
                <li className='tool'>
                    <SiVisualstudiocode/>
                </li>
            </ul>
        </div>
     );
}
 
export default Tools;