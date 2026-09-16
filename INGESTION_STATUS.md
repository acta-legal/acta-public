# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-16 09:45:42Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 169,563 | clean: 139,405, partial: 358, failed: 1,232 |
| Romanian legislation (articles) | 906,350 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 171,697 |
| Failed | 1 |
| Skipped (non-legislation content) | 2,440 |
| Last activity | 2026-09-16 09:41:45Z |
| 7-day avg items ingested/day | 1,587 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-16 09:41:45Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
