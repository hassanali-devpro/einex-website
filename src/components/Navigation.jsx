import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`
        px-5 py-3
        transition-all duration-100 ease-in-out
        w-full
      `}
    >
      <div className="relative flex min-h-10 items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center"
          aria-label="Einex Solution home"
        >
          <img
            src="/logobg.png"
            alt="Einex Solution Ltd"
            className="w-24 shrink-0 object-contain sm:w-28"
          />
        </a>

        {/* Desktop + Mobile Navigation */}
        <div
          id="primary-navigation"
          className={`
            absolute left-0 right-0 top-[calc(100%+0.6rem)]
            rounded-2xl
            border border-[rgba(10,37,64,0.08)]
            bg-white/90
            p-4
            shadow-[0_18px_40px_rgba(10,37,64,0.12)]
            backdrop-blur-xl

            md:static
            md:flex
            md:flex-1
            md:items-center
            md:justify-end
            md:gap-5
            md:border-0
            md:bg-transparent
            md:p-0
            md:shadow-none
            md:backdrop-blur-none

            ${menuOpen ? 'flex' : 'hidden'}
            md:flex
          `}
        >
          <nav
            className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-end md:gap-5"
            aria-label="Primary navigation"
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={closeMenu}
                className="
                  text-sm font-medium
                  text-[#0f172a]
                  transition-colors duration-200
                  hover:text-[#0057D9]
                "
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="
              mt-1 inline-flex
              items-center justify-center
              rounded-full
              border border-[rgba(10,37,64,0.12)]
              bg-white/80
              px-4 py-2.5
              text-sm font-semibold
              text-[#0A2540]
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-[#0057D9]/20
              hover:text-[#0057D9]
              md:mt-0
            "
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            inline-flex
            items-center justify-center
            rounded-full
            p-2
            text-slate-900
            transition-colors
            hover:bg-black/5
            md:hidden
          "
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  )
}