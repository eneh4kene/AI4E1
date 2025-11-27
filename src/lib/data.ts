import { Cpu, Heart, Briefcase, Phone, Zap, Globe, Users, Building2 } from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Why AI4E1", href: "/#why-partner" },
    { label: "Use Cases", href: "/#use-cases" },
    { label: "For Partners", href: "/#partners" },
    { label: "Contact", href: "/#contact" },
];

export const PRODUCTS = [
    {
        id: "iwanna",
        name: "Iwanna",
        tagline: "Spontaneous micro-pods for meeting people in real life.",
        description: "Anonymous flows, AI-matched pods, energy/vibe scores, AR overlays, localised experiences.",
        status: "Beta",
        icon: Users,
        partners: "Telcos, Youth Programs",
        details: {
            problem: [
                "Urban loneliness is rising despite social media.",
                "Meeting new people feels awkward and unsafe.",
            ],
            solution: [
                "AI matches small groups (pods) based on real-time vibe/energy.",
                "Guided, time-boxed meetups reduce social anxiety.",
            ],
            features: [
                "Anonymous until matched",
                "Real-time vibe check",
                "AR navigation to meetup spot",
                "Safety-first moderation",
            ],
            integration: "Telco bundles / zero-rated data",
            metrics: "500+ pods created in beta",
        },
    },
    {
        id: "framerly",
        name: "Framerly",
        tagline: "Discover art and frames you can preview on your wall in AR.",
        description: "AI art discovery, marketplace for artists, AR wall preview, eco-friendly frames.",
        status: "In Development",
        icon: Zap, // Placeholder
        partners: "Print Labs, Home Decor",
        details: {
            problem: [
                "Buying art online is hard—you can't visualize size/fit.",
                "Custom framing is expensive and opaque.",
            ],
            solution: [
                "AR preview lets you see art on your actual wall.",
                "AI suggests art based on your room's aesthetic.",
            ],
            features: [
                "AR Wall Preview",
                "AI Art Recommendations",
                "Local Print/Frame Network",
                "Artist Marketplace",
            ],
            integration: "Local printers/logistics",
            metrics: "Partnered with 3 major print labs",
        },
    },
    {
        id: "interviewsfirst",
        name: "InterviewsFirst",
        tagline: "AI that applies to jobs and prepares you for interviews.",
        description: "CV tailoring, auto-apply flows, AI interview prep & coaching.",
        status: "Live",
        icon: Briefcase,
        partners: "Universities, Job Boards",
        details: {
            problem: [
                "Job hunting is a numbers game that burns people out.",
                "Candidates struggle to tailor CVs for every role.",
            ],
            solution: [
                "Auto-apply agent handles the repetitive applications.",
                "AI coach preps you for specific interview questions.",
            ],
            features: [
                "CV Tailoring Agent",
                "Auto-Apply Workflows",
                "Mock Interview Simulator",
                "Application Tracking",
            ],
            integration: "Bank or employer perks",
            metrics: "10k+ applications generated",
        },
    },
    {
        id: "linda",
        name: "Linda",
        tagline: "An AI-powered calling companion for focus and routine.",
        description: "Scheduled check-in calls, body-doubling, mood/energy tracking.",
        status: "Live",
        icon: Phone,
        partners: "Wellness Programs, NGOs",
        href: "/products/linda", // Special link for Linda
        details: {
            problem: [
                "Isolation affects mental health and focus.",
                "People need accountability but don't want to burden friends.",
            ],
            solution: [
                "Regular, friendly check-in calls from an AI companion.",
                "Non-judgmental support for routines and tasks.",
            ],
            features: [
                "Scheduled Check-ins",
                "Mood Tracking",
                "Body Doubling Mode",
                "Privacy-First Design",
            ],
            integration: "Wellness programs / NGOs",
            metrics: "Active in 3 pilot programs",
        },
    },
];

export const PARTNER_VALUES = [
    {
        title: "Plug-and-Play AI",
        description: "Ready-made utilities that partners can brand, bundle, or embed.",
        icon: Cpu,
    },
    {
        title: "Emerging Market DNA",
        description: "Built with constraints like patchy connectivity and low-end devices in mind.",
        icon: Globe,
    },
    {
        title: "Fast Experimentation",
        description: "We iterate quickly using AI-native dev tools to test and ship in days.",
        icon: Zap,
    },
    {
        title: "Shared Upside Models",
        description: "Revenue share, per-user fees, or outcome-based pricing.",
        icon: Building2,
    },
];

export const USE_CASES = [
    {
        sector: "Telcos",
        scenarios: [
            "Bundle Iwanna pods + Linda calls as 'digital wellness' packs.",
            "Framerly as AR-powered value-add for fibre customers.",
        ],
    },
    {
        sector: "Banks & Fintech",
        scenarios: [
            "Offer InterviewsFirst as a premium perk for student accounts.",
            "Linda for financial wellness check-ins.",
        ],
    },
    {
        sector: "Universities",
        scenarios: [
            "Use InterviewsFirst to support graduating students.",
            "Iwanna for safe, campus-based social pods.",
        ],
    },
    {
        sector: "NGOs",
        scenarios: [
            "Linda for loneliness support lines.",
            "Iwanna for safe, moderated community pods.",
        ],
    },
];
