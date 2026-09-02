import { useState } from 'react'
import {
  UserPlus,
  UserCircle,
  Mail,
  Lock,
  CheckCircle2,
} from 'lucide-react'

import AdminSidebar from '../../components/admin/AdminSidebar.jsx'

function AddAdmin() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    setError('')
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')
    setSuccess(false)

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    // Temporary frontend prototype
    const admins =
      JSON.parse(localStorage.getItem('hopecloud_admins')) || []

    admins.push({
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: 'Administrator',
    })

    localStorage.setItem(
      'hopecloud_admins',
      JSON.stringify(admins)
    )

    setSuccess(true)

    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="min-h-screen bg-mist">

      <AdminSidebar />

      <main className="lg:ml-64">

        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">

          {/* Header */}

          <div className="mb-8">

            <p className="text-sm font-semibold text-sky-600">
              Account Management
            </p>

            <h1 className="mt-1 font-display text-3xl font-extrabold text-ink">
              Add Another Admin
            </h1>

            <p className="mt-2 text-sm text-slate-muted">
              Create a new administrator account for HopeCloud.
            </p>

          </div>


          {/* Form Card */}

          <div className="rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8">

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <UserPlus size={22} />
              </div>

              <div>

                <h2 className="font-display text-lg font-extrabold text-ink">
                  Administrator Registration
                </h2>

                <p className="text-xs text-slate-muted">
                  Enter the details for the new admin.
                </p>

              </div>

            </div>


            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-ink">
                  Full Name
                </label>

                <div className="relative">

                  <UserCircle
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"
                  />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter admin name"
                    className="w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-ink">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="admin@example.com"
                    className="w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
                    required
                  />

                </div>

              </div>


              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-ink">
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"
                  />

                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Minimum 6 characters"
                    className="w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
                    required
                  />

                </div>

              </div>


              {/* Confirm Password */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-ink">
                  Confirm Password
                </label>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className="w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
                    required
                  />

                </div>

              </div>


              {/* Error */}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}


              {/* Success */}

              {success && (
                <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-600">

                  <CheckCircle2 size={18} />

                  Admin account created successfully.

                </div>
              )}


              {/* Submit */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90"
              >
                <UserPlus size={18} />
                Create Admin Account
              </button>

            </form>

          </div>

        </div>

      </main>

    </div>
  )
}

export default AddAdmin