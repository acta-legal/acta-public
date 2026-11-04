# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-04 12:50:25Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,127 | clean: 151,289, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,128,971 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,724 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,324 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-04 05:33:05Z |
| 7-day avg items ingested/day | 28 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-04 05:33:05Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
