"use client"

import styled from "styled-components"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

const MissionBox = styled.div`
  background-color: var(--color-surface);
  padding: 3rem;
  border-radius: 1rem;
  border: 2px solid var(--color-accent);
  margin-bottom: 2rem;

  p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--color-text-primary);
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;

    p {
      font-size: 1rem;
    }
  }
`

const ObjectivesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const ObjectiveCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-top: 4px solid var(--color-primary);

  h3 {
    font-size: 1.125rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: bold;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.8;
    margin: 0;
  }
`

export default function MissionStatement() {
  return (
    <Container>
      <Title>Our Mission</Title>

      <MissionBox>
        <p>
          To provide comprehensive, quality health education that combines theoretical knowledge with practical skills,
          fostering ethical practice, lifelong learning, and professional excellence in our students. We are committed
          to developing healthcare professionals who are competent, compassionate, and dedicated to improving health
          outcomes and serving their communities with integrity and innovation.
        </p>
      </MissionBox>

      <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "1.5rem", fontWeight: "bold" }}>
        Our Key Objectives
      </h3>

      <ObjectivesContainer>
        <ObjectiveCard>
          <h3>Quality Education</h3>
          <p>Deliver evidence-based, contemporary health education that meets international standards.</p>
        </ObjectiveCard>

        <ObjectiveCard>
          <h3>Practical Training</h3>
          <p>Provide hands-on clinical experience through partnerships with leading healthcare facilities.</p>
        </ObjectiveCard>

        <ObjectiveCard>
          <h3>Ethical Practice</h3>
          <p>Instill strong ethical values and professional responsibility in all our graduates.</p>
        </ObjectiveCard>

        <ObjectiveCard>
          <h3>Research & Innovation</h3>
          <p>Encourage research and innovation to advance healthcare knowledge and practice.</p>
        </ObjectiveCard>

        <ObjectiveCard>
          <h3>Community Engagement</h3>
          <p>Foster community partnerships and outreach programs to improve public health.</p>
        </ObjectiveCard>

        <ObjectiveCard>
          <h3>Continuous Improvement</h3>
          <p>Regularly update curriculum and teaching methods to reflect current healthcare trends.</p>
        </ObjectiveCard>
      </ObjectivesContainer>
    </Container>
  )
}
