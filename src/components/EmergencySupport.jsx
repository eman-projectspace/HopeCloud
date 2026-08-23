import { AlertTriangle } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'
import { urgentCampaigns } from '../data/mockData.js'

export default function EmergencySupport() {
  const showToast = useToast()

  return (
    <section className="section-pad bg-amber-100/50">
      <div className="container-max">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-amber-600">
            <AlertTriangle className="h-3 w-3" /> Verified urgent needs
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">Some Needs Can&apos;t Wait.</h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {urgentCampaigns.map((c, i) => {
            const pct = Math.min(100, Math.round((c.raised / c.goal) * 100))
            const remaining = c.goal - c.raised
            return (
              <Reveal key={c.id} delay={i * 110}>
                <div className="flex h-full flex-col rounded-2xl border border-amber-500/20 bg-white p-6 shadow-card">
                  <span className="w-fit rounded-full bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-amber-600">
                    {c.cause}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-ink">{c.title}</h3>

                  <div className="mt-5">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-amber-100">
                      <div className="h-full rounded-full bg-amber-500" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-2 font-mono text-[11px] text-slate-muted">
                      ${remaining.toLocaleString()} still needed
                    </p>
                  </div>

                  <button
                    onClick={() => showToast(`Thank you for responding to ${c.title}.`)}
                    className="mt-5 rounded-full bg-amber-500 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                  >
                    Support Now
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
