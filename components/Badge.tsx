import { FC } from 'react';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'default';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  danger: 'bg-red-500 text-white',
  info: 'bg-blue-500 text-white',
  default: 'bg-slate-700 text-slate-100',
};

const Badge: FC<BadgeProps> = ({ variant, children }) => {
  return (
    <span className={`px-2 py-1 rounded text-xs font-bold ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
