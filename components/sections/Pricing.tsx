import { PricingCard } from "./PricingCard";
import { SupportCard } from "./SupportCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";

export function Pricing() {
    return (
        <Section
            id="pricing"
            headingId="pricing-heading"
            className="bg-slate-900"
            estimatedHeight="800px"
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
                    <AnimatedSection>
                        <PricingCard />
                    </AnimatedSection>

                    {/* Support / Donate Section */}
                    <AnimatedSection delay={0.1} className="lg:pt-12">
                        <SupportCard />
                    </AnimatedSection>
                </div>
            </div>
        </Section>
    );
}
