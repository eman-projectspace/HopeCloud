import { useEffect, useState } from 'react'
import {
  Cloud,
  Menu,
  X,
  LogIn,
  UserPlus,
  LogOut,
  LayoutDashboard,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { apiUrl } from '../config/api'

const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'Categories',
    href: '#causes',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Invalid stored user:', error)
        localStorage.removeItem('user')
      }
    }
  }, [])

  const handleLogout = async () => {
    const token = localStorage.getItem('token')

    try {
      if (token) {
        await fetch(apiUrl('/logout'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    }

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    setUser(null)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const closeMenu = () => {
    setOpen(false)
  }

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? 'glass shadow-card'
          : 'bg-white/70 backdrop-blur-sm'
        }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

        {/* LOGO */}
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-lg font-extrabold text-deepsea"
          aria-label="HopeCloud Home"
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl
            bg-deepsea text-white shadow-soft
            transition-all duration-300
            group-hover:scale-110
            group-hover:rotate-3
            group-hover:shadow-glow"
          >
            <Cloud className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>

          <span className="transition-colors duration-300 group-hover:text-sky-600">
            HopeCloud
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2.5
                font-display text-sm font-semibold text-deepsea
                transition-all duration-300
                hover:bg-sky-50
                hover:text-sky-600"
              >
                {link.label}

                <span
                  className="absolute bottom-1.5 left-1/2 h-0.5 w-0
                  -translate-x-1/2 rounded-full bg-sky-500
                  transition-all duration-300
                  group-hover:w-5"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP AUTH ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              {/* Dashboard */}
              <Link
                to="/user-dashboard"
                className="inline-flex items-center gap-2
                rounded-full px-4 py-2.5
                font-display text-sm font-semibold text-deepsea
                transition-all duration-300
                hover:bg-sky-50
                hover:text-sky-600
                hover:-translate-y-0.5"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>

              {/* Welcome */}
              <span className="px-4 py-2.5 font-display text-sm font-semibold text-deepsea">
                Welcome, {user.name}
              </span>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2
                rounded-full bg-deepsea
                px-5 py-2.5
                font-display text-sm font-semibold text-white
                shadow-soft
                transition-all duration-300
                hover:bg-red-500
                hover:shadow-glow
                hover:-translate-y-0.5"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Sign In */}
              <Link
                to="/login"
                className="inline-flex items-center gap-2
                rounded-full px-4 py-2.5
                font-display text-sm font-semibold text-deepsea
                transition-all duration-300
                hover:bg-sky-50
                hover:text-sky-600
                hover:-translate-y-0.5"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>

              {/* Register */}
              <Link
                to="/register"
                className="group inline-flex items-center gap-2
                rounded-full bg-deepsea
                px-5 py-2.5
                font-display text-sm font-semibold text-white
                shadow-soft
                transition-all duration-300
                hover:bg-sky-600
                hover:shadow-glow
                hover:-translate-y-0.5
                active:scale-[0.98]"
              >
                <UserPlus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                Join HopeCloud
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="rounded-xl p-2.5 text-deepsea
          transition-all duration-300
          hover:bg-sky-50
          hover:text-sky-600
          lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="border-t border-cloudline bg-white/95
          px-6 pb-6 pt-4 shadow-card
          backdrop-blur-xl
          animate-fadeUp
          lg:hidden"
        >
          {/* Mobile navigation */}
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-xl px-4 py-3
                  font-display text-sm font-semibold text-deepsea
                  transition-all duration-300
                  hover:bg-sky-50
                  hover:text-sky-600
                  hover:translate-x-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="my-4 h-px bg-cloudline" />

          {/* MOBILE AUTH */}
          {user ? (
            <div className="flex flex-col gap-3">
              {/* Dashboard */}
              <Link
                to="/user-dashboard"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2
                rounded-xl bg-deepsea
                px-4 py-3
                font-display text-sm font-semibold text-white
                shadow-soft
                transition-all duration-300
                hover:bg-sky-600
                hover:shadow-glow"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>

              {/* Welcome */}
              <div
                className="rounded-xl bg-sky-50 px-4 py-3
                text-center font-display text-sm font-semibold text-deepsea"
              >
                Welcome, {user.name}
              </div>

              {/* Logout */}
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2
                rounded-xl border border-red-200
                bg-white px-4 py-3
                font-display text-sm font-semibold text-red-500
                transition-all duration-300
                hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {/* Sign In */}
              <Link
                to="/login"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2
                rounded-xl border border-deepsea/15
                bg-white px-4 py-3
                font-display text-sm font-semibold text-deepsea
                transition-all duration-300
                hover:border-sky-400
                hover:bg-sky-50
                hover:text-sky-600"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>

              {/* Register */}
              <Link
                to="/register"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2
                rounded-xl bg-deepsea
                px-4 py-3
                font-display text-sm font-semibold text-white
                shadow-soft
                transition-all duration-300
                hover:bg-sky-600
                hover:shadow-glow
                active:scale-[0.98]"
              >
                <UserPlus className="h-4 w-4" />
                Join Us
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}