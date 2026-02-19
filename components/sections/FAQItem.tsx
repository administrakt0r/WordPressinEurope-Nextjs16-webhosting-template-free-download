"use client";

import { memo, type ReactNode } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: ReactNode;
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
            <h3 className="m-0 p-0 text-base font-normal">
                <button
                    id={headerId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => onToggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset hover:bg-slate-900/50 transition-colors duration-200"
                >
                    <span className="font-bold font-heading text-foreground text-lg pr-8">
                        {question}
                    </span>
                    <div
                        className={`p-1 rounded-full ${
                            isOpen ? "bg-primary text-white" : "bg-slate-800 text-slate-500"
                        } transition-colors`}
                    >
                        {isOpen ? <Minus size={20} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
                    </div>
                </button>
            </h3>
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
