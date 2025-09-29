"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X } from "lucide-react"

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
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [lastTouchDistance, setLastTouchDistance] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artImages.length - 1 : prev - 1))
    resetZoom()
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artImages.length - 1 ? 0 : prev + 1))
    resetZoom()
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setIsZoomed(false)
  }

  const handleZoomIn = () => {
    const newScale = Math.min(scale * 1.5, 4)
    setScale(newScale)
    setIsZoomed(newScale > 1)
  }

  const handleZoomOut = () => {
    const newScale = Math.max(scale / 1.5, 1)
    setScale(newScale)
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 })
      setIsZoomed(false)
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (e.deltaY < 0) {
      handleZoomIn()
    } else {
      handleZoomOut()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )
      setLastTouchDistance(distance)
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true)
      setStartPosition({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      )

      if (lastTouchDistance > 0) {
        const delta = distance / lastTouchDistance
        const newScale = Math.min(Math.max(scale * delta, 1), 4)
        setScale(newScale)
        setIsZoomed(newScale > 1)
        if (newScale === 1) {
          setPosition({ x: 0, y: 0 })
        }
      }
      setLastTouchDistance(distance)
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - startPosition.x,
        y: e.touches[0].clientY - startPosition.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    setLastTouchDistance(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-zinc-900/80 rounded-lg p-4 border border-zinc-700">
        <div
          ref={containerRef}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-black/50"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={imageRef}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.2s ease',
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            }}
            className="w-full h-full"
          >
            <img
              src={artImages[currentIndex].src}
              alt={artImages[currentIndex].alt}
              className="w-full h-full object-cover select-none"
              draggable={false}
            />
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Zoom controls */}
          <div className="absolute bottom-2 right-2 flex gap-2 z-10">
            <button
              onClick={handleZoomIn}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            {isZoomed && (
              <button
                onClick={resetZoom}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Reset zoom"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Instructions */}
          <div className="absolute top-2 left-2 right-2 text-center">
            <p className="text-white/70 text-xs bg-black/30 rounded px-2 py-1 inline-block">
              {scale > 1
                ? "Drag to pan • Pinch or scroll to zoom"
                : "Pinch or scroll to zoom • Tap buttons to navigate"}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {artImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                resetZoom()
              }}
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