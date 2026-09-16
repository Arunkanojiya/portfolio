import React, { useState, useEffect } from 'react'
import { MapPin, Clock, Layers, ShieldCheck, Zap, Laptop } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Container } from './Container'

export const About: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now)
      setLocalTime(timeStr)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Location & Live Time */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-foreground mb-4">
                Full-Stack Architecture
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Specialized in the MERN ecosystem with hands-on experience designing robust database models, creating secure APIs with token-based authentication, and crafting reactive user interfaces.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="text-xs font-mono text-foreground flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{localTime || 'IST'}</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Minimal Grid */}
            <div className="grid grid-cols-2 gap-3">
              {portfolioData.about.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card/60 p-4 flex flex-col justify-between"
                >
                  <div className="mb-2 text-muted-foreground">
                    {idx === 0 && <Layers className="w-4 h-4" />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 2 && <Zap className="w-4 h-4" />}
                    {idx === 3 && <Laptop className="w-4 h-4" />}
                  </div>
                  <h4 className="text-xs font-semibold text-foreground mb-1">{item.label}</h4>
                  <p className="text-[11px] text-muted-foreground leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 leading-snug">
                {portfolioData.about.heading}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {portfolioData.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
