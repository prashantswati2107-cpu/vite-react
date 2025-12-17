"use client"

import {
  Calendar,
  Camera,
  Map,
  Settings,
  Phone,
  Mail,
  MessageSquare,
  Cloud,
  Clock,
  Calculator,
  FileText,
  Gamepad2,
} from "lucide-react"

export default function AppsTab() {
  const apps = [
    { icon: Calendar, name: "Calendar", color: "from-red-500 to-orange-500" },
    { icon: Camera, name: "Camera", color: "from-gray-600 to-gray-800" },
    { icon: Map, name: "Maps", color: "from-green-500 to-teal-500" },
    { icon: Settings, name: "Settings", color: "from-gray-500 to-gray-700" },
    { icon: Phone, name: "Phone", color: "from-green-400 to-green-600" },
    { icon: Mail, name: "Email", color: "from-blue-500 to-blue-700" },
    { icon: MessageSquare, name: "Messages", color: "from-green-500 to-emerald-500" },
    { icon: Cloud, name: "Weather", color: "from-cyan-400 to-blue-500" },
    { icon: Clock, name: "Clock", color: "from-orange-500 to-red-500" },
    { icon: Calculator, name: "Calculator", color: "from-gray-700 to-gray-900" },
    { icon: FileText, name: "Notes", color: "from-yellow-400 to-orange-400" },
    { icon: Gamepad2, name: "Games", color: "from-purple-500 to-pink-500" },
  ]

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white">Apps</h1>
        <p className="text-white/70">Your installed applications</p>
      </div>

      {/* Apps Grid */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <button key={index} className="flex flex-col items-center gap-2 group">
              <div
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
              >
                <app.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                {app.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Apps */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <h3 className="text-white font-medium mb-3">Recently Used</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {apps.slice(0, 5).map((app, index) => (
            <button key={index} className="flex flex-col items-center gap-2 flex-shrink-0 group">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <app.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/60 text-xs">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
