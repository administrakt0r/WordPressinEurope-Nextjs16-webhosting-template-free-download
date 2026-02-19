"use client";

import { useState, useId, useCallback, type ReactNode } from "react";
import { FAQItem } from "./FAQItem";

interface FAQItemData {
    question: string;
    answer: ReactNode;
}

interface FAQAccordionProps {
    faqs: FAQItemData[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const accordionId = useId();

    // Optimization: Stable callback to prevent FAQItem re-renders
    const handleToggle = useCallback((index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    }, []);

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
}
