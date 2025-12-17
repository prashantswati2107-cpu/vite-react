"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat, Music } from "lucide-react"

export default function MusicTab() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(35)
  const [isLiked, setIsLiked] = useState(false)

  const playlist = [
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { title: "Levitating", artist: "Dua Lipa", duration: "3:23" },
    { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35" },
    { title: "Don't Start Now", artist: "Dua Lipa", duration: "3:03" },
  ]

  return (
    <div className="flex-1 flex flex-col gap-4 animate-fadeIn">
      {/* Now Playing */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        {/* Album Art */}
        <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
          <Music className="w-20 h-20 text-white/50" />
        </div>

        {/* Track Info */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white">Blinding Lights</h2>
          <p className="text-white/70">The Weeknd</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between text-white/50 text-xs mt-1">
            <span>1:10</span>
            <span>3:20</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button className="text-white/50 hover:text-white transition-colors">
            <Shuffle className="w-5 h-5" />
          </button>
          <button className="text-white hover:scale-110 transition-transform">
            <SkipBack className="w-8 h-8" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/50"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>
          <button className="text-white hover:scale-110 transition-transform">
            <SkipForward className="w-8 h-8" />
          </button>
          <button className="text-white/50 hover:text-white transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
        </div>

        {/* Secondary Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`transition-colors ${isLiked ? "text-red-500" : "text-white/50 hover:text-white"}`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-white/50" />
            <div className="w-24 h-1.5 bg-white/20 rounded-full">
              <div className="w-3/4 h-full bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
        <h3 className="text-white font-medium mb-3">Up Next</h3>
        <div className="space-y-2">
          {playlist.map((track, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/50 to-purple-500/50 flex items-center justify-center">
                  <Music className="w-5 h-5 text-white/70" />
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">{track.title}</p>
                  <p className="text-white/50 text-xs">{track.artist}</p>
                </div>
              </div>
              <span className="text-white/50 text-sm">{track.duration}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
