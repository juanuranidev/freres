import React from 'react';
import { Link } from 'react-router-dom';
import './MenuResponsiveSublink.scss';

interface MenuResponsiveLinkProps{
  link: string;
  onClick: () => void;
  src: string; 
  alt: string;
  boxShadow: boolean;
  text: string;
}

const MenuResponsiveLink = ({link, onClick, src, alt, boxShadow, text}:MenuResponsiveLinkProps) => {
  return (
    <Link to={link} className="MenuResponsiveLink" onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className={`MenuResponsiveLink_img ${boxShadow && 'boxShadow'}`}/>
      <p className="MenuResponsiveLink_p">{text}</p>
    </Link>
  )
}

export default MenuResponsiveLink