import React from "react";
import Album from "./Album/Album";
import SpotifyLogo from "../../../Assets/Logos/SpotifyLogo.png";
import AlbumImage1 from "../../../Assets/Albums/Album1.png";
import AlbumImage2 from "../../../Assets/Albums/Album2.png";
import AlbumImage3 from "../../../Assets/Albums/Album3.png";
import "./Albums.scss";

const Albums = () => {
  return (
    <section className="albums">
      <div className="albums_title">
        <h2 className="albums_title_h2">ÁLBUMES QUE REPRESENTAN FRÈRES</h2>
        <img className="albums_title_img" src={SpotifyLogo} alt="Spotify" />
      </div>
      <div className="albums_div">
        <Album
          img={AlbumImage1}
          h3="DIGITAL DRUGLORD"
          link="https://open.spotify.com/album/0a8WSH44kA5hR4MQ6LyFDB"
        />
        <Album
          img={AlbumImage2}
          h3="EVERYTHING MEANS NOTHING"
          link="https://open.spotify.com/album/4UxlLk460BnmQlRV3WiORh"
        />
        <Album
          img={AlbumImage3}
          h3="TICKETS TO MY DOWNFALL"
          link="https://open.spotify.com/album/57lgFncHBYu5E3igZnuCJK"
        />
      </div>
    </section>
  );
};

export default Albums;
