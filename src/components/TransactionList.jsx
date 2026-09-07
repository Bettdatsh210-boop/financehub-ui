import Panel from './Panel';
import TransactionRow from './TransactionRow';
import Skeleton from './Skeleton';
import EmptyState from './EmptyState';
import Button from './Button';

export default function TransactionList({ title = 'Recent Transactions', items = [], loading = false, error = null, onRetry, onViewAll, emptyTitle = 'No transactions yet', emptyDescription = 'Transactions will show up here once you add some.' }) {
  let body;
  if (loading) {
    body = (
      <div style={{ padding: 'var(--fh-space-2) 0' }}>
        {[0,1,2,3].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--fh-space-3)', padding: 'var(--fh-space-4) var(--fh-space-6)' }}>
            <Skeleton width="2.25rem" height="2.25rem" style={{ borderRadius: 'var(--fh-radius-md)' }} />
            <div style={{ flex: 1 }}>
              <Skeleton width="50%" height="0.875rem" />
              <Skeleton width="30%" height="0.75rem" style={{ marginTop: 'var(--fh-space-2)' }} />
            </div>
            <Skeleton width="4rem" height="0.875rem" />
          </div>
        ))}
      </div>
    );
  } else if (error) {
    body = (
      <EmptyState
        title="Couldn't load transactions"
        description={error}
        actionLabel="Try again"
        onAction={onRetry}
      />
    );
  } else if (!items.length) {
    body = <EmptyState title={emptyTitle} description={emptyDescription} />;
  } else {
    body = (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map((t, i) => (
          <div key={t.id} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--fh-color-rule)' }}>
            <TransactionRow {...t} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Panel
      title={title}
      meta={items.length ? `${items.length} items` : undefined}
      footer={onViewAll ? <Button variant="text" href="/transactions">View all transactions →</Button> : null}
    >
      {body}
    </Panel>
  );
}
