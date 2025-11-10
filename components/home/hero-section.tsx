"use client"

import { useState, useEffect } from "react"

const slides = [
  {
    title: "Welcome to GRACE College of Health",
    subtitle: "Excellence in Health Education and Training",
    image: "/medical-students-in-classroom.jpg",
  },
  {
    title: "State-of-the-Art Facilities",
    subtitle: "Modern laboratories and clinical training centers",
    image: "/hospital-medical-facility.jpg",
  },
  {
    title: "Expert Faculty",
    subtitle: "Learn from industry professionals and experienced educators",
    image: "/medical-professionals-teaching.jpg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-96 md:h-[600px] overflow-hidden bg-[#0f1f35]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-800 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-lg md:text-2xl drop-shadow-md">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white text-2xl p-4 rounded-full transition-colors z-10 md:left-8"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white text-2xl p-4 rounded-full transition-colors z-10 md:right-8"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
