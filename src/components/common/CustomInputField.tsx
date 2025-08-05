import { useState, InputHTMLAttributes } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const CustomInputField = ({
  label,
  type = 'text',
  error,
  helperText,
  className,
  ...fieldProps
}: CustomInputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="grid gap-1.5">
      {label && <Label htmlFor={fieldProps.id || fieldProps.name}>{label}</Label>}
      <div className="relative">
        <Input
          {...fieldProps}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          className={cn(
            className,
            error ? 'border-red-500 focus-visible:ring-red-500' : ' placeholder:text-xs'
          )}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {helperText && (
        <p
          className={cn(
            'text-xs',
            error ? 'text-red-500' : 'text-muted-foreground'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default CustomInputField;