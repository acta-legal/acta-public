# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-22 08:23:56Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 7,928 | clean: 6,459, partial: 32, failed: 1,437 |
| Romanian legislation (articles) | 65,761 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 49,971 |
| Ingested | 9,280 |
| Failed | 6 |
| Skipped (non-legislation content) | 1,518 |
| Last activity | 2026-05-22 08:23:54Z |
| 7-day avg items ingested/day | 1,326 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-22 08:23:54Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
