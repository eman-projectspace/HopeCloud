import {
  Cloud,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Heart,
  Gift,
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { footerLinks } from '../data/mockData.js'

const SOCIALS = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Linkedin, label: 'LinkedIn' },
]
export default function Footer() {
  const navigate = useNavigate()

  const handleDonate = () => {
    navigate('/register', {
      state: {
        message: 'Please create an account first to donate an item.',
      },
    })
  }
  return (
    <footer id="about" className="bg-deepsea text-white">

      <div className="container-max px-6 py-14 sm:px-10 lg:px-16">

        {/* Main Footer */}

        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">

          {/* Brand */}

          <div className="max-w-sm">

            <a
              href="#home"
              className="inline-flex items-center gap-2 font-display text-xl font-extrabold"
            >

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/10
                  ring-1
                  ring-white/10
                "
              >
                <Cloud className="h-5 w-5 text-sky-300" />
              </span>

              <span>HopeCloud</span>

            </a>


            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sky-50/65">
              Technology for humanity. Hope for everyone.
              Making it easier for useful things to reach people who need them.
            </p>


            {/* Social Links */}

            <div className="mt-6 flex items-center gap-2">

              {SOCIALS.map(({ icon: Icon, label }) => (

                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-sky-100
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-white/20
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <Icon className="h-4 w-4" />
                </a>

              ))}

            </div>

          </div>


          {/* Footer Links */}

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">

            {/* Explore */}

            <div>

              <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
                Explore
              </h3>

              <div className="mt-5 space-y-3">

                {footerLinks.slice(0, 3).map((link) => (

                  <a
                    key={link.label}
                    href={link.href}
                    className="
                      group
                      flex
                      items-center
                      gap-1
                      text-sm
                      text-sky-50/65
                      transition-colors
                      hover:text-white
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      className="
                        h-3 w-3
                        opacity-0
                        transition-opacity
                        group-hover:opacity-100
                      "
                    />

                  </a>

                ))}

              </div>

            </div>


            {/* Support */}

            <div>

              <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
                Support
              </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#causes"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  Causes
                </a>

                <a
                  href="#how-it-works"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="#ai-matching"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  AI Matching
                </a>

              </div>

            </div>


            {/* Company */}


<div id="contact">
  <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
    HopeCloud
  </h3>

              <div className="mt-5 space-y-3">

                <a
                  href="#about"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  About Us
                </a>

                <a
                  href="#contact"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="block text-sm text-sky-50/65 transition-colors hover:text-white"
                >
                  Privacy
                </a>

              </div>

            </div>


            {/* CTA */}

            <div>

              <h3 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white">
                Make an Impact
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-sky-50/60">
                Have something useful you no longer need?
              </p>

               <button
  onClick={handleDonate}
  className="
    mt-6
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-white
    px-5
    py-2.5
    text-sm
    font-bold
    text-deepsea
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-sky-50
    hover:shadow-lg
  "
>
  <Gift className="h-4 w-4" />
  Donate an Item
</button>
            </div>

          </div>

        </div>


        {/* Divider */}

        <div className="mt-12 border-t border-white/10" />


        {/* Bottom */}

        <div className="flex flex-col gap-3 pt-6 text-xs text-sky-50/45 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} HopeCloud. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1">
            Built with
            <Heart className="h-3 w-3 fill-current text-sky-300" />
            for a more giving world.
          </p>

        </div>

      </div>

    </footer>
  )
}