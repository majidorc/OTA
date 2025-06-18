import { notFound } from 'next/navigation';
import Link from 'next/link';

const tours = [
  {
    id: '1',
    title: 'Bangkok City Tour',
    location: 'Bangkok, Thailand',
    price: 49.99,
    description: 'Explore the vibrant city of Bangkok with a local guide.'
  },
  {
    id: '2',
    title: 'Phuket Island Adventure',
    location: 'Phuket, Thailand',
    price: 89.99,
    description: 'Discover the beauty of Phuket with this all-inclusive tour.'
  },
  {
    id: '3',
    title: 'Chiang Mai Temples',
    location: 'Chiang Mai, Thailand',
    price: 59.99,
    description: 'Visit the most famous temples in Chiang Mai.'
  },
];

export default function Page({ params }: { params: { id: string } }) {
  const tour = tours.find(t => t.id === params.id);
  if (!tour) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 py-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{tour.title}</h1>
        <p className="text-blue-600 mb-2">{tour.location}</p>
        <p className="text-gray-700 mb-4">{tour.description}</p>
        <div className="font-bold text-xl text-blue-700 mb-6">${tour.price.toFixed(2)}</div>
        <Link href="/booking" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold">Book This Tour</Link>
      </div>
    </main>
  );
} 