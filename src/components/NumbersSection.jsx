import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/siteContent'
import Reveal from './Reveal'

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const target = parseInt(
      String(value).replace(/[^0-9]/g, ''),
      10
    )

    if (isNaN(target)) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      )

      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easedProgress * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [started, value])

  return (
    <span ref={ref}>
      {String(value).replace(
        /[0-9]+/g,
        count.toLocaleString()
      )}
    </span>
  )
}

export default function NumbersSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <Reveal className="grid grid-cols-1 gap-3 rounded-[1.6rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-5 text-center shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px] md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong className="block text-[1.4rem] text-[#0A2540]">
              <AnimatedCounter value={stat.value} />
            </strong>

            <span className="text-sm text-[#64748b]">
              {stat.label}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}