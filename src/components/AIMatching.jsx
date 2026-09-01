import {
  Package,
  SearchCheck,
  Sparkles,
  Users,
  HeartHandshake,
  ArrowRight,
  MapPin,
} from 'lucide-react'

import Reveal from './ui/Reveal.jsx'

const aiFlow = [
  'Your Donation',
  'AI Understands It',
  'Finds a Matching Need',
  'Reaches the Right Person',
]

const aiExamples = [
  {
    icon: Package,
    title: 'Books',
    text: 'Matches educational books with students or learning centers that need them.',
  },
  {
    icon: HeartHandshake,
    title: 'Clothes',
    text: 'Connects clean, usable clothing with verified families who need it.',
  },
  {
    icon: Sparkles,
    title: 'Toys & Gifts',
    text: 'Helps meaningful gifts and toys reach children who can benefit from them.',
  },
  {
    icon: SearchCheck,
    title: 'School Supplies',
    text: 'Finds students and community programs looking for stationery and school essentials.',
  },
  {
    icon: Users,
    title: 'Verified Needs',
    text: 'Prioritizes genuine, verified requests so your donation can create real impact.',
  },
]

export default function AIMatching() {
  return (
    <section className="relative overflow-hidden bg-deepsea py-20 sm:py-24">

      {/* Decorative background */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-meadow-500/10 blur-3xl" />


      <div className="container-max relative z-10">

        {/* Heading */}

        <Reveal className="mx-auto max-w-3xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-white/10
              px-3
              py-1
              font-mono
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-sky-100
            "
          >
            <Sparkles className="h-3 w-3" />
            Smart Matching
          </span>

          <h2
            className="
              mt-5
              font-display
              text-3xl
              font-extrabold
              leading-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Your Donation.
            <span className="block text-sky-300">
              Matched With The Right Need.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-sky-50/75 sm:text-base">
            HopeCloud uses AI to understand what you donate and help match it
            with verified needs in the community — so useful things reach
            people who can genuinely benefit from them.
          </p>

        </Reveal>


        {/* AI Flow */}

        <Reveal
          delay={120}
          className="mt-14"
        >

          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row md:gap-2">

            {aiFlow.map((step, index) => (

              <div
                key={step}
                className="flex w-full items-center justify-center md:w-auto"
              >

                <div
                  className="
                    flex
                    min-h-[76px]
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.07]
                    px-5
                    text-center
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/10
                    md:w-[190px]
                  "
                >

                  <div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300">
                      Step {index + 1}
                    </span>

                    <p className="mt-1 font-display text-sm font-bold text-white">
                      {step}
                    </p>

                  </div>

                </div>

                {index < aiFlow.length - 1 && (
                  <ArrowRight className="mx-2 hidden h-4 w-4 shrink-0 text-sky-300 md:block" />
                )}

              </div>

            ))}

          </div>

        </Reveal>

       {/* Examples */}

<div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">

  {aiExamples.map((item, index) => {

    const Icon = item.icon

    return (

      <Reveal
        key={item.title}
        delay={index * 90}
      >

        <div
          className="
            group
            flex
            h-full
            items-start
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.06]
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-white/20
            hover:bg-white/[0.09]
          "
        >

          {/* Icon */}

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-white/10
              text-sky-300
              transition-transform
              duration-300
              group-hover:scale-110
            "
          >
            <Icon className="h-5 w-5" />
          </div>


          {/* Content */}

          <div className="min-w-0">

            <h3 className="font-display text-sm font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-1.5 text-xs leading-relaxed text-sky-50/65">
              {item.text}
            </p>

          </div>

        </div>

      </Reveal>

    )

  })}

</div>

        {/* Bottom explanation */}

        <Reveal delay={250}>

          <div
            className="
              mx-auto
              mt-10
              flex
              max-w-3xl
              flex-col
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              px-5
              py-4
              text-center
              sm:flex-row
              sm:text-left
            "
          >

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
              <MapPin className="h-4 w-4" />
            </div>

            <p className="text-xs leading-relaxed text-sky-50/70">
              Instead of wondering where your donation will go, HopeCloud
              helps create a clear connection between{' '}
              <span className="font-semibold text-white">
                what you have
              </span>{' '}
              and{' '}
              <span className="font-semibold text-white">
                who needs it.
              </span>
            </p>

          </div>

        </Reveal>

      </div>

    </section>
  )
}