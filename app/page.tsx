import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero-section"
import WelcomeSection from "@/components/home/welcome-section"
import VisionMissionSection from "@/components/home/vision-mission-section"
import AdmissionSection from "@/components/home/admission-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <VisionMissionSection />
      <AdmissionSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
