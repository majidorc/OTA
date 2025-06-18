import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-700">TravelBooking</Link>
        <div className="flex gap-6 items-center">
          <Link href="/tours" className="text-blue-700 hover:text-blue-900 font-medium">Tours</Link>
          <Link href="/booking" className="text-blue-700 hover:text-blue-900 font-medium">Booking</Link>
          <Link href="/admin" className="text-blue-700 hover:text-blue-900 font-medium">Admin</Link>
          <Link href="/auth" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition font-medium">Sign In</Link>
        </div>
      </div>
    </nav>
  );
} 