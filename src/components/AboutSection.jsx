import { ArrowRight, Compass, Eye, ShieldCheck } from 'lucide-react'
import { values } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        mx-auto grid w-full max-w-[1280px]
        items-center
        gap-4
        py-4
        lg:grid-cols-[0.95fr_1.05fr]
        lg:gap-6
      "
    >
      {/* Image */}
      <Reveal className="overflow-hidden rounded-[1.25rem]">
        <img
          className="
            mx-auto
            max-h-[55vh]
            w-full
            rounded-[1.25rem]
            object-contain
            shadow-[0_25px_60px_rgba(10,37,64,0.13)]
          "
          src="/logoc.png"
          alt="Engineering team reviewing blueprint"
        />
      </Reveal>

      {/* Content */}
      <div className="flex min-w-0 flex-col gap-3">
        <SectionHeader
          eyebrow="About Einex"
          title="Premium infrastructure advisory, designed around delivery certainty."
          description="We combine technical depth with commercial clarity to guide projects from the earliest concept through final handover."
        />

        {/* Mission / Vision */}
        <div className="grid grid-cols-2 gap-2.5">
          <div
            className="
              rounded-[0.9rem]
              border border-[rgba(10,37,64,0.08)]
              bg-white/80
              p-3
              shadow-[0_15px_35px_rgba(10,37,64,0.07)]
              backdrop-blur-[14px]
            "
          >
            <Compass size={18} className="text-[#0A2540]" />

            <h3 className="my-1.5 text-xs font-semibold text-[#0A2540]">
              Mission
            </h3>

            <p className="text-xs leading-5 text-[#64748b]">
              To create dependable engineering solutions that elevate the
              performance of every built environment.
            </p>
          </div>

          <div
            className="
              rounded-[0.9rem]
              border border-[rgba(10,37,64,0.08)]
              bg-white/80
              p-3
              shadow-[0_15px_35px_rgba(10,37,64,0.07)]
              backdrop-blur-[14px]
            "
          >
            <Eye size={18} className="text-[#0A2540]" />

            <h3 className="my-1.5 text-xs font-semibold text-[#0A2540]">
              Vision
            </h3>

            <p className="text-xs leading-5 text-[#64748b]">
              To set the benchmark for intelligent, future-ready infrastructure
              across the UK.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="flex flex-wrap gap-1.5">
          {values.map((value) => (
            <div
              key={value}
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-[rgba(0,87,217,0.08)]
                px-2 py-1
                text-[0.65rem]
                font-semibold
                text-[#0A2540]
              "
            >
              <ShieldCheck size={12} />
              {value}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#services"
          className="
            inline-flex w-fit
            items-center gap-1.5
            text-xs font-bold
            text-[#0057D9]
            transition
            hover:gap-2
          "
        >
          Explore our services
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}