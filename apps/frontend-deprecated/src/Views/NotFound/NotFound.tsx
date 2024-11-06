import React from "react";
import SecondaryButton from "../../Components/Buttons/SecondaryButton/SecondaryButton";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <section className="not_found">
      <div className="not_found_div">
        <h2 className="not_found_div_h2">404</h2>
        <h2 className="not_found_div_h2">
          LO SIENTO FRERER, PAGINA NO ENCONTRADA.
        </h2>
        <SecondaryButton
          text="VOLVER AL INICIO"
          link="/"
          onClick={() => null}
        />
      </div>
    </section>
  );
};

export default NotFound;
