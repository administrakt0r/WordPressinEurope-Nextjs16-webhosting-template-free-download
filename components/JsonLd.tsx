import { headers } from "next/headers";
import { safeJsonLd } from "@/lib/security";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export async function JsonLd({ data }: JsonLdProps) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") || "";

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
