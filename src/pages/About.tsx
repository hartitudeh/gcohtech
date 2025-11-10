"use client"

import { useState } from "react"
import styled from "styled-components";
import AboutCollege from "../../components/about/about-college";
import MissionStatement from "../../components/about/mission-statement";
import VisionStatement from "../../components/about/vision-statement";

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

const OfficialCard = styled(Card)`
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 5px;
  }

  .title {
    color: #999;
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
  }
`

export default function About() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <Container>
      <Title>About Grace College</Title>

      <TabContainer>
        <Tab isActive={activeTab === "about"} onClick={() => setActiveTab("about")}>
          About the College
        </Tab>
        <Tab isActive={activeTab === "vision"} onClick={() => setActiveTab("vision")}>
          Vision
        </Tab>
        <Tab isActive={activeTab === "mission"} onClick={() => setActiveTab("mission")}>
          Mission
        </Tab>
        <Tab isActive={activeTab === "officials"} onClick={() => setActiveTab("officials")}>
          Principal Officials
        </Tab>
      </TabContainer>

      <Content>
        {activeTab === "about" && (
          <Section>

            <AboutCollege />
            {/* <h2>About Grace College of Health</h2>
            <p>
              Grace College of Health is a premier institution dedicated to providing world-class healthcare education
              and training. Established with a vision to transform healthcare through education, we have been at the
              forefront of healthcare professional development for over two decades.
            </p> */}
            {/* <p>
              Our college is equipped with state-of-the-art facilities, experienced faculty, and a comprehensive
              curriculum designed to meet international standards. We are committed to producing healthcare
              professionals who are not only technically competent but also ethically sound and compassionate.
            </p> */}
            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>Why Choose Grace College?</h3>
            <Grid>
              <Card>
                <h3>🎓 Quality Education</h3>
                <p>
                  Comprehensive curriculum aligned with international standards and best practices in healthcare
                  education.
                </p>
              </Card>
              <Card>
                <h3>🏥 Clinical Experience</h3>
                <p>
                  Hands-on training in affiliated hospitals and healthcare facilities with real patient care experience.
                </p>
              </Card>
              <Card>
                <h3>👨‍🏫 Expert Faculty</h3>
                <p>
                  Experienced educators and practitioners who bring industry knowledge and mentorship to the classroom.
                </p>
              </Card>
              <Card>
                <h3>🔬 Modern Facilities</h3>
                <p>
                  State-of-the-art laboratories, simulation centers, and learning resources for practical skill
                  development.
                </p>
              </Card>
              <Card>
                <h3>🌍 Global Recognition</h3>
                <p>Accredited programs recognized internationally, opening doors for global career opportunities.</p>
              </Card>
              <Card>
                <h3>💼 Career Support</h3>
                <p>Comprehensive career guidance, placement assistance, and alumni network for professional growth.</p>
              </Card>
            </Grid>
          </Section>
        )}

        {activeTab === "vision" && (
          <Section>
            <VisionStatement />
          </Section>
        )}

        {activeTab === "mission" && (
          <Section>
            <MissionStatement />
          </Section>
        )}

        {activeTab === "officials" && (
          <Section>
            <h2>Principal Officials</h2>
            <Grid>
              <OfficialCard>
                <img src="/college-provost-professional.JPG" alt="Prof. Morenikeji Adetunji" />
                <h3>Prof. Morenikeji Adetunji</h3>
                <div className="title">Provost</div>
                <p>Over 25 years of experience in healthcare education and administration.</p>
              </OfficialCard>
              <OfficialCard>
                <img src="/rector.JPG" alt="Pst. Amos Adetunji" />
                <h3>Pst. Amos Adetunji</h3>
                <div className="title">Rector</div>
                <p>Leading curriculum development and academic excellence initiatives.</p>
              </OfficialCard>
              <OfficialCard>
                <img src="/hod.JPG" alt="Mr. Dotun Adedoyin" />
                <h3>Mr. Dotun Adedoyin</h3>
                <div className="title">Head of Department</div>
                <p>Overseeing clinical training programs and hospital partnerships.</p>
              </OfficialCard>
              <OfficialCard>
                <img src="/rectors-p.a.JPG" alt="Mr. Temitope Amusan" />
                <h3>Mr. Temitope Amusan</h3>
                <div className="title">Director of Research</div>
                <p>Promoting research initiatives and academic publications.</p>
              </OfficialCard>
            </Grid>
          </Section>
        )}
      </Content>
    </Container>
  )
}
