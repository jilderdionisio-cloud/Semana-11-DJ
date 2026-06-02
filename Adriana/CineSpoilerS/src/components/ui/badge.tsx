import * as React from "react"

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent"
}

export function Badge({ children, variant = "default", className = "", ...props }: BadgeProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs font-medium"
  const style =
    variant === "accent"
      ? "bg-amber-500 text-black"
      : "bg-zinc-800 text-zinc-100"

  return (
    <span className={`${base} ${style} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
