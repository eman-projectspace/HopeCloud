import {
  Star,
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

        <span className="rounded-full bg-meadow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-meadow-600">
          Excellent
        </span>

      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
        Your Contributor Rating
      </p>

      <div className="mt-2 flex items-center gap-3">

        <span className="font-display text-4xl font-extrabold text-ink">
          4.8
        </span>

        <div>

          <div className="flex gap-0.5 text-amber-500">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 fill-current"
              />
            ))}

          </div>

          <p className="mt-1 text-[10px] text-slate-muted">
            Based on your contributions
          </p>

        </div>

      </div>


      <div className="mt-5 rounded-xl bg-mist p-4">

        <MessageCircle className="h-4 w-4 text-sky-500" />

        <p className="mt-2 text-xs leading-relaxed text-slate-muted">
          "Your consistent contributions are helping create
          meaningful change."
        </p>

      </div>

    </section>
  )
}