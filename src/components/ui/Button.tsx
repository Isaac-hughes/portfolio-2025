interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Readonly<ButtonProps>) {
  const baseStyles = "rounded-full transition-colors font-medium";

  const variants = {
    primary: "bg-accent-primary text-background hover:bg-opacity-90",
    secondary: "bg-accent-secondary text-background hover:bg-opacity-90",
    outline: "border border-foreground/20 hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
