# StockMate — T. S. P Enterprises

An offline-first Windows desktop (`.exe`) inventory management and non-GST retail POS billing application built for **T. S. P Enterprises** (Beach Road, Tharuvaikulam).

## Features
- **Dashboard:** Live Sales, Orders, Estimated Profit, Inventory metrics, Sales Trend chart, Catalog by Category donut chart, Low/Zero-Stock Alerts, and Recent Sales.
- **POS Billing:** Up to 10 concurrent multi-bill tabs (persisted across restarts), inline product lookup with shelf/stock visibility, quantity steppers, counter rate overrides, keyboard shortcuts (`F2`, `F4`, `F6`, `F8`, `F9`, `Alt+N`, `Alt+1–9`), zero-stock receipt alerts, and clean 80mm thermal / A4 printing.
- **Product Catalog:** Permanent selling/cost rate management, live profit margin estimator, shelf bin picker, CSV bulk import/export, and pagination.
- **Sales History:** Itemized invoice breakdown, 1-click reprint, Return & Restock workflow, date filtering, and CSV export.
- **Vendors & GRN:** Vendor directory, itemized Purchase Orders, and Goods Receipt (GRN) with automatic stock restocking.
- **Finance & Day Close:** Live cash flow charts, expense ledger, and Daily Cash Closing reconciliation with audit history.
- **Settings & Offline SQLite:** Editable Shop Profile synced across the app and printed bills, embedded Racks & Bins grid, print preferences, and 1-click SQLite `.db` Backup / Restore tools.

## Tech Stack
- **Electron** + **Vite** + **React 18** + **Tailwind CSS**
- **SQLite** (`better-sqlite3`, stored locally in `%APPDATA%\Invenbill\billing.db`)
- **Chart.js** + **Lucide Icons**
- **electron-builder** (Windows NSIS `.exe` installer)

## Development & Packaging
```bash
npm install
npm run dev      # Run Electron + Vite locally
npm run build    # Build production bundle & Windows .exe installer in release/
```
