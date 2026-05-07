"use client";

import { usePathname } from 'next/navigation';
import { Home, Car, Calendar, UserCheck, DollarSign } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Fleet', href: '/fleet', icon: Car },
    { name: 'Bookings', href: '/bookings', icon: Calendar },
    { name: 'Customers', href: '/customers', icon: UserCheck },
    { name: 'Payments', href: '/payments', icon: DollarSign }
  ];

  return (
    <aside className="w-60 bg-slate-900 border-r border-white/10">
      <div className="p-4">
        <h1 className="text-lg font-bold">DriveEase Rentals</h1>
        <h2 className="text-sm text-slate-400">Car Rental CRM Project</h2>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`flex items-center p-3 text-sm hover:bg-slate-800 rounded-lg ${pathname === item.href ? 'bg-slate-800' : ''}`}
              >
                <item.icon className="w-5 h-5 mr-3 text-slate-400" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
