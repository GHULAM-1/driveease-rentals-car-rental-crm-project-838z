import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Car Rental CRM - DriveEase Rentals',
  description: 'Manage your car rental operations effectively with DriveEase Rentals CRM.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 font-sans">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 px-8 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
