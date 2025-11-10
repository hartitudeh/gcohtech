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

const VisionBox = styled.div`
  color:  var(--color-text-primary);
  border-radius: 1rem;
  margin-bottom: 2rem;

  p {
    font-size: 1.125rem;
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

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 2rem;
//   margin-top: 2rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 1.5rem;
//   }
// `

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

      <Grid>
        <Card>
          <h3>Excellence</h3>
          <p>We strive for excellence in all aspects of education, research, and service delivery.</p>
        </Card>

        <Card>
          <h3>Innovation</h3>
          <p>We embrace innovation and continuous improvement in healthcare education and practice.</p>
        </Card>

        <Card>
          <h3>Global Impact</h3>
          <p>We aim to create healthcare professionals who can make a positive impact globally.</p>
        </Card>
      </Grid>
    </Container>
  )
}
