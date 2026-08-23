import { useEffect, useState } from 'react'

/**
 * Animates a number from 0 to `end` over `duration` ms, starting only
 * when `start` becomes true (typically driven by a viewport-visibility flag).
 */
export default function useCountUp(end, start, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, end, duration])

  return value
}
