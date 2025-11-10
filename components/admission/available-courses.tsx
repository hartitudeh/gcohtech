"use client"

import { useState } from "react"
import styled from "styled-components"
import { FaChevronDown, FaChevronUp, FaClock, FaUsers, FaBook } from "react-icons/fa"

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const CoursesGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const CourseCard = styled.div`
  background-color: white;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

const CourseHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-surface);
  }

  .course-title {
    text-align: left;
    flex: 1;

    h3 {
      font-size: 1.25rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    p {
      color: var(--color-text-secondary);
      font-size: 0.9rem;
      margin: 0;
    }
  }

  .icon {
    color: var(--color-accent);
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-left: 1rem;
  }
`

const CourseContent = styled.div`
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const DetailItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  .icon {
    font-size: 1.5rem;
    color: var(--color-accent);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .content {
    h4 {
      font-size: 0.95rem;
      color: var(--color-primary);
      margin-bottom: 0.25rem;
      font-weight: bold;
    }

    p {
      color: var(--color-text-secondary);
      font-size: 0.85rem;
      margin: 0;
    }
  }
`

const courses = [
  {
    title: "Bachelor of Science in Nursing",
    description: "Comprehensive nursing education program",
    duration: "4 Years",
    capacity: "120 Students",
    focus: "Clinical Practice & Theory",
    details:
      "Prepare for a rewarding career in nursing with our comprehensive 4-year program. Gain hands-on experience in our state-of-the-art clinical labs and partner hospitals.",
  },
  {
    title: "Diploma in Medical Laboratory Science",
    description: "Professional laboratory technician training",
    duration: "3 Years",
    capacity: "80 Students",
    focus: "Laboratory Techniques",
    details:
      "Master the skills needed to become a proficient medical laboratory scientist. Our program covers diagnostic procedures, quality assurance, and patient care.",
  },
  {
    title: "Certificate in Health Administration",
    description: "Healthcare management and administration",
    duration: "2 Years",
    capacity: "60 Students",
    focus: "Management Skills",
    details:
      "Develop leadership and management skills essential for healthcare administration. Learn about healthcare systems, finance, and organizational management.",
  },
  {
    title: "Diploma in Midwifery",
    description: "Specialized maternal and child health care",
    duration: "3 Years",
    capacity: "50 Students",
    focus: "Maternal Care",
    details:
      "Specialize in maternal and child health care with our comprehensive midwifery program. Gain practical experience in delivery rooms and postnatal care.",
  },
]

export default function AvailableCourses() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(0)

  return (
    <Container>
      <Title>Available Programs</Title>
      <CoursesGrid>
        {courses.map((course, index) => (
          <CourseCard key={index}>
            <CourseHeader onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}>
              <div className="course-title">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
              <div className="icon">{expandedCourse === index ? <FaChevronUp /> : <FaChevronDown />}</div>
            </CourseHeader>

            {expandedCourse === index && (
              <CourseContent>
                <DetailItem>
                  <div className="icon">
                    <FaClock />
                  </div>
                  <div className="content">
                    <h4>Duration</h4>
                    <p>{course.duration}</p>
                  </div>
                </DetailItem>

                <DetailItem>
                  <div className="icon">
                    <FaUsers />
                  </div>
                  <div className="content">
                    <h4>Capacity</h4>
                    <p>{course.capacity}</p>
                  </div>
                </DetailItem>

                <DetailItem>
                  <div className="icon">
                    <FaBook />
                  </div>
                  <div className="content">
                    <h4>Focus Area</h4>
                    <p>{course.focus}</p>
                  </div>
                </DetailItem>

                <div style={{ gridColumn: "1 / -1" }}>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6" }}>{course.details}</p>
                </div>
              </CourseContent>
            )}
          </CourseCard>
        ))}
      </CoursesGrid>
    </Container>
  )
}
