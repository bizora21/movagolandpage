import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      fullWidth = false,
      target,
      rel,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A]';
    
    const variants = {
      primary: 'bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary-dark))] focus:ring-[rgb(var(--color-primary))]',
      secondary: 'bg-[rgb(var(--color-secondary))] text-white hover:bg-slate-700 focus:ring-slate-500',
      outline: 'border-2 border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white focus:ring-[rgb(var(--color-primary))]',
      ghost: 'text-[rgb(var(--color-text-muted))] hover:text-white hover:bg-[rgb(var(--color-secondary))]',
    };
    
    const sizes = {
      sm: 'px-4 py-3 text-sm min-h-[44px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-lg min-h-[48px]',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';