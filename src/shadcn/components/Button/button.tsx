import * as React from "react";
import "./button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'destructive' | 'success' | 'warning' | 'secondary' | 'ghost' | 'link' | 'page-number' | 'outline-primary' | 'outline-secondary' | 'outline-black' | 'outline-success' | 'outline-warning' | 'outline-destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  position?: 'alone' | 'middle' | 'left-edge' | 'right-edge';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  position = 'alone',
  children,
  className,
  ...props
}) => {
  // Compose the class names based on props
  const classNames = [
    'button',
    variant,
    `position-${position}`,
    `size-${size}`,
  ].join(' ');


  return (
    <button className={className || classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
