import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info/Info";
import NewsletterContent from "../../Components/Modals/ModalNewsletter/NewsletterContent/NewsletterContent";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_div">
        <Info />
        <NewsletterContent />
      </div>
      <div className="footer_brand">
        <p className="footer_brand_p">
          Made with <span className="fa fa-heart footer_brand_p_span" /> by{" "}
          <a
            href="https://juanurani.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer_brand_p_a"
          >
            Juan
          </a>
        </p>
      </div>
      <div className="footer_brand_div">
        <p className="footer_brand_div_p">
          <Link to="/secret" className="footer_brand_div_p_a">
            ©
          </Link>{" "}
          2021 FRÈRES.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
