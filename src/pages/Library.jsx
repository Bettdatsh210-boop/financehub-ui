import { useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';
import Money from '../components/Money';
import StatCard from '../components/StatCard';
import Skeleton from '../components/Skeleton';
import EmptyState from '../components/EmptyState';
import TransactionRow from '../components/TransactionRow';

export default function Library() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--fh-space-8)' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'var(--fh-text-2xl)', fontWeight: 'var(--fh-weight-bold)' }}>Component Library</h1>
        <p style={{ margin: 'var(--fh-space-1) 0 0', color: 'var(--fh-color-ink-muted)' }}>Live variants of every primitive.</p>
      </div>

      <Panel title="Button" meta="primary · ghost · text">
        <div style={{ display: 'flex', gap: 'var(--fh-space-3)', flexWrap: 'wrap', padding: 'var(--fh-space-4) var(--fh-space-6)' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">Text link</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </Panel>

      <Panel title="Money" meta="tabular nums, tone, sign">
        <div style={{ display: 'flex', gap: 'var(--fh-space-8)', flexWrap: 'wrap', padding: 'var(--fh-space-4) var(--fh-space-6)' }}>
          <Money amount={12345.67} size="lg" />
          <Money amount={5000} tone="income" showSign />
          <Money amount={-47.32} tone="spend" showSign />
          <Money amount={99.99} size="sm" tone="neutral" />
        </div>
      </Panel>

      <Panel title="StatCard" meta="tones + loading">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--fh-space-6)', padding: 'var(--fh-space-6)' }}>
          <StatCard label="Total Balance" amount={12345.67} deltaPercent={2.5} tone="neutral" loading={loading} />
          <StatCard label="Monthly Income" amount={5000} deltaPercent={5.2} tone="income" />
          <StatCard label="Monthly Spending" amount={2150} deltaPercent={-1.8} tone="spend" />
        </div>
        <div style={{ padding: '0 var(--fh-space-6) var(--fh-space-4)' }}>
          <Button variant="ghost" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1200); }}>Toggle loading</Button>
        </div>
      </Panel>

      <Panel title="TransactionRow">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TransactionRow merchant="Grocery Store" occurredOn="2026-09-07" amount={-47.32} category="Groceries" />
          <div style={{ borderTop: '1px solid var(--fh-color-rule)' }}>
            <TransactionRow merchant="Salary Deposit" occurredOn="2026-09-06" amount={5000} category="Income" />
          </div>
        </div>
      </Panel>

      <Panel title="Skeleton & EmptyState">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--fh-space-6)', padding: 'var(--fh-space-6)' }}>
          <div>
            <Skeleton width="100%" height="0.875rem" />
            <Skeleton width="70%" height="0.875rem" style={{ marginTop: 'var(--fh-space-2)' }} />
            <Skeleton width="40%" height="1.5rem" style={{ marginTop: 'var(--fh-space-3)' }} />
          </div>
          <EmptyState title="Nothing here" description="This is the empty state." actionLabel="Add item" onAction={() => {}} />
        </div>
      </Panel>
    </div>
  );
}
