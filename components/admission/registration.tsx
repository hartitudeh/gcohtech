"use client"

import styled from "styled-components"

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

const StepsContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`

const StepCard = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr;
    gap: 1rem;
  }
`

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`

const StepContent = styled.div`
  background-color: white;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--color-accent);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
    font-weight: bold;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;

    li {
      color: var(--color-text-secondary);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--color-accent);
        font-weight: bold;
      }
    }
  }
`

const TimelineContainer = styled.div`
  background-color: var(--color-surface);
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-bottom: 2rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const TimelineItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border-left: 4px solid var(--color-accent);

  .date {
    font-weight: bold;
    color: var(--color-primary);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .event {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }
`

export default function Registration() {
  return (
    <Container>
      <Title>Registration Process</Title>

      <StepsContainer>
        <StepCard>
          <StepNumber>1</StepNumber>
          <StepContent>
            <h3>Create Your Account</h3>
            <p>Visit our online portal and create a new account with your email address and personal information.</p>
            <ul>
              <li>Provide valid email address</li>
              <li>Create a strong password</li>
              <li>Verify your email</li>
            </ul>
          </StepContent>
        </StepCard>

        <StepCard>
          <StepNumber>2</StepNumber>
          <StepContent>
            <h3>Complete Application Form</h3>
            <p>Fill out the comprehensive application form with all required personal and academic information.</p>
            <ul>
              <li>Personal details</li>
              <li>Educational background</li>
              <li>Program selection</li>
            </ul>
          </StepContent>
        </StepCard>

        <StepCard>
          <StepNumber>3</StepNumber>
          <StepContent>
            <h3>Upload Documents</h3>
            <p>Upload all required documents in the specified formats (PDF, JPG, PNG).</p>
            <ul>
              <li>Academic transcripts</li>
              <li>Identification documents</li>
              <li>Medical clearance</li>
            </ul>
          </StepContent>
        </StepCard>

        <StepCard>
          <StepNumber>4</StepNumber>
          <StepContent>
            <h3>Pay Application Fee</h3>
            <p>Pay the non-refundable application fee through our secure payment gateway.</p>
            <ul>
              <li>Application Fee: ₦5,000</li>
              <li>Multiple payment options available</li>
              <li>Instant payment confirmation</li>
            </ul>
          </StepContent>
        </StepCard>

        <StepCard>
          <StepNumber>5</StepNumber>
          <StepContent>
            <h3>Submit Application</h3>
            <p>Review all information and submit your application. You will receive a confirmation email.</p>
            <ul>
              <li>Final review of information</li>
              <li>Submit application</li>
              <li>Receive confirmation number</li>
            </ul>
          </StepContent>
        </StepCard>
      </StepsContainer>

      <TimelineContainer>
        <h3>Important Dates</h3>
        <TimelineGrid>
          <TimelineItem>
            <div className="date">December 31, 2025</div>
            <div className="event">Application Deadline</div>
          </TimelineItem>
          <TimelineItem>
            <div className="date">January 15, 2026</div>
            <div className="event">Entrance Examination</div>
          </TimelineItem>
          <TimelineItem>
            <div className="date">February 28, 2026</div>
            <div className="event">Results Released</div>
          </TimelineItem>
          <TimelineItem>
            <div className="date">March 15, 2026</div>
            <div className="event">Enrollment Begins</div>
          </TimelineItem>
        </TimelineGrid>
      </TimelineContainer>
    </Container>
  )
}
