import { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';

export type ButtonVariants =
  | 'transparent'
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'danger';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export const ButtonVariant = {
  basic:
    'bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  transparent: 'transition-all duration-300 ease-in-out',
  primary:
    'bg-blue-500 hover:bg-blue-700 text-white font-normal disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  secondary:
    'bg-indigo-400 hover:bg-indigo-500 text-white font-normal disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
  danger:
    'bg-red-500 hover:bg-red-600 text-white font-normal disabled:opacity-25 inline-flex items-center justify-center transition-all duration-300 ease-in-out',
};

export const ButtonSize = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
};

export interface ButtonProps {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  contentClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    disabled = false,
    children,
    variant = 'transparent',
    size = 'md',
    className,
    contentClassName,
    onClick,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        ButtonVariant[variant],
        ButtonSize[size],
        className,
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          'inline-flex items-center justify-center',
          contentClassName,
        )}
      >
        {children && children}
      </div>
    </button>
  );
};

export default Button;
