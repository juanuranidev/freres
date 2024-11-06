import React from "react";
import { Link } from "react-router-dom";
import ImageLink from "../ImageLink/ImageLink";
import StreetOutfit from "../../../Assets/Images/StreetOutfit.jpg";
import CasualOutfit from "../../../Assets/Images/CasualOutfit.jpg";
import "./OutfitsLink.scss";

const OutfitsLink = () => {
  return (
    <div className="outfitsLink">
      <Link to="/essential_outfits" className="outfitsLink_a">
        <li className="outfitsLink_a_li">ESSENTIAL OUTFITS</li>
      </Link>
      <div className="outfitsLink_content">
        <ImageLink
          outfit
          src={StreetOutfit}
          alt="Outfit imágen"
          link="/outfit/street"
        />
        <ImageLink
          outfit
          src={CasualOutfit}
          alt="Outfit imágen"
          link="/outfit/casual"
        />
      </div>
    </div>
  );
};

export default OutfitsLink;
