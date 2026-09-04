import { useEffect, useState } from 'react'
import {
  HeartHandshake,
  Clock3,
  CheckCircle2,
  Users,
  XCircle,
} from 'lucide-react'

import AdminSidebar from '../../components/admin/AdminSidebar.jsx'
import AdminStatCard from '../../components/admin/AdminStatCard.jsx'
import { apiUrl } from '../../config/api.js'

function AdminDashboard() {
  const [stats, setStats] = useState({
    total_donations: 0,
    pending_donations: 0,
    approved_donations: 0,
    total_users: 0,
    approval_rate: 0,
  })

  const [recentDonations, setRecentDonations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState(null)

  const loadDashboard = async () => {
    try {
      setLoading(true)
      setError('')

      const token = localStorage.getItem('token')

      if (!token) {
        throw new Error('Admin session not found. Please login again.')
      }

      const response = await fetch(apiUrl('/admin/dashboard'), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Unable to load admin dashboard.'
        )
      }

      setStats(data.stats || {})
      setRecentDonations(data.recent_donations || [])
    } catch (err) {
      setError(err.message || 'Unable to load admin dashboard.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDashboard()
  }, [])

  const updateDonationStatus = async (donationId, status) => {
    try {
      setUpdatingId(donationId)
      setError('')

      const token = localStorage.getItem('token')

      if (!token) {
        throw new Error('Admin session not found. Please login again.')
      }

      const response = await fetch(
        apiUrl(`/admin/donations/${donationId}/status`),

        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Unable to update donation status.'
        )
      }

      await loadDashboard()
    } catch (err) {
      setError(
        err.message || 'Unable to update donation status.'
      )
    } finally {
      setUpdatingId(null)
    }
  }

  const formatStatus = (status) => {
    if (status === 'approved') return 'Approved'
    if (status === 'submitted') return 'Pending'
    if (status === 'rejected') return 'Rejected'

    return status
      ? status.charAt(0).toUpperCase() + status.slice(1)
      : 'Pending'
  }

  const getStatusClass = (status) => {
    if (status === 'approved') {
      return 'bg-green-50 text-green-600'
    }

    if (status === 'rejected') {
      return 'bg-red-50 text-red-600'
    }

    return 'bg-amber-50 text-amber-600'
  }

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

          {/* Loading */}

          {loading && (
            <div className="mb-6 rounded-2xl border border-cloudline bg-white px-5 py-4 text-sm text-slate-muted shadow-soft">
              Loading dashboard data...
            </div>
          )}

          {/* Error */}

          {error && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Stats */}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <AdminStatCard
              title="Total Donations"
              value={stats.total_donations}
              description="All submitted donations"
              icon={<HeartHandshake size={21} />}
            />

            <AdminStatCard
              title="Pending Donations"
              value={stats.pending_donations}
              description="Waiting for review"
              icon={<Clock3 size={21} />}
              iconBg="bg-amber-50"
              iconColor="text-amber-600"
            />

            <AdminStatCard
              title="Approved Donations"
              value={stats.approved_donations}
              description="Successfully approved"
              icon={<CheckCircle2 size={21} />}
              iconBg="bg-green-50"
              iconColor="text-green-600"
            />

            <AdminStatCard
              title="Total Users"
              value={stats.total_users}
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

            </div>

            <div className="divide-y divide-cloudline">

              {!loading && recentDonations.length === 0 && (
                <div className="px-6 py-10 text-center text-sm text-slate-muted">
                  No donations have been submitted yet.
                </div>
              )}

              {recentDonations.map((donation) => (

                <div
                  key={donation.id}
                  className="flex flex-col gap-4 px-6 py-5"
                >

                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

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
                        className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                          donation.status
                        )}`}
                      >
                        {formatStatus(donation.status)}
                      </span>

                      <span className="text-xs text-slate-muted">
                        {donation.date || 'Date unavailable'}
                      </span>

                    </div>

                  </div>

                  {/* Review Actions */}

                  {donation.status === 'submitted' && (
                    <div className="flex flex-wrap gap-3 pl-0 md:pl-15">

                      <button
                        type="button"
                        onClick={() =>
                          updateDonationStatus(
                            donation.id,
                            'approved'
                          )
                        }
                        disabled={updatingId === donation.id}
                        className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <CheckCircle2 size={16} />

                        {updatingId === donation.id
                          ? 'Updating...'
                          : 'Approve'}
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          updateDonationStatus(
                            donation.id,
                            'rejected'
                          )
                        }
                        disabled={updatingId === donation.id}
                        className="inline-flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <XCircle size={16} />

                        {updatingId === donation.id
                          ? 'Updating...'
                          : 'Reject'}
                      </button>

                    </div>
                  )}

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
                You currently have {stats.pending_donations} donations
                waiting for review. Review them to keep the donation
                process moving smoothly.
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-mist">

                <div
                  className="h-full rounded-full bg-sky transition-all"
                  style={{
                    width: `${Math.min(
                      Math.max(stats.approval_rate || 0, 0),
                      100
                    )}%`,
                  }}
                />

              </div>

              <p className="mt-2 text-xs font-semibold text-slate-muted">
                {stats.approval_rate || 0}% of donations approved
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