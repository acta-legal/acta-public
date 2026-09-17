# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-17 09:53:13Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 170,989 | clean: 140,457, partial: 361, failed: 1,240 |
| Romanian legislation (articles) | 923,683 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 173,143 |
| Failed | 1 |
| Skipped (non-legislation content) | 2,474 |
| Last activity | 2026-09-16 19:43:51Z |
| 7-day avg items ingested/day | 1,764 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-16 19:43:51Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
