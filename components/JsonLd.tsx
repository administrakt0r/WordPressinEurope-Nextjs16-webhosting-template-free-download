import { headers } from 'next/headers';
import { safeJsonLd } from "@/lib/security";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export async function JsonLd({ data }: JsonLdProps) {
  const nonce = (await headers()).get('x-nonce');

  return (
    <script
      type="application/ld+json"
      nonce={nonce || undefined}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
