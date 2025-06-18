import Image from "next/image";

const featuredTours = [
  {
    id: '1',
    title: 'Bangkok City Tour',
    location: 'Bangkok, Thailand',
    price: 49.99,
    image: '/globe.svg',
    description: 'Explore the vibrant city of Bangkok with a local guide.'
  },
  {
    id: '2',
    title: 'Phuket Island Adventure',
    location: 'Phuket, Thailand',
    price: 89.99,
    image: '/window.svg',
    description: 'Discover the beauty of Phuket with this all-inclusive tour.'
  },
  {
    id: '3',
    title: 'Chiang Mai Temples',
    location: 'Chiang Mai, Thailand',
    price: 59.99,
    image: '/file.svg',
    description: 'Visit the most famous temples in Chiang Mai.'
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">Find & Book Amazing Tours</h1>
        <p className="text-lg md:text-2xl text-blue-700 mb-8">Discover unforgettable experiences around the world</p>
        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex gap-2 bg-white rounded-lg shadow p-2">
          <input
            type="text"
            placeholder="Search destinations, tours, or activities..."
            className="flex-1 px-4 py-2 rounded-l-lg outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-blue-700 transition">Search</button>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center">
              <Image src={tour.image} alt={tour.title} width={120} height={120} className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{tour.title}</h3>
              <p className="text-blue-600 mb-1">{tour.location}</p>
              <p className="text-gray-600 mb-2">{tour.description}</p>
              <div className="font-bold text-lg text-blue-700 mb-4">${tour.price.toFixed(2)}</div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for your next adventure?</h2>
        <p className="mb-6">Sign up now and start exploring the world with us!</p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-100 transition">Get Started</button>
      </section>
    </main>
  );
}
