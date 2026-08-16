# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-16 05:31:27Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 120,448 | clean: 99,977, partial: 271, failed: 956 |
| Romanian legislation (articles) | 631,583 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 156,104 |
| Failed | 185 |
| Skipped (non-legislation content) | 5,625 |
| Last activity | 2026-08-16 04:40:48Z |
| 7-day avg items ingested/day | 1,266 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-16 04:40:48Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
