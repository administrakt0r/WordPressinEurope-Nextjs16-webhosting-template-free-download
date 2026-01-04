import { MetadataRoute } from 'next'

const REVALIDATE_SECONDS = 86400

// export const revalidate = REVALIDATE_SECONDS

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://wpineu.com'
    const lastModified = new Date().toISOString()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/free-ssd-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-redis-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-litespeed-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-wordpress-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/support`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}
