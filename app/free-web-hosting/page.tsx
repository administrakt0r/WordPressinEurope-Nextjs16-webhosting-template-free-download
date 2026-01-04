import { HostingLanding } from "@/components/templates/HostingLanding";
import { Metadata } from "next";
import { Code, Globe, Server, ShieldCheck, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
    title: "Free Web Hosting | WPinEU",
    description: "Reliable Free Web Hosting with cPanel and SSL. Host your website for free with no ads and 99.9% uptime guarantee.",
    keywords: ["Free Web Hosting", "Web Hosting", "Free Hosting", "WPinEU"],
};

export default function FreeWebHosting() {
    return (
        <HostingLanding
            title="Free Web Hosting"
            description="Reliable and secure Free Web Hosting for your projects."
            heroTitle={
                <>
                    Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Free Web Hosting</span>
                </>
            }
            heroSubtitle="Host your website on our high-performance servers. Enjoy free SSL, daily backups, and 24/7 monitoring without paying a dime."
        >
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Everything You Need to Get Online</h2>
                        <p className="text-lg text-muted-foreground">
                            Whether you are a student, developer, or small business owner, our free web hosting platform has the tools you need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Free Subdomain</h3>
                            <p className="text-muted-foreground">
                                Don&apos;t have a domain yet? No problem. Use our free subdomain to get your website online instantly.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                                <Code size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">PHP & MySQL Support</h3>
                            <p className="text-muted-foreground">
                                Full support for the latest PHP versions and MySQL databases, ensuring compatibility with modern web applications.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                                <Server size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">cPanel Control Panel</h3>
                            <p className="text-muted-foreground">
                                Manage your files, databases, email accounts, and more with the industry-standard cPanel interface.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">DDoS Protection</h3>
                            <p className="text-muted-foreground">
                                Our network is protected by advanced DDoS mitigation systems to keep your website online even during attacks.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">99.9% Uptime</h3>
                            <p className="text-muted-foreground">
                                We guarantee 99.9% uptime for your website, so your visitors can always access your content.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                                <Layers size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">No Ads</h3>
                            <p className="text-muted-foreground">
                                Unlike other free hosts, we never place forced advertisements on your website. Your content is 100% yours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </HostingLanding>
    );
}
