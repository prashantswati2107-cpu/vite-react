"use client"

import { Volume2, Sun, Minus, Plus } from "lucide-react"

interface SliderControlsProps {
  volume: number
  setVolume: (value: number) => void
  brightness: number
  setBrightness: (value: number) => void
}

export default function SliderControls({ volume, setVolume, brightness, setBrightness }: SliderControlsProps) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-4 lg:p-5 space-y-4">
      {/* Volume Slider */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 min-w-[80px]">
          <Volume2 className="w-5 h-5 text-white" />
          <span className="text-white font-medium text-sm">Volume</span>
        </div>
        <button
          onClick={() => setVolume(Math.max(0, volume - 10))}
          className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
        >
          <Minus className="w-4 h-4 text-gray-700" />
        </button>
        <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3B82F6 ${volume}%, rgba(255,255,255,0.5) ${volume}%)`,
            }}
          />
        </div>
        <button
          onClick={() => setVolume(Math.min(100, volume + 10))}
          className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
        >
          <Plus className="w-4 h-4 text-gray-700" />
        </button>
        <span className="text-white font-semibold text-sm min-w-[40px] text-right">{volume}%</span>
      </div>

      {/* Brightness Slider */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 min-w-[80px]">
          <Sun className="w-5 h-5 text-white" />
          <span className="text-white font-medium text-sm">Bright</span>
        </div>
        <button
          onClick={() => setBrightness(Math.max(0, brightness - 10))}
          className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
        >
          <Minus className="w-4 h-4 text-gray-700" />
        </button>
        <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3B82F6 ${brightness}%, rgba(255,255,255,0.5) ${brightness}%)`,
            }}
          />
        </div>
        <button
          onClick={() => setBrightness(Math.min(100, brightness + 10))}
          className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors"
        >
          <Plus className="w-4 h-4 text-gray-700" />
        </button>
        <span className="text-white font-semibold text-sm min-w-[40px] text-right">{brightness}%</span>
      </div>
    </div>
  )
}
