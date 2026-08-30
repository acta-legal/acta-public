# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-30 10:22:55Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 158,051 | clean: 130,777, partial: 314, failed: 951 |
| Romanian legislation (articles) | 764,989 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 160,120 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,125 |
| Last activity | 2026-08-29 13:39:45Z |
| 7-day avg items ingested/day | 35 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-29 13:39:45Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
