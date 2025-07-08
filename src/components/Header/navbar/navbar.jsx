import React, { useState } from "react";
import {
  Search,
  User,
  Heart,
  Maximize2,
  ShoppingBag,
  Grid3X3,
  ChevronRight,
  Monitor,
  Menu,
  X
} from "lucide-react";
import logo from "../../../assets/images/logo.png";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navigationItems = [
    { name: "GAMING", href: "#gaming" },
    { name: "ABOUT US", href: "#about" },
    { name: "CORPORATE", href: "#corporate" },
    { name: "BRANDS", href: "#brands" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const handleLogin = () => setIsLoggedIn(!isLoggedIn);
  const addToCart = () => setCartCount(cartCount + 1);
  const toggleMobileMenu = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div>
      {/* Main Header */}
      <div className="sticky top-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-between w-full px-4 py-2 lg:px-8 gap-3">
          {/* Logo + Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Icon */}
            <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {/* Logo */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={logo} alt="Velvix Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-xl md:text-2xl font-bold text-blue-600">Velvix</div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative flex w-full">
              <input
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 md:h-12 px-4 text-base border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 md:px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Icon Buttons */}
          <div className="flex items-center gap-2">
            <button className="icon-btn"><User className="w-5 h-5" /></button>
            <button className="icon-btn"><Heart className="w-5 h-5" /></button>
            <button className="icon-btn"><Maximize2 className="w-5 h-5" /></button>
            <button onClick={addToCart} className="icon-btn relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="block md:hidden px-4 pb-2">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search Products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-10 px-3 text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-r-md flex items-center justify-center transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-gray-50">
        <nav className="hidden md:flex items-center h-12 w-full">
          {/* Categories */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 h-full flex items-center px-4 text-white font-medium hover:from-red-600 hover:to-orange-600 transition-all cursor-pointer shadow-sm">
            <Grid3X3 className="w-5 h-5 mr-2" />
            <span>Categories</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div>

          {/* Navigation Links */}
          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 h-full flex items-center justify-center shadow-sm">
            <div className="flex items-center space-x-8 px-6 gap-3.5">
              {navigationItems.map((item, i) => (
                <a key={i} href={item.href} className="text-white font-medium hover:text-blue-100">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Login */}
          <div
            onClick={handleLogin}
            className={`${
              isLoggedIn ? "bg-green-600 hover:bg-green-700" : "bg-blue-700 hover:bg-blue-800"
            } h-full flex items-center px-4 text-white font-medium cursor-pointer shadow-sm transition-colors`}
          >
            <User className="w-4 h-4 mr-2" />
            <span>{isLoggedIn ? "Logout" : "Login"}</span>
          </div>

          {/* PC Builder */}
          <div className="bg-slate-800 h-full flex items-center px-4 text-white font-medium hover:bg-slate-900 cursor-pointer shadow-sm">
            <Monitor className="w-4 h-4 mr-2" />
            <span>PC Builder</span>
          </div>
        </nav>

        {/* Mobile Navigation (Dropdown style) */}
        {mobileNavOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div
                onClick={handleLogin}
                className={`mt-2 flex items-center gap-2 font-medium ${
                  isLoggedIn ? "text-green-600" : "text-blue-600"
                }`}
              >
                <User className="w-4 h-4" />
                <span>{isLoggedIn ? "Logout" : "Login"}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 font-medium ">
                <Monitor className="w-4 h-4 " />
                <span>PC Builder</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;