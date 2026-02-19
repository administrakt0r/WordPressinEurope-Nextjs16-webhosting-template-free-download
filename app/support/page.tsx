import { Metadata } from "next";
import { Mail, MessageSquare, ExternalLink as ExternalLinkIcon, Clock, MapPin } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ObfuscatedMailto } from "@/components/ui/ObfuscatedMailto";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
    title: "Support & Contact",
    description: "Get help with your WPinEU hosting. Contact our support team via email or client area for assistance with your free WordPress hosting.",
    keywords: ["wpineu support", "hosting support", "contact wpineu", "wordpress help"],
    alternates: {
        canonical: "https://wpineu.com/support",
    },
    openGraph: {
        title: "Support & Contact | WPinEU",
        description: "Get help with your WPinEU hosting. Contact our support team for assistance.",
        url: "https://wpineu.com/support",
    }
};

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px]" />
                    <div className="absolute top-[20%] -left-[10%] w-[60%] h-[60%] bg-yellow-500/10 rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="flex justify-center">
                            <Breadcrumbs
                                items={[{ label: 'Support', href: '/support' }]}
                                className="mb-8"
                            />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-heading text-foreground leading-tight mb-6">
                            We&apos;re Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Help</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Have questions about your hosting? Need technical assistance? Our support team is ready to help you succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Email Support */}
                        <div className="bg-background rounded-2xl p-8 border border-muted hover:border-blue-500/50 transition-all group">
                            <div className="w-14 h-14 rounded-xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Email Support</h3>
                            <p className="text-muted-foreground mb-6">
                                Send us an email and we&apos;ll get back to you as soon as possible.
                            </p>
                            <ObfuscatedMailto
                                email={EXTERNAL_LINKS.SUPPORT_EMAIL}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                                {EXTERNAL_LINKS.SUPPORT_EMAIL}
                                <ExternalLinkIcon size={16} />
                            </ObfuscatedMailto>
                        </div>

                        {/* Client Area */}
                        <div className="bg-background rounded-2xl p-8 border border-muted hover:border-blue-500/50 transition-all group">
                            <div className="w-14 h-14 rounded-xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MessageSquare size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">Client Area</h3>
                            <p className="text-muted-foreground mb-6">
                                Access your account, manage services, and submit support tickets.
                            </p>
                            <ExternalLink
                                href={EXTERNAL_LINKS.CLIENT_PORTAL}
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                                clients.wpineu.com
                                <ExternalLinkIcon size={16} />
                            </ExternalLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Info */}
            <section className="py-20 bg-background/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                            Support Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Response Time */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center">
                                        <Clock size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Response Time</h3>
                                    <p className="text-muted-foreground">
                                        We typically respond to support requests within 24-48 hours during business days.
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                                    <p className="text-muted-foreground">
                                        Our servers are located in Europe, ensuring fast and reliable service for EU users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                        Common Questions
                    </h2>

                    <FAQAccordion faqs={[
                        {
                            question: "How do I get started?",
                            answer: (
                                <>
                                    Visit our <ExternalLink href={EXTERNAL_LINKS.ORDER_FREE_HOSTING} className="text-blue-400 hover:text-blue-300">order page</ExternalLink> to create your free hosting account. The setup is instant and requires no credit card.
                                </>
                            )
                        },
                        {
                            question: "Is it really free?",
                            answer: "Yes! Our free hosting plan includes 1GB SSD storage, 100GB bandwidth, cPanel, LiteSpeed, and more. No hidden fees, no credit card required."
                        },
                        {
                            question: "How can I upgrade my plan?",
                            answer: (
                                <>
                                    Log in to your <ExternalLink href={EXTERNAL_LINKS.CLIENT_PORTAL} className="text-blue-400 hover:text-blue-300">client area</ExternalLink> to view available upgrade options and manage your services.
                                </>
                            )
                        },
                        {
                            question: "What if I need help with WordPress?",
                            answer: (
                                <>
                                    Contact us at <ObfuscatedMailto email={EXTERNAL_LINKS.SUPPORT_EMAIL} className="text-blue-400 hover:text-blue-300" /> with your questions. We&apos;re here to help you succeed with your WordPress site.
                                </>
                            )
                        }
                    ]} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Create your free WordPress hosting account today. No credit card required.
                        </p>
                        <ExternalLink
                            href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            Get Started Free
                            <ExternalLinkIcon size={20} />
                        </ExternalLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
