# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-27 10:24:41Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,355 | clean: 150,589, partial: 453, failed: 1,364 |
| Romanian legislation (articles) | 1,121,530 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 187,563 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,700 |
| Last activity | 2026-09-26 13:05:27Z |
| 7-day avg items ingested/day | 2,468 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-26 13:05:27Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
