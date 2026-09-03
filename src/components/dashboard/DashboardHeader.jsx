import {
  Bell,
  ChevronDown,
  Search,
  Settings,
  UserRound,
  LogOut,
  Menu,
} from 'lucide-react'

import { apiUrl } from '../../config/api'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function DashboardHeader() {
  const navigate = useNavigate()

  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null
    } catch {
      return null
    }
  })

  const [profileOpen, setProfileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const profileRef = useRef(null)
  const notificationsRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false)
      }

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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

  const userInitials =
    user?.name
      ?.split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase() || 'U'

  return (
    <header className="sticky top-0 z-30 border-b border-cloudline bg-white">
      <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Left side */}
        <div className="flex items-center gap-4">

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl p-2 text-slate-muted hover:bg-mist hover:text-ink lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted">
              HopeCloud
            </p>

            <h1 className="font-display text-lg font-extrabold text-ink">
              Donor Dashboard
            </h1>
          </div>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden items-center rounded-xl border border-cloudline bg-mist px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-slate-muted" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-32 bg-transparent text-sm outline-none placeholder:text-slate-muted"
            />
          </div>

          {/* Notifications */}
          <div
            ref={notificationsRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() =>
                setNotificationsOpen(!notificationsOpen)
              }
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-muted transition hover:bg-mist hover:text-ink"
            >
              <Bell className="h-5 w-5" />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-sky-500" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-2xl border border-cloudline bg-white shadow-card">

                <div className="border-b border-cloudline px-5 py-4">
                  <p className="font-display text-sm font-bold text-ink">
                    Notifications
                  </p>

                  <p className="mt-1 text-xs text-slate-muted">
                    Your latest HopeCloud activity
                  </p>
                </div>

                <div className="px-5 py-6 text-center">
                  <Bell className="mx-auto h-6 w-6 text-slate-muted" />

                  <p className="mt-3 text-sm font-semibold text-ink">
                    No new notifications
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-muted">
                    New donation updates will appear here when available.
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Profile */}
          <div
            ref={profileRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 rounded-xl p-1.5 pr-2 transition hover:bg-mist"
            >

              {/* Initials */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700">
                {userInitials}
              </div>

              {/* User information */}
              <div className="hidden text-left sm:block">
                <p className="text-sm font-bold text-ink">
                  {user?.name || 'User'}
                </p>

                <p className="text-[11px] text-slate-muted">
                  HopeCloud Donor
                </p>
              </div>

              <ChevronDown className="hidden h-4 w-4 text-slate-muted sm:block" />

            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-cloudline bg-white shadow-card">

                {/* Profile header */}
                <div className="border-b border-cloudline px-4 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700">
                      {userInitials}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-ink">
                        {user?.name || 'User'}
                      </p>

                      <p className="truncate text-xs text-slate-muted">
                        {user?.email || 'No email available'}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Menu */}
                <div className="p-2">

                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false)
                      navigate('/user-dashboard/profile')
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-ink transition hover:bg-mist"
                  >
                    <UserRound className="h-4 w-4" />
                    My Profile
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setProfileOpen(false)
                      navigate('/user-dashboard/profile')
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-ink transition hover:bg-mist"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>

                </div>

                {/* Logout */}
                <div className="border-t border-cloudline p-2">

                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
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