# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-24 15:37:36Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,439 | clean: 151,551, partial: 463, failed: 1,324 |
| Romanian legislation (articles) | 1,130,728 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 16,501 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,636 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-24 15:03:48Z |
| 7-day avg items ingested/day | 15 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-24 15:03:48Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
