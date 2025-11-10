import styled from "styled-components"
import HeroSection from "../components/home/HeroSection"
import WelcomeSection from "../components/home/WelcomeSection"
import VisionMissionSection from "../components/home/VisionMissionSection"
import AdmissionSection from "../components/home/AdmissionSection"
import TestimonialsSection from "../components/home/TestimonialsSection"

const HomeContainer = styled.div`
  width: 100%;
`

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection />
      <WelcomeSection />
      <VisionMissionSection />
      <AdmissionSection />
      <TestimonialsSection />
    </HomeContainer>
  )
}
