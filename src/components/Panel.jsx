export default function Panel({ title, meta, action, footer, children, padded = true }) {
  return (
    <section style={{
      background: 'var(--fh-color-surface)',
      borderRadius: 'var(--fh-radius-lg)',
      boxShadow: 'var(--fh-shadow-card)',
      overflow: 'hidden',
    }}>
      {(title || action) && (
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--fh-space-4)',
          padding: 'var(--fh-space-4) var(--fh-space-6)',
          borderBottom: '1px solid var(--fh-color-rule)',
        }}>
          <div>
            {title && <h2 style={{ margin: 0, fontSize: 'var(--fh-text-lg)', fontWeight: 'var(--fh-weight-semibold)' }}>{title}</h2>}
            {meta && <p style={{ margin: 'var(--fh-space-1) 0 0', fontSize: 'var(--fh-text-sm)', color: 'var(--fh-color-ink-muted)' }}>{meta}</p>}
          </div>
          {action}
        </header>
      )}
      <div style={padded ? { padding: 'var(--fh-space-2) 0' } : {}}>{children}</div>
      {footer && (
        <footer style={{
          padding: 'var(--fh-space-4) var(--fh-space-6)',
          background: 'var(--fh-color-canvas)',
          textAlign: 'center',
        }}>
          {footer}
        </footer>
      )}
    </section>
  );
}
