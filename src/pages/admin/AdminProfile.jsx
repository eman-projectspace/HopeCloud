import {
  UserCircle,
  Mail,
  ShieldCheck,
  Lock,
} from 'lucide-react'

import AdminSidebar from '../../components/admin/AdminSidebar.jsx'

function AdminProfile() {

  const admin = {
    name: 'HopeCloud Admin',
    email: 'admin@hopecloud.com',
    role: 'Administrator',
  }

  return (
    <div className="min-h-screen bg-mist">

      <AdminSidebar />

      <main className="lg:ml-64">

        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">

          {/* Header */}

          <div className="mb-8">

            <p className="text-sm font-semibold text-sky-600">
              Account
            </p>

            <h1 className="mt-1 font-display text-3xl font-extrabold text-ink">
              Admin Profile
            </h1>

            <p className="mt-2 text-sm text-slate-muted">
              Manage your administrator account information.
            </p>

          </div>


          {/* Profile Card */}

          <div className="rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              {/* Avatar */}

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-deepsea text-white">
                <UserCircle size={42} />
              </div>

              <div>

                <h2 className="font-display text-2xl font-extrabold text-ink">
                  {admin.name}
                </h2>

                <p className="mt-1 text-sm text-slate-muted">
                  {admin.email}
                </p>

                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">
                  <ShieldCheck size={14} />
                  {admin.role}
                </span>

              </div>

            </div>


            {/* Information */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-cloudline bg-mist p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600">
                    <UserCircle size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-muted">
                      Full Name
                    </p>

                    <p className="mt-1 text-sm font-bold text-ink">
                      {admin.name}
                    </p>
                  </div>

                </div>

              </div>


              <div className="rounded-2xl border border-cloudline bg-mist p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-muted">
                      Email Address
                    </p>

                    <p className="mt-1 text-sm font-bold text-ink">
                      {admin.email}
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Security */}

            <div className="mt-6 rounded-2xl border border-cloudline p-5">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Lock size={19} />
                </div>

                <div>

                  <h3 className="text-sm font-bold text-ink">
                    Account Security
                  </h3>

                  <p className="mt-1 text-sm text-slate-muted">
                    Your administrator account is protected with a password.
                  </p>

                  <button
                    type="button"
                    className="mt-4 rounded-xl border border-cloudline px-4 py-2 text-sm font-bold text-ink transition hover:bg-mist"
                  >
                    Change Password
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default AdminProfile