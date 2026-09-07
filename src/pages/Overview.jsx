import { kpis, transactions } from '../lib/data';
import StatGrid from '../components/StatGrid';
import TransactionList from '../components/TransactionList';

export default function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--fh-space-8)' }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 'var(--fh-text-2xl)', fontWeight: 'var(--fh-weight-bold)' }}>Overview</h1>
        <p style={{ margin: 'var(--fh-space-1) 0 0', color: 'var(--fh-color-ink-muted)' }}>Your finances at a glance.</p>
      </div>
      <StatGrid items={kpis} />
      <TransactionList items={transactions.slice(0, 4)} onViewAll />
    </div>
  );
}
