import {
  Package,
  CheckCircle2,
  Truck,
  Clock3,
  ArrowRight,
} from 'lucide-react'

const donations = [
  {
    item: 'Children Story Books',
    category: 'Books',
    date: 'Aug 24, 2026',
    status: 'Delivered',
    icon: CheckCircle2,
    statusClass: 'text-meadow-600 bg-meadow-500/10',
  },
  {
    item: 'Winter Clothes',
    category: 'Clothes',
    date: 'Aug 19, 2026',
    status: 'In Transit',
    icon: Truck,
    statusClass: 'text-sky-600 bg-sky-50',
  },
  {
    item: 'School Supplies',
    category: 'Kids Essentials',
    date: 'Aug 12, 2026',
    status: 'Processing',
    icon: Clock3,
    statusClass: 'text-amber-600 bg-amber-100',
  },
]

export default function DonationOverview() {
  return (
    <section className="rounded-2xl border border-cloudline bg-white shadow-card">

      <div className="flex flex-col gap-3 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-muted">
            Your Contributions
          </p>

          <h2 className="mt-1 font-display text-xl font-extrabold text-ink">
            Recent Donations
          </h2>

        </div>

        <button className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-deepsea">
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

      </div>


      {/* Desktop */}

      <div className="hidden overflow-x-auto md:block">

        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-cloudline text-[10px] uppercase tracking-wider text-slate-muted">
              <th className="px-6 py-4 font-bold">Donation</th>
              <th className="px-6 py-4 font-bold">Category</th>
              <th className="px-6 py-4 font-bold">Date</th>
              <th className="px-6 py-4 font-bold">Status</th>
            </tr>
          </thead>

          <tbody>

            {donations.map((donation) => {
              const Icon = donation.icon

              return (
                <tr
                  key={donation.item}
                  className="border-b border-cloudline last:border-0 transition-colors hover:bg-mist/60"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                        <Package className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-semibold text-ink">
                        {donation.item}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {donation.category}
                  </td>

                  <td className="px-6 py-4 text-xs text-slate-muted">
                    {donation.date}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        ${donation.statusClass}
                      `}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {donation.status}
                    </span>

                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>

      </div>


      {/* Mobile */}

      <div className="divide-y divide-cloudline md:hidden">

        {donations.map((donation) => {
          const Icon = donation.icon

          return (
            <div
              key={donation.item}
              className="p-5"
            >

              <div className="flex items-start justify-between gap-3">

                <div className="flex gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Package className="h-4 w-4" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-ink">
                      {donation.item}
                    </p>

                    <p className="mt-1 text-xs text-slate-muted">
                      {donation.category} · {donation.date}
                    </p>

                  </div>

                </div>

                <span
                  className={`
                    inline-flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-full
                    px-2
                    py-1
                    text-[9px]
                    font-bold
                    ${donation.statusClass}
                  `}
                >
                  <Icon className="h-3 w-3" />
                  {donation.status}
                </span>

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}