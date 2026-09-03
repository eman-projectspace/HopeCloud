import {
  Sparkles,
  Gift,
  ArrowRight,
} from 'lucide-react'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export default function WelcomeBanner() {

  const navigate = useNavigate()

  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user')) || null
    } catch {
      return null
    }
  })

  const handleDonate = () => {
    navigate('/donate')
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-deepsea
        p-6
        text-white
        shadow-soft
        sm:p-8
      "
    >

      {/* Decorative circles */}

      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-500/20 blur-2xl" />

      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-meadow-500/10 blur-2xl" />


      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Text */}

        <div>

          <div className="mb-3 flex items-center gap-2 text-sky-200">

            <Sparkles className="h-4 w-4" />

            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
              Your Impact
            </span>

          </div>


          <h1 className="font-display text-2xl font-extrabold sm:text-3xl">
            Welcome back, {user?.name || 'there'}! 👋
          </h1>


          <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100">
            Every item you give creates an opportunity for someone else.
            Here's a look at the difference you're making.
          </p>

        </div>


        {/* Donate Button */}

        <button
          onClick={handleDonate}
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            py-3
            text-sm
            font-bold
            text-deepsea
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            active:scale-[0.98]
          "
        >

          <Gift className="h-4 w-4" />

          Donate Now

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>

    </section>
  )
}