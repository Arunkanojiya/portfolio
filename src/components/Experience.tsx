import React from 'react'
import { Briefcase, GraduationCap, MapPin, CheckCircle } from 'lucide-react'
import { portfolioData, ExperienceItem, EducationItem } from '../data/portfolioData'
import { Container } from './Container'

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Professional milestones, engineering training, and credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Experience Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 mb-2">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">
                Work &amp; Project Experience
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.experience.map((exp: ExperienceItem, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6 transition hover:border-foreground/20"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-sm sm:text-base font-bold text-foreground">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">{exp.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-foreground shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu: EducationItem, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-muted-foreground mb-3">
                    {edu.institution}, {edu.location}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Developer Standards Card */}
              <div className="rounded-2xl border border-border bg-card/60 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  Engineering Principles
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dedicated to writing modular, testable, and self-documenting code. Focused on schema normalization, API efficiency, Git collaboration, and automated deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
