import sltStyles from "../styles/Solutions.module.css";

import Image from "next/image";



const Solutions = () => {
  return (
    <div className={sltStyles.container}>
      <h1 className={sltStyles.title}>Stay private in the Metaverse</h1>

      <div className={sltStyles.imgContainer}>
        <Image src="/ledger.jpg" width={600} height={400} />
      </div>
      <div className={sltStyles.btnContainer}>
        <button className={sltStyles.btnL}>Learn more</button>
        <button  className={sltStyles.btn}>Request key</button> 

      </div>
    </div>
  );
};

export default Solutions;
