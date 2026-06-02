import * as React from "react"

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className = "", children, ...props }: CardProps) {
  return (
    <div className={`p-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className = "p-4", children, ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className = "text-lg font-semibold", children, ...props }: CardProps) {
  return (
    <h3 className={`${className} text-white`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className = "text-sm text-zinc-300 mt-1", children, ...props }: CardProps) {
  return (
    <p className={`${className}`} {...props}>
      {children}
    </p>
  )
}

export default Card
