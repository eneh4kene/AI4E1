"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);
    const activeProduct = PRODUCTS.find((p) => p.id === activeTab) || PRODUCTS[0];

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">
                        Deep Dive
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See how our products work end-to-end.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {PRODUCTS.map((product) => (
                        <button
                            key={product.id}
                            onClick={() => setActiveTab(product.id)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-semibold transition-all border",
                                activeTab === product.id
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                                    : "bg-white text-muted-foreground border-muted hover:border-primary/30"
                            )}
                        >
                            {product.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-muted/20 rounded-3xl p-8 md:p-12 border border-primary/5 min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProduct.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            {/* Left Column: Problem & Solution */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold font-heading mb-4 text-primary">
                                        The Problem
                                    </h3>
                                    <ul className="space-y-3">
                                        {activeProduct.details.problem.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading mb-4 text-primary">
                                        The Solution
                                    </h3>
                                    <ul className="space-y-3">
                                        {activeProduct.details.solution.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Features & Integration */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/5">
                                <h3 className="text-xl font-bold font-heading mb-6 text-primary">
                                    Key Features
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {activeProduct.details.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-primary">
                                            <Check size={16} className="text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-4 pt-6 border-t border-muted">
                                    <div>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Integration
                                        </span>
                                        <p className="text-primary font-medium">
                                            {activeProduct.details.integration}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                            Impact Targets
                                        </span>
                                        <p className="text-primary font-medium">
                                            {activeProduct.details.metrics}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
