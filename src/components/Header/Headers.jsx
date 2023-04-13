import { Link } from "react-router-dom";
import { 
  AiOutlineHome, 
  AiOutlineFundProjectionScreen, 
  AiOutlineUser, } 
  from "react-icons/ai";

import './Header.css'

const Headers = () => {

  return (
    <div>
      <nav className="nav">
        <div 
        className="logo" 
        style={{ fontWeight: 800, fontSize: 35, color: "#2D82B7" }}>
          <Link to="/" style={{ textDecoration: 'none' }} >LM</Link> 
        </div>

        <ul className="nav-list">
            <li>
                <Link to="/" > 
                <AiOutlineHome/> Home 
                </Link>
            </li>
            <li>
                <Link to="/about" > 
                <AiOutlineUser/> About 
                </Link>
            </li>
            <li>
                <Link to="/projects" > 
                <AiOutlineFundProjectionScreen/> Projects 
                </Link>
            </li>
        </ul>
    </nav>
    </div>
  );
};

export default Headers;
