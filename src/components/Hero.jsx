import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import ConstellationCloud from './ui/ConstellationCloud.jsx'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'

export default function Hero() {
  const showToast = useToast()

  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-meadow-400/20 blur-3xl" />

      <div className="container-max grid gap-16 px-6 pb-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-16 lg:pb-28">
        <Reveal>
          <span className="eyebrow mb-6">
            <Sparkles className="h-3.5 w-3.5" /> Technology meets humanity
          </span>
          <h1 className="max-w-xl font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Turning Hope Into Action.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-muted">
            HopeCloud connects people, resources, and opportunities to create meaningful change—one act of kindness at a time.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => showToast('Thank you! Secure donations launch with our payments integration.')} className="btn-primary">
              Help Someone Today <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#impact" className="btn-secondary">
              See Our Impact
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-slate-muted">
            <ShieldCheck className="h-4 w-4 text-meadow-600" />
            Together, we can create a stronger tomorrow.
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ConstellationCloud />
        </Reveal>
      </div>
    </section>
  )
}
