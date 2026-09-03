import {
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Heart,
  Package,
  Star,
  Award,
  ShieldCheck,
  Pencil,
  Camera,
  CheckCircle2,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiUrl } from '../../config/api'

export default function MyProfile() {
  const [user, setUser] = useState(null)
  const [impact, setImpact] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showEditMessage, setShowEditMessage] = useState(false)

  useEffect(() => {
    const loadProfile = async () => {
      const token = localStorage.getItem('token')

      if (!token) {
        setLoading(false)
        return
      }

      try {
        // Load cached user first
        try {
          const savedUser = JSON.parse(
            localStorage.getItem('user')
          )

          if (savedUser) {
            setUser(savedUser)
          }
        } catch {
          // Ignore invalid localStorage data
        }

        // Get authenticated user from Laravel
        const userResponse = await fetch(apiUrl('/user'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (userResponse.ok) {
          const userData = await userResponse.json()

          const currentUser = userData.user || userData

          setUser(currentUser)

          localStorage.setItem(
            'user',
            JSON.stringify(currentUser)
          )
        }

        // Get real contribution data
        const impactResponse = await fetch(
          apiUrl('/my-impact'),
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (impactResponse.ok) {
          const impactData = await impactResponse.json()

          setImpact(impactData.impact || null)
        }
      } catch (error) {
        console.error('Failed to load profile:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  const profileName = user?.name || 'User'
  const profileEmail = user?.email || 'No email available'

  const userInitials =
    profileName
      ?.split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .toUpperCase() || 'U'

  const totalDonations = impact?.total_donations ?? 0
  const totalItems = impact?.total_items ?? 0
  const impactScore = impact?.impact_score ?? 0

  const memberSince = user?.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    })
    : 'Not available'

  const phone = user?.phone || 'Not provided'
  const location = user?.location || 'Not provided'

  const contributionStats = [
    {
      label: 'Items Donated',
      value: totalItems,
      icon: Package,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-600',
    },
    {
      label: 'Total Donations',
      value: totalDonations,
      icon: Heart,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-500',
    },
    {
      label: 'Impact Score',
      value: impactScore,
      icon: Award,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      label: 'Contributor Rating',
      value: 'Not rated',
      icon: Star,
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
    },
  ]

  const accountDetails = [
    {
      label: 'Full Name',
      value: profileName,
      icon: UserRound,
    },
    {
      label: 'Email Address',
      value: profileEmail,
      icon: Mail,
    },
    {
      label: 'Phone Number',
      value: phone,
      icon: Phone,
    },
    {
      label: 'Location',
      value: location,
      icon: MapPin,
    },
    {
      label: 'Member Since',
      value: memberSince,
      icon: CalendarDays,
    },
  ]

  return (
    <div className="min-h-screen bg-mist">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

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
                Account
              </p>

              <h1 className="mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                My Profile
              </h1>

            </div>

          </div>

          {/* Edit Profile */}

          <button
            onClick={() => setShowEditMessage(true)}
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-deepsea
              px-5
              py-3
              text-xs
              font-bold
              text-white
              shadow-soft
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-sky-600
              hover:shadow-glow
              sm:inline-flex
            "
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </button>

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">

          {/* =================================================
              PROFILE HERO
          ================================================== */}

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
            "
          >

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-meadow-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

              {/* Profile Information */}

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">

                {/* Avatar */}

                <div className="relative">

                  <div
                    className="
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      font-display
                      text-2xl
                      font-extrabold
                      text-deepsea
                      shadow-lg
                      ring-4
                      ring-white/10
                    "
                  >
                    {loading ? '...' : userInitials}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-1
                      right-1
                      h-5
                      w-5
                      rounded-full
                      border-4
                      border-deepsea
                      bg-meadow-500
                    "
                  />

                </div>

                <div>

                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                      {loading ? 'Loading...' : profileName}
                    </h2>

                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-sky-100">
                      <CheckCircle2 className="h-3 w-3" />
                      Active
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-blue-100">
                    HopeCloud Member
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100">

                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {location}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Member since {memberSince}
                    </span>

                  </div>

                </div>

              </div>

              {/* Rating */}

              <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">

                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100">
                  Contributor Rating
                </p>

                <div className="mt-1 flex items-center gap-2">

                  <Star className="h-5 w-5 text-amber-300" />

                  <span className="font-display text-xl font-extrabold">
                    Not rated
                  </span>

                </div>

                <p className="mt-1 text-xs text-blue-100">
                  Feedback is not available yet.
                </p>

              </div>

            </div>

          </section>

          {/* Mobile Edit Button */}

          <button
            onClick={() => setShowEditMessage(true)}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-cloudline
              bg-white
              px-4
              py-3
              text-sm
              font-bold
              text-deepsea
              shadow-card
              sm:hidden
            "
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </button>

          {/* =================================================
              CONTRIBUTION STATS
          ================================================== */}

          <section className="mt-8">

            <div className="mb-5">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-muted">
                Your Contributions
              </p>

              <h2 className="mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl">
                Contribution Overview
              </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {contributionStats.map((stat) => {

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

                    </div>

                    <p className="mt-5 font-display text-3xl font-extrabold text-ink">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm font-bold text-ink">
                      {stat.label}
                    </p>

                  </div>
                )
              })}

            </div>

          </section>

          {/* =================================================
              PROFILE + ACCOUNT INFORMATION
          ================================================== */}

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

            {/* Personal Information */}

            <section className="rounded-2xl border border-cloudline bg-white shadow-card">

              <div className="flex items-center justify-between border-b border-cloudline p-6">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
                    Personal Information
                  </p>

                  <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
                    Your Profile Details
                  </h2>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <UserRound className="h-5 w-5" />
                </div>

              </div>

              <div className="grid gap-0 sm:grid-cols-2">

                {accountDetails.map((detail, index) => {

                  const Icon = detail.icon

                  return (
                    <div
                      key={detail.label}
                      className={`
                        flex
                        items-center
                        gap-4
                        p-5
                        ${index < accountDetails.length - 1
                          ? 'border-b border-cloudline'
                          : ''
                        }
                      `}
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-slate-muted">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">

                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-muted">
                          {detail.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-ink">
                          {detail.value}
                        </p>

                      </div>

                    </div>
                  )
                })}

              </div>

            </section>

            {/* Account Status */}

            <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card">

              <div className="flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-meadow-500/10 text-meadow-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-meadow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-meadow-600">
                  Active
                </span>

              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
                Account Status
              </p>

              <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
                Your account is active.
              </h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-muted">
                Your HopeCloud account is active and ready for donations
                and contributions.
              </p>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 rounded-xl bg-mist p-3">

                  <CheckCircle2 className="h-4 w-4 text-meadow-600" />

                  <span className="text-xs font-semibold text-ink">
                    Account active
                  </span>

                </div>

                <div className="flex items-center gap-3 rounded-xl bg-mist p-3">

                  <ShieldCheck className="h-4 w-4 text-sky-600" />

                  <span className="text-xs font-semibold text-ink">
                    Authentication protected
                  </span>

                </div>

              </div>

            </section>

          </div>

          {/* =================================================
              MOTIVATION CARD
          ================================================== */}

          <section className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                  <Heart className="h-5 w-5 fill-current" />
                </div>

                <div>

                  <p className="font-display text-base font-extrabold text-ink">
                    Keep making a difference.
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-slate-muted">
                    Your profile keeps track of your real HopeCloud
                    contribution activity.
                  </p>

                </div>

              </div>

              <Link
                to="/user-dashboard"
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
                Back to Dashboard
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>

            </div>

          </section>

        </div>

      </main>

      {/* =====================================================
          EDIT PROFILE MESSAGE
      ====================================================== */}

      {showEditMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-deepsea/30 px-5 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl border border-cloudline bg-white p-7 shadow-soft">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Camera className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-center font-display text-xl font-extrabold text-ink">
              Profile Editing
            </h3>

            <p className="mt-2 text-center text-sm leading-relaxed text-slate-muted">
              Profile editing is not connected yet. Your current
              account information is loaded from the authenticated
              HopeCloud account.
            </p>

            <button
              onClick={() => setShowEditMessage(false)}
              className="
                mt-6
                w-full
                rounded-full
                bg-deepsea
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                hover:bg-sky-600
                hover:shadow-glow
              "
            >
              Got it
            </button>

          </div>

        </div>
      )}

    </div>
  )
}