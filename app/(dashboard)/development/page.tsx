'use client'

import React, { useState, useEffect } from 'react'
import { X, ShoppingBag } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import { householdProducts, personalWearProducts } from '@/data/development-data'
import LightBox from '@/components/LightBox'


export default function page() {
  const [activeTab, setActiveTab] = useState<'personal' | 'household'>('personal')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [productStates, setProductStates] = useState<Record<number, { bought: boolean; paused: boolean }>>({})

  // Load saved tab from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab') as 'personal' | 'household' | null
    if (savedTab) {
      setActiveTab(savedTab)
    }

    // Load all product states from localStorage
    const states: Record<number, { bought: boolean; paused: boolean }> = {}
    const allProducts = [...personalWearProducts, ...householdProducts]
    allProducts.forEach((product) => {
      states[product.id] = {
        bought: localStorage.getItem(`product-${product.id}-bought`) === 'true',
        paused: localStorage.getItem(`product-${product.id}-paused`) === 'true',
      }
    })
    setProductStates(states)
    setMounted(true)
  }, [])

  // Save tab to localStorage whenever it changes
  const handleTabChange = (tab: 'personal' | 'household') => {
    setActiveTab(tab)
    localStorage.setItem('activeTab', tab)
  }

  // Handle product state changes from ProductCard
  const handleProductStateChange = (productId: number, bought: boolean, paused: boolean) => {
    setProductStates((prev) => ({
      ...prev,
      [productId]: { bought, paused },
    }))
  }

  // Calculate totals excluding bought and paused products
  const calculateTotal = (products: typeof personalWearProducts) => {
    return products.reduce((sum, product) => {
      const state = productStates[product.id]
      if (state && (state.bought || state.paused)) {
        return sum
      }
      return sum + product.price
    }, 0)
  }

  const currentProducts = activeTab === 'personal' ? personalWearProducts : householdProducts
  const personalWearTotal = calculateTotal(personalWearProducts)
  const householdTotal = calculateTotal(householdProducts)
  const grandTotal = personalWearTotal + householdTotal

  // Don't render until mounted to prevent initial transition
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex gap-2 mb-12">
          <button
            onClick={() => handleTabChange('personal')}
            className={`px-8 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 ${
              activeTab === 'personal'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
            }`}
          >
            Personal Wear
          </button>
          <button
            onClick={() => handleTabChange('household')}
            className={`px-8 py-3 rounded-full cursor-pointer font-semibold transition-all duration-300 ${
              activeTab === 'household'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
            }`}
          >
            Household Items
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={() => setSelectedImage(product.image)}
              isBought={productStates[product.id]?.bought || false}
              isPaused={productStates[product.id]?.paused || false}
              onStateChange={handleProductStateChange}
            />
          ))}
        </div>

        {/* Pricing Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Personal Wear Total */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Wear</h3>
            <div className="space-y-3 mb-6">
              {personalWearProducts.filter((product) => {
                const state = productStates[product.id]
                return !(state && (state.bought || state.paused))
              }).length > 0 ? (
                personalWearProducts
                  .filter((product) => {
                    const state = productStates[product.id]
                    return !(state && (state.bought || state.paused))
                  })
                  .map((product) => (
                    <div key={product.id} className="flex justify-between text-sm text-gray-700">
                      <span>{product.title}</span>
                      <span className="font-medium">UGX {product.price.toLocaleString()}</span>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-gray-500 italic">All products have been marked</p>
              )}
            </div>
            <div className="border-t border-gray-200 my-6 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Subtotal</span>
                <span className="text-2xl font-bold text-gray-800">UGX {personalWearTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Household Total */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Household Items</h3>
            <div className="space-y-3 mb-6">
              {householdProducts.filter((product) => {
                const state = productStates[product.id]
                return !(state && (state.bought || state.paused))
              }).length > 0 ? (
                householdProducts
                  .filter((product) => {
                    const state = productStates[product.id]
                    return !(state && (state.bought || state.paused))
                  })
                  .map((product) => (
                    <div key={product.id} className="flex justify-between text-sm text-gray-700">
                      <span>{product.title}</span>
                      <span className="font-medium">UGX {product.price.toLocaleString()}</span>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-gray-500 italic">All products have been marked</p>
              )}
            </div>
            <div className="border-t border-gray-200 my-6 pt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Subtotal</span>
                <span className="text-2xl font-bold text-gray-800">UGX {householdTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Grand Total */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-semibold mb-8">Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-900">
                <span>Personal Wear</span>
                <span>UGX {personalWearTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-900">
                <span>Household Items</span>
                <span>UGX {householdTotal.toLocaleString()}</span>
              </div>
            </div>
            <div className="border-t border-gray-500 pt-8">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Grand Total</span>
                <span className="text-3xl font-bold">UGX {grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <LightBox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  )
}
