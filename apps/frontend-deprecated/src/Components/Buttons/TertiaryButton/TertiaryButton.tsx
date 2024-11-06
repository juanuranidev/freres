import React from "react";
import "./TertiaryButton.scss";

interface TertiaryButtonProps {
  text: string;
  disabled?: any;
  onClick: () => void;
}

const TertiaryButton = ({ text, disabled, onClick }: TertiaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? "tertiary_button_disabled" : "tertiary_button"}`}
    >
      {text}
    </button>
  );
};

export default TertiaryButton;
