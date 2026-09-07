import { useState } from 'react';
import Money from './Money';
import { relativeDate } from '../lib/format';

const categoryIcon = {
  Groceries: '🛒', Income: '💰', Subscriptions: '📺', Transport: '⛽',
  Dining: '☕', Health: '💊', Utilities: '💡', Other: '📦',
};

export default function TransactionRow({ merchant, occurredOn, amount, category = 'Other', onClick }) {
  const [hover, setHover] = useState(false);
  const tone = amount >= 0 ? 'income' : 'spend';
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); onClick(); } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--fh-space-4)',
        padding: 'var(--fh-space-4) var(--fh-space-6)',
        background: hover ? 'var(--fh-color-canvas)' : 'transparent',
        transition: 'var(--fh-transition-fast)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fh-space-3)', minWidth: 0 }}>
        <span aria-hidden style={{
          width: '2.25rem', height: '2.25rem', borderRadius: 'var(--fh-radius-md)',
          display: 'grid', placeItems: 'center', background: 'var(--fh-color-canvas)',
          fontSize: 'var(--fh-text-base)', flex: '0 0 auto',
        }}>{categoryIcon[category] ?? '📦'}</span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 'var(--fh-weight-medium)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{merchant}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fh-space-2)', marginTop: '2px' }}>
            <span style={{ fontSize: 'var(--fh-text-sm)', color: 'var(--fh-color-ink-muted)' }}>{relativeDate(occurredOn)}</span>
            <span style={{
              fontSize: 'var(--fh-text-xs)', color: 'var(--fh-color-ink-muted)',
              background: 'var(--fh-color-canvas)', padding: '1px 8px', borderRadius: 'var(--fh-radius-full)',
            }}>{category}</span>
          </div>
        </div>
      </div>
      <Money amount={amount} tone={tone} showSign size="sm" />
    </div>
  );
}
