# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-03 09:55:40Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 66,375 | clean: 54,619, partial: 128, failed: 11,619 |
| Romanian legislation (articles) | 344,660 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 18,565 |
| Ingested | 87,138 |
| Failed | 121 |
| Skipped (non-legislation content) | 5,071 |
| Last activity | 2026-06-03 09:55:28Z |
| 7-day avg items ingested/day | 7,868 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-03 09:55:28Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
