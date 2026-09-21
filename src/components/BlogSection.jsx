import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function BlogSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5">
      <SectionHeader eyebrow="Insights" title="Latest thinking from the Einex team." description="Articles and perspectives shaping modern infrastructure strategy." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.05} className="rounded-[1.4rem] border border-[rgba(10,37,64,0.08)] bg-white/80 p-4 shadow-[0_20px_45px_rgba(10,37,64,0.08)] backdrop-blur-[16px] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,37,64,0.14)]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#0057D9]">{post.category}</p>
            <h3 className="my-2 text-base text-[#0A2540]">{post.title}</h3>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#0057D9]">
              Read article <ArrowRight size={16} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
