// Public barrel — import primitives from 'financehub-ui' once published.
export { default as Button } from './components/Button.jsx';
export { default as Money } from './components/Money.jsx';
export { default as StatCard } from './components/StatCard.jsx';
export { default as StatGrid } from './components/StatGrid.jsx';
export { default as Panel } from './components/Panel.jsx';
export { default as TransactionRow } from './components/TransactionRow.jsx';
export { default as TransactionList } from './components/TransactionList.jsx';
export { default as AppHeader } from './components/AppHeader.jsx';
export { default as AppShell } from './components/AppShell.jsx';
export { default as Skeleton } from './components/Skeleton.jsx';
export { default as EmptyState } from './components/EmptyState.jsx';
export { formatMoney, formatDelta, relativeDate } from './lib/format.js';
export { kpis, transactions, categories } from './lib/data.js';
