import { ToastProvider } from './components/ui/Toast.jsx'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ImpactStats from './components/ImpactStats.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Causes from './components/Causes.jsx'
import AIMatching from './components/AIMatching.jsx'
import Stories from './components/Stories.jsx'
import VolunteerSection from './components/VolunteerSection.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Donate from './pages/user/Donate.jsx'
import UserDashboard from './pages/UserDashboard.jsx'
import MyDonations from './pages/user/MyDonations.jsx'
import MyImpact from './pages/user/MyImpact.jsx'
import MyProfile from './pages/user/MyProfile.jsx'
import Achievements from './pages/user/Achievements.jsx'
import { Routes, Route, Link } from 'react-router-dom'


function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ImpactStats />
        <HowItWorks />
        <About />
        <Causes />
        <AIMatching />
        <Stories />
        <VolunteerSection />
      </main>

      <Footer />
    </>
  )
}


/* Temporary Dashboard Page */

function DashboardPlaceholder({ title, description }) {
  return (
    <div className="min-h-screen bg-mist">

      <div className="flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-lg rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <span className="text-2xl">✨</span>
          </div>

          <h1 className="mt-5 font-display text-2xl font-extrabold text-ink">
            {title}
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-muted">
            {description}
          </p>

          <Link
            to="/user-dashboard"
            className="btn-primary mt-6"
          >
            Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  )
}


/* Donate Page */

function DonatePage() {
  return (
    <DashboardPlaceholder
      title="Donate an Item"
      description="Your donation form will be added here next. You will be able to donate clothes, books, children's items, and other useful resources with an image upload."
    />
  )
}


function App() {
  return (
    <ToastProvider>

      <Routes>

        {/* Public */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* User Dashboard */}

        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />
           <Route
  path="/user-dashboard/donations"
  element={<MyDonations />}
/>
<Route path="/user-dashboard/impact" element={<MyImpact />} />
  <Route path="/user-dashboard/profile" element={<MyProfile />} />
<Route
  path="/user-dashboard/achievements"
  element={<Achievements />}
/>

        <Route
          path="/user-dashboard/settings"
          element={
            <DashboardPlaceholder
              title="Settings"
              description="Account preferences and dashboard settings will be available here."
            />
          }
          
        />
        {/* Donation */}
<Route
  path="/donate"
  element={<Donate />}
/>

      </Routes>

    </ToastProvider>
  )
}

export default App