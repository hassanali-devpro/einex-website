import { ArrowRight } from 'lucide-react'
import { services } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader eyebrow="Services" title="A complete engineering consultancy for complex infrastructure programmes." description="Every engagement is shaped around clarity, precision and a practical path to implementation." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Reveal key={service.title} delay={index * 0.05} className="rounded-[1.4rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-4 shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,37,64,0.14)]">
              <div className="inline-grid h-11 w-11 place-items-center rounded-[0.9rem] bg-[linear-gradient(135deg,rgba(0,87,217,0.12),rgba(20,184,166,0.12))] text-[#0057D9]">
                <Icon size={22} />
              </div>
              <h3 className="my-2 text-base text-[#0A2540]">{service.title}</h3>
              <p className="text-sm leading-6 text-[#64748b]">{service.description}</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540]">
                Discover more <ArrowRight size={16} />
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
