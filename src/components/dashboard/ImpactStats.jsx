import { useEffect, useState } from 'react'
import {
  Package,
  Heart,
  ClipboardCheck,
} from 'lucide-react'
import { apiUrl } from '../../config/api'

export default function ImpactStats() {
  const [impact, setImpact] = useState(null)

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token} `,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch impact data')
        }

        const data = await response.json()
        setImpact(data.impact)
      } catch (error) {
        console.error('Failed to load dashboard impact:', error)
      }
    }

    fetchImpact()
  }, [])

  const stats = [
    {
      label: 'Items Donated',
      value: impact ? String(impact.total_items).padStart(2, '0') : '—',
      description: 'Through your donations',
      icon: Package,
    },
    {
      label: 'Total Donations',
      value: impact ? String(impact.total_donations).padStart(2, '0') : '—',
      description: 'Donations submitted',
      icon: Heart,
    },
    {
      label: 'Impact Score',
      value: impact ? impact.impact_score : '—',
      description: 'Out of 100',
      icon: ClipboardCheck,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

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

            </div>

            <p className="mt-5 font-display text-3xl font-extrabold text-ink">
              {stat.value}
            </p>

            <p className="mt-1 text-sm font-semibold text-ink">
              {stat.label}
            </p>

            <p className="mt-1 text-xs text-slate-muted">
              {stat.description}
            </p>

          </div>
        )
      })}

      {/* Fourth card kept in the existing grid layout */}
      <div
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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
            <ClipboardCheck className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-5 font-display text-3xl font-extrabold text-ink">
          Submitted
        </p>

        <p className="mt-1 text-sm font-semibold text-ink">
          Donation Status
        </p>

        <p className="mt-1 text-xs text-slate-muted">
          Your donations are submitted
        </p>
      </div>

    </div>
  )
}
