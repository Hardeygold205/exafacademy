import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Course } from "@/lib/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper to strip HTML tags for card previews
 * @param html The HTML string to strip
 * @returns Plain text string
 */
export const stripHtml = (html: string): string => {
  if (!html) return "";
  // Basic regex strip - for server/client compatibility
  return html.replace(/<[^>]*>?/gm, "");
};

/**
 * Helper to format dates from Unix timestamp
 * @param timestamp Unix timestamp in seconds
 * @returns Formatted date string
 */
export const formatDate = (timestamp: number): string => {
  if (!timestamp || timestamp === 0) return "Self-paced";
  // Multiply by 1000 because JS uses milliseconds
  return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

/**
 * Helper to safely get custom field values by shortname
 * @param course The course object
 * @param fieldName The shortname of the custom field (e.g., 'edwskilllevel')
 * @param fallback Fallback text if not found
 * @returns The value string
 */
export const getCustomField = (
  course: Course,
  fieldName: string,
  fallback = ""
): string => {
  const field = course.customfields.find((f) => f.shortname === fieldName);
  return field?.value || fallback;
};