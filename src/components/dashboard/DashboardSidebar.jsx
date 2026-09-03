import {
  LayoutDashboard,
  Heart,
  Package,
  UserRound,
  Trophy,
  Settings,
  LogOut,
  Gift,
  X,
} from 'lucide-react'

import { apiUrl } from '../../config/api'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/user-dashboard',
  },
  {
    label: 'My Donations',
    icon: Package,
    path: '/user-dashboard/donations',
  },
  {
    label: 'My Impact',
    icon: Heart,
    path: '/user-dashboard/impact',
  },
  {
    label: 'My Profile',
    icon: UserRound,
    path: '/user-dashboard/profile',
  },
  {
    label: 'Achievements',
    icon: Trophy,
    path: '/user-dashboard/achievements',
  },
]

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false)

  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null
    } catch {
      return null
    }
  })

  const location = useLocation()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const token = localStorage.getItem('token')

    try {
      if (token) {
        await fetch(apiUrl('/logout'), {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
      }
    } catch (error) {
      console.error('Logout request failed:', error)
    } finally {
      localStorage.removeItem('token')
      localStorage.removeItem('user')

      setOpen(false)
      navigate('/login')
    }
  }

  const handleDonate = () => {
    navigate('/donate')
    setOpen(false)
  }

  const userInitials =
    user?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase() || 'U'

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}

      {open && (
        <div
          className="fixed inset-0 z-40 bg-deepsea/20 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU BUTTON ================= */}

      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          left-4
          top-4
          z-30
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-white
          text-deepsea
          shadow-card
          lg:hidden
        "
        aria-label="Open dashboard menu"
      >
        <LayoutDashboard className="h-5 w-5" />
      </button>

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-64
          flex-col
          border-r
          border-cloudline
          bg-white
          transition-transform
          duration-300
          lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

        {/* ================= LOGO ================= */}

        <div className="flex items-center justify-between px-6 py-6">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-deepsea
                text-white
                shadow-soft
              "
            >
              <Heart className="h-5 w-5 fill-white" />
            </span>

            <span className="font-display text-xl font-extrabold text-deepsea">
              HopeCloud
            </span>
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-muted lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* ================= USER MINI PROFILE ================= */}

        <div className="mx-4 rounded-2xl bg-mist p-4">

          <div className="flex items-center gap-3">

            {/* User Initials */}
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-sky-100
                font-display
                font-bold
                text-deepsea
              "
            >
              {userInitials}
            </div>

            {/* User Information */}
            <div className="min-w-0">

              <p className="truncate font-display text-sm font-bold text-ink">
                {user?.name || 'User'}
              </p>

              <p className="text-xs text-slate-muted">
                HopeCloud Member
              </p>

            </div>

          </div>

        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className="mt-6 flex-1 overflow-y-auto px-4">

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted">
            Menu
          </p>

          <div className="space-y-1">

            {menuItems.map((item) => {
              const Icon = item.icon

              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    transition-all
                    duration-200

                    ${isActive
                      ? `
                          bg-deepsea
                          text-white
                          shadow-soft
                        `
                      : `
                          text-slate-muted
                          hover:bg-sky-50
                          hover:text-deepsea
                        `
                    }
                  `}
                >

                  <Icon
                    className={`
                      h-[18px]
                      w-[18px]
                      transition-transform
                      duration-200
                      group-hover:scale-110

                      ${isActive
                        ? 'text-white'
                        : 'text-slate-muted group-hover:text-deepsea'
                      }
                    `}
                  />

                  {item.label}

                </Link>
              )
            })}

          </div>

          {/* ================= DONATE CTA ================= */}

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-4">

            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
              <Gift className="h-5 w-5" />
            </div>

            <p className="font-display text-sm font-bold text-ink">
              Ready to help again?
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-muted">
              Your next donation could make another difference.
            </p>

            <button
              onClick={handleDonate}
              className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-deepsea
                px-4
                py-2.5
                text-xs
                font-bold
                text-white
                transition-all
                hover:bg-sky-600
                hover:shadow-glow
                active:scale-[0.98]
              "
            >
              <Gift className="h-3.5 w-3.5" />
              Donate Now
            </button>

          </div>

        </nav>

        {/* ================= BOTTOM ================= */}

        <div className="border-t border-cloudline p-4">

          {/* Settings */}

          <button
            onClick={() => {
              setOpen(false)
              navigate('/user-dashboard/settings')
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-semibold
              text-slate-muted
              transition-colors
              hover:bg-sky-50
              hover:text-deepsea
            "
          >
            <Settings className="h-[18px] w-[18px]" />
            Settings
          </button>

          {/* Sign Out */}

          <button
            onClick={handleSignOut}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-3
              py-3
              text-sm
              font-semibold
              text-slate-muted
              transition-colors
              hover:bg-red-50
              hover:text-red-500
            "
          >
            <LogOut className="h-[18px] w-[18px]" />
            Sign Out
          </button>

        </div>

      </aside>
    </>
  )
}