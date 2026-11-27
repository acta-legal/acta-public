# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-27 14:48:36Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,469 | clean: 151,572, partial: 463, failed: 1,324 |
| Romanian legislation (articles) | 1,130,839 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 16,501 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,666 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-27 07:37:46Z |
| 7-day avg items ingested/day | 13 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-27 07:37:46Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
