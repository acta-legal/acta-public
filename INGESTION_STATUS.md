# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-15 09:50:56Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 165,835 | clean: 136,635, partial: 336, failed: 1,104 |
| Romanian legislation (articles) | 861,081 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 10 |
| Ingested | 167,941 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,383 |
| Last activity | 2026-09-15 09:48:39Z |
| 7-day avg items ingested/day | 1,056 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-15 09:48:39Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
