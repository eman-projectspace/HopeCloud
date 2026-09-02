function AdminStatCard({
  title,
  value,
  description,
  icon,
  iconBg = 'bg-sky-50',
  iconColor = 'text-sky-600',
}) {
  return (
    <div className="rounded-2xl border border-cloudline bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-slate-muted">
            {title}
          </p>

          <h3 className="mt-2 font-display text-3xl font-extrabold text-ink">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-xs text-slate-muted">
              {description}
            </p>
          )}

        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  )
}

export default AdminStatCard