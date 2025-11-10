"use client"

import { useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom"
import Login from "./Login";


const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #1a3a52;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid #e0e0e0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 5px;
  }
`

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
  background-color: #4CAF50;
  width: 20%;
  color: #fff;
  font-weight: 700;
  padding: 10px 25px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

const Tab = styled.button<{ isActive: boolean }>`
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#4CAF50" : "#666")};
  border-bottom: 3px solid ${(props) => (props.isActive ? "#4CAF50" : "transparent")};
  transition: all 0.3s ease;

  &:hover {
    color: #4CAF50;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`

const Content = styled.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Section = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 28px;
    color: #1a3a52;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
  }
`

const CourseCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 20px;
    color: #4CAF50;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
  }

  .detail-item {
    font-size: 14px;
    color: #666;

    strong {
      color: #1a3a52;
    }
  }
`

const RequirementsList = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 12px 0;
    padding-left: 30px;
    position: relative;
    color: #555;
    font-size: 16px;

    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #4CAF50;
      font-weight: bold;
      font-size: 18px;
    }
  }
`

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`

const StepCard = styled.div`
  background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%);
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;

  .step-number {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #4CAF50;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #ddd;
  }
`

// const LoginForm = styled.form`
//   max-width: 400px;
//   margin: 30px auto;
//   background: white;
//   padding: 30px;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

//   .form-group {
//     margin-bottom: 20px;

//     label {
//       display: block;
//       margin-bottom: 8px;
//       color: #1a3a52;
//       font-weight: 500;
//     }

//     input {
//       width: 100%;
//       padding: 10px;
//       border: 1px solid #ddd;
//       border-radius: 4px;
//       font-size: 14px;

//       &:focus {
//         outline: none;
//         border-color: #4CAF50;
//         box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
//       }
//     }
//   }

//   button {
//     width: 100%;
//     padding: 12px;
//     background-color: #4CAF50;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #45a049;
//     }
//   }
// `

export default function Admission() {
  const [activeTab, setActiveTab] = useState("courses")
  const [expandedCourse, setExpandedCourse] = useState<number | null>(0)

  const courses = [
    {
      name: "Bachelor of Science in Nursing",
      duration: "4 Years",
      capacity: "100 Students",
      focus: "Clinical Nursing, Patient Care, Healthcare Management",
    },
    {
      name: "Medical Laboratory Science",
      duration: "3 Years",
      capacity: "60 Students",
      focus: "Diagnostics, Pathology, Laboratory Management",
    },
    {
      name: "Dental Hygiene",
      duration: "3 Years",
      capacity: "40 Students",
      focus: "Oral Health, Preventive Dentistry, Patient Education",
    },
    {
      name: "Pharmaceutical Sciences",
      duration: "4 Years",
      capacity: "50 Students",
      focus: "Pharmacology, Drug Development, Clinical Pharmacy",
    },
  ]

  return (
    <Container>
      <Title>Admission Information</Title>

      <TabContainer>
        <Tab isActive={activeTab === "courses"} onClick={() => setActiveTab("courses")}>
          Available Courses
        </Tab>
        <Tab isActive={activeTab === "requirements"} onClick={() => setActiveTab("requirements")}>
          Requirements
        </Tab>
        <Tab isActive={activeTab === "registration"} onClick={() => setActiveTab("registration")}>
          Registration
        </Tab>
        <Tab isActive={activeTab === "login"} onClick={() => setActiveTab("login")}>
          Login
        </Tab>
      </TabContainer>

      <Content>
        {activeTab === "courses" && (
          <Section>
            <h2>Available Courses</h2>
            <p>
              Explore our comprehensive healthcare education programs designed to prepare you for a successful career.
            </p>
            {courses.map((course, index) => (
              <CourseCard key={index} onClick={() => setExpandedCourse(expandedCourse === index ? null : index)}>
                <h3>
                  {course.name}
                  <span>{expandedCourse === index ? "−" : "+"}</span>
                </h3>
                {expandedCourse === index && (
                  <div className="details">
                    <div className="detail-item">
                      <strong>Duration:</strong> {course.duration}
                    </div>
                    <div className="detail-item">
                      <strong>Capacity:</strong> {course.capacity}
                    </div>
                    <div className="detail-item">
                      <strong>Focus Areas:</strong> {course.focus}
                    </div>
                  </div>
                )}
              </CourseCard>
            ))}
          </Section>
        )}

        {activeTab === "requirements" && (
          <Section>
            <h2>Admission Requirements</h2>

            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>General Requirements</h3>
            <RequirementsList>
              <li>High School Diploma or equivalent qualification</li>
              <li>Minimum GPA of 3.0 or equivalent</li>
              <li>Valid identification document</li>
              <li>Birth certificate or passport</li>
              <li>Medical clearance certificate</li>
            </RequirementsList>

            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>Academic Requirements</h3>
            <RequirementsList>
              <li>English Language proficiency (TOEFL/IELTS for international students)</li>
              <li>Mathematics and Science background</li>
              <li>Minimum score in entrance examination</li>
              <li>Academic transcripts from previous institutions</li>
            </RequirementsList>

            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>Documentation</h3>
            <RequirementsList>
              <li>Completed application form</li>
              <li>Statement of purpose</li>
              <li>Letters of recommendation (2-3)</li>
              <li>Curriculum Vitae</li>
              <li>Proof of financial support</li>
              <li>Health insurance documentation</li>
            </RequirementsList>
          </Section>
        )}

        {activeTab === "registration" && (
          <Section>
            <h2>Registration Process</h2>
            <p>Follow these steps to complete your admission registration:</p>
            <StepContainer>
              <StepCard>
                <div className="step-number">1</div>
                <h3>Online Application</h3>
                <p>Fill out the online application form with your personal and academic information.</p>
              </StepCard>
              <StepCard>
                <div className="step-number">2</div>
                <h3>Document Submission</h3>
                <p>Upload all required documents including transcripts and certificates.</p>
              </StepCard>
              <StepCard>
                <div className="step-number">3</div>
                <h3>Entrance Exam</h3>
                <p>Take the entrance examination to assess your academic readiness.</p>
              </StepCard>
              <StepCard>
                <div className="step-number">4</div>
                <h3>Interview</h3>
                <p>Participate in a personal interview with the admissions committee.</p>
              </StepCard>
              <StepCard>
                <div className="step-number">5</div>
                <h3>Admission Decision</h3>
                <p>Receive your admission decision via email within 2-3 weeks.</p>
              </StepCard>
              <StepCard>
                <div className="step-number">6</div>
                <h3>Enrollment</h3>
                <p>Complete enrollment and pay tuition fees to secure your place.</p>
              </StepCard>
            </StepContainer>
            <Button to="/register">Apply Now</Button>
          </Section>
        )}

        {activeTab === "login" && (
          <Section>
            <h2>Applicant Portal Login</h2>
            <Login />
            {/* <LoginForm
              onSubmit={(e) => {
                e.preventDefault()
                alert("Login functionality would be implemented here")
              }}
            >
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
              </div>
              <button type="submit">Login</button>
              <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px", color: "#666" }}>
                Don't have an account?{" "}
                <a href="#" style={{ color: "#4CAF50" }}>
                  Create one here
                </a>
              </p>
            </LoginForm> */}
          </Section>
        )}
      </Content>
    </Container>
  )
}
