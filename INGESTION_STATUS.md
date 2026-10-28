# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-10-28 11:07:54Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,944 | clean: 151,104, partial: 459, failed: 1,350 |
| Romanian legislation (articles) | 1,127,822 | |
| ICCJ jurisprudence | 23,290 | |
| CCR jurisprudence | 8,699 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,141 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-10-27 14:57:17Z |
| 7-day avg items ingested/day | 31 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-10-27 14:57:17Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
