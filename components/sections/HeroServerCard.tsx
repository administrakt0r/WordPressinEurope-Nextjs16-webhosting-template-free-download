import { memo } from "react";
import { Server, Zap, Globe } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/links";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PRICE_MONTHLY_DISPLAY, PRICE_UNIT_DISPLAY, PRICE_ACCESSIBILITY_TEXT, HOSTING_SPECS } from "@/lib/constants";

export const HeroServerCard = memo(function HeroServerCard() {
    return (
        <div className="relative">
            {/* Main Server Card */}
            <div className="relative z-20 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                {/* Card Header */}
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400">
                            <Server size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white">Free WordPress Hosting</h3>
                            <p className="text-xs text-slate-400">Available for EU residents</p>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase">
                        WordPress optimized
                    </div>
                </div>

                {/* Specs Grid */}
                <ul className="grid gap-4 mb-8">
                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                <Zap size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Super fast storage</span>
                        </div>
                        <span className="text-white font-bold">{HOSTING_SPECS.DISK_LABEL}</span>
                    </li>

                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                                <Zap size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Bandwidth</span>
                        </div>
                        <span className="text-white font-bold">{HOSTING_SPECS.TRAFFIC_LABEL}</span>
                    </li>

                    <li className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                                <Globe size={18} aria-hidden="true" />
                            </div>
                            <span className="text-slate-300 font-medium">Location</span>
                        </div>
                        <span className="text-white font-bold">{HOSTING_SPECS.LOCATION}</span>
                    </li>
                </ul>

                {/* Price Tag */}
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-sm text-slate-400 mb-1">Monthly Cost</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white" aria-hidden="true">{PRICE_MONTHLY_DISPLAY}</span>
                            <span className="text-slate-500" aria-hidden="true">{PRICE_UNIT_DISPLAY}</span>
                            <span className="sr-only">{PRICE_ACCESSIBILITY_TEXT}</span>
                        </div>
                    </div>
                    <ExternalLink
                        href={EXTERNAL_LINKS.ORDER_FREE_HOSTING}
                        ariaLabel="Order free WordPress hosting now"
                        className="h-10 px-6 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-600/20 text-white font-bold text-sm transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                    >
                        Order Now
                    </ExternalLink>
                </div>
            </div>

            {/* Floating Elements */}
            <div
                className="absolute -top-12 -right-8 z-30 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700"
                aria-hidden="true"
            >
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="font-bold text-sm text-white">Powered by cPanel</span>
                </div>
            </div>

            <div
                className="absolute -bottom-8 -left-8 z-30 bg-blue-600 p-4 rounded-2xl shadow-xl shadow-blue-600/20"
                aria-hidden="true"
            >
                <div className="flex items-center gap-3">
                    <div className="font-bold text-lg text-white">LiteSpeed</div>
                    <span className="text-blue-100 text-xs font-medium leading-tight">Web<br />Server</span>
                </div>
            </div>

            <div
                className="absolute top-1/2 -right-12 z-30 bg-red-500 p-3 rounded-xl shadow-lg shadow-red-500/20"
                aria-hidden="true"
            >
                <div className="text-xs font-bold text-white text-center">
                    Redis<br />Cache
                </div>
            </div>

            {/* Glow Effects */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 gpu-accelerated bg-[radial-gradient(closest-side,rgba(59,130,246,0.1),transparent)]"
            />
        </div>
    );
});
