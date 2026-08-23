import { Quote } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { stories } from '../data/mockData.js'

export default function Stories() {
  return (
    <section className="section-pad bg-white/60">
      <div className="container-max">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">Stories of hope</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">Real change, told simply</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-cloudline bg-white p-7 shadow-card">
                <Quote className="h-6 w-6 text-sky-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">&ldquo;{s.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-cloudline pt-4">
                  <span className="text-sm font-semibold text-ink">{s.name}</span>
                  <span className="rounded-full bg-sky-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sky-600">
                    {s.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
