import {
  Bell,
  Search,
  ChevronDown,
  UserRound,
  Package,
  CheckCircle2,
  Settings,
  LogOut,
} from 'lucide-react'
import { apiUrl } from '../../config/api'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardHeader() {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const notificationRef = useRef(null)
  const profileRef = useRef(null)

  const navigate = useNavigate()

  // Close dropdowns when clicking outside

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false)
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNavigation = (path) => {
    navigate(path)
    setProfileOpen(false)
    setNotificationOpen(false)
  }

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

      setProfileOpen(false)
      navigate('/login')
    }
  }

  return (
    <header className="sticky top-0 z-20 border-b border-cloudline bg-white/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Search */}

        <div className="hidden w-full max-w-sm md:block">

          <div className="flex items-center gap-3 rounded-xl bg-mist px-4 py-2.5">

            <Search className="h-4 w-4 text-slate-muted" />

            <input
              type="text"
              placeholder="Search your donations..."
              className="
                w-full
                bg-transparent
                text-sm
                text-ink
                outline-none
                placeholder:text-slate-muted
              "
            />

          </div>

        </div>

        <div className="ml-auto flex items-center gap-3">

          {/* Notification */}

          <div className="relative" ref={notificationRef}>

            <button
              onClick={() => {
                setNotificationOpen((value) => !value)
                setProfileOpen(false)
              }}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                text-slate-muted
                transition-all
                hover:bg-sky-50
                hover:text-deepsea
              "
              aria-label="Notifications"
            >

              <Bell className="h-5 w-5" />

              {/* Notification Badge */}

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

            </button>

            {/* Notification Dropdown */}

            {notificationOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-14
                  w-80
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cloudline
                  bg-white
                  shadow-soft
                "
              >

                <div className="flex items-center justify-between border-b border-cloudline p-4">

                  <div>

                    <h3 className="font-display text-sm font-bold text-ink">
                      Notifications
                    </h3>

                    <p className="mt-0.5 text-[10px] text-slate-muted">
                      Recent updates
                    </p>

                  </div>

                  <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] font-bold text-red-500">
                    2 New
                  </span>

                </div>

                <div className="divide-y divide-cloudline">

                  <button
                    onClick={() => handleNavigation('/user-dashboard/donations')}
                    className="
                      flex
                      w-full
                      gap-3
                      p-4
                      text-left
                      transition-colors
                      hover:bg-mist
                    "
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Package className="h-4 w-4" />
                    </div>

                    <div>

                      <p className="text-xs font-bold text-ink">
                        Your winter clothes are in transit
                      </p>

                      <p className="mt-1 text-[10px] leading-relaxed text-slate-muted">
                        Your donation is on its way to the recipient.
                      </p>

                      <p className="mt-1 text-[9px] text-slate-muted">
                        2 hours ago
                      </p>

                    </div>

                  </button>

                  <button
                    onClick={() => handleNavigation('/user-dashboard/donations')}
                    className="
                      flex
                      w-full
                      gap-3
                      p-4
                      text-left
                      transition-colors
                      hover:bg-mist
                    "
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-meadow-500/10 text-meadow-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div>

                      <p className="text-xs font-bold text-ink">
                        Donation successfully delivered
                      </p>

                      <p className="mt-1 text-[10px] leading-relaxed text-slate-muted">
                        Your story books reached a child in need.
                      </p>

                      <p className="mt-1 text-[9px] text-slate-muted">
                        Yesterday
                      </p>

                    </div>

                  </button>

                </div>

                <button
                  onClick={() => setNotificationOpen(false)}
                  className="
                    w-full
                    border-t
                    border-cloudline
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-sky-600
                    transition-colors
                    hover:bg-sky-50
                  "
                >
                  Mark all as read
                </button>

              </div>
            )}

          </div>


          {/* Profile */}

          <div className="relative" ref={profileRef}>

            <button
              onClick={() => {
                setProfileOpen((value) => !value)
                setNotificationOpen(false)
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                px-2
                py-1.5
                transition-colors
                hover:bg-mist
              "
              aria-expanded={profileOpen}
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-deepsea">
                FF
              </div>

              <div className="hidden text-left sm:block">

                <p className="text-xs font-bold text-ink">
                  Faryal Fatima
                </p>

                <p className="text-[10px] text-slate-muted">
                  Donor
                </p>

              </div>

              <ChevronDown
                className={`
                  hidden
                  h-4
                  w-4
                  text-slate-muted
                  transition-transform
                  sm:block
                  ${profileOpen ? 'rotate-180' : ''}
                `}
              />

            </button>


            {/* Profile Dropdown */}

            {profileOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-14
                  w-64
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cloudline
                  bg-white
                  shadow-soft
                "
              >

                {/* User Info */}

                <div className="border-b border-cloudline p-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-deepsea">
                      FF
                    </div>

                    <div>

                      <p className="text-sm font-bold text-ink">
                        Faryal Fatima
                      </p>

                      <p className="text-[10px] text-slate-muted">
                        HopeCloud Donor
                      </p>

                    </div>

                  </div>

                </div>


                {/* Dropdown Links */}

                <div className="p-2">

                  <button
                    onClick={() => handleNavigation('/user-dashboard/profile')}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      font-semibold
                      text-slate-muted
                      transition-colors
                      hover:bg-sky-50
                      hover:text-deepsea
                    "
                  >
                    <UserRound className="h-4 w-4" />
                    My Profile
                  </button>

                  <button
                    onClick={() => handleNavigation('/user-dashboard/settings')}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      font-semibold
                      text-slate-muted
                      transition-colors
                      hover:bg-sky-50
                      hover:text-deepsea
                    "
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>

                </div>


                {/* Sign Out */}

                <div className="border-t border-cloudline p-2">

                  <button
                    onClick={handleSignOut}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-left
                      text-xs
                      font-semibold
                      text-red-500
                      transition-colors
                      hover:bg-red-50
                    "
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  )
}