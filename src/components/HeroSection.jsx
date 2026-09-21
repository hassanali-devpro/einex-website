import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { stats } from '../data/siteContent'

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const target = parseInt(String(value).replace(/[^0-9]/g, ''), 10)

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
  }, [value])

  return (
    <>
      {String(value).replace(/[0-9]+/g, count.toLocaleString())}
    </>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative mx-auto flex w-full max-w-[1280px]
        h-[85vh] min-h-0
        flex-col justify-between overflow-hidden
        rounded-[2rem]
        bg-[linear-gradient(135deg,#061826_0%,#0A2540_40%,#0f3658_100%)]
        px-4 py-2.5
        sm:px-5 sm:py-3
        md:px-7 md:py-3
        lg:px-9
        max-md:rounded-[1.5rem]
      "
    >
      {/* Background effects */}
      <div className="absolute left-[-7rem] top-[-6rem] h-40 w-40 rounded-full bg-[#14B8A6]/40 blur-[80px]" />
      <div className="absolute bottom-[-3rem] right-[-4rem] h-40 w-40 rounded-full bg-[#0057D9]/40 blur-[80px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]" />

      {/* Main hero */}
      <div
        className="
          relative z-10 grid min-h-0 flex-1
          items-center
          gap-3
          md:grid-cols-[1.1fr_0.9fr]
          md:gap-4
          lg:gap-6
        "
      >
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 min-w-0"
        >
          {/* Badge */}
          <p
            className="
              mb-1.5 inline-flex w-fit items-center rounded-full
              bg-[rgba(20,184,166,0.16)]
              px-2.5 py-1
              text-[0.58rem] font-bold uppercase
              tracking-[0.2em] text-[#9fe7df]
              sm:text-[0.62rem]
            "
          >
            Engineering with calm precision
          </p>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            }}
            className="
              m-0 max-w-[650px]
              text-[clamp(2rem,3.5vw,3.5rem)]
              font-semibold
              leading-[0.94]
              tracking-[-0.04em]
              text-white
              xl:text-[3.6rem]
            "
          >
            Engineering tomorrow, designing smarter infrastructure.
          </h1>

          {/* Description */}
          <p
            className="
              mt-2 max-w-[600px]
              text-[0.78rem]
              leading-[1.25rem]
              text-[#d7e7f8]
              sm:text-[0.86rem]
              sm:leading-5
              md:text-[0.92rem]
            "
          >
            Einex Solution Ltd delivers premium electrical, water, gas and
            civil design services with clarity, resilience and measurable
            impact.
          </p>

          {/* CTA */}
          <div className="mt-3 flex flex-wrap gap-2 sm:mt-3.5 sm:gap-2.5">
            <a
              className="
                inline-flex items-center justify-center gap-1.5
                rounded-full
                bg-[linear-gradient(135deg,#0057D9,#14B8A6)]
                px-3.5 py-2
                text-[0.7rem] font-semibold text-white
                shadow-[0_15px_35px_rgba(0,87,217,0.2)]
                transition duration-200
                hover:-translate-y-0.5
                sm:px-4 sm:py-2.5
                sm:text-xs
              "
              href="#contact"
            >
              Get Free Consultation
              <ArrowRight size={15} />
            </a>

            <a
              className="
                inline-flex items-center justify-center gap-1.5
                rounded-full
                border border-[rgba(10,37,64,0.12)]
                bg-white/80
                px-3.5 py-2
                text-[0.7rem] font-semibold text-[#0A2540]
                transition duration-200
                hover:-translate-y-0.5
                sm:px-4 sm:py-2.5
                sm:text-xs
              "
              href="#projects"
            >
              <PlayCircle size={15} />
              Watch Company Profile
            </a>
          </div>

          {/* Highlights */}
          <div
            className="
              mt-2.5 flex flex-wrap gap-1.5
              sm:mt-3
            "
            aria-label="Company highlights"
          >
            <span
              className="
                inline-flex items-center gap-1
                rounded-full bg-white/10
                px-2 py-1
                text-[0.6rem] text-[#ecf6ff]
                sm:text-[0.68rem]
              "
            >
              <ShieldCheck size={12} />
              ISO-aligned delivery
            </span>

            <span
              className="
                inline-flex items-center gap-1
                rounded-full bg-white/10
                px-2 py-1
                text-[0.6rem] text-[#ecf6ff]
                sm:text-[0.68rem]
              "
            >
              <ShieldCheck size={12} />
              UK-wide project support
            </span>
          </div>
        </motion.div>

        {/* Right illustration */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="
            relative mx-auto flex w-full
            max-w-[480px]
            items-center justify-center
            p-1.5
            sm:p-2
          "
        >
          <img
            className="
              mx-auto
              h-auto
              w-full
              max-h-[38vh]
              object-contain
              rounded-[1.25rem]
              shadow-[0_25px_70px_rgba(0,0,0,0.3)]
              lg:max-h-[40vh]
            "
            src="/images/hero-illustration.svg"
            alt="Engineering blueprint illustration"
          />

          {/* Floating labels */}
          <div className="absolute left-[5%] top-[5%] rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[0.58rem] font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.16)] backdrop-blur-[10px] sm:px-2.5 sm:py-1.5 sm:text-[0.65rem]">
            Electrical
          </div>

          <div className="absolute right-[3%] top-[16%] rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[0.58rem] font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.16)] backdrop-blur-[10px] sm:px-2.5 sm:py-1.5 sm:text-[0.65rem]">
            Water
          </div>

          <div className="absolute bottom-[18%] left-[8%] rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[0.58rem] font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.16)] backdrop-blur-[10px] sm:px-2.5 sm:py-1.5 sm:text-[0.65rem]">
            Gas
          </div>

          <div className="absolute bottom-[8%] right-[10%] rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[0.58rem] font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.16)] backdrop-blur-[10px] sm:px-2.5 sm:py-1.5 sm:text-[0.65rem]">
            Civil
          </div>

          <div className="absolute right-[-1%] top-[45%] hidden rounded-full border border-white/10 bg-white/10 px-2.5 py-1.5 text-[0.65rem] font-semibold text-white shadow-[0_12px_25px_rgba(0,0,0,0.16)] backdrop-blur-[10px] min-[761px]:block">
            Renewables
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div
        className="
          relative z-10 mt-2
          grid grid-cols-2 gap-1.5
          sm:mt-2.5 sm:gap-2
          lg:grid-cols-4
        "
        aria-label="Key metrics"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-[0.7rem]
              border border-[rgba(10,37,64,0.08)]
              bg-white/80
              px-2.5 py-1.5
              text-center
              shadow-[0_15px_35px_rgba(10,37,64,0.08)]
              backdrop-blur-[14px]
              sm:rounded-[0.85rem]
              sm:px-3 sm:py-2
            "
          >
            <strong className="block text-[0.9rem] text-[#0A2540] sm:text-[1rem]">
              <AnimatedCounter value={stat.value} />
            </strong>

            <span className="text-[0.58rem] text-[#475569] sm:text-[0.65rem]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}