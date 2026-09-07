import { useMemo, useState } from 'react';
import { transactions as allTx, categories } from '../lib/data';
import Panel from '../components/Panel';
import TransactionRow from '../components/TransactionRow';
import Button from '../components/Button';

export default function Transactions() {
  const [filter, setFilter] = useState('All');
  const items = useMemo(
    () => filter === 'All' ? allTx : allTx.filter((t) => t.category === filter),
    [filter]
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--fh-space-6)' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'var(--fh-text-2xl)', fontWeight: 'var(--fh-weight-bold)' }}>Transactions</h1>
        <p style={{ margin: 'var(--fh-space-1) 0 0', color: 'var(--fh-color-ink-muted)' }}>All activity, filterable by category.</p>
      </div>
      <Panel padded={false} title="History" meta={`${items.length} of ${allTx.length}`}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--fh-space-2)', padding: 'var(--fh-space-4) var(--fh-space-6)', borderBottom: '1px solid var(--fh-color-rule)' }}>
          {categories.map((c) => (
            <Button
              key={c}
              variant={c === filter ? 'primary' : 'ghost'}
              onClick={() => setFilter(c)}
              style={{ padding: 'var(--fh-space-1) var(--fh-space-3)', fontSize: 'var(--fh-text-xs)' }}
            >{c}</Button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.length === 0 && (
            <p style={{ padding: 'var(--fh-space-8)', textAlign: 'center', color: 'var(--fh-color-ink-muted)' }}>No transactions in this category.</p>
          )}
          {items.map((t, i) => (
            <div key={t.id} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--fh-color-rule)' }}>
              <TransactionRow {...t} />
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
