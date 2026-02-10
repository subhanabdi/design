import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ParallaxBanner from "@/components/parallax-banner"
import WhyWeSection from "@/components/why-section"
import InsightsSection from "@/components/insights-section"
import LocationsSection from "@/components/locations-section"
import ClientsSection from "@/components/clients-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ParallaxBanner />
      <WhyWeSection />
      <InsightsSection />
      <LocationsSection />
      <ClientsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
