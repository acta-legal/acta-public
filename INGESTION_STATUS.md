# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-01 10:24:06Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 56,047 | clean: 48,905, partial: 110, failed: 7,023 |
| Romanian legislation (articles) | 305,662 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 22,827 |
| Ingested | 74,064 |
| Failed | 47 |
| Skipped (non-legislation content) | 4,434 |
| Last activity | 2026-06-01 09:37:50Z |
| 7-day avg items ingested/day | 7,760 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-01 09:37:50Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
