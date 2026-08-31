import {
  ArrowLeft,
  Trophy,
  Gift,
  BookOpen,
  Heart,
  Shirt,
  Star,
  Users,
  Package,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const achievements = [
  {
    title: 'First Donation',
    description: 'Made your first contribution to HopeCloud.',
    progress: 1,
    target: 1,
    icon: Gift,
    unlocked: true,
    category: 'Milestone',
  },
  {
    title: 'Book Giver',
    description: 'Donate educational books to someone in need.',
    progress: 8,
    target: 5,
    icon: BookOpen,
    unlocked: true,
    category: 'Contribution',
  },
  {
    title: 'Helping Hand',
    description: 'Help at least 10 people through your donations.',
    progress: 24,
    target: 10,
    icon: Heart,
    unlocked: true,
    category: 'Impact',
  },
  {
    title: 'Clothing Contributor',
    description: 'Donate 10 clothing items to people who need them.',
    progress: 6,
    target: 10,
    icon: Shirt,
    unlocked: false,
    category: 'Contribution',
  },
  {
    title: 'Community Hero',
    description: 'Help 50 people through your contributions.',
    progress: 24,
    target: 50,
    icon: Users,
    unlocked: false,
    category: 'Impact',
  },
  {
    title: 'Hope Champion',
    description: 'Reach a personal impact score of 90.',
    progress: 82,
    target: 90,
    icon: Star,
    unlocked: false,
    category: 'Special',
  },
]

const stats = [
  {
    label: 'Unlocked',
    value: '03',
    icon: Trophy,
    description: 'Achievements earned',
  },
  {
    label: 'In Progress',
    value: '03',
    icon: Sparkles,
    description: 'Keep going',
  },
  {
    label: 'Total',
    value: '06',
    icon: Package,
    description: 'Available achievements',
  },
]

export default function Achievements() {
  return (
    <div className="min-h-screen bg-mist">

      {/* Page Header */}

      <header className="border-b border-cloudline bg-white">

        <div className="mx-auto flex max-w-7xl items-center px-5 py-6 sm:px-8 lg:px-10">

          <Link
            to="/user-dashboard"
            className="
              group
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-slate-muted
              transition-colors
              hover:text-deepsea
            "
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-cloudline
                bg-white
                transition-all
                duration-300
                group-hover:-translate-x-1
                group-hover:border-sky-200
                group-hover:bg-sky-50
              "
            >
              <ArrowLeft className="h-5 w-5" />
            </span>

            Back to Dashboard
          </Link>

        </div>

      </header>


      {/* Main */}

      <main className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-7xl">


          {/* Heading */}

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">

                <Trophy className="h-4 w-4" />

                Your Milestones

              </div>

              <h1 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">

                Achievements

              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base">

                Celebrate the milestones you've reached and discover
                new ways to increase your impact through HopeCloud.

              </p>

            </div>


            {/* Achievement progress */}

            <div className="rounded-2xl border border-cloudline bg-white px-5 py-4 shadow-card">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">

                  <Trophy className="h-5 w-5" />

                </div>

                <div>

                  <p className="text-xs text-slate-muted">
                    Overall Progress
                  </p>

                  <p className="font-display text-lg font-extrabold text-ink">
                    50%
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Stats */}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            {stats.map((stat) => {

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

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110">

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


          {/* Featured Achievement */}

          <section
            className="
              relative
              mt-8
              overflow-hidden
              rounded-3xl
              bg-deepsea
              p-6
              text-white
              shadow-soft
              sm:p-8
            "
          >

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl" />


            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">

                  <Sparkles className="h-7 w-7 text-sky-200" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
                    Next Milestone
                  </p>

                  <h2 className="mt-1 font-display text-2xl font-extrabold">
                    Hope Champion
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100">
                    You're only 8 impact points away from becoming
                    a Hope Champion.
                  </p>

                </div>

              </div>


              <div className="shrink-0">

                <div className="flex items-center gap-3">

                  <div className="h-2 w-32 overflow-hidden rounded-full bg-white/15">

                    <div
                      className="h-full rounded-full bg-sky-300"
                      style={{ width: '91%' }}
                    />

                  </div>

                  <span className="text-xs font-bold text-white">
                    82 / 90
                  </span>

                </div>

              </div>

            </div>

          </section>


          {/* Achievement Grid */}

          <section className="mt-10">

            <div className="mb-5">

              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-muted">
                Your Collection
              </p>

              <h2 className="mt-1 font-display text-2xl font-extrabold text-ink">
                All Achievements
              </h2>

            </div>


            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

              {achievements.map((achievement) => {

                const Icon = achievement.icon

                const progress = Math.min(
                  (achievement.progress / achievement.target) * 100,
                  100
                )

                return (
                  <div
                    key={achievement.title}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      bg-white
                      p-6
                      shadow-card
                      transition-all
                      duration-300
                      ${
                        achievement.unlocked
                          ? 'border-sky-100 hover:-translate-y-1 hover:shadow-soft'
                          : 'border-cloudline'
                      }
                    `}
                  >

                    {/* Top */}

                    <div className="flex items-start justify-between">

                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          ${
                            achievement.unlocked
                              ? 'bg-sky-50 text-sky-600'
                              : 'bg-mist text-slate-muted'
                          }
                        `}
                      >

                        <Icon className="h-7 w-7" />

                      </div>


                      {achievement.unlocked ? (

                        <span className="flex items-center gap-1 rounded-full bg-meadow-500/10 px-3 py-1.5 text-[10px] font-bold text-meadow-600">

                          <CheckCircle2 className="h-3.5 w-3.5" />

                          Unlocked

                        </span>

                      ) : (

                        <span className="flex items-center gap-1 rounded-full bg-mist px-3 py-1.5 text-[10px] font-bold text-slate-muted">

                          <Lock className="h-3.5 w-3.5" />

                          Locked

                        </span>

                      )}

                    </div>


                    {/* Content */}

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
                      {achievement.category}
                    </p>

                    <h3 className="mt-1 font-display text-xl font-extrabold text-ink">
                      {achievement.title}
                    </h3>

                    <p className="mt-2 min-h-[42px] text-sm leading-relaxed text-slate-muted">
                      {achievement.description}
                    </p>


                    {/* Progress */}

                    {!achievement.unlocked && (

                      <div className="mt-5">

                        <div className="mb-2 flex items-center justify-between">

                          <span className="text-[11px] font-semibold text-slate-muted">
                            Progress
                          </span>

                          <span className="text-[11px] font-bold text-deepsea">
                            {achievement.progress} / {achievement.target}
                          </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-sky-50">

                          <div
                            className="h-full rounded-full bg-sky-500 transition-all duration-700"
                            style={{ width: `${progress}%` }}
                          />

                        </div>

                      </div>

                    )}


                    {/* Unlocked footer */}

                    {achievement.unlocked && (

                      <div className="mt-5 flex items-center gap-2 rounded-xl bg-meadow-500/5 px-3 py-2.5 text-xs font-semibold text-meadow-600">

                        <CheckCircle2 className="h-4 w-4" />

                        Achievement earned

                      </div>

                    )}

                  </div>
                )

              })}

            </div>

          </section>


          {/* Motivation */}

          <section className="mt-8 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">

                <Heart className="h-6 w-6 fill-current" />

              </div>

              <div>

                <h3 className="font-display text-lg font-extrabold text-ink">
                  Every contribution moves you forward.
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-slate-muted">
                  Keep donating books, clothes and essential items
                  to unlock more milestones and increase your impact.
                </p>

              </div>

              <Link
                to="/donate"
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
                <Gift className="h-4 w-4" />
                Donate Now
              </Link>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}