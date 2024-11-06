import React, { useEffect, useState } from "react";
import Albums from "./Albums/Albums";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import TopSellers from "./TopSellers/TopSellers";
import Masterpieces from "./Masterpieces/Masterpieces";
import NewsletterPopup from "../../Components/Modals/ModalNewsletter/ModalNewsletter";
import ModalBackground from "../../Components/Modals/ModalBackground/ModalBackground";
import ShortcutsGallery from "./ShortcutsGallery/ShortcutsGallery";

const Main = () => {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    let active: any;
    let confirmation = localStorage.getItem("alreadySuscribed");

    if (!confirmation) {
      active = setTimeout(() => setActiveModal(true), 15000);
    }

    return () => clearInterval(active);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <TopSellers />
      <ShortcutsGallery />
      <Masterpieces />
      <Albums />
      <Slider />
      {activeModal && <NewsletterPopup setActiveModal={setActiveModal} />}
      <ModalBackground open={activeModal} close={() => setActiveModal(false)} />
    </React.Fragment>
  );
};

export default Main;
