import { useState } from 'react'
import { Quote, Send } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { stories } from '../data/mockData.js'
import { useToast } from './ui/Toast.jsx'

export default function Stories() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const showToast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError('Enter your email to join the community.')
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('That email doesn’t look quite right.')
      return
    }

    setError('')
    showToast('Welcome to HopeCloud! Check your inbox for next steps.')
    setEmail('')
  }

  return (
    <section className="section-pad bg-white/60">
      <div className="container-max">

        {/* Stories Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">
            Stories of hope
          </span>

          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Real change, told simply
          </h2>
        </div>

        {/* Stories */}
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.id} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-cloudline bg-white p-7 shadow-card">
                <Quote className="h-6 w-6 text-sky-400" />

                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
                  &ldquo;{s.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-cloudline pt-4">
                  <span className="text-sm font-semibold text-ink">
                    {s.name}
                  </span>

                  <span className="rounded-full bg-sky-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sky-600">
                    {s.tag}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Join Community */}
        <Reveal
          delay={200}
          className="mx-auto mt-14 max-w-xl rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card"
        >
          <h3 className="font-display text-xl font-bold text-ink">
            Join the HopeCloud Community
          </h3>

          <p className="mt-2 text-sm text-slate-muted">
            Get updates on causes, volunteer openings, and impact reports.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-6 flex flex-col gap-3 sm:flex-row"
          >
            <div className="flex-1 text-left">
              <label
                htmlFor="volunteer-email"
                className="sr-only"
              >
                Email address
              </label>

              <input
                id="volunteer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(error)}
                aria-describedby={
                  error ? 'volunteer-email-error' : undefined
                }
                className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-sky-400 ${
                  error
                    ? 'border-amber-500'
                    : 'border-cloudline'
                }`}
              />

              {error && (
                <p
                  id="volunteer-email-error"
                  className="mt-2 text-xs text-amber-600"
                >
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn-primary shrink-0"
            >
              Join Now
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  )
}