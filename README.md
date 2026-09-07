# FinanceHub UI

A real React component library for a personal-finance dashboard, built from the `financial-app-ui-sigma.vercel.app` mock.

## Stack
Vite + React 18. No Tailwind — styling is tokenized CSS custom properties so the library is framework-portable.

## Run
```bash
npm install
npm run dev
```
Open `/`, `/transactions`, `/library`.

## Library map
```
src/tokens/tokens.css     design tokens (color, type, space, radius, shadow)
src/components/           Button, Money, StatCard, StatGrid, Panel,
                          TransactionRow, TransactionList, AppHeader,
                          AppShell, Skeleton, EmptyState
src/pages/                Overview, Transactions, Library (gallery)
src/index.js              public barrel exports
```

## Primitives
- **Money** — number in, formatted USD out. Tabular figures, tone, optional sign.
- **StatCard** — label, amount, delta%, tone, loading skeleton.
- **TransactionRow** — merchant, date, amount, category icon + chip.
- **TransactionList** — data / skeleton / empty / error + retry.
- **Button** — primary | ghost | text, or in-app `href`.
- **Panel** — title, meta, action, footer slots.
- **AppShell** — sticky header + nav + max-width main.

## Deployed
- GitHub: https://github.com/Bettdatsh210-boop/financehub-ui
- Netlify: https://financehub-ui.netlify.app
