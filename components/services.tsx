import {
    Bath,
    Shirt,
    Brush,
    Home,
    ChefHat,
    Droplets,
    Zap,
    Sparkles,
    PanelsTopLeft,
    Truck,
    PartyPopper,
    Trash2,
} from "lucide-react";

import services from './servicesData'

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We offer comprehensive cleaning solutions tailored to your needs. Quality service every time.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.id}
                                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                            >
                                {/* Image */}
                                <div className="h-64 overflow-hidden bg-muted relative">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="text-primary" size={24} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                                    </div>

                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                <span className="text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href={`/?service=${encodeURIComponent(service.name)}#contact`}
                                        className="inline-block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold"
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


