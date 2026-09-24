# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-24 09:45:37Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 183,775 | clean: 149,171, partial: 448, failed: 1,364 |
| Romanian legislation (articles) | 1,097,574 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 2,411 |
| Ingested | 185,076 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,688 |
| Last activity | 2026-09-24 09:45:31Z |
| 7-day avg items ingested/day | 2,472 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-24 09:45:31Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
