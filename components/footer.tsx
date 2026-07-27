import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                E
              </div>
              <span className="text-xl font-bold">EKE Perfect</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional cleaning and fumigation services for homes and businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-background transition-colors">Home Cleaning</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Fumigation</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Laundry</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-background transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0540779377" className="hover:text-background transition-colors block">0540 779 377</a>
                  <a href="tel:0594471117" className="hover:text-background transition-colors block">0594 471 117</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Mankessim & Saltpond, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>&copy; {currentYear} EKE Perfect Cleaning and Fumigation Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
