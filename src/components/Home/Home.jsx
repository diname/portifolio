import React from 'react'

import About from '../About/About';
import Main from '../Main/Main';

const Home = () => {
    return ( 
        <div >
            <Main/>
            <About/>
            <a 
            style={{
            backgroundImage: "url(https://i.ibb.co/RvTJC4r/whatsapp.png)",
            borderRadius: "34px",
            width: "60px",
            fontSize: "0", 
            height: "60px",
            position: "fixed",
            right: "10px",
            zIndex: "999",
            display: "block",
            bottom: "10px",
            backgroundSize: "73%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#1bd741",
            backgroundPosition: "center"
            }}

            target="_blank" 
            rel="noopener noreferrer"  
            href="https://wa.me/5511952301201?text=Ol%C3%A1">
                link whatsapp
            </a>
        </div>
     );
}
 
export default Home;