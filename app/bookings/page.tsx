"use client";

import Sidebar from '@/components/Sidebar';
import Badge from '@/components/Badge';
import { useState } from 'react';
import { bookings } from '@/lib/mockData';

const BookingSystemPage = () => {
  const [search, setSearch] = useState('');

  const filteredBookings = bookings.filter(booking =>
    booking.customerName.toLowerCase().includes(search.toLowerCase()) ||
    booking.carRegistration.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-950 text-white p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Booking System</h1>
        </header>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search bookings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-slate-600 bg-slate-800 text-white rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {filteredBookings.map(booking => (
            <div key={booking.bookingId} className="bg-slate-900 p-4 rounded">
              <h2 className="text-xl font-semibold">{booking.customerName}</h2>
              <p>Car: {booking.carRegistration}</p>
              <p>Date: {booking.startDate} - {booking.endDate}</p>
              <div className="mt-2">
                <Badge variant={booking.status === 'booked' ? 'info' : booking.status === 'completed' ? 'success' : 'danger'}>
                  {booking.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BookingSystemPage;
