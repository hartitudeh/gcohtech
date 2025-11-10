"use client"

import styled from "styled-components"
import { FaAward, FaUsers, FaBook, FaHospital } from "react-icons/fa"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`

const ContentContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const HighlightCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  .icon {
    font-size: 2rem;
    color: var(--color-accent);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .content {
    h3 {
      font-size: 1.125rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    p {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      margin: 0;
    }
  }
`

export default function AboutCollege() {
  return (
    <Container>
      <ImageContainer>
        <img src="/img-cht.JPG" alt="GRACE College Campus" />
      </ImageContainer>

      <ContentContainer>
        <h1>About GRACE College of Health</h1>
        <p>
          GRACE College of Health is a premier institution dedicated to excellence in health education and professional
          training. Established with a vision to transform healthcare through quality education, we have been at the
          forefront of health professional development for over two decades.
        </p>
        <p>
          Our institution is committed to providing comprehensive, evidence-based education that combines theoretical
          knowledge with practical clinical experience. We pride ourselves on our state-of-the-art facilities,
          experienced faculty, and student-centered approach to learning.
        </p>
        <p>
          With a strong emphasis on ethical practice, innovation, and community engagement, GRACE College prepares
          healthcare professionals who are not only technically competent but also compassionate and socially
          responsible.
        </p>

        <HighlightsGrid>
          <HighlightCard>
            <div className="icon">
              <FaAward />
            </div>
            <div className="content">
              <h3>Accredited Programs</h3>
              <p>All programs are accredited by national and international health bodies.</p>
            </div>
          </HighlightCard>

          <HighlightCard>
            <div className="icon">
              <FaUsers />
            </div>
            <div className="content">
              <h3>Expert Faculty</h3>
              <p>Experienced educators and practicing healthcare professionals.</p>
            </div>
          </HighlightCard>

          <HighlightCard>
            <div className="icon">
              <FaBook />
            </div>
            <div className="content">
              <h3>Modern Curriculum</h3>
              <p>Updated regularly to reflect current healthcare practices.</p>
            </div>
          </HighlightCard>

          <HighlightCard>
            <div className="icon">
              <FaHospital />
            </div>
            <div className="content">
              <h3>Clinical Partnerships</h3>
              <p>Strong partnerships with leading healthcare institutions.</p>
            </div>
          </HighlightCard>
        </HighlightsGrid>
      </ContentContainer>
    </Container>
  )
}
