import { GraduationCap, Home, Soup, Stethoscope, Users, HeartHandshake } from 'lucide-react'

const NODES = [
  { icon: GraduationCap, label: 'Education', x: 22, y: 20, tone: 'bg-sky-500' },
  { icon: Stethoscope, label: 'Healthcare', x: 80, y: 16, tone: 'bg-meadow-500' },
  { icon: Users, label: 'Community', x: 90, y: 58, tone: 'bg-deepsea' },
  { icon: Home, label: 'Shelter', x: 58, y: 90, tone: 'bg-sky-600' },
  { icon: Soup, label: 'Food', x: 12, y: 68, tone: 'bg-amber-500' },
]

export default function ConstellationCloud({ className = '' }) {
  return (
    <div className={`relative aspect-square w-full max-w-md mx-auto ${className}`} aria-hidden="true">
      {/* soft cloud body */}
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-white via-sky-50 to-sky-100 blur-0 shadow-soft" />
      <div className="absolute left-[2%] top-[22%] h-[46%] w-[46%] rounded-full bg-white/80 blur-xl" />
      <div className="absolute right-[6%] top-[8%] h-[38%] w-[38%] rounded-full bg-sky-100/90 blur-xl" />
      <div className="absolute bottom-[6%] left-[20%] h-[40%] w-[52%] rounded-full bg-meadow-400/20 blur-2xl" />

      {/* connector lines */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {NODES.map((n, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="#0B3D91"
            strokeOpacity="0.25"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            className="animate-dashMove"
          />
        ))}
      </svg>

      {/* core */}
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-deepsea shadow-glow">
        <HeartHandshake className="h-7 w-7 text-white" />
      </div>

      {/* nodes */}
      {NODES.map((n, i) => {
        const Icon = n.icon
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center gap-1 animate-drift"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${n.tone} text-white shadow-card animate-pulseNode`} style={{ animationDelay: `${i * 0.4}s` }}>
              <Icon className="h-5 w-5" />
            </span>
            <span className="rounded-full bg-white/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-deepsea shadow-sm">
              {n.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
