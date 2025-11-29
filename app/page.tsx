"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { CoverSlide } from "@/components/cover-slide"
import { ProblemSlide } from "@/components/problem-slide"
import { PainSlide } from "@/components/pain-slide"
import { SolutionSlide } from "@/components/solution-slide"
import { ProductSlide } from "@/components/product-slide"
import { HowItWorksSlide } from "@/components/how-it-works-slide"
import { BusinessModelSlide } from "@/components/business-model-slide"
import { CompetitionSlide } from "@/components/competition-slide"
import { TeamSlide } from "@/components/team-slide"
import { CTASlide } from "@/components/cta-slide"
import { SlideNavigation } from "@/components/slide-navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { id: 1, component: CoverSlide },
  { id: 2, component: ProblemSlide },
  { id: 3, component: PainSlide },
  { id: 4, component: SolutionSlide },
  { id: 5, component: ProductSlide },
  { id: 6, component: HowItWorksSlide },
  { id: 7, component: BusinessModelSlide },
  { id: 8, component: CompetitionSlide },
  { id: 9, component: TeamSlide },
  { id: 10, component: CTASlide },
]

export default function PitchDeck() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 30 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        scrollPrev()
      } else if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") {
        scrollNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [scrollPrev, scrollNext])

  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <div className="flex-1 relative cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
          {slides.map((Slide) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={Slide.id}>
              <div className="h-full w-full overflow-y-auto no-scrollbar px-4 md:px-8">
                 <Slide.component />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollPrev}
          disabled={currentSlide === 0}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10 backdrop-blur-sm shadow-lg border border-border/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          disabled={currentSlide === slides.length - 1}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/80 hover:bg-secondary text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all z-10 backdrop-blur-sm shadow-lg border border-border/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <SlideNavigation totalSlides={slides.length} currentSlide={currentSlide} onSlideChange={scrollTo} />
    </div>
  )
}
