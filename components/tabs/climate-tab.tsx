"use client"

import { useState } from "react"
import { Thermometer, Wind, Droplets, Sun, Snowflake, Power, ChevronUp, ChevronDown } from "lucide-react"

export default function ClimateTab() {
  const [temperature, setTemperature] = useState(22)
  const [fanSpeed, setFanSpeed] = useState(3)
  const [isOn, setIsOn] = useState(true)

  const zones = [
    { name: "Driver", temp: 22 },
    { name: "Passenger", temp: 23 },
    { name: "Rear Left", temp: 21 },
    { name: "Rear Right", temp: 21 },
  ]

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Main Climate Control */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">Climate Control</h1>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`p-3 rounded-xl transition-all ${isOn ? "bg-blue-500 text-white" : "bg-white/10 text-white/50"}`}
          >
            <Power className="w-6 h-6" />
          </button>
        </div>

        {/* Temperature Display */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <button
            onClick={() => setTemperature((t) => Math.max(16, t - 1))}
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            disabled={!isOn}
          >
            <ChevronDown className="w-8 h-8" />
          </button>
          <div className="text-center">
            <div className="flex items-start justify-center">
              <span className={`text-6xl font-bold ${isOn ? "text-white" : "text-white/30"}`}>{temperature}</span>
              <span className={`text-2xl mt-2 ${isOn ? "text-white/70" : "text-white/30"}`}>°C</span>
            </div>
            <p className="text-white/50 mt-1">Target Temperature</p>
          </div>
          <button
            onClick={() => setTemperature((t) => Math.min(30, t + 1))}
            className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            disabled={!isOn}
          >
            <ChevronUp className="w-8 h-8" />
          </button>
        </div>

        {/* Fan Speed */}
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/70">Fan Speed</span>
            <span className="text-white font-medium">Level {fanSpeed}</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                onClick={() => setFanSpeed(level)}
                disabled={!isOn}
                className={`flex-1 h-10 rounded-lg transition-all ${
                  level <= fanSpeed && isOn ? "bg-blue-500" : "bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Zone Controls */}
      <div className="grid grid-cols-2 gap-4">
        {zones.map((zone, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-lg">
            <p className="text-white/70 text-sm mb-1">{zone.name}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white">{zone.temp}°</span>
              <Thermometer className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Presets */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <h3 className="text-white font-medium mb-3">Quick Presets</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Snowflake, label: "Cool", color: "text-blue-400" },
            { icon: Sun, label: "Warm", color: "text-orange-400" },
            { icon: Wind, label: "Vent", color: "text-gray-400" },
            { icon: Droplets, label: "Defog", color: "text-cyan-400" },
          ].map((preset, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              <preset.icon className={`w-6 h-6 ${preset.color}`} />
              <span className="text-white/70 text-xs">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
