# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-05 08:44:33Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 73,010 | clean: 60,464, partial: 142, failed: 12,395 |
| Romanian legislation (articles) | 376,294 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 16,992 |
| Ingested | 94,959 |
| Failed | 123 |
| Skipped (non-legislation content) | 5,540 |
| Last activity | 2026-06-05 08:43:39Z |
| 7-day avg items ingested/day | 7,131 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-05 08:43:39Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
