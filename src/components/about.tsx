
import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function About(){
    return(

        <div className="header-container">
               <div className="header-boxes-con">
                {/* left */}
                  <div>
                  <Image src={"/images/Noureen.jpg"}
                   width={200}
                   height={200}
                   className="header-image"
                  alt="Profile"/> 
                 <div className="social-icon">
                <Link href={""}> <FaYoutube className="s-icon1"/></Link>
                 <Link href={""}> <FaFacebook  className="s-icon2"/></Link>
                 <Link href={""}> <FaInstagram  className="s-icon3"/></Link>
                 </div>
                  </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Me</h1>
                    <p className="des-hero">I am a passionate and dedicated front-end developer with a background in graphic design. I have experience working on various projects, from small to large, and have a strong foundation in HTML, CSS, and JavaScript. I am also proficient in React and Vue.js frameworks. I am currently looking for opportunities to work on new projects and collaborate with other developers.</p>
                    
                </div>
               </div>
        </div>
    )
}
export default About