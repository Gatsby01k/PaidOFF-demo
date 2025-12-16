# Architecture (prototype → product)

This demo is UI-only. Below is a clean path to evolve it into a real product later.

## Modules
- **Identity & Sessions**
  - Email/phone/social auth (or wallet-based auth)
  - Session tokens, device fingerprints (optional)
- **Wallet**
  - Non-custodial: user signs tx, platform never holds keys
  - Custodial: regulated entity + KYC/AML
  - Ledger: append-only entries (deposits, bets, wins, withdrawals)
- **Games**
  - Aggregator integration (launch URL / iframe / callbacks)
  - Provider callbacks → settlement → ledger entry
- **Risk & Compliance (optional by jurisdiction)**
  - Limits, self-exclusion, age gating, KYC checks
  - Audit trail, fraud signals
- **Observability**
  - Structured logs, metrics, trace IDs
  - Event stream for admin

## Privacy UX ideas
- Balance masking ("Privacy Mode")
- Local “shielded” view: hide exact amounts, show ranges
- Minimal data collection in marketing surfaces

## API sketch (example)
- POST /api/auth/login
- GET  /api/me
- GET  /api/wallet
- POST /api/wallet/deposit (provider callback)
- POST /api/wallet/withdraw
- POST /api/bets
- POST /api/settlements (game provider callback)
