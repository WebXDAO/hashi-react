export interface HSButtonProps {
  label: string;
  type?: ButtonVariant;
  color?: ButtonColor;
  icon?: React.ReactElement | string;
  link?: string;
  onClick?: () => React.MouseEventHandler | void;
  children?: React.ComponentType;
}

export type ButtonVariant = 'outlined' | 'filled';
export type ButtonColor = 'success' | 'warning' | 'danger';
