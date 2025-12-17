"use client"

import { AlertTriangle, CheckCircle, Info, XCircle, Clock, ChevronRight } from "lucide-react"

export default function AlertsTab() {
  const alerts = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Tire Pressure Low",
      description: "Front left tire pressure is below recommended level",
      time: "2 hours ago",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
    },
    {
      type: "info",
      icon: Info,
      title: "Software Update Available",
      description: "Version 2.5.1 is ready to install",
      time: "1 day ago",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "Charging Complete",
      description: "Your vehicle is fully charged at 100%",
      time: "2 days ago",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
    {
      type: "error",
      icon: XCircle,
      title: "Service Reminder",
      description: "Annual maintenance due in 500 km",
      time: "1 week ago",
      color: "text-red-400",
      bgColor: "bg-red-400/20",
    },
  ]

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Notifications</h1>
            <p className="text-white/70">4 new alerts</p>
          </div>
          <button className="px-4 py-2 bg-white/10 rounded-xl text-white/70 hover:bg-white/20 hover:text-white transition-all text-sm">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <button
            key={index}
            className="w-full bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${alert.bgColor}`}>
                <alert.icon className={`w-6 h-6 ${alert.color}`} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold">{alert.title}</h3>
                  <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
                <p className="text-white/70 text-sm mb-2">{alert.description}</p>
                <div className="flex items-center gap-1 text-white/50 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <h3 className="text-white font-medium mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 bg-blue-500 rounded-xl text-white font-medium hover:bg-blue-600 transition-all">
            Schedule Service
          </button>
          <button className="p-3 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition-all">
            View History
          </button>
        </div>
      </div>
    </div>
  )
}
