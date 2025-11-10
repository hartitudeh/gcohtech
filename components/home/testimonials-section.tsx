"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    program: "Bachelor of Science in Nursing",
    text: "GRACE College has transformed my career aspirations into reality. The faculty is incredibly supportive, and the practical training is outstanding.",
    image: "/female-student-portrait.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    program: "Diploma in Medical Laboratory Science",
    text: "The curriculum is comprehensive and industry-relevant. I feel well-prepared for my career in medical diagnostics.",
    image: "/male-student-portrait.jpg",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    program: "Certificate in Health Administration",
    text: "Excellent learning environment with state-of-the-art facilities. The instructors are passionate about student success.",
    image: "/african-student-portrait.jpg",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="bg-gray-50 py-16 px-8 my-8 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold text-[#1e3a5f] text-center mb-12">What Our Students Say</h2>

        <div className="flex items-center justify-center gap-8 md:gap-4">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="bg-[#1e3a5f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#2d5a8c] transition-colors flex-shrink-0 text-xl"
          >
            ◀
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl w-full text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-[#00a86b] text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">{current.text}</p>

            {/* Student Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-[#1e3a5f]">{current.name}</div>
                <div className="text-sm text-gray-600">{current.program}</div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="bg-[#1e3a5f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#2d5a8c] transition-colors flex-shrink-0 text-xl"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}
