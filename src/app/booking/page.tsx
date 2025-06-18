"use client";

import { useState } from 'react';

const tours = [
  { id: '1', title: 'Bangkok City Tour' },
  { id: '2', title: 'Phuket Island Adventure' },
  { id: '3', title: 'Chiang Mai Temples' },
];

export default function BookingPage() {
  const [selectedTour, setSelectedTour] = useState('1');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Booking submitted!\nTour: ${selectedTour}\nDate: ${date}\nGuests: ${guests}`);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Book a Tour</h1>
        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold">Tour</label>
          <select value={selectedTour} onChange={e => setSelectedTour(e.target.value)} className="w-full border rounded px-3 py-2">
            {tours.map(tour => (
              <option key={tour.id} value={tour.id}>{tour.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-4 text-left">
          <label className="block mb-1 font-semibold">Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-6 text-left">
          <label className="block mb-1 font-semibold">Guests</label>
          <input type="number" min={1} value={guests} onChange={e => setGuests(Number(e.target.value))} className="w-full border rounded px-3 py-2" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full font-semibold">Book Now</button>
      </form>
    </main>
  );
} 