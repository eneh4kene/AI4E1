"use client";

import Link from "next/link";
import { Check, Phone, Heart, Shield, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

// Linda Theme Colors (Arbitrary values for Tailwind)
const theme = {
    bg: "bg-[#FDFBF7]",
    text: "text-[#2D3748]",
    primary: "bg-[#8BA89D]",
    primaryText: "text-[#8BA89D]",
    accent: "bg-[#A0B4C4]",
    accentText: "text-[#A0B4C4]",
    button: "bg-[#8BA89D] hover:bg-[#7A968C] text-white",
    buttonSecondary: "bg-white border-2 border-[#8BA89D] text-[#8BA89D] hover:bg-[#FDFBF7]",
};

export default function LindaPage() {
    return (
        <div className={cn("min-h-screen font-sans", theme.bg, theme.text)}>
            {/* 1. Hero Section */}
            <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-6">
                <div className="container max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8BA89D]/10 text-[#8BA89D] font-medium text-sm mb-8">
                        <Heart size={16} /> A friendly voice, always there.
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#2D3748]">
                        Linda — A friendly AI companion who calls residents, listens, remembers, and keeps them connected.
                    </h1>
                    <p className="text-xl md:text-2xl text-[#2D3748]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        She calls like a friend — no apps, no screens, just conversation.
                        Supporting emotional wellbeing through regular voice contact.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className={cn("px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm", theme.button)}
                        >
                            Book a 15-minute demo
                        </Link>
                        <Link
                            href="#contact"
                            className={cn("px-8 py-4 rounded-full font-bold text-lg transition-all", theme.buttonSecondary)}
                        >
                            Apply for a pilot programme
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Who It's For */}
            <section className="py-20 bg-white/50">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center text-[#2D3748]">
                        Built for organisations who support people
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Extra-care housing & supported living providers",
                            "Retirement communities & care homes",
                            "Community organisations & loneliness programmes",
                            "Home-care & outreach services",
                            "Telecare / technology-enabled-care networks",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#8BA89D]/20 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-[#8BA89D]/10 flex items-center justify-center text-[#8BA89D] flex-shrink-0">
                                    <Users size={20} />
                                </div>
                                <span className="font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Problem We Solve */}
            <section className="py-20 px-6">
                <div className="container max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">The Challenge</h2>
                    <p className="text-lg text-[#2D3748]/80 mb-12 leading-relaxed">
                        Many older adults experience loneliness, isolation, or long quiet hours.
                        Staff do their best — but human capacity is limited.
                        Digital solutions exist, but many require smartphones, confidence, or screens.
                    </p>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8BA89D]/20 text-left">
                        <ul className="space-y-4">
                            {[
                                "Loneliness harms wellbeing",
                                "Staff cannot check in as often as they wish",
                                "Residents may not use apps or smartphones",
                                "Families want more contact than they can provide",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. What Linda Is */}
            <section className="py-20 bg-[#8BA89D]/5">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-[#2D3748]">Meet Linda</h2>
                        <p className="text-xl text-[#2D3748]/80 max-w-2xl mx-auto">
                            Linda is an AI voice companion who calls residents regularly.
                            She remembers details, asks about their day, adapts to their personality,
                            and provides friendly conversation that feels natural and personal.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Phone}
                            title="Phone-based only"
                            desc="No apps or devices required. Just a regular phone call."
                        />
                        <FeatureCard
                            icon={Heart}
                            title="Warm & Gentle"
                            desc="A calm voice that encourages connection and reduces isolation."
                        />
                        <FeatureCard
                            icon={Calendar}
                            title="Proactive Calling"
                            desc="Scheduled times or random check-ins to break up the day."
                        />
                    </div>
                </div>
            </section>

            {/* 5. Benefits */}
            <section className="py-20 px-6">
                <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#8BA89D]">For Residents</h3>
                        <ul className="space-y-4">
                            {[
                                "Friendly companion who remembers them",
                                "More conversation, more stimulation",
                                "Reduces isolation and boredom",
                                "Feels natural and human — not a robot",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg">
                                    <Check className="text-[#8BA89D]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#A0B4C4]">For Providers</h3>
                        <ul className="space-y-4">
                            {[
                                "More social contact without extra staff burden",
                                "Flexible frequency of calls",
                                "Optional wellbeing summaries with consent",
                                "Enhances quality of life and programme outcomes",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg">
                                    <Check className="text-[#A0B4C4]" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. How It Works */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-[#2D3748]">Simple Setup</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            "Organisation selects 5–20 residents",
                            "We configure call frequency + time windows",
                            "Linda begins regular warm conversations",
                            "You receive light feedback & insights",
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-[#8BA89D] text-white flex items-center justify-center font-bold text-xl mb-4">
                                    {i + 1}
                                </div>
                                <p className="font-medium text-[#2D3748]">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Privacy & Safety */}
            <section className="py-20 bg-[#2D3748] text-[#FDFBF7]">
                <div className="container max-w-3xl mx-auto text-center">
                    <Shield size={48} className="mx-auto mb-6 text-[#8BA89D]" />
                    <h2 className="text-3xl font-bold mb-6">Privacy, Safety & Ethics</h2>
                    <p className="text-lg opacity-90 leading-relaxed mb-8">
                        Linda is not a replacement for human care — she is an addition.
                        She never gives medical advice or pretends to be human.
                        Conversations are private and securely processed under GDPR.
                        Residents can opt in or out at any time.
                    </p>
                </div>
            </section>

            {/* 8. Pilot CTA */}
            <section className="py-24 px-6 text-center">
                <div className="container max-w-3xl mx-auto bg-[#8BA89D]/10 rounded-3xl p-12 border border-[#8BA89D]/20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D3748]">
                        Join our Pilot Programme
                    </h2>
                    <p className="text-xl text-[#2D3748]/80 mb-8">
                        We’re now inviting forward-thinking organisations to run 4–8 week pilots with Linda.
                    </p>
                    <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
                        {[
                            "Full setup + onboarding support",
                            "Engagement data + qualitative feedback",
                            "Summary report for internal or regulatory use",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <Check size={18} className="text-[#8BA89D]" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="#contact"
                        className={cn("inline-block px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl", theme.button)}
                    >
                        Apply for a pilot
                    </Link>
                </div>
            </section>

            {/* 9. Founders */}
            <section className="py-20 bg-white border-t border-[#8BA89D]/10">
                <div className="container max-w-2xl mx-auto text-center">
                    <p className="text-lg italic text-[#2D3748]/70 mb-6">
                        "Linda is built by two founders — Eneh and Victor — driven by the belief that no one should feel alone or forgotten. Technology should feel warm, not cold."
                    </p>
                    <a href="mailto:hello@ai4e1.com" className="text-[#8BA89D] font-bold hover:underline">
                        Contact us directly → hello@ai4e1.com
                    </a>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8BA89D]/10 text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 mx-auto bg-[#8BA89D]/10 rounded-full flex items-center justify-center text-[#8BA89D] mb-4">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#2D3748]">{title}</h3>
            <p className="text-[#2D3748]/70">{desc}</p>
        </div>
    );
}
