"use client"

import { useState } from "react"
import LeftSidebar, { type TabId } from "./dashboard/left-sidebar"
import TopStatusBar from "./dashboard/top-status-bar"
import CarDashboardContent from "./tabs/car-dashboard-content"
import HomeTab from "./tabs/home-tab"
import NavigationTab from "./tabs/navigation-tab"
import AlertsTab from "./tabs/alerts-tab"
import ClimateTab from "./tabs/climate-tab"
import MusicTab from "./tabs/music-tab"
import AppsTab from "./tabs/apps-tab"
import PhoneTab from "./tabs/phone-tab"

export default function CarDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("car")

  // Car dashboard state
  const [volume, setVolume] = useState(65)
  const [brightness, setBrightness] = useState(80)
  const [activeQuickControl, setActiveQuickControl] = useState("trunk")
  const [drivingMode, setDrivingMode] = useState("normal")
  const [climateMode, setClimateMode] = useState("auto")

  const renderTabContent = () => {
    switch (activeTab) {
      case "car":
        return (
          <CarDashboardContent
            volume={volume}
            setVolume={setVolume}
            brightness={brightness}
            setBrightness={setBrightness}
            activeQuickControl={activeQuickControl}
            setActiveQuickControl={setActiveQuickControl}
            drivingMode={drivingMode}
            setDrivingMode={setDrivingMode}
            climateMode={climateMode}
            setClimateMode={setClimateMode}
          />
        )
      case "home":
        return <HomeTab />
      case "navigation":
        return <NavigationTab />
      case "alert":
        return <AlertsTab />
      case "climate":
        return <ClimateTab />
      case "music":
        return <MusicTab />
      case "apps":
        return <AppsTab />
      case "phone":
        return <PhoneTab />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#5B9FED] to-[#A5C9FF] flex overflow-hidden">
      {/* Left Sidebar - now with active state */}
      <LeftSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 lg:p-6">
        {/* Top Status Bar */}
        <TopStatusBar />

        {/* Dynamic Tab Content */}
        <div className="flex-1 flex flex-col mt-4">{renderTabContent()}</div>

        {/* Bottom Branding */}
        <div className="text-center mt-4 pb-2">
          <p className="text-white/70 text-sm font-medium">Design by v0</p>
        </div>
      </div>
    </div>
  )
}
