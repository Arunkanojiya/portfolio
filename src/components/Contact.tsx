import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  FileText,
  Download,
  Copy,
  Check,
  Send,
  MapPin,
  MessageSquare,
  Loader2,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useToast } from './Toast'
import { GithubIcon, LinkedinIcon } from './Icons'
import { Container } from './Container'

export const Contact: React.FC = () => {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email)
    setCopied(true)
    toast({
      title: 'Email copied to clipboard',
      description: portfolioData.personal.email,
      type: 'success',
    })
    setTimeout(() => setCopied(false), 2500)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone)
    setCopiedPhone(true)
    toast({
      title: 'Phone number copied',
      description: `+91 ${portfolioData.personal.phone}`,
      type: 'success',
    })
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const { serviceId, templateId, publicKey } = portfolioData.contactConfig.emailjs

    if (!serviceId || !templateId) {
      toast({
        title: 'EmailJS Configuration Needed',
        description: 'Please set your Service ID and Template ID in .env or portfolioData.ts.',
        type: 'error',
      })
      return
    }

    setSubmitting(true)

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Message from Portfolio',
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          to_name: portfolioData.personal.name,
        },
        publicKey
      )

      setFormSubmitted(true)
      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you shortly.",
        type: 'success',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err: unknown) {
      console.error('EmailJS sending failed:', err)
      const errorMsg =
        typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text: string }).text)
          : err instanceof Error
            ? err.message
            : 'Could not send message. Please try again or email directly.'
      toast({
        title: 'Failed to send message',
        description: errorMsg,
        type: 'error',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <Container>
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Have a question, opportunity, or want to discuss full-stack engineering? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-6">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Feel free to send an email or reach out on GitHub or LinkedIn.
                </p>
              </div>

              {/* Copyable Email Box */}
              <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-muted-foreground">Email</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs font-mono font-medium text-foreground hover:underline truncate block"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-card hover:bg-secondary border border-border text-xs font-medium text-foreground flex items-center gap-1 transition active:scale-95 shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Copyable & Clickable Phone Box */}
              {portfolioData.personal.phone && (
                <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-muted-foreground">Phone & WhatsApp</div>
                      <a
                        href={`tel:${portfolioData.personal.phone}`}
                        className="text-xs font-mono font-medium text-foreground hover:underline truncate block"
                      >
                        +91 {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="px-2.5 py-1.5 rounded-lg bg-card hover:bg-secondary border border-border text-xs font-medium text-foreground flex items-center gap-1 transition active:scale-95"
                      title="Call now"
                    >
                      Call
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="px-2.5 py-1.5 rounded-lg bg-card hover:bg-secondary border border-border text-xs font-medium text-foreground flex items-center gap-1 transition active:scale-95 cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Resume Download Card */}
              {portfolioData.personal.resumeUrl && (
                <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-muted-foreground">Resume</div>
                      <div className="text-xs font-medium text-foreground truncate">
                        Arun Kanojiya
                      </div>
                    </div>
                  </div>

                  <a
                    href={portfolioData.personal.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    download="Arun_Kanojiya_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg bg-foreground text-background hover:opacity-90 text-xs font-semibold flex items-center gap-1.5 transition active:scale-95 shrink-0 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              )}

              {/* Location details */}
              <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <div className="text-[11px] text-muted-foreground">Location</div>
                  <div className="text-xs font-semibold text-foreground">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <div className="text-xs text-muted-foreground mb-2.5">Find me online</div>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-xs font-medium text-foreground transition flex items-center justify-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-2.5 rounded-xl border border-border bg-card hover:bg-secondary text-xs font-medium text-foreground transition flex items-center justify-center gap-2"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-base font-semibold text-foreground">Send a Message</h3>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1">Message Sent</h4>
                  <p className="text-xs text-muted-foreground max-w-sm mb-5">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-lg text-xs font-medium bg-foreground text-background hover:opacity-90 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className={`w-full px-3.5 py-2 rounded-xl bg-background border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition ${errors.name ? 'border-destructive' : 'border-border'
                          }`}
                      />
                      {errors.name && <p className="text-[11px] text-destructive mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-3.5 py-2 rounded-xl bg-background border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition ${errors.email ? 'border-destructive' : 'border-border'
                          }`}
                      />
                      {errors.email && <p className="text-[11px] text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project discussion"
                      className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className={`w-full px-3.5 py-2 rounded-xl bg-background border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition resize-none ${errors.message ? 'border-destructive' : 'border-border'
                        }`}
                    />
                    {errors.message && <p className="text-[11px] text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl font-medium text-xs bg-foreground text-background hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
