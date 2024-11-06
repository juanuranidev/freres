import React from "react";
import Header1 from "../../../../Assets/Header/Header1.jpg";
import Header2 from "../../../../Assets/Header/Header2.jpg";
import "./MainImages.scss";

const MainImages = () => {
  return (
    <div className="main_images">
      <h1 className="main_images_h1">Frères</h1>
      <img className="main_images_img" src={Header1} alt="Imágen principal" />
      <img className="main_images_img" src={Header2} alt="Imágen principal" />
      <div className="left" />
      <div className="right" />
    </div>
  );
};

export default MainImages;
