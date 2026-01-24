'use client'

import React from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  image: string
  onClose: () => void
}

export default function LightBox({ image, onClose }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl max-h-[90vh] flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <img
          src={image || "/placeholder.svg"}
          alt="Expanded view"
          className="w-full h-full object-contain rounded-2xl shadow-2xl max-w-3xl max-h-[80vh]"
        />
      </div>
    </div>
  )
}
