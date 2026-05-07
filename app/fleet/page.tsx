"use client";

import Sidebar from '@/components/Sidebar';
import Badge from '@/components/Badge';
import { useState } from 'react';
import { cars } from '@/lib/mockData';

const FleetManagementPage = () => {
  const [search, setSearch] = useState('');

  const filteredCars = cars.filter(car =>
    car.model.toLowerCase().includes(search.toLowerCase()) ||
    car.registration.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-950 text-white p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Fleet Management</h1>
        </header>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-slate-600 bg-slate-800 text-white rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div key={car.registration} className="bg-slate-900 p-4 rounded">
              <h2 className="text-xl font-semibold">{car.model} ({car.year})</h2>
              <p>Registration: {car.registration}</p>
              <p>Location: {car.location}</p>
              <div className="mt-2">
                <Badge variant={car.status === 'available' ? 'success' : car.status === 'rented' ? 'warning' : 'danger'}>
                  {car.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FleetManagementPage;
