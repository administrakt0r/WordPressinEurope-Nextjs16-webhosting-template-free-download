import { Heart, ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function SupportCard() {
    return (
        <div className="bg-yellow-900/10 rounded-2xl p-8 border border-yellow-900/20">
            <div className="w-12 h-12 rounded-xl bg-yellow-900/30 text-yellow-400 flex items-center justify-center mb-6">
                <Heart size={24} fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                Support & Grow
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Help us keep this project alive and get more resources in return. Any amount helps! Contributors can receive higher resources.
            </p>
            <ExternalLink
                href={EXTERNAL_LINKS.CLIENT_PORTAL}
                className="inline-flex items-center gap-2 text-yellow-400 font-bold text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-sm"
            >
                Contribute to Our Mission
                <ArrowRight size={16} aria-hidden="true" />
            </ExternalLink>
        </div>
    );
}
