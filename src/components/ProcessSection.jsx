import { processSteps } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader eyebrow="Process" title="A structured delivery model built for pace and clarity." description="Our process keeps every stakeholder aligned through each stage of delivery." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="Project delivery timeline">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.04} className="rounded-[1.4rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-4 shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0A2540,#0057D9)] text-xs font-bold text-white">{step.number}</span>
            <h3 className="my-2 text-base text-[#0A2540]">{step.title}</h3>
            <p className="text-sm leading-6 text-[#64748b]">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
