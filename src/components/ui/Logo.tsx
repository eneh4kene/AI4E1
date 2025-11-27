import { Cpu } from "lucide-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Cpu size={24} />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-primary">
                AI4E1
            </span>
        </Link>
    );
}
