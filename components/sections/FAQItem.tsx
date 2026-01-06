"use client";

import { memo } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: (index: number) => void;
    accordionId: string;
    index: number;
}

// Optimization: Memoized component to prevent re-renders of all items when one is toggled.
// Only the item that changes its 'isOpen' state will re-render.
const FAQItem = memo(function FAQItem({
    question,
    answer,
    isOpen,
    onToggle,
    accordionId,
    index,
}: FAQItemProps) {
    const headerId = `${accordionId}-header-${index}`;
    const panelId = `${accordionId}-panel-${index}`;

    return (
        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
            <button
                id={headerId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => onToggle(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            >
                <span className="font-bold font-heading text-foreground text-lg pr-8">
                    {question}
                </span>
                <div
                    className={`p-1 rounded-full ${
                        isOpen ? "bg-primary text-white" : "bg-slate-800 text-slate-500"
                    } transition-colors`}
                >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                            {answer}
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
});

export { FAQItem };
