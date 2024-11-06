import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Images } from "./ImportImages";
import { Link } from "react-router-dom";
import MenuResponsiveSublink from "./MenuResponsiveSublink/MenuResponsiveSublink";
import "./MenuResponsive.scss";

interface MenuResponsiveProps {
  handleCloseMenuResponsive: () => void;
  openMenu: boolean;
}

const MenuResponsive = ({
  handleCloseMenuResponsive,
  openMenu,
}: MenuResponsiveProps) => {
  const [showShop, setShowShop] = useState<boolean>(false);

  useEffect(() => {
    setShowShop(false);
  }, [openMenu]);

  return (
    <div className={openMenu ? "menuResponsive" : "menuResponsive menuClose"}>
      <div>
        <div className="menuResponsive_close">
          <div className="menuResponsive_close_div">
            <div onClick={handleCloseMenuResponsive} />
          </div>
        </div>
        <ul className="menuResponsive_ul">
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/shop/all"
              onClick={handleCloseMenuResponsive}
            >
              SHOP
            </Link>
            <span
              className={`fas fa-angle-${
                showShop ? "down" : "right"
              } menuResponsive_ul_li_span`}
              onClick={() => setShowShop(!showShop)}
            />
          </li>
          <AnimatePresence>
            {showShop && (
              <motion.div
                initial={{ opacity: 0, y: "-5%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-5%" }}
                transition={{ type: "linear" }}
                className="animated_div"
              >
                <MenuResponsiveSublink
                  link="/shop/camperasybuzos/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684813195/HOODIE_BRUN_CLAIR1_untmvb.webp"
                  alt="CAMPERAS Y BUZOS"
                  boxShadow={false}
                  text="CAMPERAS Y BUZOS"
                />
                <MenuResponsiveSublink
                  link="/shop/remeras/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684731827/Remera_Oversized_Brun1_iuid2l.webp"
                  alt="REMERAS"
                  boxShadow={false}
                  text="REMERAS"
                />
                <MenuResponsiveSublink
                  link="/shop/pantalones/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1682293947/Freres/Jean_Regular_Celeste_Con_Roturas1_o4i5sz.jpg"
                  alt="PANTALONES"
                  boxShadow={false}
                  text="PANTALONES"
                />
                <MenuResponsiveSublink
                  link="/shop/calzado/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684889419/BORCEGOS_NOIR2_bf9nwd.webp"
                  alt="CALZADO"
                  boxShadow={false}
                  text="CALZADO"
                />
                <MenuResponsiveSublink
                  link="/shop/accesorios/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684899712/GORRA_NOIR1_t5bvxy.webp"
                  alt="ACCESORIOS"
                  boxShadow={false}
                  text="ACCESORIOS"
                />
                <MenuResponsiveSublink
                  link="/shop/all/"
                  onClick={handleCloseMenuResponsive}
                  src="https://res.cloudinary.com/dhodvztdx/image/upload/v1684897143/SCENT_250_ML1_rs4tp9.webp"
                  alt="TODOS LOS PRODUCTOS"
                  boxShadow={false}
                  text="TODOS LOS PRODUCTOS"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/essential_outfits"
              onClick={handleCloseMenuResponsive}
            >
              ESSENTIAL OUTFITS
            </Link>
          </li>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/about"
              onClick={handleCloseMenuResponsive}
            >
              NOSOTROS
            </Link>
          </li>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/build-your-outfit"
              onClick={handleCloseMenuResponsive}
            >
              ARMA TU OUTFIT
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuResponsive_images">
        {Images.map((img: string, index: number) => (
          <img
            className="menuResponsive_images_img"
            key={index}
            src={img}
            alt="Imágen decorativa de prenda"
          />
        ))}
      </div>
    </div>
  );
};

export default MenuResponsive;
