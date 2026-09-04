import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import useCountUp from '../hooks/useCountUp.js'
import { apiUrl } from '../config/api.js'

function StatCard({ stat, active, delay }) {
  const value = useCountUp(stat.value, active, 1800)

  return (
    <div
      className={`rounded - 2xl border border - cloudline bg - white / 70 p - 6 text - center shadow - card transition - all duration - 700 ease - out ${active
        ? 'translate-y-0 opacity-100'
        : 'translate-y-4 opacity-0'
        } `}
      style={{ transitionDelay: `${delay} ms` }}
    >
      <p className="font-display text-3xl font-extrabold text-deepsea sm:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>

      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-muted">
        {stat.label}
      </p>
    </div>
  )
}

export default function ImpactStats() {
  const [ref, visible] = useReveal(0.3)

  const [stats, setStats] = useState([
    {
      id: 'donations',
      value: 0,
      suffix: '',
      label: 'My Donations',
    },
    {
      id: 'items',
      value: 0,
      suffix: '',
      label: 'Items Donated',
    },
    {
      id: 'approved',
      value: 0,
      suffix: '',
      label: 'Approved',
    },
    {
      id: 'pending',
      value: 0,
      suffix: '',
      label: 'Pending Review',
    },
    {
      id: 'impact',
      value: 0,
      suffix: '%',
      label: 'Impact Progress',
    },
  ])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setLoading(false)
      return
    }

    const loadImpact = async () => {
      try {
        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token} `,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to load impact data.')
        }

        const data = await response.json()

        const impact = data.impact || data

        const totalDonations = Number(
          impact.total_donations ?? 0
        )

        const totalItems = Number(
          impact.total_items ?? totalDonations
        )

        const approved = Number(
          impact.approved_donations ??
          impact.approved ??
          0
        )

        const pending = Number(
          impact.pending_donations ??
          impact.pending ??
          0
        )

        const impactProgress = Number(
          impact.impact_progress ??
          impact.impact_score ??
          impact.progress ??
          (totalDonations > 0
            ? Math.round((approved / totalDonations) * 100)
            : 0)
        )

        setStats([
          {
            id: 'donations',
            value: totalDonations,
            suffix: '',
            label: 'My Donations',
          },
          {
            id: 'items',
            value: totalItems,
            suffix: '',
            label: 'Items Donated',
          },
          {
            id: 'approved',
            value: approved,
            suffix: '',
            label: 'Approved',
          },
          {
            id: 'pending',
            value: pending,
            suffix: '',
            label: 'Pending Review',
          },
          {
            id: 'impact',
            value: impactProgress,
            suffix: '%',
            label: 'Impact Progress',
          },
        ])
      } catch (error) {
        console.error('Impact loading error:', error)
      } finally {
        setLoading(false)
      }
    }

    loadImpact()
  }, [])

  return (
    <section
      id="impact"
      ref={ref}
      className="section-pad bg-white/60"
    >
      <div className="container-max">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">
            Your impact
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Every donation matters
          </h2>

          <p className="mt-3 text-slate-muted">
            Track your contributions and see how your donations
            are progressing through HopeCloud.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-28 animate-pulse rounded-2xl border border-cloudline bg-white/70"
              />
            ))
            : stats.map((stat, index) => (
              <StatCard
                key={stat.id}
                stat={stat}
                active={visible}
                delay={index * 90}
              />
            ))}

        </div>
      </div>
    </section>
  )
}