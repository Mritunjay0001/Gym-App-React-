import React from "react";
import Header from "./Header/Header";
import './Hero.css';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import {motion} from 'framer-motion';


const Hero =()=>{
    const transition ={type:'spring',duration: 3}
    const mobile=window.innerWidth<=768 ? true:false;
    return (
        <div className="hero" id="home">

            <div className="blur hero-blur"></div>
         
         <div className="left-h">
            <Header/>
         {/* //add wala section */}
         <div className="the-best-add">
            <motion.div 
            initial={{left:mobile ? '178px' : '238'}}
            whileInView={{left: '8px'}}
            transition={transition}
            ></motion.div> 
            <span>the best fitness club in the town</span>
         </div>

         {/* Headings  */}
         <div className="hero-text">
            <div>
                <span className="stroke-text">Shape </span>
                <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                    </div>
                    <div>
                        <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
                        </div>
         </div>

         {/* experiwnce figure  */}

         <div className="figures">
            <div>
                <span>+150</span>
                <span>expert coachs</span>
                </div>
            <div>
                <span>+952</span>
            <span>members joined</span>
            </div>
            <div>
                <span>+54</span>
            <span>fitness programs</span>
            </div>
         </div>

         {/* started wala button  */}

         <div className="hero-btn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
            </div>

         </div>
         <div className="right-h">
          <button className="btn">Join Now</button>


          <motion.div 
           initial={{right: '-1rem'}}
           whileInView={{right: '4rem'}}
           transition={transition}
          className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
          </motion.div>

          {/* hero wala img  */}

          <img src={hero_image} alt="" className="hero_image"/>
          <img src={hero_image_back} alt="" className="hero_image_back"/>

          {/* calories wala box  */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
               
            </div>
            </div>

        </div>
    )
}

export default Hero;