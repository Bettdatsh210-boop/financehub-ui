import { Link, useLocation } from 'react-router-dom';

const nav = [
  { to: '/', label: 'Overview' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/library', label: 'Library' },
];

export default function AppHeader() {
  const { pathname } = useLocation();
  return (
    <header style={{
      background: 'var(--fh-color-surface)',
      boxShadow: 'var(--fh-shadow-header)',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{
        maxWidth: '80rem', margin: '0 auto', padding: 'var(--fh-space-4) var(--fh-space-4)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--fh-space-4)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--fh-space-2)' }}>
          <span aria-hidden style={{
            width: '1.75rem', height: '1.75rem', borderRadius: 'var(--fh-radius-md)',
            background: 'var(--fh-color-action)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 'var(--fh-weight-bold)',
          }}>F</span>
          <span style={{ fontSize: 'var(--fh-text-lg)', fontWeight: 'var(--fh-weight-bold)' }}>FinanceHub</span>
        </Link>
        <nav style={{ display: 'flex', gap: 'var(--fh-space-1)' }} aria-label="Main">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                style={{
                  padding: 'var(--fh-space-2) var(--fh-space-3)',
                  borderRadius: 'var(--fh-radius-md)',
                  fontSize: 'var(--fh-text-sm)',
                  fontWeight: 'var(--fh-weight-medium)',
                  color: active ? 'var(--fh-color-action)' : 'var(--fh-color-ink-muted)',
                  background: active ? 'var(--fh-color-action-soft)' : 'transparent',
                }}
              >{n.label}</Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
