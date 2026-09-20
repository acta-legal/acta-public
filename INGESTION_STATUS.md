# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-20 09:39:05Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 173,075 | clean: 141,901, partial: 380, failed: 1,282 |
| Romanian legislation (articles) | 953,325 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 6 |
| Ingested | 175,232 |
| Failed | 1 |
| Skipped (non-legislation content) | 2,528 |
| Last activity | 2026-09-20 09:36:33Z |
| 7-day avg items ingested/day | 2,027 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-20 09:36:33Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
