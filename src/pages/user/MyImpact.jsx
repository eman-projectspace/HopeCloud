import { useEffect, useState } from 'react'

import {
  ArrowLeft,
  Heart,
  PackageCheck,
  TrendingUp,
  Sparkles,
  Award,
  CheckCircle2,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { apiUrl } from '../../config/api'

export default function MyImpact() {
  const [impactData, setImpactData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          throw new Error('Authentication token not found')
        }

        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch impact data')
        }

        const data = await response.json()

        setImpactData(data.impact || null)
      } catch (err) {
        console.error(err)
        setError('Unable to load your impact data.')
      } finally {
        setLoading(false)
      }
    }

    fetchImpact()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mist">
        <p className="text-sm font-semibold text-slate-muted">
          Loading your impact...
        </p>
      </div>
    )
  }

  if (error || !impactData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mist">
        <div className="text-center">
          <p className="text-sm font-semibold text-red-500">
            {error || 'No impact data found.'}
          </p>

          <Link
            to="/user-dashboard"
            className="mt-4 inline-flex rounded-full bg-deepsea px-5 py-3 text-xs font-bold text-white"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const impactScore = impactData.impact_score ?? 0
  const totalDonations = impactData.total_donations ?? 0
  const totalItems = impactData.total_items ?? 0
  const impactGrowth = impactData.impact_growth ?? 0

  const impactStats = [
    {
      label: 'Donations Submitted',
      value: totalDonations,
      description: 'donations submitted',
      icon: Heart,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      label: 'Items Donated',
      value: String(totalItems).padStart(2, '0'),
      description: 'items contributed',
      icon: PackageCheck,
      iconBg: 'bg-meadow-500/10',
      iconColor: 'text-meadow-600',
    },
    {
      label: 'Impact Score',
      value: impactScore,
      description: 'out of 100',
      icon: Heart,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-600',
    },
    {
      label: 'Impact Growth',
      value: `+${impactGrowth}%`,
      description: 'tracked growth',
      icon: TrendingUp,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ]

  const impactAreas = (impactData.impact_areas || []).map((area) => {
    const category = area.category || 'Other'
    const items = area.items ?? 0

    return {
      title: category,
      description: `${items} ${items === 1 ? 'item' : 'items'} submitted in this donation category.`,
      value: String(items).padStart(2, '0'),
      label: 'Items contributed',
      icon:
        category.toLowerCase().includes('book') ||
          category.toLowerCase().includes('education')
          ? Award
          : category.toLowerCase().includes('cloth')
            ? Heart
            : PackageCheck,
    }
  })

  const recentImpact = (impactData.recent_donations || []).map(
    (donation) => ({
      id: donation.id,
      title: donation.title || 'Donation',
      location: donation.location || 'Location not provided',
      status: 'Submitted',
      date: donation.created_at
        ? new Date(donation.created_at).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
        : 'Date not available',
    })
  )

  return (
    <div className="min-h-screen bg-mist">
      {/* PAGE HEADER */}
      <header className="border-b border-cloudline bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              to="/user-dashboard"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-slate-muted
                transition-all
                duration-200
                hover:bg-mist
                hover:text-deepsea
              "
              aria-label="Back to Dashboard"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted sm:text-xs">
                Your Impact
              </p>

              <h1 className="mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                My Impact
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-3 rounded-2xl bg-mist px-4 py-2.5 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-muted">
                Impact Score
              </p>

              <p className="font-display text-lg font-extrabold text-deepsea">
                {impactScore}/100
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {/* INTRO */}
          <div className="mb-8">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                  See your contribution activity.
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base">
                  Track the donations and items you have submitted through
                  HopeCloud.
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMPACT CARD */}
          <section
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-deepsea
              p-7
              text-white
              shadow-soft
              sm:p-9
              lg:p-10
            "
          >
            <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-meadow-400/10 blur-3xl" />

            <div className="pointer-events-none absolute right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute right-24 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-white/10" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-sky-200">
                  <Heart className="h-4 w-4 fill-current text-red-400" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Personal Impact
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Your contribution activity, in one place.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
                  Your impact score is calculated from the donation items you
                  have submitted through your HopeCloud account.
                </p>

                <div className="mt-7 max-w-2xl">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold">
                    <span className="text-blue-100">
                      Impact score
                    </span>

                    <span className="text-white">
                      {impactScore}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-sky-400 transition-all duration-700"
                      style={{ width: `${impactScore}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-100">
                  <TrendingUp className="h-4 w-4 text-sky-300" />

                  <span>
                    {impactScore >= 90
                      ? 'You have reached the current Hope Champion threshold.'
                      : `${90 - impactScore} points away from the current Hope Champion threshold.`}
                  </span>
                </div>
              </div>

              <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[12px] border-white/10" />

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border-[12px]
                    border-transparent
                    border-t-sky-400
                    border-r-sky-400
                    border-b-sky-400
                    -rotate-12
                  "
                />

                <div className="relative text-center">
                  <p className="font-display text-5xl font-extrabold">
                    {impactScore}
                  </p>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue-100">
                    Impact Score
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* IMPACT STATS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="
                    group
                    rounded-2xl
                    border
                    border-cloudline
                    bg-white
                    p-5
                    shadow-card
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-soft
                  "
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-slate-muted" />
                  </div>

                  <p className="mt-5 font-display text-3xl font-extrabold text-ink">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm font-bold text-ink">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-xs text-slate-muted">
                    {stat.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* IMPACT AREAS */}
          <section className="mt-10">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-muted">
                Donation Categories
              </p>

              <h2 className="mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl">
                Your Contribution Categories
              </h2>
            </div>

            {impactAreas.length === 0 ? (
              <div className="rounded-2xl border border-cloudline bg-white p-8 text-center shadow-card">
                <PackageCheck className="mx-auto h-8 w-8 text-slate-muted" />

                <p className="mt-3 text-sm font-bold text-ink">
                  No donation categories yet.
                </p>

                <p className="mt-1 text-xs text-slate-muted">
                  Your categories will appear here after you submit donations.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 lg:grid-cols-3">
                {impactAreas.map((area) => {
                  const Icon = area.icon

                  return (
                    <div
                      key={area.title}
                      className="
                        rounded-2xl
                        border
                        border-cloudline
                        bg-white
                        p-6
                        shadow-card
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-soft
                      "
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                          <Icon className="h-5 w-5" />
                        </div>

                        <ArrowUpRight className="h-4 w-4 text-slate-muted" />
                      </div>

                      <h3 className="mt-5 font-display text-lg font-extrabold text-ink">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-muted">
                        {area.description}
                      </p>

                      <div className="mt-5">
                        <p className="font-display text-2xl font-extrabold text-deepsea">
                          {area.value}
                        </p>

                        <p className="text-[10px] text-slate-muted">
                          {area.label}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>

          {/* RECENT IMPACT */}
          <section className="mt-10 rounded-2xl border border-cloudline bg-white shadow-card">
            <div className="flex flex-col gap-2 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
                  Recent Activity
                </p>

                <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
                  Your Recent Donations
                </h2>
              </div>

              <Link
                to="/user-dashboard/donations"
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 transition-colors hover:text-deepsea"
              >
                View Donations
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-cloudline">
              {recentImpact.length === 0 ? (
                <div className="p-8 text-center">
                  <PackageCheck className="mx-auto h-8 w-8 text-slate-muted" />

                  <p className="mt-3 text-sm font-bold text-ink">
                    No donations submitted yet.
                  </p>

                  <Link
                    to="/user-dashboard/donate"
                    className="mt-4 inline-flex rounded-full bg-deepsea px-5 py-3 text-xs font-bold text-white"
                  >
                    Donate an Item
                  </Link>
                </div>
              ) : (
                recentImpact.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex
                      flex-col
                      gap-4
                      p-5
                      transition-colors
                      hover:bg-mist/60
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      sm:px-6
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                        <PackageCheck className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-ink">
                          {item.title}
                        </p>

                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-muted">
                          <MapPin className="h-3 w-3" />

                          {item.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pl-[52px] sm:pl-0">
                      <div className="text-left sm:text-right">
                        <p className="text-[10px] text-slate-muted">
                          {item.date}
                        </p>

                        <span
                          className="
                            mt-1
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-sky-50
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            text-sky-600
                          "
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* BOTTOM MOTIVATION */}
          <section className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                  <Award className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-display text-base font-extrabold text-ink">
                    Keep building your contribution history.
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-slate-muted">
                    Every submitted donation increases your contribution
                    activity and can increase your impact score.
                  </p>
                </div>
              </div>

              <Link
                to="/user-dashboard/donate"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-deepsea
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-sky-600
                  hover:shadow-glow
                "
              >
                <Heart className="h-4 w-4 fill-current" />
                Make a Donation
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}