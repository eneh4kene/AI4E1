"use client";

import { Globe, Lightbulb, Handshake } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Mission() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <ScrollReveal>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary">
                            What is AI4E1?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are a portfolio company building globally relevant AI
                            solutions. We focus on utility over hype, creating tools that solve
                            real, mundane problems for everyday people.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollReveal delay={0.1}>
                        <Pillar
                            icon={Lightbulb}
                            title="Everyday Problems"
                            description="We target everyday friction — loneliness, job search, art buying, meeting people — and solve it with simple AI."
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Pillar
                            icon={Globe}
                            title="AI Utilities"
                            description="Each solution is a focused utility, not another generic chatbot. We build tools that do one thing extremely well."
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <Pillar
                            icon={Handshake}
                            title="Partner Channels"
                            description="We scale via telcos, banks, employers, and NGOs, integrating our tools where users already are."
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

function Pillar({
    icon: Icon,
    title,
    description,
}: {
    icon: any;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-background p-8 rounded-2xl border border-primary/5 hover:border-accent/50 transition-colors group">
            <div className="bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-primary">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}

