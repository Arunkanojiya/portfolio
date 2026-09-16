import React, { useState } from 'react'
import { Code2, Server, Database, Cpu } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Container } from './Container'

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...portfolioData.skillCategories.map((c) => c.title)]

  const filteredCategories =
    selectedCategory === 'All'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.title === selectedCategory)

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Core stack and tooling used to build scalable full-stack applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((group, groupIdx) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border">
                  <div className="text-muted-foreground">
                    {groupIdx === 0 && <Code2 className="w-4 h-4" />}
                    {groupIdx === 1 && <Server className="w-4 h-4" />}
                    {groupIdx === 2 && <Database className="w-4 h-4" />}
                    {groupIdx === 3 && <Cpu className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-muted/40 text-xs font-medium text-foreground"
                    >
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] font-mono text-muted-foreground">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
