import {
  Search,
  Gift,
  Sparkles,
  HeartHandshake,
  BarChart3,
} from 'lucide-react'

import Reveal from './ui/Reveal.jsx'

const steps = [
  {
    id: '01',
    icon: Search,
    title: 'Find Something to Give',
    description:
      'Choose something you no longer need — such as books, clothes, food, or useful household items.',
  },
  {
    id: '02',
    icon: Gift,
    title: 'Share Your Donation',
    description:
      'Tell us what you want to donate, add a photo and a few details, then submit your donation.',
  },
  {
    id: '03',
    icon: Sparkles,
    title: 'We Find the Right Match',
    description:
      'HopeCloud helps connect your donation with a verified need where it can make the most difference.',
  },
  {
    id: '04',
    icon: HeartHandshake,
    title: 'Your Gift Reaches Someone',
    description:
      'Your donated item is delivered to a person, family, or community that genuinely needs it.',
  },
  {
    id: '05',
    icon: BarChart3,
    title: 'See the Difference',
    description:
      'Track your donation, see its status, and discover the real impact your contribution has created.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white section-pad"
    >

      {/* Soft background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-sky-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-meadow-400/10
          blur-3xl
        "
      />


      <div className="container-max relative z-10">

        {/* Section Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <Reveal>

            <span className="eyebrow justify-center">
             How it works
            </span>

            <h2
              className="
                mt-4
                font-display
                text-3xl
                font-extrabold
                tracking-tight
                text-ink
                sm:text-4xl
                lg:text-5xl
              "
            >
              From Your Hands
              <span className="text-sky-500"> to Someone's Hope.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-muted sm:text-base">
              Donating through HopeCloud is simple. Give something useful,
              let us connect it with the right need, and see the difference
              your kindness creates.
            </p>

          </Reveal>

        </div>


        {/* Steps */}

        <div className="relative">

          {/* Connecting line — desktop */}

          <div
            className="
              pointer-events-none
              absolute
              left-[10%]
              right-[10%]
              top-10
              hidden
              h-px
              bg-gradient-to-r
              from-sky-100
              via-sky-300
              to-meadow-200
              lg:block
            "
            aria-hidden="true"
          />


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">

            {steps.map((step, index) => {

              const Icon = step.icon

              return (
                <Reveal
                  key={step.id}
                  delay={index * 120}
                  className="relative"
                >

                  <div className="group relative flex h-full flex-col">

                    {/* Step number + icon */}

                    <div className="relative z-10 flex items-center justify-between lg:block">

                      <div
                        className="
                          flex
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-cloudline
                          bg-white
                          shadow-card
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:border-sky-200
                          group-hover:shadow-soft
                        "
                      >

                        <Icon
                          className="
                            h-7
                            w-7
                            text-deepsea
                            transition-colors
                            duration-300
                            group-hover:text-sky-500
                          "
                        />

                      </div>


                      <span
                        className="
                          font-mono
                          text-xs
                          font-bold
                          tracking-[0.15em]
                          text-sky-500
                          lg:absolute
                          lg:left-24
                          lg:top-2
                        "
                      >
                        STEP {step.id}
                      </span>

                    </div>


                    {/* Content */}

                    <div className="mt-5">

                      <h3
                        className="
                          font-display
                          text-lg
                          font-bold
                          leading-snug
                          text-ink
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-slate-muted
                        "
                      >
                        {step.description}
                      </p>

                    </div>


                    {/* Mobile / tablet connector */}

                    {index < steps.length - 1 && (
                      <div
                        className="
                          absolute
                          bottom-[-32px]
                          left-10
                          hidden
                          h-8
                          w-px
                          bg-cloudline
                          sm:block
                          lg:hidden
                        "
                        aria-hidden="true"
                      />
                    )}

                  </div>

                </Reveal>
              )
            })}

          </div>

        </div>


        {/* Bottom CTA / message */}

        <Reveal delay={650}>

          <div
            className="
              mx-auto
              mt-14
              flex
              max-w-3xl
              flex-col
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-sky-100
              bg-sky-50/60
              px-6
              py-5
              text-center
              sm:flex-row
              sm:text-left
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-sky-500
                  shadow-sm
                "
              >
                <HeartHandshake className="h-5 w-5" />
              </div>

              <p className="text-sm font-semibold text-ink">
                One simple donation can become someone's new beginning.
              </p>

            </div>


            <a
              href="/donate"
              className="
                inline-flex
                shrink-0
                items-center
                rounded-full
                bg-deepsea
                px-5
                py-2.5
                text-xs
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-sky-600
                hover:shadow-glow
              "
            >
              Start Giving
            </a>

          </div>

        </Reveal>

      </div>

    </section>
  )
}