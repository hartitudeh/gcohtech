"use client"

import { useState } from "react"
import styled from "styled-components"
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa"

const Container = styled.section`
  background-color: #f5f5f5;
  background: url("/topographic-bg-30pc.png");
  padding: 80px 40px;
  // margin: 40px 0;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #1a3a52;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`

const TestimonialContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`

const TestimonialCard = styled.div<{ isActive: boolean }>`
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease;
  display: ${(props) => (props.isActive ? "block" : "none")};

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Stars = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
  color: #ffc107;
`

const Quote = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  font-style: italic;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const AuthorInfo = styled.div`
  h4 {
    font-size: 16px;
    color: #1a3a52;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #999;
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &.prev {
    left: -60px;

    @media (max-width: 768px) {
      left: 10px;
    }
  }

  &.next {
    right: -60px;

    @media (max-width: 768px) {
      right: 10px;
    }
  }
`

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Nursing Graduate",
    image: "/tes1.jpg",
    quote:
      "Grace College provided me with excellent clinical training and mentorship. The faculty is incredibly supportive and the curriculum is comprehensive.",
    rating: 5,
  },
  {
    name: "Toluwani Adegoke",
    role: "Laboratory Science Student",
    image: "/tes1.jpg",
    quote:
      "The hands-on experience and modern facilities at Grace College have prepared me well for my career. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Pharmacy Graduate",
    image: "/tes1.jpg",
    quote: "Outstanding education quality and supportive community. Grace College truly cares about student success.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Container>
      <Content>
        <Title>Student Testimonials</Title>
        <TestimonialContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} isActive={index === currentTestimonial}>
              <Stars>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>
                    <FaStar />
                  </span>
                ))}
              </Stars>
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <Avatar src={testimonial.image} alt={testimonial.name} />
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}

          <NavButton className="prev" onClick={prevTestimonial}>
            <span>
              <FaChevronLeft />
            </span>
          </NavButton>
          <NavButton className="next" onClick={nextTestimonial}>
            <span>
              <FaChevronRight />
            </span>
          </NavButton>
        </TestimonialContainer>
      </Content>
    </Container>
  )
}
