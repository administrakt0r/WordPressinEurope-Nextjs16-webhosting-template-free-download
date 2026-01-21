import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind CSS conflict resolution.
 * Uses `clsx` for conditional classes and `tailwind-merge` to handle conflicts.
 *
 * @param inputs - List of class values (strings, objects, arrays, etc.)
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
