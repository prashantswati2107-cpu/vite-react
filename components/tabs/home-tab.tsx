"use client"

import { Battery, Gauge, MapPin, Zap, Calendar, Clock } from "lucide-react"

export default function HomeTab() {
  const quickStats = [
    { icon: Battery, label: "Battery", value: "87%", color: "text-green-400" },
    { icon: Gauge, label: "Range", value: "312 km", color: "text-blue-400" },
    { icon: MapPin, label: "Location", value: "San Francisco", color: "text-purple-400" },
    { icon: Zap, label: "Charging", value: "Not Connected", color: "text-yellow-400" },
  ]

  const upcomingTrips = [
    { destination: "Office", time: "8:30 AM", distance: "12 km" },
    { destination: "Gym", time: "6:00 PM", distance: "5 km" },
    { destination: "Home", time: "8:00 PM", distance: "15 km" },
  ]

  return (
    <div className="flex-1 flex flex-col gap-6 animate-fadeIn">
      {/* Welcome Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">Welcome back, Ronet!</h1>
        <p className="text-white/70">Your vehicle is ready. Here's your overview.</p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            <stat.icon className={`w-8 h-8 ${stat.color} mb-2`} />
            <p className="text-white/70 text-sm">{stat.label}</p>
            <p className="text-white font-bold text-lg">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Upcoming Trips */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-white" />
          <h2 className="text-lg font-semibold text-white">Upcoming Trips</h2>
        </div>
        <div className="space-y-3">
          {upcomingTrips.map((trip, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-white font-medium">{trip.destination}</span>
              </div>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {trip.time}
                </span>
                <span>{trip.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
