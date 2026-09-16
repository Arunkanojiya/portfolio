import React, { useState, useEffect } from 'react'
import { Mail, Phone, FileDown } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { XIcon, InstagramIcon, GithubIcon, LinkedinIcon } from './Icons'
import { Container } from './Container'

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Smooth progress mapped over 90px of scrolling
  const maxScroll = 90
  const progress = Math.min(1, Math.max(0, scrollY / maxScroll))

  // Smooth quadratic ease in-out
  const easeProgress =
    progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2

  // Transform coordinates: translate smoothly up towards the navbar row and scale down
  const translateY = -easeProgress * 68
  const scale = 1 - easeProgress * (1 - 38 / 64)

  return (
    <section className="pt-2 pb-12 sm:pt-4 sm:pb-16">
      <Container>
        <div className="max-w-2xl">
          {/* Avatar with buttery smooth continuous scroll alignment */}
          <div className="h-16 w-16 mb-8 relative">
            <a
              href="#"
              onClick={(e) => {
                if (progress > 0.5) {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                transformOrigin: 'top left',
              }}
              className="block relative h-16 w-16 rounded-full overflow-hidden ring-1 ring-border shadow-md bg-muted will-change-transform"
              aria-label="Profile Avatar"
            >
              <img
                src={portfolioData.personal.avatarImage}
                alt={portfolioData.personal.name}
                className="h-full w-full object-cover object-[center_18%] scale-135 origin-[center_25%]"
                onError={(e) => {
                  const target = e.currentTarget
                  target.onerror = null
                  target.src = '/images/avatar.jpg'
                }}
              />
            </a>
          </div>

          {/* Headline - Exact requested text with balanced sizing */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            MERN Stack Developer building thoughtful, full-stack web applications.
          </h1>

          {/* Subtitle / Bio paragraph - Exact requested text */}
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            I’m Arun Kanojiya, a MERN Stack Developer based in Surat, Gujarat, India. I build responsive React interfaces, secure Node.js &amp; Express APIs, and reliable MongoDB applications with a focus on clean code and practical user experiences.
          </p>

          {/* Social Icons row */}
          <div className="mt-6 flex items-center gap-6">
            {portfolioData.socials.x && (
              <a
                href={portfolioData.socials.x}
                target="_blank"
                rel="noreferrer"
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-5 w-5" />
              </a>
            )}

            {portfolioData.socials.instagram && (
              <a
                href={portfolioData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}

            {portfolioData.socials.github && (
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            )}

            {portfolioData.socials.linkedin && (
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}

            {portfolioData.personal.email && (
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 stroke-[1.75]" />
              </a>
            )}

            {portfolioData.personal.phone && (
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="group -m-1 p-1 text-muted-foreground transition hover:text-foreground"
                aria-label="Phone"
                title={`Call ${portfolioData.personal.phone}`}
              >
                <Phone className="h-5 w-5 stroke-[1.75]" />
              </a>
            )}
          </div>

          {/* Quick Action Buttons: Resume & Direct Call */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {portfolioData.personal.resumeUrl && (
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download="Arun_Kanojiya_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-xs font-semibold text-background shadow hover:opacity-90 transition active:scale-95 cursor-pointer"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            )}

            {portfolioData.personal.phone && (
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-secondary transition active:scale-95 cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-500" />
                <span>+91 {portfolioData.personal.phone}</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
