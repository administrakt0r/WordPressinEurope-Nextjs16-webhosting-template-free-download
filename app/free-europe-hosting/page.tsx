import { HostingLanding } from "@/components/templates/HostingLanding";
import { Metadata } from "next";
import { Globe, ShieldCheck, Server, MapPin, Scale, Lock } from "lucide-react";

export const metadata: Metadata = {
    title: "Free Europe Hosting | WPinEU",
    description: "Free Europe Hosting with low latency for European visitors. GDPR compliant and locally optimized.",
    keywords: ["Free Europe Hosting", "EU Hosting", "GDPR Compliant Hosting", "WPinEU"],
};

export default function FreeEuropeHosting() {
    return (
        <HostingLanding
            heroTitle={
                <>
                    Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Free Europe Hosting</span>
                </>
            }
            heroSubtitle="Host your site closer to your audience. Our European data centers ensure low latency, high speeds, and full GDPR compliance."
        >
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Hosted Locally, Served Globally</h2>
                        <p className="text-lg text-muted-foreground">
                            Location matters. Hosting your website in Europe ensures the best possible experience for your European visitors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Strategic Location</h3>
                            <p className="text-muted-foreground">
                                Our data centers are located in Luxembourg and Germany, providing excellent connectivity across all of Europe.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                                <Scale size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">GDPR Compliance</h3>
                            <p className="text-muted-foreground">
                                We adhere strictly to EU data protection laws (GDPR), ensuring that your data and your users&apos; data is handled legally and securely.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Low Latency</h3>
                            <p className="text-muted-foreground">
                                Minimize network hops and latency for your European audience, resulting in snappier page loads and better user retention.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Sovereignty</h3>
                            <p className="text-muted-foreground">
                                Keep your data within the European Union. We guarantee that your data stays on our EU-based infrastructure.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                                <Server size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Tier 3+ Data Centers</h3>
                            <p className="text-muted-foreground">
                                Our infrastructure is housed in state-of-the-art Tier 3+ data centers with redundant power, cooling, and network connections.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                                <Lock size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Secure Infrastructure</h3>
                            <p className="text-muted-foreground">
                                Physical security, biometric access controls, and 24/7 surveillance ensure that our servers are physically protected at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HostingLanding>
    );
}
