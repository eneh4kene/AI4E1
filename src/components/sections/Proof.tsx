export default function Proof() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-accent">
                    Early Traction
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Metric number="500+" label="Iwanna Pods Created" />
                    <Metric number="10k+" label="Job Applications Sent" />
                    <Metric number="3" label="Active Pilot Programs" />
                </div>

                <p className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-8">
                    Trusted By
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                    {/* Placeholder Logos */}
                    <div className="text-2xl font-bold font-heading">TelcoOne</div>
                    <div className="text-2xl font-bold font-heading">BankCorp</div>
                    <div className="text-2xl font-bold font-heading">UniTech</div>
                    <div className="text-2xl font-bold font-heading">NGOCare</div>
                </div>
            </div>
        </section>
    );
}

function Metric({ number, label }: { number: string; label: string }) {
    return (
        <div className="p-6">
            <div className="text-5xl font-bold text-white mb-2">{number}</div>
            <div className="text-accent font-medium">{label}</div>
        </div>
    );
}
