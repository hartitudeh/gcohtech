import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.section`
  max-width: 1400px;
  margin: 60px auto;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 40px auto;
  }
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Card = styled.div`
  background: linear-gradient(135deg, #1a3a52 0%, #2d5a7b 100%);
  color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`

const Button = styled(Link)`
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 25px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

export default function AdmissionSection() {
  return (
    <Container>
      <Title>Current Admission in Progress</Title>
      <Grid>
        <Card>
          <h3>📚 Nursing</h3>
          <p>Bachelor of Science in Nursing with clinical training</p>
          <Button to="/register">Apply Now</Button>
        </Card>
        <Card>
          <h3>🔬 Laboratory Science</h3>
          <p>Medical Laboratory Science and Diagnostics</p>
          <Button to="/register">Apply Now</Button>
        </Card>
        <Card>
          <h3>🦷 Dental Health</h3>
          <p>Dental Hygiene and Oral Health Programs</p>
          <Button to="/register">Apply Now</Button>
        </Card>
        <Card>
          <h3>💊 Pharmacy</h3>
          <p>Pharmaceutical Sciences and Practice</p>
          <Button to="/register">Apply Now</Button>
        </Card>
      </Grid>
    </Container>
  )
}
