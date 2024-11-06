import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./SelectCategoryButton.scss";

interface SelectCategoryButtonProps {
  text: string;
  href: string;
}

function SelectCategoryButton({ text, href }: SelectCategoryButtonProps) {
  let resolved = useResolvedPath(href);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={href}
      className="select_category_button"
      style={{ opacity: match ? "0.4" : "1" }}
    >
      {text}
    </Link>
  );
}

export default SelectCategoryButton;
