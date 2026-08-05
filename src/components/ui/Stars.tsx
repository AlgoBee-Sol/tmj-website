/**
 * Five-star rating row.
 *
 * The filled portion is masked with a CSS `inset()` clip rather than an SVG
 * `<clipPath>`, so fractional ratings land on an exact sub-pixel boundary
 * without minting a document-unique id — several of these render on the same
 * page, and duplicate ids would be invalid markup.
 *
 * Decorative: the surrounding component owns the accessible label.
 */
const STAR =
  "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z";

interface StarsProps {
  /** Rating out of 5. Fractions render as a partially filled star. */
  value?: number;
  /** Star height in px; width scales with it. */
  size?: number;
  className?: string;
}

export default function Stars({
  value = 5,
  size = 16,
  className = "",
}: StarsProps) {
  const clamped = Math.max(0, Math.min(5, value));
  const gap = size * 0.14;
  const width = size * 5 + gap * 4;

  const whole = Math.floor(clamped);
  const filled = Math.min(width, whole * (size + gap) + (clamped - whole) * size);
  const hiddenPct = ((width - filled) / width) * 100;

  const row = (fill: string, opacity: number, clip?: string) => (
    <g fill={fill} opacity={opacity} style={clip ? { clipPath: clip } : undefined}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={STAR}
          transform={`translate(${i * (size + gap)}) scale(${size / 24})`}
        />
      ))}
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${size}`}
      width={width}
      height={size}
      className={`shrink-0 ${className}`}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {/* Empty track, then the filled portion clipped over the top */}
      {row("currentColor", 0.22)}
      {filled > 0 && row("var(--rating)", 1, `inset(0 ${hiddenPct}% 0 0)`)}
    </svg>
  );
}
