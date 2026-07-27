import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">Professional Cleaning Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
                Your Space, <span className="text-primary">Spotlessly Clean</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                EKE Perfect Cleaning delivers professional cleaning, laundry, and fumigation services. We&apos;re committed to creating clean and healthy spaces you can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
              >
              Call 0540 779 377
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Pro</div>
                <p className="text-sm text-muted-foreground">Team</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden h-[400px] sm:h-[500px]">
              <img
                src="/clean.jpeg"
                alt="Professional home cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-lg p-4 max-w-xs border border-border hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">Expert team with attention to detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
