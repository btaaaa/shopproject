import { Bell, Heart, MessageSquare, ShoppingCart, User } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">eBuy</h1>
          </div>
          
          <div className="flex-1 mx-8">
            <SearchBar />
          </div>

          <nav className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <MessageSquare className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <User className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}