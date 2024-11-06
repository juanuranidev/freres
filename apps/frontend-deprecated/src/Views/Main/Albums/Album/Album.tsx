import React from "react";
import "./Album.scss";

interface AlbumProps {
  img: string;
  h3: string;
  link: string;
}

const Album = ({ img, h3, link }: AlbumProps) => {
  return (
    <div className="album">
      <img className="album_img" src={img} alt={`Album ${h3}`} />
      <div className="album_div">
        <h3 className="album_div_h3">{h3}</h3>
        <a className="album_div_a" href={link} target="_blank" rel="noreferrer">
          <button className="album_div_a_button">PLAY</button>
        </a>
      </div>
    </div>
  );
};

export default Album;
