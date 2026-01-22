import { getOffscreenOptimizations } from "@/lib/styles";
import { PricingCard } from "./PricingCard";
import { SupportCard } from "./SupportCard";

export function Pricing() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-heading"
            className="py-20 bg-slate-900"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            style={getOffscreenOptimizations("800px")}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2
                        id="pricing-heading"
                        className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4"
                    >
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
                        <SupportCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
