import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold'
  const colors =
    variant === 'primary'
      ? 'bg-violet-500 text-white shadow-sm'
      : 'bg-slate-200 text-slate-950'

  return <span className={`${base} ${colors}`}>{children}</span>
}

export default Badge
