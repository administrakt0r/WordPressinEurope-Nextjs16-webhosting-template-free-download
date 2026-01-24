import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { getOffscreenOptimizations } from "@/lib/styles";
import { FAQAccordion } from "./FAQAccordion";
import { FAQS } from "@/lib/data";
import { ExternalLink } from "@/components/ui/ExternalLink";

export function FAQ() {
    return (
        <section
            id="faq"
            className="py-20 bg-slate-900"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            style={getOffscreenOptimizations("600px")}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                        Your Questions, Answered
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Find quick answers to common questions about our free WordPress hosting service. We believe in full transparency for our educational initiative.
                    </p>
                </div>

                <FAQAccordion faqs={FAQS} />

                {/* Learning Portal CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        quality={60}
                    />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading mb-4">
                            Explore Our Learning & News Portal
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Dive into our comprehensive learning portal for WordPress and web development. Stay updated with the latest news, tutorials, and resources.
                        </p>
                        <ExternalLink
                            href={EXTERNAL_LINKS.LEARNING_PORTAL}
                            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            Start Learning
                            <ArrowRight size={18} aria-hidden="true" />
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
