# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-11 09:14:32Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 95,726 | clean: 82,569, partial: 195, failed: 12,235 |
| Romanian legislation (articles) | 486,200 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 26,993 |
| Ingested | 121,921 |
| Failed | 126 |
| Skipped (non-legislation content) | 7,063 |
| Last activity | 2026-06-11 09:13:51Z |
| 7-day avg items ingested/day | 4,436 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-11 09:13:51Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
