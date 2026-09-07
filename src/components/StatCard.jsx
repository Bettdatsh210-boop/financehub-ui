import { useState } from 'react';
import Money from './Money';
import { formatDelta } from '../lib/format';
import Skeleton from './Skeleton';

const toneMap = {
  neutral: { value: 'neutral', delta: 'positive' },
  income: { value: 'income', delta: 'positive' },
  spend: { value: 'spend', delta: 'negative' },
};

export default function StatCard({ label, amount, deltaPercent, tone = 'neutral', loading = false, icon }) {
  const [hover, setHover] = useState(false);
  const t = toneMap[tone] ?? toneMap.neutral;
  const trend = deltaPercent >= 0 ? 'up' : 'down';

  if (loading) {
    return (
      <div style={cardStyle(false)}>
        <Skeleton width="40%" height="0.875rem" />
        <Skeleton width="60%" height="1.875rem" style={{ marginTop: 'var(--fh-space-3)' }} />
        <Skeleton width="30%" height="0.875rem" style={{ marginTop: 'var(--fh-space-2)' }} />
      </div>
    );
  }

  return (
    <div
      style={cardStyle(hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 'var(--fh-text-sm)', color: 'var(--fh-color-ink-muted)' }}>{label}</span>
        {icon && <span aria-hidden style={{ color: 'var(--fh-color-ink-muted)' }}>{icon}</span>}
      </div>
      <div style={{ marginTop: 'var(--fh-space-3)' }}>
        <Money amount={amount} tone={t.value} size="lg" />
      </div>
      <div style={{ marginTop: 'var(--fh-space-2)', display: 'flex', alignItems: 'center', gap: 'var(--fh-space-1)', fontSize: 'var(--fh-text-sm)', fontWeight: 'var(--fh-weight-medium)', color: toneColor(t.delta) }}>
        <span aria-hidden>{trend === 'up' ? '▲' : '▼'}</span>
        <span>{formatDelta(deltaPercent)} vs last month</span>
      </div>
    </div>
  );
}

function toneColor(tone) {
  return tone === 'positive' ? 'var(--fh-color-income)' : tone === 'negative' ? 'var(--fh-color-spend)' : 'var(--fh-color-ink-muted)';
}

function cardStyle(hover) {
  return {
    background: 'var(--fh-color-surface)',
    borderRadius: 'var(--fh-radius-lg)',
    boxShadow: hover ? 'var(--fh-shadow-card-hover)' : 'var(--fh-shadow-card)',
    padding: 'var(--fh-space-6)',
    transition: 'var(--fh-transition-shadow)',
  };
}
