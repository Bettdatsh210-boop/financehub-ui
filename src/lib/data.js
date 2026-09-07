export const kpis = [
  { id: 'balance', label: 'Total Balance', amount: 12345.67, deltaPercent: 2.5, tone: 'neutral' },
  { id: 'income', label: 'Monthly Income', amount: 5000, deltaPercent: 5.2, tone: 'income' },
  { id: 'spend', label: 'Monthly Spending', amount: 2150, deltaPercent: -1.8, tone: 'spend' },
];

export const transactions = [
  { id: 't1', merchant: 'Grocery Store', occurredOn: '2026-09-07', amount: -47.32, category: 'Groceries' },
  { id: 't2', merchant: 'Salary Deposit', occurredOn: '2026-09-06', amount: 5000, category: 'Income' },
  { id: 't3', merchant: 'Netflix Subscription', occurredOn: '2026-09-05', amount: -15.99, category: 'Subscriptions' },
  { id: 't4', merchant: 'Gas Station', occurredOn: '2026-09-04', amount: -52.45, category: 'Transport' },
  { id: 't5', merchant: 'Coffee Shop', occurredOn: '2026-09-03', amount: -6.5, category: 'Dining' },
  { id: 't6', merchant: 'Pharmacy', occurredOn: '2026-09-02', amount: -23.1, category: 'Health' },
  { id: 't7', merchant: 'Freelance Payout', occurredOn: '2026-09-01', amount: 1200, category: 'Income' },
  { id: 't8', merchant: 'Electric Bill', occurredOn: '2026-08-31', amount: -89.4, category: 'Utilities' },
];

export const categories = ['All', 'Groceries', 'Income', 'Subscriptions', 'Transport', 'Dining', 'Health', 'Utilities'];
