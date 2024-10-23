import { Heart, Timer } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 bg-white/80 rounded-full hover:bg-white">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{product.bids} bids</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Timer className="w-4 h-4 mr-1" />
          {product.timeLeft}
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="px-2 py-1 bg-gray-100 rounded-full">{product.condition}</span>
          <span className="text-gray-500">by {product.seller}</span>
        </div>
      </div>
    </div>
  );
}