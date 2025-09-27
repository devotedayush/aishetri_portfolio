'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type QuoteCarouselProps = {
  className?: string
}

export function QuoteCarousel({ className }: QuoteCarouselProps) {
  const images = ['/quote3.jpeg', '/quote.png', '/quote2.jpeg']
  return (
    <div className={className}>
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {images.map((src, idx) => (
            <CarouselItem key={idx}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900">
                <img src={src} alt={`Quote ${idx + 1}`} className="h-full w-full object-contain p-2" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black/60 border-amber-600/30 text-amber-200 hover:bg-black/80" />
        <CarouselNext className="bg-black/60 border-amber-600/30 text-amber-200 hover:bg-black/80" />
      </Carousel>
    </div>
  )
}
