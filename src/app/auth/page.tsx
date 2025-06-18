import Link from 'next/link';

export default function AuthPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Welcome to Travel Booking</h1>
        <p className="mb-4">Sign in or create an account to book amazing tours!</p>
        <div className="flex flex-col gap-4">
          <Link href="/auth/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Login</Link>
          <Link href="/auth/signup" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Sign Up</Link>
        </div>
      </div>
    </main>
  );
} 