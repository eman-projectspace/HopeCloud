import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react'

function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

const handleLogin = (e) => {
  e.preventDefault()

  setError('')

  const adminEmail = email.trim().toLowerCase()

  if (
    adminEmail === 'admin@hopecloud.com' &&
    password === 'admin123'
  ) {
    localStorage.setItem('hopecloud_admin_logged_in', 'true')

    window.location.href = '/admindashboard'

    return
  }

  setError('Invalid admin email or password.')
}
  return (
    <div className="min-h-screen bg-mist px-4 py-10">

      <div className="flex min-h-[90vh] items-center justify-center">

        <div className="w-full max-w-md">

          {/* Logo / Heading */}

          <div className="mb-8 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-deepsea text-white shadow-glow">
              <ShieldCheck size={30} />
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold text-ink">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-slate-muted">
              Sign in to manage HopeCloud
            </p>

          </div>


          {/* Login Card */}

          <div className="rounded-3xl border border-cloudline bg-white p-7 shadow-card">

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-ink">
                  Admin Email
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@hopecloud.com"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
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


              {/* Login Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90"
              >
                Login to Admin Panel
                <ArrowRight size={17} />
              </button>

            </form>

          </div>


          <p className="mt-6 text-center text-xs text-slate-muted">
            HopeCloud Administration Panel
          </p>

        </div>

      </div>

    </div>
  )
}

export default AdminLogin