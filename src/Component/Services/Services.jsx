import React, {useContext} from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Marc Curriculum Vitae.pdf';
import { themeContext } from "../../Context";
import {motion} from 'framer-motion'
import { Link } from 'react'

const Services = () => {

    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    // transition
    const transition = {
        duration: 1,
        type: "spring",
      };
    return (

        <div className="services" id='Services'>
            {/*left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>services</span>
                <span>
                As a full-stack developer with expertise in React, Node.js, Express, MongoDB, PHP, <br/> Laravel, Bootstrap, HTML, CSS, Javascript, and C#, I offer a range of <br/>comprehensive services to help you build robust and dynamic web applications.
                </span>
                <a href={Resume} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/*right side */}
            <div className="cards">
                {/*First Card */}
                <motion.div 
                initial={{ left: "25rem" }}
                whileInView={{ left: "14rem" }}
                transition={transition}
                style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>
                {/*Second Card */}
                <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML5, CSS, Javascript, React, MonggoDB, Node JS, Express"}
                    />
                </motion.div>
                {/*Third Card */}
                <motion.div 
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition}
                style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'Backend'}
                        detail={"As a backend developer, I'm resposible for designing and maintaining a server-side web application."}
                    />
                </motion.div>
                <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>

            </div>
        </div>
    )
}

export default Services