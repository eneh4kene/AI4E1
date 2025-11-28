import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
                    <Logo />
                    <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
                        AI utilities for everyday life, designed for global impact.
                    </p>
                </div>

                <div className="col-span-1">
                    <h4 className="font-heading font-semibold mb-4 text-accent">Company</h4>
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-primary-foreground/70 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="font-heading font-semibold mb-4 text-accent">Legal</h4>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                Data & AI Safety
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h4 className="font-heading font-semibold mb-4 text-accent">Connect</h4>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="mailto:hello@ai4e1.com" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                hello@ai4e1.com
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-primary-foreground/70 hover:text-white transition-colors">
                                Twitter / X
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
                © {new Date().getFullYear()} AI4E1. All rights reserved.
            </div>
        </footer>
    );
}
