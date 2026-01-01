"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"


const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background-color: #000;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`

const Slide = styled.div<{ isActive: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`

const Button = styled(Link)`
  background-color: #4CAF50;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`

const Indicator = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => (props.isActive ? "#4CAF50" : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`

const slides = [
  {
    image: "/gate.jpeg",
    title: "Welcome to Grace College of Health",
    subtitle: "Excellence in Healthcare Education",
  },
  // {
  //   image: "/medical-students-in-classroom.jpg",
  //   title: "Welcome to Grace College of Health",
  //   subtitle: "Excellence in Healthcare Education",
  // },
  {
    image: "/enviros.jpeg",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Learning Environment",
  },
  // {
  //   image: "/hall.jpeg",
  //   title: "Expert Faculty",
  //   subtitle: "Learn from Industry Professionals",
  // },
  {
    image: "/exam.jpeg",
    title: "Expert Faculty",
    subtitle: "Learn from Industry Professionals",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
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
    <HeroContainer>
      {slides.map((slide, index) => (
        <Slide key={index} isActive={index === currentSlide} style={{ backgroundImage: `url(${slide.image})` }}>
          <SlideContent>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <Button to="/admission">Learn More</Button>
          </SlideContent>
        </Slide>
      ))}

      <NavButton className="prev" onClick={prevSlide}>
        <span>
          <FaChevronLeft />
        </span>
      </NavButton>
      <NavButton className="next" onClick={nextSlide}>
        <span>
          <FaChevronRight />
        </span>
      </NavButton>

      <Indicators>
        {slides.map((_, index) => (
          <Indicator key={index} isActive={index === currentSlide} onClick={() => goToSlide(index)} />
        ))}
      </Indicators>
    </HeroContainer>
  )
}
