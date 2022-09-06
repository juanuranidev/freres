import React from 'react';
import './TertiaryButton.scss';

interface TertiaryButtonProps {
    text: string;
    disabled?: any;
    onClick: () => void;
}

const TertiaryButton = ({text, disabled, onClick}: TertiaryButtonProps) => {
  return (
    <button onClick={onClick} className={`${disabled ? 'tertiaryButton_disabled' : 'tertiaryButton'}`} disabled={disabled} >{text}</button>
  );
};

export default TertiaryButton;