import { ArrowRight } from 'lucide-react'
import { projects } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="
        mx-auto w-full max-w-[1280px]
        py-4
      "
    >
      {/* Section Header */}
      <SectionHeader
        eyebrow="Featured projects"
        title="Signature work shaped by intelligent infrastructure planning."
        description="From complex utility connections to resilient civic developments, each project reflects our collaborative approach."
      />

      {/* Projects */}
      <div
        className="
          grid grid-cols-1
          gap-3
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.06}
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
            {/* Project Image */}
            <img
              className="
                mb-2.5
                aspect-[16/9]
                w-full
                rounded-[0.85rem]
                object-cover
              "
              src={project.image}
              alt={project.title}
            />

            {/* Project Content */}
            <div>
              <p className="mb-0.5 text-xs font-bold text-[#0057D9]">
                {project.location}
              </p>

              <h3 className="text-sm font-semibold text-[#0A2540]">
                {project.title}
              </h3>

              <div
                className="
                  my-1.5
                  flex flex-col
                  gap-0.5
                  text-xs
                  leading-4
                  text-[#475569]
                "
              >
                <span>Client: {project.client}</span>
                <span>Service: {project.service}</span>
                <span>Completed: {project.date}</span>
              </div>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  font-bold
                  text-[#0057D9]
                  transition
                  hover:gap-2
                "
              >
                Read case study
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}