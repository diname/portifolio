import React from 'react';


// import FundoFooter from "../../images/waves-footer.svg"
// import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram } from "react-icons/sl"

import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer >
          <h3> 
            <p className='logo' >Lucas Medina</p>
          </h3>
          <p>© 2023 All rights reserved</p>

          <div className='footer-icons'>
            <ul className='icons'>
              <li >
                <a className='linkedin'
                href='https://www.linkedin.com/in/lucasrmedina/' 
                target="_blank"
                rel="noopener noreferrer"> 
                <SlSocialLinkedin /> 
                </a> 
              </li>

              <li >
                <a className='github'
                href='https://github.com/diname' 
                target="_blank"
                rel="noopener noreferrer"> 
                <SlSocialGithub /> 
                </a> 
              </li>

              <li >
                <a className='instagram'
                href='https://www.instagram.com/meedinaa_7/' 
                target="_blank"
                rel="noopener noreferrer" > 
                <SlSocialInstagram /> 
                </a> 
              </li>
            </ul>
            {/* <BsInstagram /> */}
          </div>
      </footer>
    </div>
  );
}

export default Footer;