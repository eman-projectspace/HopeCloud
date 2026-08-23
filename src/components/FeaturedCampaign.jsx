import { GraduationCap, Users2 } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'
import { featuredCampaign as fc } from '../data/mockData.js'

export default function FeaturedCampaign() {
  const showToast = useToast()
  const pct = Math.min(100, Math.round((fc.raised / fc.goal) * 100))

  return (
    <section className="section-pad">
      <div className="container-max">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-cloudline bg-gradient-to-br from-deepsea to-sky-600 shadow-soft lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="eyebrow text-sky-100">Featured campaign</span>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                {fc.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-sky-50/90">{fc.story}</p>

              <div className="mt-8">
                <div className="h-2.5 w-full max-w-md overflow-hidden rounded-full bg-white/20">
                  <div className="h-full rounded-full bg-white" style={{ width: `${pct}%` }} />
                </div>
                <div className="mt-3 flex max-w-md flex-wrap items-center justify-between gap-2 font-mono text-xs text-sky-50/90">
                  <span>${fc.raised.toLocaleString()} raised of ${fc.goal.toLocaleString()}</span>
                  <span className="inline-flex items-center gap-1"><Users2 className="h-3.5 w-3.5" /> {fc.supporters.toLocaleString()} supporters</span>
                </div>
              </div>

              <button
                onClick={() => showToast('Thank you for supporting this campaign!')}
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-3 font-display text-sm font-semibold text-deepsea shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Support This Cause
              </button>
            </div>

            <div className="relative flex min-h-[260px] items-center justify-center bg-white/10 p-10">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/15 backdrop-blur">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
