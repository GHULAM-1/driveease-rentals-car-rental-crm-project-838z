export interface CarProfile {
  registration: string;
  model: string;
  year: number;
  location: string;
  status: 'available' | 'rented' | 'in service';
  serviceHistory: Array<{ date: string; details: string }>;
}

export const cars: CarProfile[] = [
  {
    registration: 'AB123CD',
    model: 'Toyota Corolla',
    year: 2020,
    location: 'Branch A',
    status: 'available',
    serviceHistory: [
      { date: '2023-01-10', details: 'Oil change' },
      { date: '2023-06-21', details: 'Tire replacement' }
    ]
  },
  {
    registration: 'EF456GH',
    model: 'Honda Civic',
    year: 2019,
    location: 'Branch B',
    status: 'rented',
    serviceHistory: [
      { date: '2023-02-15', details: 'Brake inspection' },
      { date: '2023-05-12', details: 'Battery replacement' }
    ]
  }
];

export interface Booking {
  bookingId: string;
  carRegistration: string;
  customerName: string;
  startDate: string;
  endDate: string;
  status: 'booked' | 'completed' | 'cancelled';
}

export const bookings: Booking[] = [
  {
    bookingId: 'BK001',
    carRegistration: 'AB123CD',
    customerName: 'Alice Johnson',
    startDate: '2023-09-03',
    endDate: '2023-09-10',
    status: 'booked'
  },
  {
    bookingId: 'BK002',
    carRegistration: 'EF456GH',
    customerName: 'Bob Smith',
    startDate: '2023-09-05',
    endDate: '2023-09-12',
    status: 'completed'
  }
];

export interface Customer {
  customerId: string;
  name: string;
  license: string;
  cnic: string;
  phoneNumber: string;
  rentalHistory: Array<{ bookingId: string; details: string }>;
  notes: string[];
}

export const customers: Customer[] = [
  {
    customerId: 'C001',
    name: 'Alice Johnson',
    license: 'D12345678',
    cnic: '12345-6789012-3',
    phoneNumber: '+1234567890',
    rentalHistory: [
      { bookingId: 'BK001', details: 'Rented Toyota Corolla for one week' }
    ],
    notes: ['Preferred customer', 'Likes sedans']
  },
  {
    customerId: 'C002',
    name: 'Bob Smith',
    license: 'D87654321',
    cnic: '98765-4321098-7',
    phoneNumber: '+0987654321',
    rentalHistory: [
      { bookingId: 'BK002', details: 'Rented Honda Civic for one week' }
    ],
    notes: ['Late returner', 'Prefers online payment']
  }
];
