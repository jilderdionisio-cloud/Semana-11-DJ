import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success'
  className?: string
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const base =
    'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium shadow-sm'
  const variants = {
    primary: 'border-rose-200 bg-rose-50 text-rose-700',
    secondary: 'border-stone-200 bg-white text-stone-700',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  }

  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>
}

export default Badge
