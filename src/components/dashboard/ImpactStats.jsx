import {
  Package,
  Users,
  CheckCircle2,
  Star,
} from 'lucide-react'

const stats = [
  {
    label: 'Items Donated',
    value: '08',
    description: 'This year',
    icon: Package,
  },
  {
    label: 'People Helped',
    value: '24',
    description: 'Through your donations',
    icon: Users,
  },
  {
    label: 'Successfully Delivered',
    value: '06',
    description: 'Items reached recipients',
    icon: CheckCircle2,
  },
  {
    label: 'Your Rating',
    value: '4.8',
    description: 'Excellent contributor',
    icon: Star,
  },
]

export default function ImpactStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div
            key={stat.label}
            className="
              group
              rounded-2xl
              border
              border-cloudline
              bg-white
              p-5
              shadow-card
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-soft
            "
          >

            <div className="flex items-start justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>

              {stat.label === 'Your Rating' && (
                <span className="text-amber-500">★</span>
              )}

            </div>

            <p className="mt-5 font-display text-3xl font-extrabold text-ink">
              {stat.value}
            </p>

            <p className="mt-1 text-sm font-semibold text-ink">
              {stat.label}
            </p>

            <p className="mt-1 text-xs text-slate-muted">
              {stat.description}
            </p>

          </div>
        )
      })}

    </div>
  )
}