import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQAccordion } from "./FAQAccordion";
import { EXTERNAL_LINKS } from "@/lib/links";

const faqs = [
    {
        question: "How can you offer free WordPress hosting?",
        answer: "Our free hosting is possible through efficient resource management and a powerful software stack. We use CloudLinux OS to isolate accounts for stability and LiteSpeed web server for server-level caching, which dramatically reduces server load. This allows us to host thousands of sites on minimal hardware."
    },
    {
        question: "How do you handle large amounts of traffic with minimal hardware?",
        answer: "We utilize LiteSpeed Caching which reduces CPU usage significantly, and CloudLinux Resource Isolation to ensure fair resource usage. This combination allows for high performance even with high traffic."
    },
    {
        question: "What are the technical specifications?",
        answer: "You get 1 GB SSD disk space (RAID 10 NVMe), 100 GB Bandwidth (up to 3GB/s speed), 2 Addon domains, 2 MySQL databases, 2 email addresses, and FREE Auto SSL Certificates."
    },
    {
        question: "Is there really no catch or hidden costs?",
        answer: "There is absolutely no catch. Our service is 100% free, forever. We do not display ads on your site, and there are no hidden fees. We are supported by donations and our educational mission."
    },
    {
        question: "Who is eligible for free hosting?",
        answer: "Our service is open to everyone, but we specifically target residents of the European Union to foster digital growth within the region. However, anyone can apply."
    },
    {
        question: "Can I use my own domain name?",
        answer: "Yes, you can use your own custom domain name. You can also use our free subdomains if you don't have one yet."
    }
];

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                        Your Questions, Answered
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Find quick answers to common questions about our free WordPress hosting service. We believe in full transparency for our educational initiative.
                    </p>
                </div>

                <FAQAccordion faqs={faqs} />

                {/* Learning Portal CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold font-heading mb-4">
                            Explore Our Learning & News Portal
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Dive into our comprehensive learning portal for WordPress and web development. Stay updated with the latest news, tutorials, and resources.
                        </p>
                        <Link
                            href={EXTERNAL_LINKS.LEARNING_PORTAL}
                            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            Start Learning
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
