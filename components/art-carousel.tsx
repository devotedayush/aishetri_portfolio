"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const artImages = [
  { src: "/art1.jpeg", alt: "Art Design 1" },
  { src: "/art2.jpeg", alt: "Art Design 2" },
  { src: "/art3.jpeg", alt: "Art Design 3" },
  { src: "/art4.jpeg", alt: "Art Design 4" },
  { src: "/art5.jpeg", alt: "Art Design 5" },
  { src: "/art6.jpeg", alt: "Art Design 6" },
  { src: "/art7.jpeg", alt: "Art Design 7" },
]

export function ArtCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artImages.length - 1 ? 0 : prev + 1))
  }

  const handleOpenInNewTab = () => {
    window.open(artImages[currentIndex].src, '_blank')
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-700">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/50">
          <img
            src={artImages[currentIndex].src}
            alt={artImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Open in new tab button */}
          <button
            onClick={handleOpenInNewTab}
            className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors flex items-center gap-2"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-xs pr-1">View full size</span>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {artImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-amber-400" : "bg-zinc-600"
              }`}
              aria-label={`Go to artwork ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-zinc-400 text-sm mt-3">
          {currentIndex + 1} / {artImages.length}
        </p>
      </div>
    </div>
  )
}