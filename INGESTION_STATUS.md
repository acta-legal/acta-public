# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-03 09:31:43Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 158,380 | clean: 131,073, partial: 317, failed: 952 |
| Romanian legislation (articles) | 772,432 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 160,459 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,126 |
| Last activity | 2026-09-03 09:28:08Z |
| 7-day avg items ingested/day | 79 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-03 09:28:08Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
