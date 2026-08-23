import Reveal from './ui/Reveal.jsx'
import CampaignCard from './CampaignCard.jsx'
import { causes } from '../data/mockData.js'

export default function Causes() {
  return (
    <section id="causes" className="section-pad bg-white/60">
      <div className="container-max">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">Where support goes</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">Causes that need you</h2>
          <p className="mt-3 text-slate-muted">Six areas where small acts of support create lasting change.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause, i) => (
            <Reveal key={cause.id} delay={(i % 3) * 120}>
              <CampaignCard cause={cause} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
