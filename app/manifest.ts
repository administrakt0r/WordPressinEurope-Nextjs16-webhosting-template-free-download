import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WPinEU - Free WordPress Hosting',
    short_name: 'WPinEU',
    description: 'Premium free WordPress hosting with cPanel, LiteSpeed, and Redis. No ads, no hidden fees.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  }
}
