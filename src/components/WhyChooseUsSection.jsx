import { CheckCircle2 } from 'lucide-react'
import { compareItems, strengths } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function WhyChooseUsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader
        eyebrow="Why choose us"
        title="A consultancy that brings calm control to high-stakes delivery."
        description="We replace fragmented coordination with one accountable partner."
      />

      <div className="grid gap-4 md:grid-cols-2">

        {/* Competitors */}
        <Reveal className="rounded-[1.4rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-5 shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px]">
          <h3 className="text-base text-[#0A2540]">
            Competitors
          </h3>

          <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
            {compareItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-[#64748b]"
              >
                <CheckCircle2
                  size={16}
                  className="shrink-0 text-[#0A2540]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Einex Solution */}
        <Reveal
          delay={0.1}
          className="
            relative
            overflow-hidden
            rounded-[1.4rem]
            min-h-[260px]
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

          {/* Dark / Blue Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#0A2540]/95
              via-[#0057D9]/80
              to-[#0A2540]/90
            "
          />

          {/* Subtle Glass Highlight */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]
            "
          />

          {/* Content */}
          <div className="relative z-10 p-5 text-white">
            <h3 className="text-base font-medium text-white">
              Einex Solution Ltd
            </h3>

            <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white
                  "
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-white"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
