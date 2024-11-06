import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SelectCategoryButton from "./SelectCategoryButton/SelectCategoryButton";
import "./CategoryButtons.scss";

const CategoryButtons = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="category_buttons">
      <div className="category_buttons_div">
        <SelectCategoryButton href="/shop/all" text="TODOS LOS PRODUCTOS" />
        <div className="category_buttons_div_links">
          <SelectCategoryButton
            href="/shop/camperasybuzos"
            text="CAMPERAS Y BUZOS"
          />
          <SelectCategoryButton href="/shop/remeras" text="REMERAS" />
          <SelectCategoryButton href="/shop/pantalones" text="PANTALONES" />
          <SelectCategoryButton href="/shop/calzado" text="CALZADO" />
          <SelectCategoryButton href="/shop/accesorios" text="ACCESORIOS" />
        </div>
      </div>
      <div
        className="category_buttons_responsive_button"
        onClick={() => setShowCategories(!showCategories)}
      >
        <p className="category_buttons_responsive_button_p">CATEGORÍAS</p>
        <span className="fas fa-angle-down category_buttons_responsive_button_span" />
      </div>
      <AnimatePresence>
        {showCategories && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5%" }}
            initial={{ opacity: 0, y: "-5%" }}
            transition={{ type: "linear", stiffness: 100 }}
            className="category_buttons_responsive_links"
          >
            <SelectCategoryButton href="/shop/all" text="TODOS LOS PRODUCTOS" />
            <SelectCategoryButton
              href="/shop/camperasybuzos"
              text="CAMPERAS Y BUZOS"
            />
            <SelectCategoryButton href="/shop/remeras" text="REMERAS" />
            <SelectCategoryButton href="/shop/pantalones" text="PANTALONES" />
            <SelectCategoryButton href="/shop/calzado" text="CALZADO" />
            <SelectCategoryButton href="/shop/accesorios" text="ACCESORIOS" />
            <SelectCategoryButton href="/shop/all" text="ACCESORIOS" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryButtons;
