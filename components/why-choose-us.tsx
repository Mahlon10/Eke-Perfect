import { Check, Award, Users, Clock } from 'lucide-react'

const reasons = [
  {
    title: 'Expert Team',
    description: 'Trained professionals with years of experience in cleaning and fumigation services.',
    icon: Award
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality. Transparent pricing with no hidden charges.',
    icon: Check
  },
  {
    title: 'Quick Service',
    description: 'Fast and efficient service delivery. We respect your time and schedule.',
    icon: Clock
  },
  {
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We listen to your needs and deliver accordingly.',
    icon: Users
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re dedicated to providing exceptional cleaning services with professionalism and care.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Trusted by Residents & Businesses
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in Mankessim and Saltpond, we&apos;ve built a reputation for reliability, professionalism, and excellent results. Your cleanliness is our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-sm font-semibold text-primary">Licensed & Insured</p>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-sm font-semibold text-primary">Eco-Friendly Products</p>
              </div>
              <div className="bg-background px-6 py-3 rounded-lg border border-border">
                <p className="text-sm font-semibold text-primary">100% Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
