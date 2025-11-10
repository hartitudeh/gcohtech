"use client"

import styled from "styled-components"

const Container = styled.div`
  // max-width: 900px;
  // margin: 0 auto;
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
  color:  var(--color-text-primary);
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Card = styled.div`
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 20px;
    color: #4CAF50;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #666;
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

      <Grid>
        <Card>
          <h3>Quality Education</h3>
          <p>Deliver evidence-based, contemporary health education that meets international standards.</p>
        </Card>

        <Card>
          <h3>Practical Training</h3>
          <p>Provide hands-on clinical experience through partnerships with leading healthcare facilities.</p>
        </Card>

        <Card>
          <h3>Ethical Practice</h3>
          <p>Instill strong ethical values and professional responsibility in all our graduates.</p>
        </Card>

        <Card>
          <h3>Research & Innovation</h3>
          <p>Encourage research and innovation to advance healthcare knowledge and practice.</p>
        </Card>

        <Card>
          <h3>Community Engagement</h3>
          <p>Foster community partnerships and outreach programs to improve public health.</p>
        </Card>

        <Card>
          <h3>Continuous Improvement</h3>
          <p>Regularly update curriculum and teaching methods to reflect current healthcare trends.</p>
        </Card>
      </Grid>
    </Container>
  )
}
