"use client";

import { memo, useId } from "react";
import { Zap, Lock } from "lucide-react";

export const AdvantageSection = memo(function AdvantageSection() {
    const id = useId();
    const serverResponseId = `${id}-server-response`;
    const dbQueryId = `${id}-db-query`;

    return (
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* GPU accelerated blurs to prevent repaint on scroll */}
            <div
                className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2 gpu-accelerated bg-[radial-gradient(closest-side,rgba(255,255,255,0.1),transparent)]"
            />
            <div
                className="absolute bottom-0 left-0 w-64 h-64 translate-y-1/2 -translate-x-1/2 gpu-accelerated bg-[radial-gradient(closest-side,rgba(250,204,21,0.2),transparent)]"
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                        The WPinEU Advantage: Engineered for Your Success
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                <Zap size={24} className="text-yellow-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Unleash Peak Performance</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    Our European servers are meticulously optimized for WordPress. Paired with cutting-edge SSD NVMe disks, your site will achieve lightning-fast load times.
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm h-fit">
                                <Lock size={24} className="text-yellow-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Ironclad Security</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    We provide robust, proactive security with ImmunifyAV antivirus protection and automated daily backups via JetBackup.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="text-sm text-blue-200 uppercase tracking-wider font-bold mb-1">Uptime Guarantee</div>
                                <div className="text-4xl font-bold">99.9%</div>
                            </div>
                            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span id={serverResponseId}>Server Response</span>
                                <span className="font-bold text-green-400">0.2s</span>
                            </div>
                            <div
                                role="progressbar"
                                aria-labelledby={serverResponseId}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuetext="0.2 seconds"
                                className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden"
                            >
                                <div className="bg-green-400 h-full rounded-full w-[95%]" />
                            </div>

                            <div className="flex justify-between text-sm">
                                <span id={dbQueryId}>Database Query</span>
                                <span className="font-bold text-green-400">0.05s</span>
                            </div>
                            <div
                                role="progressbar"
                                aria-labelledby={dbQueryId}
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-valuetext="0.05 seconds"
                                className="w-full bg-blue-900/50 rounded-full h-2 overflow-hidden"
                            >
                                <div className="bg-green-400 h-full rounded-full w-[98%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
