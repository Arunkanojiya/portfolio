import React from 'react'
import { portfolioData } from '../data/portfolioData'
import { Container } from './Container'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: portfolioData.personal.resumeUrl, external: true },
  ]

  return (
    <footer className="mt-24 sm:mt-32 flex-none">
      <div className="border-t border-border pt-10 pb-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-foreground">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="transition hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
