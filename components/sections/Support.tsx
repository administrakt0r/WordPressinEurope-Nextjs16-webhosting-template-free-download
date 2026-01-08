

import Link from "next/link";
import { Mail, ArrowUpRight, Code2 } from "lucide-react";

const resources = [
    { name: "compressi.us", url: "https://compressi.us" },
    { name: "links2pics.com", url: "https://links2pics.com" },
    { name: "thumbnail.monster", url: "https://thumbnail.monster" },
    { name: "minify.click", url: "https://minify.click" },
];

export function Support() {
    return (
        <section id="support" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">

                {/* Custom Solutions CTA */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-white flex items-center justify-center mx-auto mb-8">
                            <Code2 size={32} aria-hidden="true" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Need a Custom Web Solution?
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Beyond our free hosting, we specialize in creating tailor-made web solutions. If your project requires custom development, unique features, or dedicated support, we&apos;re here to help. Let&apos;s build something amazing together.
                        </p>
                        <Link
                            href="mailto:support@wpineu.com"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <Mail size={18} aria-hidden="true" />
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* More Free Resources */}
                <div className="text-center">
                    <h3 className="text-xl font-bold font-heading text-foreground mb-8">
                        More Free Resources
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {resources.map((resource) => (
                            <a
                                key={resource.name}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:border-primary/50 hover:shadow-sm transition-all"
                            >
                                <span className="font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                    {resource.name}
                                </span>
                                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
