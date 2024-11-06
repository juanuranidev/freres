import React from "react";
import { Link } from "react-router-dom";
import "./ImageLink.scss";

interface ImageLinkProps {
  link: string;
  src: string;
  alt: string;
  p?: string;
  outfit?: boolean;
}

const ImageLink = ({ link, src, alt, p, outfit }: ImageLinkProps) => {
  return (
    <Link to={link} className="image_link">
      <img
        className={`${
          outfit ? "image_link_img outfit_image" : "image_link_img"
        }`}
        src={src}
        alt={alt}
      />
      <p className="image_link_p">{p}</p>
    </Link>
  );
};

export default ImageLink;
