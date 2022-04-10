export interface HSButtonProps {
  type?: ButtonVariant;
  state?: ButtonState;
  icon?: React.ReactElement | string;
  link?: string;
  onClick?: () => React.MouseEventHandler | void;
  children?: React.ReactChild | string;
}

export type ButtonVariant = 'outlined' | 'filled';
export type ButtonState = 'success' | 'warning' | 'danger';
