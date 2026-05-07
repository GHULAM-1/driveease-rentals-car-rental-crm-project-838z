import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import Badge from '@/components/Badge';
import { cars, bookings, customers } from '@/lib/mockData';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-950 text-white p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">DriveEase Rentals</h1>
          <p className="text-lg text-slate-400">Car Rental CRM Project Dashboard</p>
        </header>
        <section className="grid grid-cols-4 gap-6 mb-6">
          <StatCard icon={<span className="material-icons">directions_car</span>} label="Total Cars" value={cars.length} />
          <StatCard icon={<span className="material-icons">booking</span>} label="Total Bookings" value={bookings.length} />
          <StatCard icon={<span className="material-icons">assignment_ind</span>} label="Total Customers" value={customers.length} />
          <StatCard icon={<span className="material-icons">attach_money</span>} label="Total Revenue" value="$12,345" trend={10} />
        </section>
        <section className="bg-slate-900 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            {bookings.slice(0, 5).map((booking) => (
              <li key={booking.bookingId} className="flex justify-between">
                <span>{`${booking.customerName} booked ${booking.carRegistration}`}</span>
                <Badge variant="info">{booking.status}</Badge>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-slate-900 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Action Points Progress</h2>
          <ul className="space-y-2">
            <li className="flex justify-between"><span>Fleet Management Module</span><Badge variant="success">In Progress</Badge></li>
            <li className="flex justify-between"><span>Booking System</span><Badge variant="warning">Planned</Badge></li>
            <li className="flex justify-between"><span>Customer Management Module</span><Badge variant="danger">Delayed</Badge></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
