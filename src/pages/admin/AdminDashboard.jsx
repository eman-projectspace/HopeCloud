import {
  HeartHandshake,
  Clock3,
  CheckCircle2,
  Users,
} from 'lucide-react'

import AdminSidebar from '../../components/admin/AdminSidebar.jsx'
import AdminStatCard from '../../components/admin/AdminStatCard.jsx'

function AdminDashboard() {

  const recentDonations = [
    {
      donor: 'Ayesha Khan',
      item: 'Winter Clothes',
      category: 'Clothes',
      status: 'Pending',
      date: 'Aug 30, 2026',
    },
    {
      donor: 'Ali Raza',
      item: 'School Books',
      category: 'Books',
      status: 'Approved',
      date: 'Aug 29, 2026',
    },
    {
      donor: 'Sara Ahmed',
      item: 'Children Toys',
      category: 'Children',
      status: 'Pending',
      date: 'Aug 28, 2026',
    },
    {
      donor: 'Hassan Malik',
      item: 'Food Packages',
      category: 'Food',
      status: 'Approved',
      date: 'Aug 27, 2026',
    },
  ]

  return (
    <div className="min-h-screen bg-mist">

      <AdminSidebar />

      <main className="lg:ml-64">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

          {/* Header */}

          <div className="mb-8">

            <p className="text-sm font-semibold text-sky-600">
              Administration
            </p>

            <h1 className="mt-1 font-display text-3xl font-extrabold text-ink">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-slate-muted">
              Monitor donations and HopeCloud activity.
            </p>

          </div>


          {/* Stats */}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <AdminStatCard
              title="Total Donations"
              value="248"
              description="All submitted donations"
              icon={<HeartHandshake size={21} />}
            />

            <AdminStatCard
              title="Pending Donations"
              value="32"
              description="Waiting for review"
              icon={<Clock3 size={21} />}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
            />

            <AdminStatCard
              title="Approved Donations"
              value="216"
              description="Successfully approved"
              icon={<CheckCircle2 size={21} />}
              iconBg="bg-green-50"
              iconColor="text-green-600"
            />

            <AdminStatCard
              title="Total Users"
              value="1,284"
              description="Registered HopeCloud users"
              icon={<Users size={21} />}
              iconBg="bg-purple-50"
              iconColor="text-purple-600"
            />

          </div>


          {/* Recent Donations */}

          <div className="mt-8 rounded-3xl border border-cloudline bg-white shadow-soft">

            <div className="flex flex-col gap-2 border-b border-cloudline px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="font-display text-lg font-extrabold text-ink">
                  Recent Donations
                </h2>

                <p className="mt-1 text-xs text-slate-muted">
                  Latest donation submissions
                </p>

              </div>

              <button className="text-sm font-bold text-sky-600 hover:text-sky-700">
                View All
              </button>

            </div>


            <div className="divide-y divide-cloudline">

              {recentDonations.map((donation, index) => (

                <div
                  key={index}
                  className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <HeartHandshake size={20} />
                    </div>

                    <div>

                      <h3 className="text-sm font-bold text-ink">
                        {donation.item}
                      </h3>

                      <p className="mt-1 text-xs text-slate-muted">
                        Donated by {donation.donor}
                      </p>

                    </div>

                  </div>


                  <div className="flex flex-wrap items-center gap-4 md:justify-end">

                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-muted">
                      {donation.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        donation.status === 'Approved'
                          ? 'bg-green-50 text-green-600'
                          : 'bg-amber-50 text-amber-600'
                      }`}
                    >
                      {donation.status}
                    </span>

                    <span className="text-xs text-slate-muted">
                      {donation.date}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Bottom Info */}

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border border-cloudline bg-white p-6 shadow-soft">

              <h2 className="font-display text-lg font-extrabold text-ink">
                Donation Status
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                You currently have 32 donations waiting for review.
                Review them to keep the donation process moving smoothly.
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-mist">

                <div
                  className="h-full rounded-full bg-sky"
                  style={{ width: '87%' }}
                />

              </div>

              <p className="mt-2 text-xs font-semibold text-slate-muted">
                87% of donations approved
              </p>

            </div>


            <div className="rounded-3xl border border-cloudline bg-deepsea p-6 text-white shadow-soft">

              <p className="text-sm font-semibold text-sky-200">
                HopeCloud Impact
              </p>

              <h2 className="mt-2 font-display text-2xl font-extrabold">
                Every approved donation creates an opportunity.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Keep the platform organized and help connect useful
                resources with people who need them.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default AdminDashboard