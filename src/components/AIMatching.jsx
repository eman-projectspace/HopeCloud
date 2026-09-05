import {
  Package,
  HeartHandshake,
  Sparkles,
  SearchCheck,
  Users,
  ArrowRight,
  Brain,
  MapPinned,
} from 'lucide-react'
import aiMatchingBg from '../images/AI image.png'
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
    text: 'Connects clean, usable clothing with verified families who need them.',
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
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `url(${aiMatchingBg})`,
}}
      />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px]" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-meadow/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 shadow-soft backdrop-blur">
              <Brain className="h-4 w-4" />
              Smart Matching
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Your Donation.
              <span className="block text-sky-600">
                Matched With Purpose.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-muted sm:text-lg">
              HopeCloud uses intelligent matching to help connect your
              donations with people and communities that genuinely need them.
            </p>
          </div>
        </Reveal>

        {/* AI Flow */}
        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {aiFlow.map((step, index) => (
                <div
                  key={step}
                  className="group relative rounded-2xl border border-cloudline bg-white/90 p-5 text-center shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-card"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-600 transition group-hover:bg-sky-100">
                    <span className="text-lg font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-sm font-bold text-ink sm:text-base">
                    {step}
                  </h3>

                  {index < aiFlow.length - 1 && (
                    <ArrowRight className="mx-auto mt-4 hidden h-4 w-4 text-sky-400 lg:block" />
                  )}
                </div>
              ))}

            </div>
          </div>
        </Reveal>

        {/* Examples */}
        <Reveal delay={200}>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {aiExamples.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-cloudline bg-white/90 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-card"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-muted">
                    {item.text}
                  </p>
                </div>
              )
            })}

          </div>
        </Reveal>

        {/* Bottom Explanation */}
        <Reveal delay={300}>
          <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-card backdrop-blur sm:p-8">

            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <MapPinned className="h-7 w-7" />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                  From What You Have to Who Needs It
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-muted sm:text-base">
                  Instead of wondering where your donation will go,
                  HopeCloud helps create a clear connection between what
                  you have and who needs it.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}