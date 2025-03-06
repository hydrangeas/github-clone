import { FaGithub, FaPlus, FaBell } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaGithub className="text-white text-3xl" />
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search or jump to..."
              className="bg-gray-800 text-white rounded-md px-3 py-1 text-sm w-64 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 border border-gray-600 rounded px-1 text-xs text-gray-400">/</div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Pull requests</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Issues</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Codespaces</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Marketplace</a>
            <a href="#" className="text-white hover:text-gray-300 text-sm font-medium">Explore</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <FaBell />
          </button>
          
          <button className="flex items-center text-white hover:text-gray-300">
            <FaPlus className="text-sm" />
            <GoTriangleDown className="text-xs ml-1" />
          </button>
          
          <button className="flex items-center hover:opacity-80">
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 text-xs font-bold">
              H
            </div>
            <GoTriangleDown className="text-xs ml-1 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}