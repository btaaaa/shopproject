import { Laptop, Car, Home, Camera, Gamepad, Watch, Gift, MoreHorizontal } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Laptop },
  { name: 'Vehicles', icon: Car },
  { name: 'Home & Garden', icon: Home },
  { name: 'Photography', icon: Camera },
  { name: 'Gaming', icon: Gamepad },
  { name: 'Jewelry', icon: Watch },
  { name: 'Collectibles', icon: Gift },
  { name: 'More', icon: MoreHorizontal },
];

export function CategoryBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600"
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}