import { MetadataRoute } from 'next'

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
            url: `${baseUrl}/free-wordpress-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-cpanel-hosting`,
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
            url: `${baseUrl}/free-redis-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-ssd-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-europe-hosting`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/free-web-hosting`,
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
