import styled from "styled-components"

const WelcomeContainer = styled.section`
  max-width: 1400px;
  margin: 60px auto;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    margin: 40px auto;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  h2 {
    font-size: 36px;
    color: #1a3a52;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 15px;
  }

  .provost-title {
    color: #4CAF50;
    font-weight: bold;
    margin-top: 20px;
  }
`

export default function WelcomeSection() {
  return (
    <WelcomeContainer>
      <Image src="/college-provost-professional.jpg" alt="College Provost" />
      <Content>
        <h2>Welcome Address</h2>
        <p>Dear Students, Parents, and Stakeholders,</p>
        <p>
          It is with great pride and joy that I welcome you to Grace College of Health. Our institution stands as a
          beacon of excellence in healthcare education, committed to nurturing the next generation of healthcare
          professionals.
        </p>
        <p>
          At Grace College, we believe that quality healthcare education goes beyond textbooks and lectures. We provide
          hands-on experience, mentorship from industry experts, and a supportive community that fosters growth and
          innovation.
        </p>
        <p>
          Our mission is to equip students with the knowledge, skills, and values necessary to make a meaningful
          difference in the healthcare industry and society at large.
        </p>
        <p className="provost-title">
          Prof. Morenikeji Adetunji
          <br />
          Provost, Grace College of Health
        </p>
      </Content>
    </WelcomeContainer>
  )
}
