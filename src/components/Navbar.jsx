import { useEffect, useState } from 'react'
import { Cloud, Menu, X } from 'lucide-react'
import { navLinks } from '../data/mockData.js'
import { useToast } from './ui/Toast.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const showToast = useToast()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold text-deepsea">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-deepsea text-white">
            <Cloud className="h-5 w-5" />
          </span>
          HopeCloud
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="btn-ghost">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button onClick={() => showToast('Thanks for stepping up. Our Get Help intake opens right after the hackathon demo.', 'info')} className="btn-secondary">
            Get Help
          </button>
          <button onClick={() => showToast('Thank you! Secure donations launch with our payments integration.')} className="btn-primary">
            Donate
          </button>
        </div>

        <button
          className="rounded-lg p-2 text-deepsea lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-cloudline px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-deepsea hover:bg-sky-50">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <button onClick={() => { setOpen(false); showToast('Thanks for stepping up. Our Get Help intake opens right after the hackathon demo.', 'info') }} className="btn-secondary w-full">
              Get Help
            </button>
            <button onClick={() => { setOpen(false); showToast('Thank you! Secure donations launch with our payments integration.') }} className="btn-primary w-full">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
