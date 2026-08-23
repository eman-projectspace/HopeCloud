import useReveal from '../hooks/useReveal.js'
import useCountUp from '../hooks/useCountUp.js'
import { impactStats } from '../data/mockData.js'

function StatCard({ stat, active, delay }) {
  const value = useCountUp(stat.value, active, 1800)
  return (
    <div
      className={`rounded-2xl border border-cloudline bg-white/70 p-6 text-center shadow-card transition-all duration-700 ease-out ${
        active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-3xl font-extrabold text-deepsea sm:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-muted">{stat.label}</p>
    </div>
  )
}

export default function ImpactStats() {
  const [ref, visible] = useReveal(0.3)

  return (
    <section id="impact" ref={ref} className="section-pad bg-white/60">
      <div className="container-max">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">Real-time impact</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">Numbers that mean people</h2>
          <p className="mt-3 text-slate-muted">
            Every figure below represents a person, a family, or a community HopeCloud has helped reach.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {impactStats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} active={visible} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
