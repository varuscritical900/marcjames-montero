import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1 from "../../img/Project1.png";
import Project2 from "../../img/Project2.png";
import EprojectQatar from "../../img/e-project-qatar.jpg";
import FinalProject from "../../img/Final-Project.png";
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
        {/* Heading */}
        <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
               <a href="https://varuscritical900.github.io/" target="_blank"> <img src={Project1} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://travelkode-mini-project-2.vercel.app/" target="_blank"> <img src={Project2} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="https://github.com/itsKT14/facetagram" target="_blank"> <img src={FinalProject} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
            <img src={EprojectQatar} alt="" />
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio