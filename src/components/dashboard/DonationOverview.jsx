import {
  Package,
  ArrowRight,
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../config/api'



export default function DonationOverview() {
  const navigate = useNavigate()
  const [donations, setDonations] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem('token')

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

        setDonations(data.impact?.recent_donations || [])
      } catch (error) {
        console.error('Failed to load recent donations:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDonations()
  }, [])

  const formatDate = (date) => {
    if (!date) return '—'

    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section className="rounded-2xl border border-cloudline bg-white shadow-card">

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
          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-deepsea"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>


      {/* Desktop */}

      <div className="hidden overflow-x-auto md:block">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-cloudline text-[10px] uppercase tracking-wider text-slate-muted">
              <th className="px-6 py-4 font-bold">Donation</th>
              <th className="px-6 py-4 font-bold">Category</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>

          <tbody>

            {donations.map((donation) => {
              return (
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
                        {donation.title}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {donation.category}
                  </td>

                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {formatDate(donation.created_at)}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className="
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
                      Submitted
                    </span>

                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>

      </div>


      {/* Mobile */}

      <div className="divide-y divide-cloudline md:hidden">

        {donations.map((donation) => {

          return (
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
                      {donation.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-muted">
                      {donation.category} · {formatDate(donation.created_at)}
                    </p>

                  </div>

                </div>

                <span
                  className="
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
                  Submitted
                </span>

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}