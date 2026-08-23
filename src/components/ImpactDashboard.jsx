import { Activity, ArrowRightLeft, BadgeCheck, ExternalLink, Users, Wallet } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'
import { transparencyMetrics } from '../data/mockData.js'

const ICONS = { Wallet, ArrowRightLeft, Users, Activity, BadgeCheck }

export default function ImpactDashboard() {
  const showToast = useToast()

  return (
    <section className="section-pad">
      <div className="container-max">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">Transparency</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">See Where Your Help Goes.</h2>
          <p className="mt-3 text-slate-muted">Transparency isn&apos;t an option. It&apos;s a promise.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {transparencyMetrics.map((m, i) => {
            const Icon = ICONS[m.icon]
            return (
              <Reveal key={m.id} delay={i * 90}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-cloudline bg-white p-6 shadow-card">
                  <Icon className="h-5 w-5 text-sky-600" />
                  <div className="mt-6">
                    <p className="font-display text-2xl font-extrabold text-ink">{m.value}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-muted">{m.label}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => showToast('The full impact dashboard is being wired up to live data — check back soon!', 'info')}
            className="btn-primary"
          >
            Explore Impact Dashboard <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
