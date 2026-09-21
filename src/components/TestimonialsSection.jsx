import { Star } from 'lucide-react'
import { testimonials } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader eyebrow="Testimonials" title="Trusted by clients that value precision and calm execution." description="Our relationships are built on responsiveness, clarity and delivery confidence." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.05} className="rounded-[1.4rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-4 shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px]">
            <div className="mb-3 flex gap-1" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} size={16} fill="#14B8A6" color="#14B8A6" />
              ))}
            </div>
            <p className="text-sm leading-6 text-[#0A2540]">“{testimonial.quote}”</p>
            <div className="mt-3 flex flex-col">
              <strong className="text-sm text-[#0A2540]">{testimonial.name}</strong>
              <span className="text-sm text-[#64748b]">{testimonial.role}</span>
              <span className="text-sm text-[#64748b]">{testimonial.company}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
