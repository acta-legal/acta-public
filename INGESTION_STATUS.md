# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-04 08:52:37Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 69,635 | clean: 57,268, partial: 133, failed: 12,226 |
| Romanian legislation (articles) | 357,606 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 16,377 |
| Ingested | 91,003 |
| Failed | 122 |
| Skipped (non-legislation content) | 5,275 |
| Last activity | 2026-06-04 08:52:36Z |
| 7-day avg items ingested/day | 7,526 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-04 08:52:36Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
