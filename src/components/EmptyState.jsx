import Button from './Button';

export default function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div style={{ textAlign: 'center', padding: 'var(--fh-space-10) var(--fh-space-6)' }}>
      <div style={{ fontSize: 'var(--fh-text-2xl)', marginBottom: 'var(--fh-space-3)' }} aria-hidden>🗂️</div>
      <h3 style={{ margin: 0, fontSize: 'var(--fh-text-lg)', fontWeight: 'var(--fh-weight-semibold)' }}>{title}</h3>
      {description && (
        <p style={{ margin: 'var(--fh-space-2) 0 0', color: 'var(--fh-color-ink-muted)', fontSize: 'var(--fh-text-sm)' }}>{description}</p>
      )}
      {actionLabel && (
        <div style={{ marginTop: 'var(--fh-space-4)' }}>
          <Button variant="primary" onClick={onAction}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
