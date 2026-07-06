/**
 * Renders a JSON-LD <script> from a plain data object.
 * Data is developer-authored (built from local JSON), so it is trusted.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
