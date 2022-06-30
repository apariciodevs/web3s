import gridStyles from "../styles/Grid.module.css";

import Image from "next/image";

const Grid = () => {
  return (
    <div className={gridStyles.gridContainer}>
      <h1 className={gridStyles.title}>Store your NFTs in our vault</h1>
      <div className={gridStyles.grid}>
        <div className={gridStyles.imgContainer}>
          {" "}
          <Image
            src="/1.jpg"
            width={220}
            height={300}
            alt="nft example"
          ></Image>
        </div>
        <div className={gridStyles.imgContainer}>
          <Image
            className={gridStyles.img}
            src="/2.jpg"
            width={220}
            height={300}
            alt="nft example"
          ></Image>
        </div>
        <div className={gridStyles.imgContainer}>
          <Image
            src="/3.jpg"
            width={220}
            height={300}
            alt="nft example"
          ></Image>
        </div>
        <div className={gridStyles.imgContainer}>
          <Image
            src="/4.jpg"
            width={220}
            height={300}
            alt="nft example"
          ></Image>
        </div>
      </div>
      <div className={gridStyles.textWrap}>
        <p className={gridStyles.text}>
          Keep your digital assets safe in our vault. We provide unlimited
          storage assuring high security standards that exchanges cannot give
          you. Sign up and Enjoy member perks such as up to 5% interest rate
          return on your NFTs and private events.{" "}
        </p>
      </div>
    </div>
  );
};

export default Grid;
