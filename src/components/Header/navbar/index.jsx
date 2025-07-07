import React from "react";
import { Search, User, Heart, Maximize2, ShoppingBag } from "lucide-react";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-50">
      <div className="flex items-center justify-between w-full px-4 py-2 lg:px-8 gap-5">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src={logo} 
              alt="Velvix Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-xl md:text-2xl font-bold text-blue-600">
            Velvix
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <div className="relative flex w-full">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full h-10 md:h-12 px-4 text-base border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
            <button
              className="px-4 md:px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="w-9 h-9 md:w-10 md:h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-center">
            <User className="w-5 h-5" />
            <span className="sr-only">Account</span>
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-center">
            <Heart className="w-5 h-5" />
            <span className="sr-only">Favorites</span>
          </button>
          <button className="w-9 h-9 md:w-10 md:h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-center">
            <Maximize2 className="w-5 h-5" />
            <span className="sr-only">Fullscreen</span>
          </button>
          <button className="relative w-9 h-9 md:w-10 md:h-10 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md flex items-center justify-center">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">2</span>
            <span className="sr-only">Shopping Cart</span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="block md:hidden px-4 pb-2">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 h-10 px-3 text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
          />
          <button
            className="px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



