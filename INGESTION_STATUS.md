# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-10-08 11:51:33Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,571 | clean: 150,754, partial: 453, failed: 1,366 |
| Romanian legislation (articles) | 1,126,095 | |
| ICCJ jurisprudence | 23,280 | |
| CCR jurisprudence | 8,699 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 187,779 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-10-07 17:34:31Z |
| 7-day avg items ingested/day | 28 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-10-07 17:34:31Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
