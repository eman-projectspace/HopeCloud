import {
  Gift,
  HeartHandshake,
  Lightbulb,
  Megaphone,
  PackagePlus,
} from 'lucide-react'

import Reveal from './ui/Reveal.jsx'

import { volunteerOptions } from '../data/mockData.js'

const ICONS = {
  HeartHandshake,
  Gift,
  Lightbulb,
  PackagePlus,
  Megaphone,
}

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="section-pad">
      <div className="container-max">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">
            Get involved
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            You Don&apos;t Have to Donate Money to Make a Difference.
          </h2>
        </div>

        {/* Volunteer Options */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {volunteerOptions.map((opt, i) => {
            const Icon = ICONS[opt.icon]

            return (
              <Reveal key={opt.id} delay={i * 90}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-cloudline bg-white p-6 text-left shadow-card transition-transform hover:-translate-y-1">
                  
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-meadow-400/15 text-meadow-600">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="font-display text-base font-bold text-ink">
                    {opt.title}
                  </h3>

                  <p className="text-sm text-slate-muted">
                    {opt.description}
                  </p>

                </div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}