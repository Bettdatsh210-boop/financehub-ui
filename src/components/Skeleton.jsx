export default function Skeleton({ width = '100%', height = '1rem', style = {} }) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width,
        height,
        borderRadius: 'var(--fh-radius-sm)',
        background: 'linear-gradient(90deg, var(--fh-color-rule) 25%, #f3f4f6 50%, var(--fh-color-rule) 75%)',
        backgroundSize: '200% 100%',
        animation: 'fh-shimmer 1.2s infinite',
        ...style,
      }}
    />
  );
}

// keyframes injected once
if (typeof document !== 'undefined' && !document.getElementById('fh-skeleton-style')) {
  const s = document.createElement('style');
  s.id = 'fh-skeleton-style';
  s.textContent = '@keyframes fh-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }';
  document.head.appendChild(s);
}
