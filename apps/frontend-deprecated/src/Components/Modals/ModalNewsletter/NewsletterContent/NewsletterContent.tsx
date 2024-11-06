import React, { useState } from "react";
import { verifyEmail, uploadEmail } from "../../../../Services/newsletter";
import FreresLogo from "../../../../Assets/Logos/FreresLogo.jpg";
import "./NewsletterContent.scss";

const NewsletterContent = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isSuscribed, setIsSuscribed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const handleSubmitUserEmail = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    try {
      const isSuscribed: any = await verifyEmail(userEmail);

      if (!isSuscribed.docs.length) {
        const response = await uploadEmail(userEmail);
        localStorage.setItem("alreadySuscribed", JSON.stringify(true));

        setIsSuscribed(true);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
    setLoader(false);
  };

  if (loader) {
    return (
      <div className="newsletter_content_loader">
        <img
          className="newsletter_content_loader_img"
          src={FreresLogo}
          alt="loader"
        />
      </div>
    );
  }

  return (
    <div className="newsletter_content">
      <h3 className="newsletter_content_h3">ÚNETE A NUESTRA TRIBU</h3>
      <p className="newsletter_content_p">
        SUSCRÍBETE PARA RECIBIR DESCUENTOS, NOVEDADES Y BENEFICIOS EXCLUSIVOS
      </p>
      {isSuscribed ? (
        <div className="newsletter_content_suscribed">
          <p className="newsletter_content_suscribed_p">
            HAS SIDO SUSCRITO A NUESTRO NEWSLETTER
          </p>
        </div>
      ) : (
        <div className="newsletter_content_div">
          <form
            className="newsletter_content_div_form"
            onSubmit={(e: any) => handleSubmitUserEmail(e)}
          >
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={userEmail}
              className="newsletter_content_div_form_input"
              onChange={(e: any) => setUserEmail(e.target.value)}
            />
            <button
              type="submit"
              className={`newsletter_content_div_form_button ${
                !userEmail && "disabled"
              }`}
              disabled={!userEmail}
            >
              UNIRME
            </button>
          </form>
          {errorMessage && !isSuscribed && (
            <p className="newsletter_content_error">
              YA TE ENCUENTRAS SUSCRITO.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsletterContent;
