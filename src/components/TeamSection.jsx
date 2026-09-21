import { Globe2 } from 'lucide-react'
import { team } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function TeamSection() {
  return (
    <section
      className="
        mx-auto w-full max-w-[1280px]
        py-4
      "
    >
      {/* Section Header */}
      <SectionHeader
        eyebrow="Leadership team"
        title="Experienced specialists shaping high-value outcomes."
        description="Our team blends engineering depth with executive-level client partnership."
      />

      {/* Team */}
      <div
        className="
          grid grid-cols-1
          gap-3
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {team.map((person, index) => (
          <Reveal
            key={person.name}
            delay={index * 0.05}
            className="
              rounded-[1.15rem]
              border border-[rgba(10,37,64,0.08)]
              bg-white/80
              p-3
              shadow-[0_15px_35px_rgba(10,37,64,0.07)]
              backdrop-blur-[14px]
              transition duration-200
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(10,37,64,0.12)]
            "
          >
            {/* Team Image */}
            <img
              className="
                mb-2.5
                aspect-[4/3]
                w-full
                rounded-[0.85rem]
                object-cover
              "
              src={person.image}
              alt={person.name}
            />

            {/* Info */}
            <div>
              <h3 className="text-sm font-semibold text-[#0A2540]">
                {person.name}
              </h3>

              <p className="text-xs text-[#64748b]">
                {person.role}
              </p>
            </div>

            {/* Contact */}
            <a
              href="#contact"
              aria-label={`Connect with ${person.name}`}
              className="
                mt-2
                inline-flex
                h-8 w-8
                items-center
                justify-center
                rounded-full
                bg-[rgba(0,87,217,0.08)]
                text-[#0057D9]
                transition
                hover:bg-[rgba(0,87,217,0.14)]
              "
            >
              <Globe2 size={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}