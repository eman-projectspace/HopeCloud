import {
  Package,
  ArrowRight,
  Clock3,
  CheckCircle2,
  XCircle,
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../config/api'


function getStatusConfig(status) {
  const normalizedStatus = String(status || 'submitted').toLowerCase()

  const configs = {
    submitted: {
      label: 'Submitted',
      className: 'bg-sky-50 text-sky-600',
      icon: Clock3,
    },

    approved: {
      label: 'Approved',
      className: 'bg-emerald-50 text-emerald-600',
      icon: CheckCircle2,
    },

    rejected: {
      label: 'Rejected',
      className: 'bg-red-50 text-red-600',
      icon: XCircle,
    },

    processing: {
      label: 'Processing',
      className: 'bg-amber-50 text-amber-600',
      icon: Clock3,
    },

    transit: {
      label: 'In Transit',
      className: 'bg-violet-50 text-violet-600',
      icon: Clock3,
    },

    delivered: {
      label: 'Delivered',
      className: 'bg-emerald-50 text-emerald-600',
      icon: CheckCircle2,
    },
  }

  return configs[normalizedStatus] || configs.submitted
}


function StatusBadge({ status }) {
  const config = getStatusConfig(status)
  const Icon = config.icon

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold ${config.className}`}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  )
}


export default function DonationOverview() {
  const navigate = useNavigate()

  const [donations, setDonations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          setDonations([])
          return
        }

        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch donations')
        }

        const data = await response.json()

        const recentDonations =
          data.impact?.recent_donations ||
          data.recent_donations ||
          []

        setDonations(
          Array.isArray(recentDonations)
            ? recentDonations.slice(0, 5)
            : []
        )
      } catch (error) {
        console.error('Failed to load recent donations:', error)
        setDonations([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchDonations()
  }, [])


  const formatDate = (date) => {
    if (!date) return '—'

    const parsedDate = new Date(date)

    if (Number.isNaN(parsedDate.getTime())) {
      return '—'
    }

    return parsedDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }


  return (
    <section className="rounded-2xl border border-cloudline bg-white shadow-card">

      {/* Header */}

      <div className="flex flex-col gap-3 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
            Your Contributions
          </p>

          <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
            Recent Donations
          </h2>
        </div>

        <button
          onClick={() => navigate('/my-donations')}
          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 transition-colors hover:text-deepsea"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>


      {/* Loading */}

      {isLoading && (
        <div className="p-6">

          <div className="space-y-4">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-14 animate-pulse rounded-xl bg-mist"
              />
            ))}

          </div>

        </div>
      )}


      {/* Empty State */}

      {!isLoading && donations.length === 0 && (
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
            <Package className="h-6 w-6" />
          </div>

          <h3 className="mt-4 font-display text-lg font-extrabold text-ink">
            No donations yet
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-muted">
            Your donations will appear here once you submit your first item.
          </p>

          <button
            onClick={() => navigate('/donate')}
            className="mt-5 rounded-xl bg-deepsea px-5 py-2.5 text-xs font-bold text-white transition hover:opacity-90"
          >
            Donate an Item
          </button>

        </div>
      )}


      {/* Desktop */}

      {!isLoading && donations.length > 0 && (
        <div className="hidden overflow-x-auto md:block">

          <table className="w-full text-left">

            <thead>
              <tr className="border-b border-cloudline text-[10px] uppercase tracking-wider text-slate-muted">

                <th className="px-6 py-4 font-bold">
                  Donation
                </th>

                <th className="px-6 py-4 font-bold">
                  Category
                </th>

                <th className="px-6 py-4 font-bold">
                  Date
                </th>

                <th className="px-6 py-4 font-bold">
                  Status
                </th>

              </tr>
            </thead>


            <tbody>

              {donations.map((donation) => (

                <tr
                  key={donation.id}
                  className="border-b border-cloudline last:border-0 transition-colors hover:bg-mist/60"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                        <Package className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-semibold text-ink">
                        {donation.title || 'Untitled donation'}
                      </span>

                    </div>

                  </td>


                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {donation.category || 'Other'}
                  </td>


                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {formatDate(
                      donation.created_at ||
                      donation.date
                    )}
                  </td>


                  <td className="px-6 py-4">
                    <StatusBadge
                      status={donation.status}
                    />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}


      {/* Mobile */}

      {!isLoading && donations.length > 0 && (
        <div className="divide-y divide-cloudline md:hidden">

          {donations.map((donation) => (

            <div
              key={donation.id}
              className="p-5"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Package className="h-4 w-4" />
                  </div>


                  <div>

                    <p className="text-sm font-bold text-ink">
                      {donation.title || 'Untitled donation'}
                    </p>

                    <p className="mt-1 text-xs text-slate-muted">
                      {donation.category || 'Other'}
                      {' · '}
                      {formatDate(
                        donation.created_at ||
                        donation.date
                      )}
                    </p>

                  </div>

                </div>


                <StatusBadge
                  status={donation.status}
                />

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  )
}
