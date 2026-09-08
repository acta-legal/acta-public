# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-08 09:26:27Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 158,472 | clean: 131,158, partial: 317, failed: 952 |
| Romanian legislation (articles) | 773,474 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 160,552 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,126 |
| Last activity | 2026-09-07 11:52:23Z |
| 7-day avg items ingested/day | 62 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-07 11:52:23Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
