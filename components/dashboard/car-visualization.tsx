"use client"

import { Mic } from "lucide-react"

export default function CarVisualization() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative min-h-[300px] lg:min-h-[400px]">
      {/* Voice Assistant Bubble */}
      <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 lg:p-4 shadow-lg max-w-[200px]">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Mic className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-800 text-sm font-medium">"Open the trunk please"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Response Text */}
      <div className="absolute top-20 lg:top-28 right-4 lg:right-8">
        <div className="bg-[#3B82F6]/90 backdrop-blur-md rounded-2xl py-2 px-4 shadow-lg">
          <p className="text-white text-sm font-medium">Hi, Ronet! 👋</p>
        </div>
      </div>

      {/* Car Image */}
      <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
        <img src="/white-modern-electric-car-side-view-3d-render-futu.jpg" alt="Electric Car" className="w-full h-auto drop-shadow-2xl" />

        {/* Glow effect under car */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl" />
      </div>

      {/* Voice Assistant Orb */}
      <div className="absolute bottom-8 lg:bottom-12 right-8 lg:right-16">
        <div className="relative">
          <div
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-green-400 via-blue-500 via-purple-500 to-pink-500 animate-spin-slow shadow-2xl"
            style={{ animationDuration: "8s" }}
          />
          <div className="absolute inset-2 rounded-full bg-white/30 backdrop-blur-sm" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Trunk Open Indicator */}
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-1">
          <div className="w-3 h-3 bg-[#3B82F6] rounded-full animate-ping" />
          <span className="text-white/80 text-xs font-medium">Trunk Open</span>
        </div>
      </div>
    </div>
  )
}
