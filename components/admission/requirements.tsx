"use client"

import styled from "styled-components"
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"

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

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const RequirementCard = styled.div`
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
    margin-bottom: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      color: var(--color-accent);
      font-size: 1.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1rem;
      color: var(--color-text-secondary);
      font-size: 0.95rem;
      line-height: 1.6;

      svg {
        color: var(--color-accent);
        flex-shrink: 0;
        margin-top: 0.25rem;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const NoteBox = styled.div`
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  .icon {
    color: #f59e0b;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .content {
    h4 {
      color: var(--color-primary);
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    p {
      color: var(--color-text-secondary);
      font-size: 0.9rem;
      margin: 0;
      line-height: 1.6;
    }
  }
`

export default function Requirements() {
  return (
    <Container>
      <Title>Admission Requirements</Title>

      <RequirementsGrid>
        <RequirementCard>
          <h3>
            <FaCheckCircle /> General Requirements
          </h3>
          <ul>
            <li>High School Diploma or Equivalent (WAEC, NECO, JAMB)</li>
            <li>Minimum GPA of 2.5 or equivalent</li>
            <li>Valid National Identification</li>
            <li>Birth Certificate</li>
            <li>Medical Clearance Certificate</li>
            <li>Police Clearance Certificate</li>
          </ul>
        </RequirementCard>

        <RequirementCard>
          <h3>
            <FaCheckCircle /> Academic Requirements
          </h3>
          <ul>
            <li>English Language: Credit (A1-C6)</li>
            <li>Mathematics: Credit (A1-C6)</li>
            <li>Biology: Credit (A1-C6)</li>
            <li>Chemistry: Credit (A1-C6)</li>
            <li>Physics: Credit (A1-C6)</li>
            <li>Minimum 5 O-Level Credits in relevant subjects</li>
          </ul>
        </RequirementCard>

        <RequirementCard>
          <h3>
            <FaCheckCircle /> Documentation
          </h3>
          <ul>
            <li>Completed Application Form</li>
            <li>Certified Copies of Academic Transcripts</li>
            <li>Passport-sized Photographs (4 copies)</li>
            <li>Letter of Recommendation (2 copies)</li>
            <li>Statement of Purpose</li>
            <li>Proof of Payment of Application Fee</li>
          </ul>
        </RequirementCard>
      </RequirementsGrid>

      <NoteBox>
        <div className="icon">
          <FaExclamationCircle />
        </div>
        <div className="content">
          <h4>Important Note</h4>
          <p>
            All documents must be original or certified copies. Applicants with qualifications from outside Nigeria must
            provide WAEC/NECO equivalence certificates. International applicants must provide proof of English language
            proficiency (TOEFL/IELTS).
          </p>
        </div>
      </NoteBox>
    </Container>
  )
}
