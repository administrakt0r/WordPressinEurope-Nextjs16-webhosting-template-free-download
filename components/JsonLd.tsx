import { safeJsonLd } from "@/lib/security";

interface JsonLdProps {
  data: Record<string, unknown>;
  nonce?: string;
}

export function JsonLd({ data, nonce }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
