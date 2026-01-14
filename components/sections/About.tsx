import { Users, Lightbulb, ShieldCheck, Globe2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <AnimatedSection direction="left">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
                                About WPinEU
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                WP in EU is an educational initiative created to make learning web development more accessible to everyone. We provide free, reliable cPanel hosting to help beginners and aspiring developers gain real, hands-on experience.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                The project was founded on July 10, 2025, in Zagreb, Croatia, by Marko S. (administraktor.com) with one simple goal — to help people across Europe start their WordPress journey without financial barriers.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="p-3 rounded-xl bg-blue-900/20 text-blue-400 h-fit">
                                        <Lightbulb size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-heading text-foreground mb-2">Our Story</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            WP in EU started from a belief that learning web development shouldn&apos;t depend on your budget. I saw that many talented people across the EU wanted to learn WordPress but couldn&apos;t afford quality hosting. That&apos;s when I decided to create a space where anyone can learn, build, and grow — completely free of charge.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-3 rounded-xl bg-green-900/20 text-green-400 h-fit">
                                        <Globe2 size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-heading text-foreground mb-2">Sustainable Impact</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Our mission goes beyond free hosting — it&apos;s about building opportunities. Through WP in EU, we aim to:
                                        </p>
                                        <ul className="space-y-2">
                                            {[
                                                "Support long-term learning and digital growth",
                                                "Help people develop practical skills for real careers",
                                                "Encourage economic independence through technology",
                                                "Strengthen digital literacy across EU communities"
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Visual/Stats Column */}
                        <AnimatedSection direction="right" delay={0.2} className="relative">
                            <div className="relative z-10 grid gap-6">
                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-yellow-900/30 text-yellow-400">
                                            <Users size={24} aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-foreground">Commitment</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We are committed to maintaining this service as a free educational resource for the EU community. Our infrastructure is powered by professional-grade servers, and we maintain the same standards you&apos;d expect from premium hosting providers.
                                    </p>
                                </div>

                                <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400">
                                            <ShieldCheck size={24} aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-foreground">Privacy & Security</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        All data is stored exclusively in EU data centers, ensuring GDPR compliance. We maintain transparent privacy policies and give users complete control over their data.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/5 to-yellow-500/5 rounded-full blur-3xl -z-10" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>
    );
}
