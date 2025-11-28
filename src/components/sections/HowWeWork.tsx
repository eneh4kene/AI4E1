"use client";

import { Search, Rocket, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowWeWork() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">
                            How We Work
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            From discovery to scale in three simple steps.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Animated Connector Line (Desktop) */}
                    <AnimatedLine />

                    <ScrollReveal delay={0.1}>
                        <Step
                            icon={Search}
                            number="1"
                            title="Explore"
                            description="30–45 min discovery call to align on use case and user base."
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Step
                            icon={Rocket}
                            number="2"
                            title="Pilot"
                            description="4–8 week pilot with a subset of users (white-label or co-branded)."
                        />
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <Step
                            icon={TrendingUp}
                            number="3"
                            title="Scale"
                            description="Integration into partner channels, revenue sharing, and local support."
                        />
                    </ScrollReveal>
                </div>

                {/* FAQ Accordion Stub */}
                <div className="max-w-3xl mx-auto mt-20">
                    <ScrollReveal>
                        <h3 className="text-2xl font-bold font-heading mb-8 text-center text-primary">
                            Common Questions
                        </h3>
                    </ScrollReveal>
                    <div className="space-y-4">
                        <ScrollReveal delay={0.1}>
                            <FAQItem
                                question="Can we white-label your products?"
                                answer="Yes, we support full white-labeling for enterprise partners."
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <FAQItem
                                question="Do you support on-prem deployments?"
                                answer="We can support VPC deployments for regulated industries like banking and healthcare."
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <FAQItem
                                question="Which markets do you prioritize?"
                                answer="We are currently focused on European and US markets, with solutions designed for global scalability."
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AnimatedLine() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-primary/20 -z-10"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
        />
    );
}

function Step({
    icon: Icon,
    number,
    title,
    description,
}: {
    icon: any;
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col items-center text-center bg-white p-4">
            <div className="w-24 h-24 bg-background rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 relative">
                <Icon size={32} className="text-primary" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                    {number}
                </div>
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-primary">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="border border-muted rounded-lg p-4 hover:border-primary/30 transition-colors">
            <h4 className="font-semibold text-primary mb-2">{question}</h4>
            <p className="text-sm text-muted-foreground">{answer}</p>
        </div>
    );
}

