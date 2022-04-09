import React from 'react';
import '../../styles/index.scss';

import { ButtonVariant, HSButtonProps } from './types';

const HSButton: React.FC<HSButtonProps> = ({
  label = 'Click Me!',
  icon,
  type = null,
  color = null,
  link,
  onClick,
  children
}) => {
  const ButtonBase: React.ReactElement = (
    <>
      {icon && <i className='hs-button__icon'>{icon}</i>}
      {label || (children && <span className='hs-button__label'>{label}</span>)}
    </>
  );

  if (!link || onClick) {
    return (
      <button
        className={`hs-button ${type && 'is-' + type} ${color && 'is-' + color}`}
        onClick={onClick}
      >
        {ButtonBase}
      </button>
    );
  } else {
    const isLinkExternal: boolean = link.charAt(0) !== '/' || link.charAt(0) !== '#';
    return (
      <a
        href={link}
        className={`hs-button ${type && 'is-' + type} ${color && 'is-' + color}`}
        target={isLinkExternal ? '_blank' : '_self'}
      >
        {ButtonBase}
      </a>
    );
  }
};

export default HSButton;
