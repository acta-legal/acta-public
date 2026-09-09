# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-09 09:28:00Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 158,508 | clean: 131,192, partial: 317, failed: 952 |
| Romanian legislation (articles) | 773,696 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 160,588 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,127 |
| Last activity | 2026-09-08 12:10:39Z |
| 7-day avg items ingested/day | 38 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-08 12:10:39Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
