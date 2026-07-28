'use client'

import { Suspense, useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, MapPin, Clock, Send } from 'lucide-react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const sectionRef = useRef<HTMLElement | null>(null)

  const searchParams = useSearchParams()

  useEffect(() => {
    const svc = searchParams?.get('service')
    if (svc) {
      setFormData(prev => ({ ...prev, service: svc }))
    }

    const onHashService = () => {
      const url = new URL(window.location.href)
      if (url.hash === '#contact') {
        const svcFromParam = url.searchParams.get('service')
        if (svcFromParam) {
          setFormData(prev => ({ ...prev, service: svcFromParam }))
        }
      }
    }

    const scrollToContact = () => {
      if (window.location.hash === '#contact') {
        window.setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
    }

    onHashService()
    scrollToContact()
    window.addEventListener('hashchange', onHashService)
    window.addEventListener('hashchange', scrollToContact)
    return () => {
      window.removeEventListener('hashchange', onHashService)
      window.removeEventListener('hashchange', scrollToContact)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const whatsappPhone = '233540779377'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const messageText = encodeURIComponent(
      `Hello, my name is ${formData.name}.\nPhone: ${formData.phone}.\nEmail: ${formData.email}.\nService: ${formData.service}.\nMessage: ${formData.message}`
    )

    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${messageText}`
    window.open(whatsappUrl, '_blank')

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <section ref={sectionRef} id="contact" className="scroll-mt-24 py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to get your space sparkling clean? Contact us today for a free quote or to schedule your service.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">
                      <a className="hover:text-primary transition-colors">
                        0540 779 377
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a className="hover:text-primary transition-colors">
                        0594 471 117
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Mankessim & Saltpond<br />
                    Ghana
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Availability</h4>
                  <p className="text-muted-foreground">
                    24/7 Available<br />
                    Weekend & Holiday Service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your email"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Washroom Cleaning">Washroom Cleaning</option>
                  <option value="Clothes Folding">Clothes Folding</option>
                  <option value="Carpet Cleaning">Carpet Cleaning</option>
                  <option value="Residential & Commercial Cleaning">Residential & Commercial Cleaning</option>
                  <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                  <option value="Mopping">Mopping</option>
                  <option value="Dusting">Dusting</option>
                  <option value="Window Cleaning">Window Cleaning</option>
                  <option value="Moving Services">Moving Services</option>
                  <option value="After Party Cleaning">After Party Cleaning</option>
                  <option value="Trash Cleaning">Trash Cleaning</option>
                  <option value="Fumigation & Pest Control">Fumigation & Pest Control</option>
                  <option value="Laundry Services">Laundry Services</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary font-medium">
                  Thank you! We&apos;ll contact you soon.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="py-20 sm:py-32 bg-background"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">Loading...</div></div>}>
      <ContactForm />
    </Suspense>
  )
}

