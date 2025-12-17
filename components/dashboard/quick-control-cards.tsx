"use client"

import { Car, Zap, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuickControlCardsProps {
  activeControl: string
  setActiveControl: (control: string) => void
}

const controls = [
  { id: "bonnet", label: "Bonnet", icon: "bonnet" },
  { id: "trunk", label: "Trunk", icon: "trunk" },
  { id: "charging", label: "Charging", icon: "charging" },
  { id: "childlock", label: "Child Lock", icon: "lock" },
]

function BonnetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l2-6h10l2 6" />
      <path d="M3 13h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
      <circle cx="7" cy="18" r="1" />
      <circle cx="17" cy="18" r="1" />
      <path d="M9 7V5" />
      <path d="M15 7V5" />
    </svg>
  )
}

function TrunkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l2-6h10l2 6" />
      <path d="M3 13h18v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5z" />
      <circle cx="7" cy="18" r="1" />
      <circle cx="17" cy="18" r="1" />
      <path d="M12 13v-3" />
      <path d="M10 10h4" />
    </svg>
  )
}

export default function QuickControlCards({ activeControl, setActiveControl }: QuickControlCardsProps) {
  const getIcon = (iconType: string, isActive: boolean) => {
    const iconClass = cn("w-6 h-6 lg:w-8 lg:h-8", isActive ? "text-white" : "text-gray-600")

    switch (iconType) {
      case "bonnet":
        return <BonnetIcon className={iconClass} />
      case "trunk":
        return <TrunkIcon className={iconClass} />
      case "charging":
        return <Zap className={iconClass} />
      case "lock":
        return <Lock className={iconClass} />
      default:
        return <Car className={iconClass} />
    }
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {controls.map((control) => {
        const isActive = activeControl === control.id
        return (
          <button
            key={control.id}
            onClick={() => setActiveControl(control.id)}
            className={cn(
              "flex flex-col items-center justify-center p-4 lg:p-5 rounded-2xl transition-all duration-300 shadow-lg",
              isActive
                ? "bg-[#3B82F6] text-white shadow-blue-500/30"
                : "bg-white/80 backdrop-blur-md hover:bg-white/90 hover:scale-105",
            )}
          >
            {getIcon(control.icon, isActive)}
            <span className={cn("mt-2 text-xs lg:text-sm font-medium", isActive ? "text-white" : "text-gray-700")}>
              {control.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
