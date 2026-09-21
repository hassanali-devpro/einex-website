import { ArrowRight, Globe2, MessageCircle, Send } from 'lucide-react'
import { officeDetails } from '../data/siteContent'
import Reveal from './Reveal'

export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section
      id="contact"
      className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-4 py-5 md:grid-cols-2"
    >
      {/* Left Box - Background Video */}
      <Reveal
        className="
          relative
          min-h-[16rem]
          overflow-hidden
          rounded-[1.6rem]
          shadow-[0_20px_45px_rgba(10,37,64,0.12)]
        "
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/engineers.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* Dark Blue Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#0A2540]/95
            via-[#0A2540]/75
            to-[#0057D9]/80
          "
        />

        {/* Subtle Light Effect */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]
          "
        />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[16rem] flex-col justify-end p-5">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#9fe7df]">
            UK Coverage
          </p>

          <h3 className="mt-2 max-w-[500px] text-lg text-white">
            Projects across England, Scotland and Wales
          </h3>
        </div>
      </Reveal>

      {/* Contact Form */}
      <Reveal
        delay={0.08}
        className="
          rounded-[1.6rem]
          border
          border-[rgba(10,37,64,0.08)]
          bg-white/80
          p-5
          shadow-[0_20px_45px_rgba(10,37,64,0.08)]
          backdrop-blur-[16px]
        "
      >
        <p
          className="
            inline-flex
            w-fit
            items-center
            rounded-full
            bg-[rgba(20,184,166,0.16)]
            px-3
            py-1.5
            text-[0.68rem]
            font-bold
            uppercase
            tracking-[0.22em]
            text-[#0f766e]
          "
        >
          Contact
        </p>

        <h2
          className="
            mt-3
            text-[clamp(1.7rem,2vw,2.2rem)]
            leading-tight
            text-[#0A2540]
          "
        >
          Start your next infrastructure conversation.
        </h2>

        <form
          className="mt-3 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-1.5 text-sm font-semibold text-[#0A2540]">
            <span>Name</span>

            <input
              className="
                rounded-[0.9rem]
                border
                border-[rgba(10,37,64,0.12)]
                bg-[rgba(248,250,252,0.95)]
                px-3
                py-2.5
                text-sm
              "
              type="text"
              placeholder="Your name"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-[#0A2540]">
            <span>Email</span>

            <input
              className="
                rounded-[0.9rem]
                border
                border-[rgba(10,37,64,0.12)]
                bg-[rgba(248,250,252,0.95)]
                px-3
                py-2.5
                text-sm
              "
              type="email"
              placeholder="you@company.com"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-semibold text-[#0A2540]">
            <span>Project brief</span>

            <textarea
              className="
                rounded-[0.9rem]
                border
                border-[rgba(10,37,64,0.12)]
                bg-[rgba(248,250,252,0.95)]
                px-3
                py-2.5
                text-sm
              "
              rows="3"
              placeholder="Tell us about your requirements"
            />
          </label>

          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[linear-gradient(135deg,#0057D9,#14B8A6)]
              px-[1rem]
              py-[0.8rem]
              text-sm
              font-semibold
              text-white
              shadow-[0_18px_40px_rgba(0,87,217,0.2)]
              transition
              duration-200
              hover:-translate-y-0.5
            "
            type="submit"
          >
            Request consultation
            <ArrowRight size={18} />
          </button>
        </form>
      </Reveal>

      {/* Office Details + Social Links */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:col-span-2 xl:grid-cols-4">
        {officeDetails.map((detail) => (
          <div
            key={detail.label}
            className="rounded-[1rem] bg-white/80 p-3"
          >
            <span className="block text-[0.68rem] uppercase tracking-[0.18em] text-[#64748b]">
              {detail.label}
            </span>

            <strong className="mt-1.5 block text-sm text-[#0A2540]">
              {detail.value}
            </strong>
          </div>
        ))}

        <div className="flex gap-3">
          <a
            href="#contact"
            aria-label="LinkedIn"
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[rgba(0,87,217,0.08)]
              text-[#0057D9]
            "
          >
            <Globe2 size={18} />
          </a>

          <a
            href="#contact"
            aria-label="Twitter"
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[rgba(0,87,217,0.08)]
              text-[#0057D9]
            "
          >
            <MessageCircle size={18} />
          </a>

          <a
            href="#contact"
            aria-label="Instagram"
            className="
              inline-flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[rgba(0,87,217,0.08)]
              text-[#0057D9]
            "
          >
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}