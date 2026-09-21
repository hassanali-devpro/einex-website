import { motion } from 'framer-motion'
import { clients } from '../data/siteContent'

export default function TrustedClients() {
  return (
    <section className="mx-auto w-full max-w-[1280px] py-5" aria-label="Trusted clients">
      <p className="mb-3 inline-flex w-fit items-center rounded-full bg-[rgba(20,184,166,0.16)] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#0f766e]">Trusted by leading organisations</p>
      <div className="overflow-hidden py-2" role="presentation">
        <div className="marquee-track flex w-max gap-4">
          {[...clients, ...clients].map((client, index) => (
            <motion.span
              key={`${client}-${index}`}
              whileHover={{ color: '#0057D9', y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center rounded-full border border-[rgba(10,37,64,0.08)] bg-white/85 px-4 py-[0.8rem] text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#475569]"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
