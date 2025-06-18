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

export default function ToursPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">All Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{tour.title}</h2>
            <p className="text-blue-600 mb-1">{tour.location}</p>
            <p className="text-gray-600 mb-2">{tour.description}</p>
            <div className="font-bold text-lg text-blue-700 mb-4">${tour.price.toFixed(2)}</div>
            <Link href={`/tours/${tour.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-center">View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
} 