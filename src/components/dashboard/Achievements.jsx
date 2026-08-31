import {
  Gift,
  BookOpen,
  Heart,
  Shirt,
  Star,
  Lock,
} from 'lucide-react'

const achievements = [
  {
    title: 'First Donation',
    description: 'Made your first contribution',
    icon: Gift,
    unlocked: true,
  },
  {
    title: 'Book Giver',
    description: 'Donated educational books',
    icon: BookOpen,
    unlocked: true,
  },
  {
    title: 'Helping Hand',
    description: 'Helped 10+ people',
    icon: Heart,
    unlocked: true,
  },
  {
    title: 'Clothing Contributor',
    description: 'Donate 10 clothing items',
    icon: Shirt,
    unlocked: false,
  },
  {
    title: 'Hope Champion',
    description: 'Reach an impact score of 90',
    icon: Star,
    unlocked: false,
  },
]

export default function Achievements() {
  return (
    <section className="rounded-2xl border border-cloudline bg-white p-6 shadow-card">

      <div className="mb-6">

        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
          Milestones
        </p>

        <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
          Your Achievements
        </h2>

      </div>


      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

        {achievements.map((achievement) => {
          const Icon = achievement.icon

          return (
            <div
              key={achievement.title}
              className={`
                rounded-2xl
                border
                p-4
                transition-all
                duration-300
                ${
                  achievement.unlocked
                    ? 'border-sky-100 bg-sky-50/50 hover:-translate-y-1 hover:shadow-card'
                    : 'border-cloudline bg-white opacity-60'
                }
              `}
            >

              <div className="flex items-center justify-between">

                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    ${
                      achievement.unlocked
                        ? 'bg-white text-sky-600'
                        : 'bg-mist text-slate-muted'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {!achievement.unlocked && (
                  <Lock className="h-3.5 w-3.5 text-slate-muted" />
                )}

              </div>

              <p className="mt-4 text-xs font-bold text-ink">
                {achievement.title}
              </p>

              <p className="mt-1 text-[10px] leading-relaxed text-slate-muted">
                {achievement.description}
              </p>

            </div>
          )
        })}

      </div>

    </section>
  )
}