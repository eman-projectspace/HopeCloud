import { useState } from 'react'
import { Gift, HeartHandshake, Lightbulb, Megaphone, PackagePlus, Send } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { useToast } from './ui/Toast.jsx'
import { volunteerOptions } from '../data/mockData.js'

const ICONS = { HeartHandshake, Gift, Lightbulb, PackagePlus, Megaphone }

export default function VolunteerSection() {
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
      setError('That email doesn\u2019t look quite right.')
      return
    }
    setError('')
    showToast('Welcome to HopeCloud! Check your inbox for next steps.')
    setEmail('')
  }

  return (
    <section id="volunteer" className="section-pad">
      <div className="container-max">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center">Get involved</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            You Don&apos;t Have to Donate Money to Make a Difference.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {volunteerOptions.map((opt, i) => {
            const Icon = ICONS[opt.icon]
            return (
              <Reveal key={opt.id} delay={i * 90}>
                <div className="flex h-full flex-col items-start gap-3 rounded-2xl border border-cloudline bg-white p-6 text-left shadow-card transition-transform hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-meadow-400/15 text-meadow-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink">{opt.title}</h3>
                  <p className="text-sm text-slate-muted">{opt.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mx-auto mt-14 max-w-xl rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card">
          <h3 className="font-display text-xl font-bold text-ink">Join the HopeCloud Community</h3>
          <p className="mt-2 text-sm text-slate-muted">Get updates on causes, volunteer openings, and impact reports.</p>
          <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 text-left">
              <label htmlFor="volunteer-email" className="sr-only">Email address</label>
              <input
                id="volunteer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'volunteer-email-error' : undefined}
                className={`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-sky-400 ${
                  error ? 'border-amber-500' : 'border-cloudline'
                }`}
              />
              {error && (
                <p id="volunteer-email-error" className="mt-2 text-xs text-amber-600">
                  {error}
                </p>
              )}
            </div>
            <button type="submit" className="btn-primary shrink-0">
              Join Now <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
