import {
  Heart,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { apiUrl } from '../../config/api'

export default function ImpactScore() {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          return
        }

        const response = await fetch(apiUrl('/my-impact'), {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch impact score')
        }

        const data = await response.json()

        setScore(data.impact?.impact_score ?? 0)
      } catch (error) {
        console.error('Failed to load impact score:', error)
      }
    }

    fetchImpact()
  }, [])

  return (
    <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Circular score */}
        <div className="relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center sm:mx-0">
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[12px]
              border-sky-50
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[12px]
              border-transparent
              border-t-sky-500
              border-r-sky-500
              border-b-sky-500
              -rotate-12
            "
          />

          <div className="text-center">
            <p className="font-display text-4xl font-extrabold text-deepsea">
              {score}
            </p>

            <p className="text-xs font-semibold text-slate-muted">
              / 100
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 fill-red-500 text-red-500" />

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
              Personal Impact Score
            </p>
          </div>

          <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
            You're making a difference.
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-muted">
            Your impact score reflects the donation items you have
            submitted through HopeCloud. Keep contributing — every
            donation adds to your contribution history.
          </p>

          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs font-semibold">
              <span className="text-slate-muted">
                Impact progress
              </span>

              <span className="text-deepsea">
                {score}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-sky-50">
              <div
                className="h-full rounded-full bg-sky-500 transition-all duration-700"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-meadow-600">
            <TrendingUp className="h-4 w-4" />

            {score > 0
              ? 'Your contribution score is growing'
              : 'Submit a donation to start building your impact score'}

            <Sparkles className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </section>
  )
}