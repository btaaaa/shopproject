import { Search, SlidersHorizontal } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative flex items-center max-w-2xl w-full">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full pl-4 pr-10 py-2.5 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
        Search
      </button>
      <button className="ml-2 p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50">
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}