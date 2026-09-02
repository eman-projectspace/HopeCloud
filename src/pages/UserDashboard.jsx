import DashboardSidebar from '../components/dashboard/DashboardSidebar.jsx'
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx'
import WelcomeBanner from '../components/dashboard/WelcomeBanner.jsx'
import ImpactStats from '../components/dashboard/ImpactStats.jsx'
import ImpactScore from '../components/dashboard/ImpactScore.jsx'
import DonationOverview from '../components/dashboard/DonationOverview.jsx'
import RatingCard from '../components/dashboard/RatingCard.jsx'
import Achievements from '../components/dashboard/Achievements.jsx'

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-mist">

      <DashboardSidebar />

      <div className="lg:ml-64">
        <DashboardHeader />

        <main className="px-5 py-6 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <WelcomeBanner />

            <div className="mt-6">
              <ImpactStats />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">

              <ImpactScore />

              <RatingCard />

            </div>

            <div className="mt-6">
              <DonationOverview />
            </div>

            <div className="mt-6">
              <Achievements />
            </div>

          </div>

        </main>

      </div>

    </div>
  )
}