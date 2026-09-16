import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PhotoStrip } from './components/PhotoStrip'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ToastProvider } from './components/Toast'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
})

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        {/* Signature background frame with center backdrop */}
        <div className="fixed inset-0 flex justify-center sm:px-8 pointer-events-none z-0">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-center-background ring-1 ring-border" />
          </div>
        </div>

        {/* Main interactive page flow */}
        <div className="relative flex w-full flex-col min-h-screen z-10">
          <Navbar />
          <main className="flex-auto">
            <Hero />
            <PhotoStrip />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
