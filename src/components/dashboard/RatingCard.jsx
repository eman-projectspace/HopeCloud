import {
  Award,
  MessageCircle,
} from 'lucide-react'

export default function RatingCard() {
  return (
    <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
          <Award className="h-5 w-5" />
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-muted">
          Not Rated
        </span>

      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
        Your Contributor Rating
      </p>

      <div className="mt-2">

        <span className="font-display text-3xl font-extrabold text-ink">
          Not rated yet
        </span>

        <p className="mt-1 text-xs text-slate-muted">
          Ratings will appear when contributor feedback is available.
        </p>

      </div>

      <div className="mt-5 rounded-xl bg-mist p-4">

        <MessageCircle className="h-4 w-4 text-sky-500" />

        <p className="mt-2 text-xs leading-relaxed text-slate-muted">
          Contributor feedback is not available yet.
        </p>

      </div>

    </section>
  )
}