import {
  Briefcase,
  Droplets,
  GraduationCap,
  Home,
  Soup,
  Stethoscope,
  ArrowUpRight,
} from 'lucide-react'
import { useToast } from './ui/Toast.jsx'

const ICONS = { GraduationCap, Soup, Home, Stethoscope, Droplets, Briefcase }

const ACCENTS = {
  sky: { bg: 'bg-sky-50', text: 'text-sky-600', bar: 'bg-sky-500' },
  meadow: { bg: 'bg-meadow-400/10', text: 'text-meadow-600', bar: 'bg-meadow-500' },
  deepsea: { bg: 'bg-deepsea/5', text: 'text-deepsea', bar: 'bg-deepsea' },
}

export default function CampaignCard({ cause }) {
  const Icon = ICONS[cause.icon]
  const accent = ACCENTS[cause.accent]
  const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100))
  const showToast = useToast()

  return (
    <div className="group flex flex-col rounded-2xl border border-cloudline bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} ${accent.text}`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-ink">{cause.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">{cause.description}</p>

      <div className="mt-6">
        <div className="h-2 w-full overflow-hidden rounded-full bg-cloudline">
          <div className={`h-full rounded-full ${accent.bar}`} style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-slate-muted">
          <span>${cause.raised.toLocaleString()} raised</span>
          <span>{pct}% of ${cause.goal.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={() => showToast(`Thanks for supporting ${cause.title}! Payment integration is coming next.`)}
        className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-deepsea/15 py-2.5 font-display text-sm font-semibold text-deepsea transition-colors group-hover:border-sky-400 group-hover:bg-sky-50"
      >
        Support this cause <ArrowUpRight className="h-4 w-4" />
      </button>
    </div>
  )
}
