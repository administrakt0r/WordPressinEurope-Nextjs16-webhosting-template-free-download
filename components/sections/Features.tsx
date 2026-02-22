import { getOffscreenOptimizations } from "@/lib/styles";
import { FeatureCard } from "./FeatureCard";
import { TechnologyLogo } from "@/components/ui/TechnologyLogo";
import { AdvantageSection } from "./AdvantageSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FEATURES_LIST, TECHNOLOGIES_LIST } from "@/lib/content";

export function Features() {
    return (
        <section
            id="features"
            aria-label="Features and Technologies"
            className="py-20 bg-slate-950"
            // ⚡ Performance: content-visibility skips rendering work when off-screen
            style={getOffscreenOptimizations("1200px")}
        >
            <div className="container mx-auto px-4 md:px-6">

                {/* Tech Stack */}
                <div className="text-center mb-20">
                    <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
                        Powered By Industry-Leading Technologies
                    </h2>
                    <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {TECHNOLOGIES_LIST.map((tech) => (
                            <li key={tech.name}>
                                <TechnologyLogo
                                    name={tech.name}
                                    logo={tech.logo}
                                    width={tech.width}
                                    height={tech.height}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Features Grid */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                            High Performance WordPress Hosting Features
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our WordPress hosting is engineered for excellence. From ironclad security to lightning-fast speeds and effortless scalability.
                        </p>
                    </div>

                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURES_LIST.map((feature, index) => (
                            <li key={feature.title}>
                                <AnimatedSection delay={index * 0.1} className="h-full">
                                    <FeatureCard
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                </AnimatedSection>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Advantage Section */}
                <AdvantageSection />
            </div>
        </section>
    );
}
