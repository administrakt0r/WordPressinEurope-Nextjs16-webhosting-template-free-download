/**
 * Centralized configuration for all external links used across the application.
 * Uses `as const` to ensure type safety for literal values.
 */
export const EXTERNAL_LINKS = {
    // Clients & Ordering
    /** The main URL for the client portal login */
    CLIENT_PORTAL: "https://clients.wpineu.com/",
    /** Direct link to order the free WordPress hosting plan */
    ORDER_FREE_HOSTING: "https://clients.wpineu.com/order/free-wordpress-hosting",

    // WordPress Info & Blogs
    /** Main blog URL */
    BLOG: "https://wp.wpineu.com",
    /** Educational resources and tutorials */
    LEARNING_PORTAL: "https://wp.wpineu.com/learning-portal",
    /** About Us page on the blog */
    ABOUT: "https://wp.wpineu.com/about-wpineu/",

    // Status
    /** Uptime monitoring status page */
    UPTIME: "https://uptime.wpineu.com",

    // Legal
    /** Privacy Policy documentation */
    PRIVACY_POLICY: "https://wp.wpineu.com/privacy-policy",
    /** Terms of Service agreement */
    TERMS_SERVICE: "https://wp.wpineu.com/terms-of-service",
    /** Service Level Agreement details */
    SLA: "https://wp.wpineu.com/service-level-agreement",
    /** Form/Email to report abuse */
    REPORT_ABUSE: "https://wp.wpineu.com/report-abuse",
    /** Support email address */
    SUPPORT_EMAIL: "support@wpineu.com",
} as const;

export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
