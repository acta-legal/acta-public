# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-12 13:35:31Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,268 | clean: 151,407, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,129,379 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,723 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,465 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-11 19:10:35Z |
| 7-day avg items ingested/day | 14 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-11 19:10:35Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
