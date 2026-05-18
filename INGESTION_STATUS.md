# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-18 08:47:48Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 60 | clean: 45, partial: 1, failed: 11 |
| Romanian legislation (articles) | 6,947 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 25,758 |
| Ingested | 52 |
| Failed | 4 |
| Skipped (non-legislation content) | 13 |
| Last activity | 2026-05-15 12:42:27Z |
| 7-day avg items ingested/day | 7 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-15 12:42:27Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
