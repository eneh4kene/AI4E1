import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export default function ProductGrid() {
    return (
        <section id="products" className="py-20 bg-muted/30">
            <div className="container">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">
                        Our Product Suite
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Practical AI utilities for different aspects of life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-6 rounded-2xl border border-primary/5 hover:shadow-lg transition-shadow flex flex-col h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-primary/5 p-3 rounded-lg text-primary">
                                    <product.icon size={24} />
                                </div>
                                <span
                                    className={`text-xs font-semibold px-2 py-1 rounded-full ${product.status === "Live"
                                            ? "bg-success/10 text-success"
                                            : "bg-accent/10 text-accent-foreground"
                                        }`}
                                >
                                    {product.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-2 text-primary">
                                {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                {product.tagline}
                            </p>
                            <div className="pt-4 border-t border-primary/5 mt-auto">
                                <p className="text-xs text-muted-foreground mb-3">
                                    <span className="font-semibold text-primary">
                                        Ideal for:
                                    </span>{" "}
                                    {product.partners}
                                </p>
                                {product.href ? (
                                    <Link
                                        href={product.href}
                                        className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all"
                                    >
                                        Learn more <ArrowRight size={16} />
                                    </Link>
                                ) : (
                                    <button className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                        Learn more <ArrowRight size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
