import {
  Award,
  BookOpen,
  HandHeart,
  Shirt,
  Sparkles,
  Lock,
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { apiUrl } from '../../config/api'

export default function Achievements() {
  const [impact, setImpact] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch achievements')
        }

        const data = await response.json()

        setImpact(data.impact || null)
      } catch (error) {
        console.error('Failed to load achievements:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImpact()
  }, [])

  const totalDonations = impact?.total_donations ?? 0
  const totalItems = impact?.total_items ?? 0
  const impactScore = impact?.impact_score ?? 0

  const impactAreas = impact?.impact_areas || []

  const clothingItems =
    impactAreas.find(
      (area) =>
        area.category?.toLowerCase() === 'clothes' ||
        area.category?.toLowerCase() === 'clothing'
    )?.items ?? 0

  const achievements = [
    {
      title: 'First Donation',
      description: 'Make your first donation to unlock this achievement.',
      icon: HandHeart,
      unlocked: totalDonations >= 1,
      requirement: '1 donation',
    },
    {
      title: 'Helping Hand',
      description: 'Complete 5 donations and become a regular contributor.',
      icon: Award,
      unlocked: totalDonations >= 5,
      requirement: '5 donations',
    },
    {
      title: 'Clothing Contributor',
      description: 'Donate 10 clothing items to unlock this achievement.',
      icon: Shirt,
      unlocked: clothingItems >= 10,
      requirement: '10 clothing items',
    },
    {
      title: 'Hope Champion',
      description: 'Reach an impact score of 90 or higher.',
      icon: Sparkles,
      unlocked: impactScore >= 90,
      requirement: '90 impact score',
    },
  ]

  if (loading) {
    return (
      <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
            Your Achievements
          </p>

          <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
            Making a Difference
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="animate-pulse rounded-2xl border border-cloudline bg-mist p-5"
            >
              <div className="h-10 w-10 rounded-xl bg-slate-200" />

              <div className="mt-4 h-4 w-24 rounded bg-slate-200" />

              <div className="mt-2 h-3 w-full rounded bg-slate-200" />
              <div className="mt-2 h-3 w-3/4 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
            Your Achievements
          </p>

          <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
            Making a Difference
          </h2>

          <p className="mt-1 text-sm text-slate-muted">
            Achievements are unlocked from your real donation activity.
          </p>
        </div>

        <div className="hidden rounded-xl bg-sky-50 px-3 py-2 sm:block">
          <p className="text-xs font-bold text-sky-700">
            {achievements.filter((item) => item.unlocked).length} /{' '}
            {achievements.length} unlocked
          </p>
        </div>

      </div>

      {/* Achievements */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {achievements.map((achievement) => {
          const Icon = achievement.icon

          return (
            <div
              key={achievement.title}
              className={`
                rounded-2xl
                border
                p-5
                transition-all
                ${achievement.unlocked
                  ? 'border-sky-100 bg-sky-50/60'
                  : 'border-cloudline bg-mist'
                }
              `}
            >

              {/* Icon */}
              <div
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  ${achievement.unlocked
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'bg-slate-200 text-slate-muted'
                  }
                `}
              >
                {achievement.unlocked ? (
                  <Icon className="h-5 w-5" />
                ) : (
                  <Lock className="h-5 w-5" />
                )}
              </div>

              {/* Title */}
              <div className="mt-4">

                <div className="flex items-center justify-between gap-2">

                  <h3
                    className={`
                      font-display
                      text-sm
                      font-extrabold
                      ${achievement.unlocked
                        ? 'text-ink'
                        : 'text-slate-muted'
                      }
                    `}
                  >
                    {achievement.title}
                  </h3>

                  {achievement.unlocked && (
                    <span className="text-[9px] font-bold uppercase tracking-wide text-sky-600">
                      Unlocked
                    </span>
                  )}

                </div>

                <p className="mt-2 text-xs leading-relaxed text-slate-muted">
                  {achievement.description}
                </p>

              </div>

              {/* Requirement */}
              <div className="mt-4 border-t border-cloudline pt-3">

                <p
                  className={`
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    ${achievement.unlocked
                      ? 'text-sky-600'
                      : 'text-slate-muted'
                    }
                  `}
                >
                  {achievement.unlocked
                    ? 'Achievement unlocked'
                    : `Requirement: ${achievement.requirement}`}
                </p>

              </div>

            </div>
          )
        })}

      </div>

      {/* Real activity summary */}
      <div className="mt-6 flex flex-wrap gap-3">

        <div className="rounded-xl bg-mist px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-muted">
            Donations
          </p>

          <p className="mt-1 font-display text-lg font-extrabold text-ink">
            {totalDonations}
          </p>
        </div>

        <div className="rounded-xl bg-mist px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-muted">
            Items
          </p>

          <p className="mt-1 font-display text-lg font-extrabold text-ink">
            {totalItems}
          </p>
        </div>

        <div className="rounded-xl bg-mist px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-muted">
            Impact Score
          </p>

          <p className="mt-1 font-display text-lg font-extrabold text-ink">
            {impactScore}
          </p>
        </div>

      </div>

    </section>
  )
}