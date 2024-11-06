import React from "react";
import FreresLogo from "../../Assets/Logos/FreresLogo.jpg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader_img" src={FreresLogo} alt="loader" />
    </div>
  );
};

export default Loader;
