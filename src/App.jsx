import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import TrustedClients from './components/TrustedClients'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import IndustriesSection from './components/IndustriesSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import NumbersSection from './components/NumbersSection'
import TeamSection from './components/TeamSection'
import CareersSection from './components/CareersSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden">
      <Navigation />
      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 pb-8 md:px-5">
        <HeroSection />
        <TrustedClients />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <NumbersSection />
        <TeamSection />
        <CareersSection />
        <BlogSection />
        <ContactSection />
      </main>
      <footer className="mx-auto mb-6 flex max-w-[1280px] items-center justify-between gap-4 border-t border-[rgba(10,37,64,0.08)] px-4 pt-5 md:px-5">
        <div>
          <strong className="block text-[#0A2540]">Einex Solution Ltd</strong>
          <p className="text-sm text-[#64748b]">Premium engineering consultancy for resilient infrastructure.</p>
        </div>
        <a href="#home" className="inline-flex items-center gap-2 text-sm font-bold text-[#0057D9]">Back to top</a>
      </footer>
    </div>
  )
}

export default App
