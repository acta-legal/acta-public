# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-23 07:33:38Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 13,115 | clean: 10,718, partial: 23, failed: 2,374 |
| Romanian legislation (articles) | 100,725 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 43,460 |
| Ingested | 19,493 |
| Failed | 127 |
| Skipped (non-legislation content) | 2,036 |
| Last activity | 2026-05-23 07:33:12Z |
| 7-day avg items ingested/day | 2,777 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-23 07:33:12Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
