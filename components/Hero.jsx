import heroStyles from "../styles/Hero.module.css";

import Image from "next/image";


const Hero = () => {
  return (
    <div className={heroStyles.display}>
              <div className={heroStyles.contentWrap}>
      <h1 className={heroStyles.title}>Web3 Security solutions </h1>
      <div className={heroStyles.container}></div>
     
      </div>
    </div>
    

   
  );
};

export default Hero;
