import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ShopLink from "./ShopLink/ShopLink";
import FreresLogo from "../../Assets/Logos/FreresLogo.jpg";
import OutfitsLink from "./OutfitsLink/OutfitsLink";
import CartContent from "./CartContent/CartContent";
import MenuResponsive from "./MenuResponsive/MenuResponsive";
import ModalBackground from "../../Components/Modals/ModalBackground/ModalBackground";
import "./Navbar.scss";

const Navbar = () => {
  const { cartList, openCart, handleOpenCart, handleCloseCart } =
    useContext(CartContext);

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleCloseMenuResponsive = () => {
    setOpenMenu(false);
    handleCloseCart!();
  };

  return (
    <nav className="nav">
      <div className="nav_openMenu">
        <span
          className="fas fa-bars fa-2x nav_openMenu_span"
          onClick={() => setOpenMenu(true)}
        />
      </div>
      <ul className="nav_ul">
        <ShopLink />
        <OutfitsLink />
        <Link to="/about" className="nav_ul_a">
          <li className="nav_ul_a_li">NOSOTROS</li>
        </Link>
      </ul>
      <Link to="/">
        <img src={FreresLogo} className="nav_logo" alt="logo" />
      </Link>
      <ul className="nav_second_ul">
        <Link to="/build-your-outfit" className="nav_second_ul_a">
          ARMA TU OUTFIT
        </Link>
        <p onClick={handleOpenCart} className="nav_second_ul_p">
          CARRITO ({cartList.length ?? 0})
        </p>
      </ul>
      <CartContent />
      <ModalBackground
        open={openMenu || openCart}
        close={handleCloseMenuResponsive}
      />
      <MenuResponsive
        handleCloseMenuResponsive={handleCloseMenuResponsive}
        openMenu={openMenu}
      />
    </nav>
  );
};

export default Navbar;
