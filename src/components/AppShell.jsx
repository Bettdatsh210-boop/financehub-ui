import AppHeader from './AppHeader';

export default function AppShell({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--fh-color-canvas)' }}>
      <AppHeader />
      <main style={{ maxWidth: '80rem', margin: '0 auto', padding: 'var(--fh-space-6) var(--fh-space-4) var(--fh-space-12)' }}>
        {children}
      </main>
    </div>
  );
}
