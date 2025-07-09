"use client"

import { useState, useEffect } from "react"

export default function FeaturedBrandsName() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const brands = [
    { name: "SanDisk", color: "text-red-600" },
    { name: "Razer", color: "text-green-500" },
    { name: "UGREEN", color: "text-green-600" },
    { name: "ASRock", color: "text-green-500" },
    { name: "SilverStone", color: "text-gray-600" },
    { name: "Team Group", color: "text-black" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === brands.length - 5 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? brands.length - 5 : prevIndex - 1))
  }

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="w-full bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 style={{ marginTop: "40px", marginLeft: '20px'}} className="text-2xl font-semibold text-gray-900 mb-8">Featured Brands</h2>

        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 transition-colors duration-200"
            onClick={prevSlide}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Brand Logos Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            >
              {brands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-1/5 px-2 sm:px-4 md:px-6 lg:px-8">
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-24 flex items-center justify-center">
                    <div className="text-center">
                      {brand.name === "SanDisk" && <div className="text-red-600 font-bold text-lg sm:text-xl">SanDisk</div>}
                      {brand.name === "Razer" && (
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center relative">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-green-500 bg-green-500 rounded-full">
                              <div className="w-full h-full bg-green-500 rounded-full relative">
                                <div className="absolute inset-0.5 bg-white rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <span className="text-green-500 font-bold text-sm sm:text-lg tracking-wider">RAZER</span>
                        </div>
                      )}
                      {brand.name === "UGREEN" && (
                        <div className="text-green-600 font-bold text-sm sm:text-lg tracking-wide">UGREEN</div>
                      )}
                      {brand.name === "ASRock" && <div className="text-green-500 font-bold text-sm sm:text-lg">ASRock</div>}
                      {brand.name === "SilverStone" && (
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-400 transform rotate-45 rounded-sm"></div>
                          <span className="text-gray-600 font-semibold text-xs sm:text-sm tracking-wide">SILVERSTONE</span>
                        </div>
                      )}
                      {brand.name === "Team Group" && (
                        <div className="text-black font-bold text-sm sm:text-lg leading-tight">
                          <div className="text-lg sm:text-xl">TEAM</div>
                          <div className="text-xs sm:text-sm font-normal">GROUP</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-50 rounded-full p-2 transition-colors duration-200"
            onClick={nextSlide}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}