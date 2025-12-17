"use client"

import { Cloud, Signal, Wifi, Bluetooth, BatteryFull } from "lucide-react"

export default function TopStatusBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Weather */}
      <div className="flex items-center gap-2 text-white">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
          <Cloud className="w-5 h-5" />
        </div>
        <span className="font-semibold text-lg">27°</span>
      </div>

      {/* Time */}
      <div className="text-white">
        <span className="text-2xl lg:text-3xl font-bold tracking-wider">12:00</span>
      </div>

      {/* System Icons */}
      <div className="flex items-center gap-3 text-white">
        <Signal className="w-5 h-5" />
        <Wifi className="w-5 h-5" />
        <Bluetooth className="w-5 h-5" />
        <div className="flex items-center gap-1">
          <BatteryFull className="w-6 h-6" />
          <span className="text-sm font-medium">85%</span>
        </div>
      </div>
    </div>
  )
}
