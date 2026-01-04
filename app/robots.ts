import { MetadataRoute } from "next";

// const REVALIDATE_SECONDS = 86400;

// export const revalidate = REVALIDATE_SECONDS;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: "https://wpineu.com/sitemap.xml",
    };
}
