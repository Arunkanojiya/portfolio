import React, { useState } from 'react'
import { ChevronDown, X, FileText } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { portfolioData } from '../data/portfolioData'

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    // Non-sticky header: scrolls away naturally and does not follow the user down the page
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="h-16 pt-6">
        <div className="sm:px-8">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex items-center justify-between gap-4">
                  {/* Left slot: Reserved for the smoothly docking avatar */}
                  <div className="flex flex-1 items-center" />

                  {/* Desktop Nav - Centered Floating Pill */}
                  <div className="flex flex-1 justify-center">
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-xl bg-background/90 px-3 text-sm font-medium text-foreground shadow-md ring-1 ring-border backdrop-blur-sm">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              className="relative block px-3 py-2 transition hover:text-primary"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="pointer-events-auto md:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="group flex h-9 items-center gap-1 rounded-xl bg-background/90 px-3 text-xs font-medium text-foreground shadow-md ring-1 ring-border backdrop-blur-sm transition hover:ring-foreground/20"
                      >
                        Menu
                        <ChevronDown className="h-3 w-3 text-muted-foreground group-hover:text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Right side: Resume button + ModeToggle */}
                  <div className="flex items-center justify-end gap-3 md:flex-1">
                    {portfolioData.personal.resumeUrl && (
                      <a
                        href={portfolioData.personal.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="pointer-events-auto hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/90 text-xs font-semibold text-foreground shadow-md ring-1 ring-border backdrop-blur-sm transition hover:ring-foreground/20 hover:text-primary active:scale-95 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-primary" />
                        <span>Resume</span>
                      </a>
                    )}
                    <div className="pointer-events-auto">
                      <ModeToggle />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Modal */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed left-4 right-4 top-14 z-50 rounded-2xl bg-background/95 p-6 text-foreground shadow-xl ring-1 ring-border backdrop-blur-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                Navigation
              </h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav>
              <ul className="divide-y divide-border text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 transition hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                {portfolioData.personal.resumeUrl && (
                  <li>
                    <a
                      href={portfolioData.personal.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 transition text-primary font-semibold"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
