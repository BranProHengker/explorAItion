"use client"

interface SlideNavigationProps {
  totalSlides: number
  currentSlide: number
  onSlideChange: (index: number) => void
}

export function SlideNavigation({ totalSlides, currentSlide, onSlideChange }: SlideNavigationProps) {
  return (
    <div className="bg-card border-t border-border px-4 py-4 md:px-6">
      <div className="flex items-center justify-between max-w-6xl mx-auto gap-4">
        <span className="text-muted-foreground text-sm font-mono shrink-0">
          <span className="hidden sm:inline">Slide </span>{currentSlide + 1} / {totalSlides}
        </span>
        <div className="flex gap-1.5 md:gap-2 overflow-x-auto no-scrollbar max-w-[200px] md:max-w-none justify-center px-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all shrink-0 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <span className="text-muted-foreground text-sm hidden sm:block text-right shrink-0">
          Marketplace Shield © 2025
        </span>
      </div>
    </div>
  )
}
