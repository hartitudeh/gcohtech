"use client"

import styled from "styled-components"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 3rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`

const OfficialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const OfficialCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: var(--color-surface);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const InfoContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 1.25rem;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .position {
    color: var(--color-accent);
    font-weight: 600;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }
`

const officials = [
  {
    name: "Dr. James Okonkwo",
    position: "Principal / Rector",
    bio: "With over 25 years of experience in health education and administration, Dr. Okonkwo leads GRACE College with vision and excellence.",
    image: "/placeholder.svg?key=official1",
  },
  {
    name: "Prof. Amara Adeyemi",
    position: "Deputy Principal (Academic)",
    bio: "A renowned educator and researcher with expertise in nursing education and curriculum development.",
    image: "/placeholder.svg?key=official2",
  },
  {
    name: "Dr. Chioma Nwosu",
    position: "Deputy Principal (Administration)",
    bio: "Experienced administrator dedicated to ensuring smooth operations and student welfare.",
    image: "/placeholder.svg?key=official3",
  },
  {
    name: "Prof. Emeka Eze",
    position: "Dean of Academic Affairs",
    bio: "Leading academic excellence with a focus on innovative teaching methods and student success.",
    image: "/placeholder.svg?key=official4",
  },
  {
    name: "Dr. Ngozi Okoro",
    position: "Dean of Student Affairs",
    bio: "Committed to holistic student development and creating a supportive learning environment.",
    image: "/placeholder.svg?key=official5",
  },
  {
    name: "Mr. Tunde Adebayo",
    position: "Registrar",
    bio: "Ensuring efficient administrative processes and maintaining institutional records and standards.",
    image: "/placeholder.svg?key=official6",
  },
]

export default function PrincipalOfficials() {
  return (
    <Container>
      <Title>Principal Officials</Title>
      <OfficialsGrid>
        {officials.map((official, index) => (
          <OfficialCard key={index}>
            <ImageContainer>
              <img src={official.image || "/placeholder.svg"} alt={official.name} />
            </ImageContainer>
            <InfoContainer>
              <h3>{official.name}</h3>
              <div className="position">{official.position}</div>
              <p>{official.bio}</p>
            </InfoContainer>
          </OfficialCard>
        ))}
      </OfficialsGrid>
    </Container>
  )
}
