import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  HeartHandshake,
  Users,
  LogOut,
  ShieldCheck,
  UserCircle,
  UserPlus,
} from 'lucide-react'

function AdminSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      label: 'Dashboard',
      path: '/admindashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Donations',
      path: '/admin/donations',
      icon: HeartHandshake,
    },
    {
      label: 'Users',
      path: '/admin/users',
      icon: Users,
    },
  ]

const handleLogout = () => {
  localStorage.removeItem('hopecloud_admin_logged_in')

  window.location.href = '/admindashboard'
}

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-cloudline bg-white lg:flex lg:flex-col">

      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-cloudline px-6 py-5">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deepsea text-white">
          <ShieldCheck size={21} />
        </div>

        <div>
          <h2 className="font-display font-extrabold text-ink">
            HopeCloud
          </h2>

          <p className="text-xs text-slate-muted">
            Admin Panel
          </p>
        </div>

      </div>


      {/* Main Navigation */}

      <nav className="flex-1 space-y-2 px-4 py-6">

        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted">
          Main Menu
        </p>

        {menuItems.map((item) => {

          const Icon = item.icon
          const active = location.pathname === item.path

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                  ? 'bg-deepsea text-white shadow-soft'
                  : 'text-slate-muted hover:bg-mist hover:text-ink'
              }`}
            >
              <Icon size={19} />
              {item.label}
            </Link>
          )
        })}


        {/* Admin Management */}

        <p className="mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted">
          Account
        </p>

        <Link
          to="/admin/profile"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            location.pathname === '/admin/profile'
              ? 'bg-deepsea text-white shadow-soft'
              : 'text-slate-muted hover:bg-mist hover:text-ink'
          }`}
        >
          <UserCircle size={19} />
          Admin Profile
        </Link>

        <Link
          to="/admin/add-admin"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            location.pathname === '/admin/add-admin'
              ? 'bg-deepsea text-white shadow-soft'
              : 'text-slate-muted hover:bg-mist hover:text-ink'
          }`}
        >
          <UserPlus size={19} />
          Add Another Admin
        </Link>

      </nav>


      {/* Logout */}

      <div className="border-t border-cloudline p-4">

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={19} />
          Logout
        </button>

      </div>

    </aside>
  )
}

export default AdminSidebar