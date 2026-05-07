import { FC, ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: number;
}

const StatCard: FC<StatCardProps> = ({ icon, label, value, trend }) => {
  return (
    <div className="border border-white/10 rounded-xl bg-slate-900 p-4">
      <div className="flex items-center">
        <div className="mr-4 text-brand-accent">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold">{value}</div>
          <div className="text-slate-400">{label}</div>
        </div>
        {trend !== undefined && (
          <div className={`text-sm font-bold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
