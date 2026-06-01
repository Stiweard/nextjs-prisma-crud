import Link from "next/link";
import { IconSpinner } from "@/components/icons";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-500 shadow-sm shadow-blue-900/30",
  secondary:
    "bg-surface-overlay text-slate-200 ring-1 ring-surface-border hover:bg-surface-raised",
  danger:
    "bg-red-600/90 text-white hover:bg-red-500 shadow-sm shadow-red-900/20",
  ghost:
    "text-slate-400 hover:bg-surface-overlay hover:text-slate-200",
};

const sizes = {
  sm: "h-9 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-11 px-5 text-sm gap-2",
};

export function buttonClassName({ variant = "primary", size = "md", className = "" }) {
  return [
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled,
  type = "button",
  href,
  ...props
}) {
  const classes = buttonClassName({ variant, size, className });
  const content = (
    <>
      {loading ? <IconSpinner className="h-4 w-4" /> : null}
      {children}
    </>
  );

  if (href) {
    const isDisabled = disabled || loading;
    return (
      <Link
        href={href}
        className={[classes, isDisabled ? "pointer-events-none opacity-50" : ""].join(" ")}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : undefined}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled || loading} className={classes} {...props}>
      {content}
    </button>
  );
}
