import { ToastProvider } from './components/ui/Toast.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ImpactStats from './components/ImpactStats.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Causes from './components/Causes.jsx'
import FeaturedCampaign from './components/FeaturedCampaign.jsx'
import AIMatching from './components/AIMatching.jsx'
import ImpactDashboard from './components/ImpactDashboard.jsx'
import Stories from './components/Stories.jsx'
import VolunteerSection from './components/VolunteerSection.jsx'
import EmergencySupport from './components/EmergencySupport.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <HowItWorks />
        <Causes />
        <FeaturedCampaign />
        <AIMatching />
        <ImpactDashboard />
        <Stories />
        <VolunteerSection />
        <EmergencySupport />
      </main>
      <Footer />
    </ToastProvider>
  )
}
