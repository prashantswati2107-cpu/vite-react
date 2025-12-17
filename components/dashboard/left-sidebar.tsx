"use client"

import { Car, Home, Navigation, AlertTriangle, Thermometer, Music, LayoutGrid, Phone } from "lucide-react"

export type TabId = "car" | "home" | "navigation" | "alert" | "climate" | "music" | "apps" | "phone"

const sidebarItems = [
  { id: "car" as TabId, icon: Car, label: "Vehicle" },
  { id: "home" as TabId, icon: Home, label: "Home" },
  { id: "navigation" as TabId, icon: Navigation, label: "Navigation" },
  { id: "alert" as TabId, icon: AlertTriangle, label: "Alerts", hasNotification: true },
  { id: "climate" as TabId, icon: Thermometer, label: "25°", isTemp: true },
  { id: "music" as TabId, icon: Music, label: "Music" },
  { id: "apps" as TabId, icon: LayoutGrid, label: "Apps" },
  { id: "phone" as TabId, icon: Phone, label: "Phone" },
]

interface LeftSidebarProps {
  activeTab: TabId
  setActiveTab: (tab: TabId) => void
}

export default function LeftSidebar({ activeTab, setActiveTab }: LeftSidebarProps) {
  return (
    <aside className="w-16 lg:w-20 bg-gradient-to-b from-gray-900 to-black flex flex-col items-center py-6 gap-2 relative z-10">
      {/* Logo at top */}
      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
        <Car className="w-5 h-5 text-blue-400" />
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center gap-3 flex-1">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative w-12 h-12 lg:w-14 lg:h-14 flex flex-col items-center justify-center rounded-xl transition-all duration-300 group ${
              activeTab === item.id
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110"
            }`}
            title={item.label}
          >
            <item.icon className="w-5 h-5 lg:w-6 lg:h-6 transition-transform" />

            {/* Temperature text below icon */}
            {item.isTemp && (
              <span
                className={`text-[10px] mt-0.5 font-semibold ${
                  activeTab === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                }`}
              >
                25°
              </span>
            )}

            {/* Notification badge for alerts */}
            {item.hasNotification && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            )}

            {/* Tooltip on hover */}
            <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Bottom indicator */}
      <div className="w-8 h-1 bg-gray-700 rounded-full" />
    </aside>
  )
}
