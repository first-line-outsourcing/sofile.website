import { cn } from "@/lib/utils"

export type GlassCardVariant = "blue" | "purple"

export function GlassCard({
  children,
  variant = "blue",
  className,
  ...props
}: React.ComponentProps<"article"> & {
  variant?: GlassCardVariant
}) {
  return (
    <article
      className={cn(
        "sofile-glass-card",
        variant === "blue" && "sofile-glass-card-blue",
        variant === "purple" && "sofile-glass-card-purple",
        className
      )}
      {...props}
    >
      <div className="sofile-glass-card__content">{children}</div>
    </article>
  )
}
