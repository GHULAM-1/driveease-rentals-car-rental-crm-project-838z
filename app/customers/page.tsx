"use client";

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { customers } from '@/lib/mockData';

const CustomerManagementPage = () => {
  const [search, setSearch] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.cnic.includes(search)
  );

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-950 text-white p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Customer Management</h1>
        </header>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-slate-600 bg-slate-800 text-white rounded"
          />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {filteredCustomers.map(customer => (
            <div key={customer.customerId} className="bg-slate-900 p-4 rounded">
              <h2 className="text-xl font-semibold">{customer.name}</h2>
              <p>CNIC: {customer.cnic}</p>
              <p>License: {customer.license}</p>
              <p>Phone: {customer.phoneNumber}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CustomerManagementPage;
