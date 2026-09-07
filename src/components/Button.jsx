import { Link } from 'react-router-dom';

const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--fh-space-2)',
  fontWeight: 'var(--fh-weight-medium)',
  borderRadius: 'var(--fh-radius-md)',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'var(--fh-transition-fast)',
  textDecoration: 'none',
  fontSize: 'var(--fh-text-sm)',
  padding: 'var(--fh-space-2) var(--fh-space-4)',
  lineHeight: 'var(--fh-leading-tight)',
};

const variants = {
  primary: {
    background: 'var(--fh-color-action)',
    color: '#fff',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--fh-color-ink)',
    borderColor: 'var(--fh-color-rule)',
  },
  text: {
    background: 'transparent',
    color: 'var(--fh-color-action)',
    padding: '0',
  },
};

export default function Button({ variant = 'primary', href, onClick, children, type = 'button', disabled, ...rest }) {
  const style = { ...base, ...variants[variant], opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' };
  const hover = variant === 'primary'
    ? { background: 'var(--fh-color-action-hover)' }
    : variant === 'ghost'
      ? { background: 'var(--fh-color-canvas)' }
      : { textDecoration: 'underline' };
  const props = {
    style,
    onMouseEnter: (e) => Object.assign(e.currentTarget.style, hover),
    onMouseLeave: (e) => Object.assign(e.currentTarget.style, style),
    disabled,
    ...rest,
  };
  if (href) {
    const isExternal = /^https?:/.test(href);
    if (isExternal) return <a href={href} {...props}>{children}</a>;
    return <Link to={href} {...props}>{children}</Link>;
  }
  return <button type={type} onClick={onClick} {...props}>{children}</button>;
}
