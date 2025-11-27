import { PARTNER_VALUES } from "@/lib/data";

export default function WhyPartner() {
    return (
        <section id="why-partner" className="py-20 bg-primary text-primary-foreground">
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Pitch */}
                <div className="lg:col-span-1">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-accent">
                        Why Partner With AI4E1?
                    </h2>
                    <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                        We don't just build apps; we build ecosystems. Our AI utilities are
                        designed to plug into your existing channels, adding value to your
                        users instantly.
                    </p>
                    <button className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
                        Download Partner Deck
                    </button>
                </div>

                {/* Right Tiles */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PARTNER_VALUES.map((value, i) => (
                        <div
                            key={i}
                            className="bg-primary-foreground/5 p-6 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
                        >
                            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center text-accent mb-4">
                                <value.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2 text-white">
                                {value.title}
                            </h3>
                            <p className="text-primary-foreground/70 text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
