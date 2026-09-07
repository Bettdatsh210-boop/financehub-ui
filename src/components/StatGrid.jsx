import StatCard from './StatCard';

export default function StatGrid({ items, loading }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--fh-space-6)',
    }}>
      {items.map((k) => (
        <StatCard key={k.id} {...k} loading={loading} />
      ))}
    </div>
  );
}
