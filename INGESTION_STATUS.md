# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-18 09:18:18Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,897 | clean: 90,816, partial: 229, failed: 10,633 |
| Romanian legislation (articles) | 557,983 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 100,906 |
| Ingested | 49,004 |
| Failed | 137 |
| Skipped (non-legislation content) | 7,734 |
| Last activity | 2026-06-18 09:18:04Z |
| 7-day avg items ingested/day | 2,424 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-18 09:18:04Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
