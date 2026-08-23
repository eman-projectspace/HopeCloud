import { AlertCircle, ArrowRight, Handshake, LineChart, SearchCheck, Sparkles, Users } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { aiExamples, aiFlow } from '../data/mockData.js'

const ICONS = { Handshake, AlertCircle, Users, SearchCheck, LineChart }

export default function AIMatching() {
  return (
    <section className="section-pad bg-deepsea">
      <div className="container-max">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-sky-100">
            <Sparkles className="h-3 w-3" /> Powered by AI
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            AI That Connects Help With Need.
          </h2>
          <p className="mt-3 text-sky-50/80">
            HopeCloud uses intelligent matching to connect available resources with verified community needs, helping support reach the people and causes where it can make the greatest difference.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {aiFlow.map((step, i) => (
            <div key={step} className="flex items-center gap-3 sm:gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 font-display text-sm font-semibold text-white backdrop-blur">
                {step}
              </div>
              {i < aiFlow.length - 1 && <ArrowRight className="h-4 w-4 text-sky-200" />}
            </div>
          ))}
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {aiExamples.map((ex, i) => {
            const Icon = ICONS[ex.icon]
            return (
              <Reveal key={ex.text} delay={i * 90}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Icon className="h-5 w-5 text-meadow-400" />
                  <p className="text-sm text-sky-50/90">{ex.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
