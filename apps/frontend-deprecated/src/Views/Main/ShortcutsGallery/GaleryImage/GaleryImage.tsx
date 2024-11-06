import React from "react";
import "./GaleryImage.scss";

interface GaleryImageProps {
  p: string;
  img: string;
}

const GaleryImage = ({ p, img }: GaleryImageProps) => {
  return (
    <div className="galery_image">
      <div className="galery_image_div" />
      <img src={img} className="galery_image_img" alt="Imágen de galería" />
      <p className="galery_image_p">{p}</p>
    </div>
  );
};

export default GaleryImage;
