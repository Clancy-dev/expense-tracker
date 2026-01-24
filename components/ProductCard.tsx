'use client';

import React, { useState, useEffect } from 'react'
import { ZoomIn, Check, Pause, Play } from 'lucide-react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
  onImageClick: () => void
  isBought: boolean
  isPaused: boolean
  onStateChange: (productId: number, bought: boolean, paused: boolean) => void
}

export default function ProductCard({ product, onImageClick, isBought, isPaused, onStateChange }: ProductCardProps) {
  const [mounted, setMounted] = useState(false)

  // Set mounted flag
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBoughtToggle = () => {
    const newBought = !isBought
    localStorage.setItem(`product-${product.id}-bought`, newBought.toString())
    onStateChange(product.id, newBought, isPaused)
  }

  const handlePauseToggle = () => {
    const newPaused = !isPaused
    localStorage.setItem(`product-${product.id}-paused`, newPaused.toString())
    onStateChange(product.id, isBought, newPaused)
  }

  if (!mounted) {
    return null
  }

  const isBlurred = isBought || isPaused

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${isBlurred ? 'opacity-60' : ''} ${isPaused ? 'grayscale' : ''}`}>
      {/* Image Container */}
      <div
        className="relative w-full h-64 bg-gray-100 overflow-hidden cursor-pointer"
        onClick={onImageClick}
      >
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <button className="bg-blue-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform -translate-y-2 group-hover:translate-y-0">
            <ZoomIn className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">{product.description}</p>

        {/* Price and Buttons */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-3xl font-bold text-black-800">UGX {product.price.toLocaleString()}</span>
            
          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Bought Button */}
            <button
              onClick={handleBoughtToggle}
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                isBought
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title={isBought ? 'Mark as not bought' : 'Mark as bought'}
            >
              <Check className="w-5 h-5" />
            </button>

            {/* Pause Button */}
            <button
              onClick={handlePauseToggle}
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                isPaused
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title={isPaused ? 'Resume this item' : 'Pause this item'}
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
