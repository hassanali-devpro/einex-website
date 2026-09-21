import { industries } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function IndustriesSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader
        eyebrow="Industries"
        title="Built for sectors where precision matters most."
        description="We support projects that demand strong technical leadership and dependable execution."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {industries.map((industry, index) => (
          <Reveal
            key={industry.name}
            delay={index * 0.04}
            className="group relative min-h-[10rem] overflow-hidden rounded-[1.4rem] shadow-[0_20px_45px_rgba(10,37,64,0.12)]"
          >
            {/* Background Image */}
            <img
              src={industry.image}
              alt={industry.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/35 to-transparent" />

            {/* Content */}
            <div className="relative flex min-h-[10rem] items-end p-5">
              <h3
                className="text-lg font-semibold text-white"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                }}
              >
                {industry.name}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}