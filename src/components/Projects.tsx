import React from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { portfolioData, ProjectItem } from '../data/portfolioData'
import { GithubIcon } from './Icons'
import { Container } from './Container'

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Full-stack MERN applications built with clean architecture, robust security, and modern user interfaces.
          </p>
        </div>

        <div className="flex flex-col gap-10 sm:gap-14">
          {portfolioData.projects.map((project: ProjectItem, index: number) => {
            return (
              <div
                key={project.id}
                className="group rounded-2xl border border-border bg-card p-6 sm:p-8 transition hover:border-foreground/20 hover:shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Mockup Preview Column */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                        onError={(e) => {
                          const target = e.currentTarget
                          target.onerror = null
                          target.src = '/images/avatar.png'
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-muted-foreground">
                        0{index + 1} // {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5 space-y-1.5">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-foreground shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-xs font-medium">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-foreground hover:underline underline-offset-4"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
