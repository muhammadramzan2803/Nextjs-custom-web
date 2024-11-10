import Image from "next/image";
import "../style/hero.css";


function Hero(){
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
                  </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I am Noureen
                     </h1>
                    <p className="des-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                    <button className="hero-btn">HIRE ME</button>
                </div>
               </div>
        </div>
    )
}
export default Hero