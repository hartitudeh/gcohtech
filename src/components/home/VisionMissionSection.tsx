import styled from "styled-components"

const Container = styled.section`
  background-color: #8080808a;
  background: url("/topographic-bg-30pc.png");

  padding: 60px 40px;
  margin: 40px 0;

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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 24px;
    color: #4CAF50;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
  }

  ul {
    list-style: none;
    margin-top: 15px;

    li {
      padding: 8px 0;
      color: #555;
      font-size: 15px;

      &:before {
        content: '✓ ';
        color: #4CAF50;
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
`

export default function VisionMissionSection() {
  return (
    <Container>
      <Content>
        <Title>Our Vision, Mission & Core Values</Title>
        <CardsGrid>
          <Card>
            <h3>🎯 Vision</h3>
            <p>
              To be a leading institution in healthcare education, recognized globally for producing compassionate,
              competent, and innovative healthcare professionals who transform lives and advance the healthcare
              industry.
            </p>
          </Card>

          <Card>
            <h3>🏥 Mission</h3>
            <p>
              To provide comprehensive, quality healthcare education that combines theoretical knowledge with practical
              skills, fostering critical thinking and professional excellence in our students.
            </p>
          </Card>

          <Card>
            <h3>💎 Core Values</h3>
            <ul>
              <li>Excellence in Education</li>
              <li>Integrity and Ethics</li>
              <li>Compassion and Care</li>
              <li>Innovation and Research</li>
              <li>Community Service</li>
              <li>Diversity and Inclusion</li>
            </ul>
          </Card>
        </CardsGrid>
      </Content>
    </Container>
  )
}
