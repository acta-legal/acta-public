# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-04 09:23:36Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 158,434 | clean: 131,122, partial: 317, failed: 952 |
| Romanian legislation (articles) | 773,260 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 160,514 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,126 |
| Last activity | 2026-09-04 08:54:45Z |
| 7-day avg items ingested/day | 76 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-04 08:54:45Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
