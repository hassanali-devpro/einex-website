import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CareersSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <Reveal
        className="
          relative
          min-h-[300px]
          overflow-hidden
          rounded-[1.7rem]
          shadow-[0_20px_45px_rgba(10,37,64,0.12)]
        "
      >
        {/* Background Video */}
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/engineers.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* Dark Blue Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#0A2540]/95
            via-[#0A2540]/75
            to-[#0057D9]/80
          "
        />

        {/* Subtle Light Effect */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            min-h-[300px]
            flex-col
            items-start
            justify-center
            gap-3
            p-6
            text-white
          "
        >
          {/* Label */}
          <p
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              bg-[rgba(20,184,166,0.16)]
              px-3
              py-1.5
              text-[0.68rem]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#9fe7df]
            "
          >
            Careers
          </p>

          {/* Heading */}
          <h2
            className="
              m-0
              max-w-[850px]
              text-[clamp(1.7rem,2.2vw,2.2rem)]
              leading-tight
              text-white
            "
          >
            Join our team and help shape the future of infrastructure.
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[680px]
              text-sm
              leading-6
              text-[rgba(255,255,255,0.8)]
            "
          >
            We are building a culture of technical excellence,
            mentorship and meaningful delivery.
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="
              mt-1
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[linear-gradient(135deg,#0057D9,#14B8A6)]
              px-[1rem]
              py-[0.8rem]
              text-sm
              font-semibold
              text-white
              shadow-[0_18px_40px_rgba(0,87,217,0.25)]
              transition
              duration-200
              hover:-translate-y-0.5
            "
          >
            Join Our Team
            <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
