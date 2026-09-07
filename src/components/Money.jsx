import { formatMoney } from '../lib/format';

const toneColor = {
  neutral: 'var(--fh-color-ink)',
  income: 'var(--fh-color-income)',
  spend: 'var(--fh-color-spend)',
  positive: 'var(--fh-color-income)',
  negative: 'var(--fh-color-spend)',
};

export default function Money({ amount, tone = 'neutral', size = 'md', showSign = false, className = '' }) {
  const formatted = formatMoney(amount);
  const signed = showSign && amount > 0 ? `+${formatted}` : formatted;
  const sizeStyle = size === 'lg'
    ? { fontSize: 'var(--fh-text-metric)', fontWeight: 'var(--fh-weight-bold)' }
    : size === 'sm'
      ? { fontSize: 'var(--fh-text-sm)', fontWeight: 'var(--fh-weight-semibold)' }
      : { fontSize: 'var(--fh-text-base)', fontWeight: 'var(--fh-weight-semibold)' };
  return (
    <span
      className={className}
      style={{
        ...sizeStyle,
        color: toneColor[tone] ?? toneColor.neutral,
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.01em',
      }}
    >
      {signed}
    </span>
  );
}
