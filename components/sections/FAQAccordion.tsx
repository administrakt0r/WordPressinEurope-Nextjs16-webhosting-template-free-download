"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const accordionId = useId();

    return (
        <div className="max-w-3xl mx-auto mb-20">
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const headerId = `${accordionId}-header-${index}`;
                    const panelId = `${accordionId}-panel-${index}`;
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden"
                        >
                            <button
                                id={headerId}
                                aria-controls={panelId}
                                aria-expanded={isOpen}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                            >
                                <span className="font-bold font-heading text-foreground text-lg pr-8">
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-slate-800 text-slate-500'} transition-colors`}>
                                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={headerId}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
