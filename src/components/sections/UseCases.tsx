"use client";

import { useState } from "react";
import { USE_CASES } from "@/lib/data";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

export default function UseCases() {
    const [activeSector, setActiveSector] = useState(USE_CASES[0].sector);
    const activeCase = USE_CASES.find((c) => c.sector === activeSector) || USE_CASES[0];

    return (
        <section id="use-cases" className="py-20 bg-muted/30">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">
                            Use Cases by Sector
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            See how AI4E1 fits into your industry.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Pills */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {USE_CASES.map((uc) => (
                            <button
                                key={uc.sector}
                                onClick={() => setActiveSector(uc.sector)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                                    activeSector === uc.sector
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-white text-muted-foreground border-muted hover:border-primary/30"
                                )}
                            >
                                {uc.sector}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Scenarios */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="wait">
                        {activeCase.scenarios.map((scenario, i) => (
                            <motion.div
                                key={`${activeSector}-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl border border-primary/5 shadow-sm flex items-start gap-4 hover:shadow-lg hover:border-primary/20 transition-all"
                            >
                                <span className="bg-accent/10 text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                    {i + 1}
                                </span>
                                <p className="text-primary font-medium leading-relaxed">
                                    {scenario}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

