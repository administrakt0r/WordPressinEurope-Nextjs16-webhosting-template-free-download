import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes intelligently.
 *
 * This utility combines `clsx` for conditional class joining and `tailwind-merge`
 * for handling Tailwind class conflicts (e.g., ensuring `p-4` overrides `p-2`).
 *
 * @param inputs - A list of class names, objects, or arrays compatible with clsx.
 * @returns A single string of merged class names.
 *
 * @example
 * cn("bg-red-500", isActive && "text-white", "p-4 p-2") // Returns "bg-red-500 text-white p-2"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
