import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900",
        gradient: "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:brightness-110",
        outline: "border-2 border-slate-200 bg-transparent hover:border-primary/50 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-white/5",
        ghost: "bg-transparent hover:bg-primary/10 text-slate-700 dark:text-slate-300 hover:text-primary",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
