# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-16 10:12:11Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,835 | clean: 90,756, partial: 218, failed: 10,681 |
| Romanian legislation (articles) | 548,844 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 149,830 |
| Failed | 135 |
| Skipped (non-legislation content) | 7,732 |
| Last activity | 2026-06-16 04:49:21Z |
| 7-day avg items ingested/day | 5,531 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-16 04:49:21Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
