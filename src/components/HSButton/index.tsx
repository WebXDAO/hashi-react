import React from 'react';

interface HSButtonProps {
  label?: string;
  icon?: React.ReactElement | string;
  type?: string;
  link?: string;
  onClick?: () => React.MouseEventHandler | void;
}

type ButtonVariant = 'outlined' | 'filled' | 'success' | 'warning' | 'danger';

const HSButton: React.FC<HSButtonProps> = ({
  label,
  icon,
  type,
  link,
  onClick,
  children
}) => {

  const VALID_BUTTON_TYPES: ButtonVariant[] = [
    'outlined',
    'filled',
    'success',
    'warning',
    'danger'
  ];

  const assertType = (type: string): string => {
    type.split(' ').forEach((type) => {
      if (!VALID_BUTTON_TYPES.includes(type as ButtonVariant)) throw new Error(`Invalid type ${ type }. Please use one of the following valid types: ${ VALID_BUTTON_TYPES.join(', ') }.`);
    });
    const finalTypes: string[] = [];
    type.split(' ').forEach((type) => {
      finalTypes.push('is-' + type);
    });
    return finalTypes.join(' ');
  };

  const ButtonBase: React.ReactElement = (
    <>
      { icon && <i className="hs-button__icon">{ icon }</i> }
      { label || children && <span className="hs-button__label">{ label }</span> }
    </>
  );

  if (!link || onClick) {
    return (
      <button
        className={ `hs-button${ type && ' ' + assertType(type) }` }
        onClick={ onClick }
      >
        { ButtonBase }
      </button>
    );
  } else {
    const isLinkExternal: boolean = link.charAt(0) !== '/' || link.charAt(0) !== '#';
    return (
      <a
        href={ link }
        className={ `hs-button${ type && ' ' + assertType(type) }` }
        target={ isLinkExternal ? '_blank' : '_self' }
      >
        { ButtonBase }
      </a>
    );
  }
};

export default HSButton;