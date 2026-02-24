import type { JSX } from 'react'

type ButtonProps = {
  variant?: 'contained' | 'outlined' | 'text'
  colors?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonBaseStyle = 'rounded-3xl'

const variants = {
  contained: {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
  },
  outlined: {
    primary: 'text-primary-500 border border-primary-500',
    secondary: 'text-secondary-500 border border-secondary-500',
  },
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-900',
  },
}

const sizes = {
  sm: 'px-4 py-1 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-8 py-3 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  className = '',
  colors = 'primary',
  size = 'md',
  children,
  ...props
}): JSX.Element => {
  return (
    <button
      className={`${buttonBaseStyle} ${variants[variant][colors]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
