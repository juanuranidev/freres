import React from "react";
import Socials from "../../Socials/Socials";
import Newsletter from "./NewsletterContent/NewsletterContent";
import NewsletterPopupImage from "../../../Assets/NewsletterPopup/NewsletterPopup.png";
import "./ModalNewsletter.scss";

interface ModalNewsletterProps {
  setActiveModal: (boolean: boolean) => void;
}

const ModalNewsletter = ({ setActiveModal }: ModalNewsletterProps) => {
  return (
    <React.Fragment>
      <div className="modal_newsletter">
        <div className="modal_newsletter_div">
          <p
            className="modal_newsletter_div_p"
            onClick={() => setActiveModal(false)}
          >
            CERRAR
          </p>
          <Newsletter />
          <Socials />
        </div>
        <img
          src={NewsletterPopupImage}
          alt="Newsletter"
          className="modal_newsletter_img"
        />
      </div>
    </React.Fragment>
  );
};

export default ModalNewsletter;
