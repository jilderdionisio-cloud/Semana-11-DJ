import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = 'px-4 py-2 rounded-md font-medium focus:outline-none'
  const variantClass =
    variant === 'primary' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-transparent text-inherit'

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
