
/**
 * Safely serializes data for use in JSON-LD <script> tags.
 * prevent XSS by escaping HTML entities.
 */
export function safeJsonLd(data: Record<string, unknown>): string {
  const json = JSON.stringify(data);
  return json.replace(/</g, '\\u003c')
             .replace(/>/g, '\\u003e')
             .replace(/&/g, '\\u0026');
}
