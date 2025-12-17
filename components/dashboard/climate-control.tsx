"use client"

import { Power, Fan, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface ClimateControlProps {
  activeMode: string
  setActiveMode: (mode: string) => void
}

const climateButtons = [
  { id: "off", label: "OFF", icon: Power },
  { id: "heat", label: "+90°", icon: null },
  { id: "defrost", label: "-D", icon: RotateCcw },
  { id: "auto", label: "AUTO", icon: null },
  { id: "fan", label: "", icon: Fan },
]

export default function ClimateControl({ activeMode, setActiveMode }: ClimateControlProps) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-3 lg:p-4">
      <h3 className="text-white font-semibold text-sm mb-3 px-2">Climate Control</h3>
      <div className="flex gap-2 justify-between">
        {climateButtons.map((btn) => {
          const isActive = activeMode === btn.id
          const Icon = btn.icon
          return (
            <button
              key={btn.id}
              onClick={() => setActiveMode(btn.id)}
              className={cn(
                "flex-1 py-3 px-2 rounded-xl transition-all duration-300 font-semibold text-xs lg:text-sm flex items-center justify-center gap-1",
                isActive
                  ? "bg-[#3B82F6] text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/70 text-gray-700 hover:bg-white/90",
              )}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {btn.label && <span>{btn.label}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
