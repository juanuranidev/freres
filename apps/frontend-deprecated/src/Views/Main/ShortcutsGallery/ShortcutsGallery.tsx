import React from "react";
import { Link } from "react-router-dom";
import GaleryImage from "./GaleryImage/GaleryImage";
import ShorcutsGallery1 from "../../../Assets/ShorcutsGallery/ShorcutsGallery1.png";
import ShorcutsGallery2 from "../../../Assets/ShorcutsGallery/ShorcutsGallery2.png";
import ShorcutsGallery3 from "../../../Assets/ShorcutsGallery/ShorcutsGallery3.png";
import "./ShortcutsGallery.scss";

const ShortcutsGallery = () => {
  return (
    <section className="shortcuts_gallery">
      <Link className="shortcuts_gallery_a" to="/essential_outfits">
        <GaleryImage p="OUTFITS" img={ShorcutsGallery1} />
      </Link>
      <Link className="shortcuts_gallery_a" to="/shop/camperasybuzos">
        <GaleryImage p="CAMPERAS Y BUZOS" img={ShorcutsGallery2} />
      </Link>
      <Link className="shortcuts_gallery_a" to="/shop/all">
        <GaleryImage p="TODOS LOS PRODUCTOS" img={ShorcutsGallery3} />
      </Link>
    </section>
  );
};

export default ShortcutsGallery;
