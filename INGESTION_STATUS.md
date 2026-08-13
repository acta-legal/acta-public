# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-13 06:19:31Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 112,496 | clean: 92,276, partial: 237, failed: 944 |
| Romanian legislation (articles) | 574,335 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 151,913 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,831 |
| Last activity | 2026-08-12 16:03:43Z |
| 7-day avg items ingested/day | 46 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-12 16:03:43Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
