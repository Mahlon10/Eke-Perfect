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

export const services = [
    {
        id: 1,
        name: "Washroom Cleaning",
        description:
            "Professional cleaning and sanitization of washrooms, leaving them spotless, fresh, and hygienic.",
        icon: Bath,
        image: "/washroom.jpeg",
        features: [
            "Toilet Sanitization",
            "Odor Removal",
            "Deep Disinfection",
        ],
    },
    {
        id: 2,
        name: "Clothes Folding",
        description:
            "Neat and organized clothes folding services to help keep your wardrobe tidy and stress-free.",
        icon: Shirt,
        image: "/fold.jpg",
        features: [
            "Neat Folding",
            "Wardrobe Organization",
            "Time Saving",
        ],
    },
    {
        id: 3,
        name: "Carpet Cleaning",
        description:
            "Deep carpet cleaning to remove stains, dirt, allergens, and odors while extending carpet life.",
        icon: Brush,
        image: "/carpet.jpg",
        features: [
            "Stain Removal",
            "Odor Elimination",
            "Deep Extraction",
        ],
    },
    {
        id: 4,
        name: "Residential & Commercial Cleaning",
        description:
            "Comprehensive cleaning services for homes, offices, shops, and commercial facilities.",
        icon: Home,
        image: "/resi.jpeg",
        features: [
            "Home Cleaning",
            "Office Cleaning",
            "Scheduled Maintenance",
        ],
    },
    {
        id: 5,
        name: "Kitchen Cleaning",
        description:
            "Complete kitchen cleaning, degreasing, and sanitization for a healthier cooking environment.",
        icon: ChefHat,
        image: "/kitch.jpeg",
        features: [
            "Grease Removal",
            "Appliance Cleaning",
            "Surface Sanitization",
        ],
    },
    {
        id: 6,
        name: "Mopping",
        description:
            "Professional floor mopping services that leave every surface clean, polished, and sparkling.",
        icon: Droplets,
        image: "/mop.jpg",
        features: [
            "Spotless Floors",
            "Safe Cleaning Products",
            "Fresh Finish",
        ],
    },
    {
        id: 7,
        name: "Dusting",
        description:
            "Detailed dusting services for furniture, fixtures, electronics, and hard-to-reach areas.",
        icon: Sparkles,
        image: "/dust.jpg",
        features: [
            "Furniture Dusting",
            "High Surfaces",
            "Allergen Reduction",
        ],
    },
    {
        id: 8,
        name: "Window Cleaning",
        description:
            "Crystal-clear window cleaning for homes and businesses, inside and outside.",
        icon: PanelsTopLeft,
        image: "/window.jpeg",
        features: [
            "Streak-Free Finish",
            "Interior & Exterior",
            "Glass Polishing",
        ],
    },
    {
        id: 9,
        name: "Moving Services",
        description:
            "Reliable moving assistance including packing, loading, unloading, and post-move cleaning.",
        icon: Truck,
        image: "/moving.jpeg",
        features: [
            "Packing Assistance",
            "Loading & Unloading",
            "Move-In Cleaning",
        ],
    },
    {
        id: 10,
        name: "After Party Cleaning",
        description:
            "Fast and efficient cleanup after events, parties, weddings, and corporate gatherings.",
        icon: PartyPopper,
        image: "/party.jpg",
        features: [
            "Trash Removal",
            "Floor Cleaning",
            "Venue Restoration",
        ],
    },
    {
        id: 11,
        name: "Trash Cleaning",
        description:
            "Professional trash collection and disposal services to maintain a clean and healthy environment.",
        icon: Trash2,
        image: "/trash2.jpg",
        features: [
            "Waste Collection",
            "Proper Disposal",
            "Sanitized Environment",
        ],
    },
    {
        id: 13,
        name: 'Fumigation & Pest Control',
        description: 'Professional fumigation and pest control services to keep your space safe and healthy. Using industry-approved methods.',
        icon: Zap,
        image: '/fumigation.jpg',
        features: ['Safe & Effective', 'Quick Results', 'Licensed Professionals']
    },
    {
        id: 14,
        name: 'Laundry Services',
        description: 'Professional laundry services with expert care for your clothes and linens. Fast turnaround with superior results.',
        icon: Shirt,
        image: '/laundry.png',
        features: ['Stain Removal', 'Delicate Care', 'Express Service']
    }
];

export default services;
