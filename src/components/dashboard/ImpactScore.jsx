import {
  Heart,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

import { useEffect, useState } from 'react'
import { apiUrl } from '../../config/api'

export default function ImpactScore() {
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

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

        const impact = data.impact || {}

        const receivedScore = Number(
          impact.impact_score ??
          impact.impact_progress ??
          0
        )

        setScore(
          Math.min(
            100,
            Math.max(0, receivedScore)
          )
        )
      } catch (error) {
        console.error(
          'Failed to load impact score:',
          error
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchImpact()
  }, [])

  const getMessage = () => {
    if (score === 0) {
      return 'Submit a donation to start building your impact score'
    }

    if (score < 30) {
      return 'You have started your giving journey'
    }

    if (score < 60) {
      return 'Your contribution is making a growing difference'
    }

    if (score < 80) {
      return 'You are becoming a meaningful part of the HopeCloud community'
    }

    return 'Amazing impact — you are helping make a real difference'
  }

  const getScoreLabel = () => {
    if (score === 0) return 'Getting Started'
    if (score < 30) return 'Early Impact'
    if (score < 60) return 'Growing Impact'
    if (score < 80) return 'Strong Impact'
    return 'Outstanding Impact'
  }

  return (
    <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card sm:p-7">

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        {/* Circular score */}

        <div className="relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center sm:mx-0">

          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 160 160"
          >
            {/* Background circle */}

            <circle
              cx="80"
              cy="80"
              r="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-sky-50"
            />

            {/* Progress circle */}

            <circle
              cx="80"
              cy="80"
              r="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              strokeLinecap="round"
              className="text-sky-500 transition-all duration-1000"
              strokeDasharray={2 * Math.PI * 64}
              strokeDashoffset={
                2 * Math.PI * 64 -
                (score / 100) * (2 * Math.PI * 64)
              }
            />
          </svg>

          <div className="relative text-center">

            {isLoading ? (
              <>
                <div className="mx-auto h-9 w-12 animate-pulse rounded-lg bg-sky-50" />

                <p className="mt-1 text-xs font-semibold text-slate-muted">
                  Loading
                </p>
              </>
            ) : (
              <>
                <p className="font-display text-4xl font-extrabold text-deepsea">
                  {score}
                </p>

                <p className="text-xs font-semibold text-slate-muted">
                  / 100
                </p>
              </>
            )}

          </div>
        </div>


        {/* Content */}

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <Heart className="h-5 w-5 fill-red-500 text-red-500" />

            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
              Personal Impact Score
            </p>

          </div>


          <h2 className="mt-2 font-display text-2xl font-extrabold text-ink">
            {isLoading
              ? 'Calculating your impact...'
              : score === 0
                ? 'Your impact journey starts here.'
                : "You're making a difference."}
          </h2>


          <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-muted">
            Your impact score reflects your contribution
            activity on HopeCloud. Keep donating and
            building a positive giving history.
          </p>


          {/* Progress */}

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
                className="h-full rounded-full bg-sky-500 transition-all duration-1000"
                style={{
                  width: `${score}%`,
                }}
              />

            </div>

          </div>


          {/* Score level */}

          <div className="mt-4 flex flex-wrap items-center gap-2">

            <div className="inline-flex items-center gap-2 rounded-full bg-meadow-50 px-3 py-1.5 text-xs font-bold text-meadow-600">

              <TrendingUp className="h-4 w-4" />

              {getScoreLabel()}

            </div>

            <Sparkles className="h-3.5 w-3.5 text-sky-500" />

          </div>


          <p className="mt-2 text-xs font-medium text-slate-muted">
            {getMessage()}
          </p>

        </div>

      </div>

    </section>
  )
}
