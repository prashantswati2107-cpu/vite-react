"use client"

import { Car, Leaf, Gauge, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

interface DrivingModeSelectorProps {
  activeMode: string
  setActiveMode: (mode: string) => void
}

const modes = [
  { id: "normal", label: "Normal", icon: Car },
  { id: "economic", label: "Economic", icon: Leaf },
  { id: "sport", label: "Sport", icon: Gauge },
  { id: "custom", label: "Custom", icon: Settings },
]

export default function DrivingModeSelector({ activeMode, setActiveMode }: DrivingModeSelectorProps) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3 lg:p-4">
      <h3 className="text-white font-semibold text-sm mb-3 px-2">Driving Mode</h3>
      <div className="grid grid-cols-4 gap-2">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id
          const Icon = mode.icon
          return (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={cn(
                "flex items-center justify-center gap-2 py-2.5 lg:py-3 px-3 lg:px-4 rounded-full transition-all duration-300 font-medium text-xs lg:text-sm",
                isActive
                  ? "bg-[#3B82F6] text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/80 text-gray-700 hover:bg-white",
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden lg:inline">{mode.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
