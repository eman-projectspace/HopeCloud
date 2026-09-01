import {
  ArrowRight,
  Cloud,
  Gift,
  Heart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import ConstellationCloud from './ui/ConstellationCloud.jsx'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'

export default function Hero() {
  const showToast = useToast()

  const handleDonate = () => {
    showToast(
      'Please create an account or log in to start your donation.',
      'info'
    )
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mist pt-32 sm:pt-40"
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
          Static only — no animation
      ====================================================== */}

      {/* Soft blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          bg-sky-100
          blur-3xl
        "
      />

      {/* Soft green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/3
          h-80
          w-80
          rounded-full
          bg-meadow-400/10
          blur-3xl
        "
      />

      {/* =====================================================
          DECORATIVE CLOUDS
      ====================================================== */}

      <Cloud
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[22%]
          h-14
          w-14
          text-sky-200/70
        "
        strokeWidth={1.2}
      />

      <Cloud
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[16%]
          h-20
          w-20
          text-white/90
        "
        strokeWidth={1}
      />

      <Cloud
        className="
          pointer-events-none
          absolute
          bottom-[12%]
          left-[7%]
          h-10
          w-10
          text-sky-200/50
        "
        strokeWidth={1}
      />

      {/* =====================================================
          STATIC SPARKLES
      ====================================================== */}

      <Sparkles
        className="
          pointer-events-none
          absolute
          left-[16%]
          top-[18%]
          h-5
          w-5
          text-sky-400/60
        "
        strokeWidth={1.5}
      />

      <Sparkles
        className="
          pointer-events-none
          absolute
          right-[20%]
          top-[27%]
          h-4
          w-4
          text-amber-500/60
        "
        strokeWidth={1.5}
      />

      <Sparkles
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          right-[10%]
          h-5
          w-5
          text-meadow-500/50
        "
        strokeWidth={1.5}
      />


      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}

      <div
        className="
          container-max
          relative
          z-10
          grid
          gap-14
          px-6
          pb-20
          sm:px-10
          lg:grid-cols-[1.05fr_0.95fr]
          lg:items-center
          lg:gap-10
          lg:px-16
          lg:pb-28
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <Reveal>

          {/* Small eyebrow */}

          <div className="mb-6 flex items-center gap-2">

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-sky-100
              "
            >
              <Heart
                className="h-4 w-4 fill-sky-500 text-sky-500"
              />
            </span>

            <span className="eyebrow">
              Give a little. Change a lot.
            </span>

          </div>


          {/* Main heading */}
<h1
  className="
    max-w-2xl
    font-display
    text-3xl
    font-extrabold
    leading-[1.08]
    tracking-[-0.025em]
    text-ink
    sm:text-4xl
    md:text-5xl
    lg:text-[3.4rem]
    xl:text-[3.8rem]
  "
>
 Turning Hope Into Action.
</h1>


          {/* Description */}

          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-muted
              sm:text-lg
              sm:leading-8
            "
          >
            Donate clothes, books, toys, school supplies, and other
            useful items to people and children who need them.
            Whether new or gently used, your donation can make
            a meaningful difference.
          </p>


          {/* CTA buttons */}

          <div className="mt-9 flex flex-wrap items-center gap-4">

            {/* Donate Now */}

            <button
              onClick={handleDonate}
              className="btn-primary group"
            >
              <Gift
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              Donate Now

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>


            {/* Secondary CTA */}

            <a
              href="#how-it-works"
              className="btn-secondary"
            >
              How It Works
            </a>

          </div>


          {/* Trust statement */}

          <div
            className="
              mt-9
              flex
              items-center
              gap-2
              text-sm
              text-slate-muted
            "
          >
            <ShieldCheck
              className="h-4 w-4 text-meadow-600"
            />

            <span>
              Every useful item can have a second life.
            </span>
          </div>

        </Reveal>


        {/* =================================================
            RIGHT VISUAL
        ================================================== */}

        <Reveal delay={150}>

          <div className="relative">

            {/* Small decorative sparkle near visual */}

            <Sparkles
              className="
                pointer-events-none
                absolute
                -right-2
                top-4
                z-20
                h-6
                w-6
                text-amber-500/70
              "
              strokeWidth={1.5}
            />

            <ConstellationCloud />

          </div>

        </Reveal>

      </div>


      {/* =====================================================
          BOTTOM CATEGORY HINT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-5xl
          flex-wrap
          justify-center
          gap-x-6
          gap-y-3
          px-6
          pb-10
          text-xs
          font-semibold
          text-slate-muted
          sm:px-10
        "
      >

        <span>👕 Clothes</span>

        <span className="text-cloudline">•</span>

        <span>📚 Books</span>

        <span className="text-cloudline">•</span>

        <span>🎁 Kids Essentials</span>

        <span className="text-cloudline">•</span>

        <span>🎒 School Supplies</span>

        <span className="text-cloudline">•</span>

        <span>✨ More</span>

      </div>

    </section>
  )
}