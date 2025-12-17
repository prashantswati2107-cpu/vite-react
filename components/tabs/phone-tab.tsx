"use client"

import { useState } from "react"
import { Phone, PhoneOff, User, Star, Delete } from "lucide-react"

export default function PhoneTab() {
  const [dialedNumber, setDialedNumber] = useState("")

  const recentCalls = [
    { name: "John Smith", number: "+1 234 567 8901", type: "outgoing", time: "10:30 AM" },
    { name: "Sarah Johnson", number: "+1 234 567 8902", type: "incoming", time: "Yesterday" },
    { name: "Mike Davis", number: "+1 234 567 8903", type: "missed", time: "Yesterday" },
  ]

  const dialPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]

  const handleDial = (num: string) => {
    if (dialedNumber.length < 15) {
      setDialedNumber((prev) => prev + num)
    }
  }

  const handleDelete = () => {
    setDialedNumber((prev) => prev.slice(0, -1))
  }

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Dialer */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        {/* Display */}
        <div className="text-center mb-6">
          <div className="h-12 flex items-center justify-center">
            <span className="text-3xl font-bold text-white tracking-wider">{dialedNumber || "Enter number"}</span>
            {dialedNumber && (
              <button onClick={handleDelete} className="ml-4 p-2 text-white/50 hover:text-white transition-colors">
                <Delete className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Dial Pad */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {dialPad.map((num) => (
            <button
              key={num}
              onClick={() => handleDial(num)}
              className="w-full h-14 lg:h-16 rounded-xl bg-white/10 text-white text-2xl font-medium hover:bg-white/20 active:scale-95 transition-all"
            >
              {num}
            </button>
          ))}
        </div>

        {/* Call Buttons */}
        <div className="flex justify-center gap-4">
          <button className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-all shadow-lg shadow-green-500/50">
            <Phone className="w-7 h-7" />
          </button>
          <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-all shadow-lg shadow-red-500/50">
            <PhoneOff className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Recent Calls */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-medium">Recent Calls</h3>
          <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">View All</button>
        </div>
        <div className="space-y-2">
          {recentCalls.map((call, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-white/70" />
                </div>
                <div className="text-left">
                  <p className="text-white font-medium">{call.name}</p>
                  <p className="text-white/50 text-sm">{call.number}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm ${call.type === "missed" ? "text-red-400" : "text-white/50"}`}>{call.type}</p>
                <p className="text-white/30 text-xs">{call.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Favorites */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-yellow-400" />
          <h3 className="text-white font-medium">Favorites</h3>
        </div>
        <div className="flex gap-4">
          {["Mom", "Dad", "Work"].map((name, index) => (
            <button key={index} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/70 text-sm">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
