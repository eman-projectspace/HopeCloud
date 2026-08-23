import { ClipboardList, Sparkles, Users } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { howItWorks } from '../data/mockData.js'

const ICONS = { ClipboardList, Users, Sparkles }

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad">
      <div className="container-max">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="eyebrow justify-center">The process</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">How HopeCloud works</h2>
        </div>

        <div className="relative grid gap-10 lg:grid-cols-3 lg:gap-6">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-cloudline lg:block" aria-hidden="true" />

          {howItWorks.map((step, i) => {
            const Icon = ICONS[step.icon]
            return (
              <Reveal key={step.id} delay={i * 140} className="relative">
                <div className="relative z-10 flex flex-col items-start">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-cloudline bg-white shadow-card">
                    <Icon className="h-7 w-7 text-deepsea" />
                  </div>
                  <span className="mt-4 font-mono text-xs tracking-[0.14em] text-sky-600">STEP {step.id}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
