"use client";

import { useState, useId, useCallback, type ReactNode, memo } from "react";
import { FAQItem } from "./FAQItem";

interface FAQItemData {
    question: string;
    answer: ReactNode;
}

interface FAQAccordionProps {
    faqs: FAQItemData[];
}

export const FAQAccordion = memo(function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const accordionId = useId();

    // Optimization: Stable callback to prevent FAQItem re-renders
    const handleToggle = useCallback((index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }, []);

    if (!faqs || faqs.length === 0) {
        return (
            <div className="max-w-3xl mx-auto mb-20 text-center py-12 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-muted-foreground text-lg">No FAQs available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mb-20">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={handleToggle}
                        accordionId={accordionId}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
});
