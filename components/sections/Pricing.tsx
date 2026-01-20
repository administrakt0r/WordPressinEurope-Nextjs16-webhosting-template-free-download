import { Heart, ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { PricingCard } from "./PricingCard";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function Pricing() {
    return (
        <section
            id="pricing"
            className="py-20 bg-slate-900"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            // contain-intrinsic-size prevents scrollbar jumps (estimated height)
            style={{
                contentVisibility: "auto",
                containIntrinsicSize: "1px 800px"
            }}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Professional WordPress hosting in Europe — completely free, forever. No hidden costs, no surprises.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Empty column for layout balance on large screens if needed, or just center the main card */}
                    <div className="hidden lg:block"></div>

                    {/* Pricing Card */}
                    <PricingCard />

                    {/* Support / Donate Section */}
                    <div className="lg:pt-12">
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
                                className="inline-flex items-center gap-2 text-yellow-400 font-bold text-sm hover:underline"
                            >
                                Contribute to Our Mission
                                <ArrowRight size={16} aria-hidden="true" />
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
