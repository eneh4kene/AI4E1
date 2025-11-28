"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Users, Zap, Briefcase, Phone } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as any },
    },
};


export default function Hero() {
    return (
        <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-6"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold font-heading leading-tight text-primary"
                    >
                        AI utilities for <span className="text-accent">every one</span>,{" "}
                        <br className="hidden md:block" />
                        everywhere.
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                    >
                        AI4E1 builds practical AI products that blend into daily life — from
                        social discovery and AR art to job search and call-based support.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Link
                            href="#contact"
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
                        >
                            Talk to us about partnering
                        </Link>
                        <Link
                            href="#products"
                            className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-full font-semibold text-lg hover:bg-muted/30 transition-all"
                        >
                            Explore our products
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Visual - Constellation */}
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Central Node */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute z-10 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl"
                    >
                        <Cpu size={48} />
                    </motion.div>

                    {/* Orbiting Nodes */}
                    <OrbitingNode
                        icon={Users}
                        label="Iwanna"
                        angle={0}
                        radius={140}
                        delay={0.3}
                    />
                    <OrbitingNode
                        icon={Zap}
                        label="Framerly"
                        angle={90}
                        radius={140}
                        delay={0.5}
                    />
                    <OrbitingNode
                        icon={Briefcase}
                        label="InterviewsFirst"
                        angle={180}
                        radius={140}
                        delay={0.7}
                    />
                    <OrbitingNode
                        icon={Phone}
                        label="Linda"
                        angle={270}
                        radius={140}
                        delay={0.9}
                    />

                    {/* Orbit Rings */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute border border-dashed border-primary/20 rounded-full w-[280px] h-[280px] animate-spin-slow"
                    />
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute border border-primary/5 rounded-full w-[400px] h-[400px]"
                    />
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        </section>
    );
}

function OrbitingNode({
    icon: Icon,
    label,
    angle,
    radius,
    delay,
}: {
    icon: any;
    label: string;
    angle: number;
    radius: number;
    delay: number;
}) {
    return (
        <motion.div
            className="absolute flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
            }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            whileHover={{ scale: 1.15 }}
        >
            <div className="bg-white p-3 rounded-xl shadow-lg border border-primary/10 text-primary hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer group">
                <Icon size={24} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

