import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { ProductCard } from './components/ProductCard';
import type { Product } from './types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sony PlayStation 5 Digital Edition',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    condition: 'new',
    seller: 'GameStop',
    description: 'Brand new PS5 Digital Edition',
    bids: 23,
    timeLeft: '1d 4h left',
  },
  {
    id: '2',
    title: 'MacBook Pro 16" M1 Max',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    condition: 'used',
    seller: 'TechDeals',
    description: 'Excellent condition, barely used',
    bids: 15,
    timeLeft: '2d 6h left',
  },
  {
    id: '3',
    title: 'Canon EOS R5 Mirrorless Camera',
    price: 3299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    condition: 'new',
    seller: 'CameraWorld',
    description: 'Professional mirrorless camera',
    bids: 31,
    timeLeft: '12h left',
  },
  {
    id: '4',
    title: 'Vintage Rolex Submariner',
    price: 8999.99,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80',
    condition: 'used',
    seller: 'LuxuryWatches',
    description: '1980s Rolex Submariner in excellent condition',
    bids: 42,
    timeLeft: '3d 8h left',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryBar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Featured Items</h2>
          <div className="flex items-center space-x-4">
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg bg-white text-sm">
              <option>Best Match</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
              <option>Ending Soon</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;