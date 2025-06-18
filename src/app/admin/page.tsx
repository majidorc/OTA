export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Admin Dashboard</h1>
        <p className="mb-4">Manage tours, bookings, and users here.</p>
        <div className="flex flex-col gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Manage Tours</button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Manage Bookings</button>
          <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-500 transition">Manage Users</button>
        </div>
      </div>
    </main>
  );
} 