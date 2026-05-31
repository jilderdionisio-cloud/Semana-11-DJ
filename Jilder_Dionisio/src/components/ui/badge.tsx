import React from 'react'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold'
  const colors =
    variant === 'primary'
      ? 'bg-violet-500/15 text-violet-100 border border-violet-300/20'
      : 'bg-white/5 text-slate-100 border border-white/10'

  return <span className={`${base} ${colors}`}>{children}</span>
}

export default Badge
