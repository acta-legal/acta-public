# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-22 10:43:08Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,110 | clean: 91,027, partial: 233, failed: 8,995 |
| Romanian legislation (articles) | 556,799 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 55,895 |
| Ingested | 94,048 |
| Failed | 188 |
| Skipped (non-legislation content) | 7,748 |
| Last activity | 2026-06-22 10:42:54Z |
| 7-day avg items ingested/day | 7,880 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-22 10:42:54Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
