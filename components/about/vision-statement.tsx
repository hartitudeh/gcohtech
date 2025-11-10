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

const VisionBox = styled.div`
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;

    p {
      font-size: 1rem;
    }
  }
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const DetailCard = styled.div`
  background-color: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  border-left: 4px solid var(--color-accent);

  h3 {
    font-size: 1.25rem;
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

export default function VisionStatement() {
  return (
    <Container>
      <Title>Our Vision</Title>

      <VisionBox>
        <p>
          To be a leading institution in health education, recognized globally for producing compassionate, competent,
          and innovative healthcare professionals who transform lives, advance the healthcare industry, and contribute
          to the well-being of communities worldwide.
        </p>
      </VisionBox>

      <DetailsContainer>
        <DetailCard>
          <h3>Excellence</h3>
          <p>We strive for excellence in all aspects of education, research, and service delivery.</p>
        </DetailCard>

        <DetailCard>
          <h3>Innovation</h3>
          <p>We embrace innovation and continuous improvement in healthcare education and practice.</p>
        </DetailCard>

        <DetailCard>
          <h3>Global Impact</h3>
          <p>We aim to create healthcare professionals who can make a positive impact globally.</p>
        </DetailCard>
      </DetailsContainer>
    </Container>
  )
}
