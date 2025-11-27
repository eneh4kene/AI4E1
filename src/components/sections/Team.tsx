import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Team() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-primary">
                    Built by Builders
                </h2>
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/5">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        "We believe AI shouldn't just be a chat interface. It should be a
                        utility that quietly solves the friction in everyday life. We're
                        building AI4E1 to bring practical, accessible AI tools to emerging
                        markets first, then the world."
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-primary rounded-full mb-2" />{" "}
                        {/* Avatar Placeholder */}
                        <h3 className="text-lg font-bold text-primary">Kene Eneh</h3>
                        <p className="text-sm text-muted-foreground">Founder & Lead Engineer</p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-muted">
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                            Request full technical dossier <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
