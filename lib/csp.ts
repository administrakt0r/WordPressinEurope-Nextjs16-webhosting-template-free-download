export function generateCsp(nonce: string): string {
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com;
    font-src 'self' data:;
    connect-src 'self' https://uptime.wpineu.com https://clients.wpineu.com https://wp.wpineu.com https://images.unsplash.com;
    worker-src 'self' blob:;
    manifest-src 'self';
    media-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `;

  // Replace newlines with spaces and trim
  return cspHeader.replace(/\s{2,}/g, ' ').trim();
}
