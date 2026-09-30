# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-30 11:00:02Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,454 | clean: 150,669, partial: 453, failed: 1,366 |
| Romanian legislation (articles) | 1,122,722 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 187,662 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-09-29 13:11:34Z |
| 7-day avg items ingested/day | 1,124 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-29 13:11:34Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
