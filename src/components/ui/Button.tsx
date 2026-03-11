import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-amia-pink text-white hover:bg-amia-pink/90 shadow-lg shadow-amia-pink/20 focus:ring-amia-pink',
      secondary: 'bg-amia-dark dark:bg-slate-800 text-white hover:bg-amia-dark/90 dark:hover:bg-slate-700 focus:ring-amia-dark dark:focus:ring-slate-700',
      outline: 'border-2 border-amia-dark dark:border-slate-700 text-amia-dark dark:text-white hover:bg-amia-dark dark:hover:bg-slate-800 hover:text-white dark:hover:text-white focus:ring-amia-dark dark:focus:ring-slate-700',
      ghost: 'bg-transparent hover:bg-amia-light/50 dark:hover:bg-slate-800 text-amia-dark dark:text-white focus:ring-amia-dark dark:focus:ring-slate-700',
    };

    const sizes = {
      sm: 'h-9 px-4 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
