import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import "./navbar.css"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  return (

    <header>


      <motion.nav

        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: "spring", stiffness: 130 }}
        viewport={{ once: true }}

        className="navbar">
        <div className="logo" > <Link to="/">Zelo</Link> </div>
        <div className="navbar_links">
          <Link className={`links ${location.pathname === "/" ? "active-link" : ""}`} to="/">Home</Link>
          <Link className={`links ${location.pathname === "/about" ? "active-link" : ""}`} to="/about">About</Link>

          {location.pathname === "/" && <>
            <a className="links" href="#brand">What is Zelo?</a>


          </>
          }
          <a className="links" href="#footer">Socials</a>

        </div>

        {/* for small sized devices */}
        <div className="navbar_links_menu ">
          {toggle ? <CloseIcon onClick={() => setToggle(false)} /> :
            <MenuIcon onClick={() => setToggle(true)} />
          }

          {toggle && <div className="navbar_menu-box slide-top ">

            <Link onClick={() => setToggle(false)} className={`box-links ${location.pathname === "/" ? "active-link" : ""}`} to="/">Home</Link>
            <Link onClick={() => setToggle(false)} className={`box-links ${location.pathname === "/about" ? "active-link" : ""}`} to="/about">About</Link>
            {location.pathname === "/" && <>
              <a onClick={() => setToggle(false)} className="box-links" href="#brand">What is Zelo?</a>
            </>}
            <a onClick={() => setToggle(false)} className="box-links" href="#footer">Socials</a>
          </div>}
        </div>
      </motion.nav>
    </header>
  )
}

export default Navbar