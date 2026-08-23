import { Cloud, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { footerLinks } from '../data/mockData.js'

const SOCIALS = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer id="about" className="bg-deepsea">
      <div className="container-max px-6 py-14 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-extrabold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <Cloud className="h-5 w-5" />
              </span>
              HopeCloud
            </a>
            <p className="mt-3 max-w-xs text-sm text-sky-50/70">Technology for humanity. Hope for everyone.</p>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav id="contact" aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-4">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-sky-50/80 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center font-mono text-[11px] text-sky-50/50">
          © {new Date().getFullYear()} HopeCloud. Built for the AI hackathon. All data shown is illustrative.
        </div>
      </div>
    </footer>
  )
}
