"use client"

import { useState } from "react"
import { Search, MapPin, Navigation, Clock, Star, ChevronRight } from "lucide-react"

export default function NavigationTab() {
  const [searchQuery, setSearchQuery] = useState("")

  const recentLocations = [
    { name: "Home", address: "123 Main Street, SF", distance: "15 km" },
    { name: "Office", address: "456 Tech Park, SF", distance: "12 km" },
    { name: "Supermarket", address: "789 Market St, SF", distance: "3 km" },
  ]

  const favoriteLocations = [
    { name: "Gym", address: "Fitness Center, Downtown", distance: "5 km" },
    { name: "Coffee Shop", address: "Blue Bottle Coffee", distance: "2 km" },
  ]

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Search Bar */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Search destination..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 outline-none focus:bg-white/20 transition-all"
          />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl flex-1 min-h-[200px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        <div className="relative z-10 text-center">
          <Navigation className="w-16 h-16 text-white/50 mx-auto mb-4" />
          <p className="text-white/70">Map View</p>
          <p className="text-white/50 text-sm">Tap to start navigation</p>
        </div>
        {/* Decorative map grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>
      </div>

      {/* Recent & Favorites */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Locations */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-white/70" />
            <h3 className="text-white font-medium">Recent</h3>
          </div>
          <div className="space-y-2">
            {recentLocations.map((loc, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">{loc.name}</p>
                    <p className="text-white/50 text-xs">{loc.address}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Favorite Locations */}
        <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-yellow-400" />
            <h3 className="text-white font-medium">Favorites</h3>
          </div>
          <div className="space-y-2">
            {favoriteLocations.map((loc, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <div className="text-left">
                    <p className="text-white text-sm font-medium">{loc.name}</p>
                    <p className="text-white/50 text-xs">{loc.address}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
