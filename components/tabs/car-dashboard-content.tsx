"use client"

import QuickControlCards from "../dashboard/quick-control-cards"
import DrivingModeSelector from "../dashboard/driving-mode-selector"
import SliderControls from "../dashboard/slider-controls"
import ClimateControl from "../dashboard/climate-control"
import CarVisualization from "../dashboard/car-visualization"

interface CarDashboardContentProps {
  volume: number
  setVolume: (v: number) => void
  brightness: number
  setBrightness: (b: number) => void
  activeQuickControl: string
  setActiveQuickControl: (c: string) => void
  drivingMode: string
  setDrivingMode: (m: string) => void
  climateMode: string
  setClimateMode: (m: string) => void
}

export default function CarDashboardContent({
  volume,
  setVolume,
  brightness,
  setBrightness,
  activeQuickControl,
  setActiveQuickControl,
  drivingMode,
  setDrivingMode,
  climateMode,
  setClimateMode,
}: CarDashboardContentProps) {
  return (
    <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-6 animate-fadeIn">
      {/* Left Controls Panel */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Quick Control Cards */}
        <QuickControlCards activeControl={activeQuickControl} setActiveControl={setActiveQuickControl} />

        {/* Driving Mode Selector */}
        <DrivingModeSelector activeMode={drivingMode} setActiveMode={setDrivingMode} />

        {/* Slider Controls */}
        <SliderControls volume={volume} setVolume={setVolume} brightness={brightness} setBrightness={setBrightness} />

        {/* Climate Control */}
        <ClimateControl activeMode={climateMode} setActiveMode={setClimateMode} />
      </div>

      {/* Right Side - Car Visualization */}
      <CarVisualization />
    </div>
  )
}
