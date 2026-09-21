export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6 max-w-[760px]">
      <p className="mb-3 inline-flex w-fit items-center rounded-full bg-[rgba(20,184,166,0.16)] px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#0f766e]">{eyebrow}</p>
      <h2 style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }} className="mb-2 text-[clamp(1.8rem,2.4vw,2.35rem)] leading-tight text-[#0A2540]">{title}</h2>
      <p className="text-sm leading-6 text-[#64748b] md:text-[0.98rem]">{description}</p>
    </div>
  )
}
