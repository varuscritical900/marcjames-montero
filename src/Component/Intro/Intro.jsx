import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import ProfilePicture from "../../img/ProfilePicture.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
const Intro = () => {

    const transition ={duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        window.location.href = "https://www.facebook.com/marcmontero07";
      }

  return (
    <div className='intro' id="Intro">
        <div className='i-left'>
            <div className="i-name">
                <span style={{color: darkMode? 'white':''}}>Hiya! I am</span>
                <span>Marc James Montero</span>
                <span>From front-end finesse to back-end brilliance, I'm a full-stack developer ready to code my way to the top <br/>with React, Node.js, Express, MongoDB, PHP, Laravel, Bootstrap, HTML, CSS, Javascript, and C#.</span>
            </div>

            <button className='button i-button' onClick={handleClick}>Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/varuscritical900" target="_blank"><img src={Github} alt=""/></a>
                <a href="https://www.linkedin.com/in/marc-james-montero-853119172/" target="_blank"><img src={LinkedIn} alt=""/></a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={ProfilePicture} alt="" style={{width:250, height:350, borderRadius: 50, opacity:0.9}}/>
            <motion.img 
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji} 
            alt="" />

            <motion.div 
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div 
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
            style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Awesome' txt2='Website Layouts'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{backgroundColor: "rgb(238 210 255)"}}></div>
            <div className="blur" 
            style={{
                backgroundColor: '#C1F5FF',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left:'-9rem'}}>

            </div>
        </div>
    </div>
  )
}

export default Intro