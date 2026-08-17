# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-17 05:37:18Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 132,460 | clean: 111,324, partial: 284, failed: 957 |
| Romanian legislation (articles) | 673,930 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 18,595 |
| Ingested | 140,628 |
| Failed | 185 |
| Skipped (non-legislation content) | 2,479 |
| Last activity | 2026-08-17 05:36:59Z |
| 7-day avg items ingested/day | 3,041 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-17 05:36:59Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
