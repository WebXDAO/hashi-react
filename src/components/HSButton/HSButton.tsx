import React from 'react';
import '../../styles/index.scss';

import { HSButtonProps } from './types';

const HSButton: React.FC<HSButtonProps> = ({
  icon = null,
  type = null,
  state = null,
  link = null,
  onClick,
  children = 'Click Me'
}) => {
  const ButtonBase: React.ReactElement = (
    <>
      {icon && <i className='hs-button__icon'>{icon}</i>}
      {<span className='hs-button__label'>{children}</span>}
    </>
  );

  if (!link || onClick) {
    return (
      <button
        className={`hs-button ${type && 'is-' + type} ${state && 'is-' + state}`}
        onClick={onClick}
        data-testid='test-hs-button-id'
      >
        {ButtonBase}
      </button>
    );
  } else {
    const isLinkExternal: boolean = link.charAt(0) !== '/' || link.charAt(0) !== '#';
    return (
      <a
        href={link}
        className={`hs-button ${type && 'is-' + type} ${state && 'is-' + state}`}
        target={isLinkExternal ? '_blank' : '_self'}
      >
        {ButtonBase}
      </a>
    );
  }
};

export default HSButton;
