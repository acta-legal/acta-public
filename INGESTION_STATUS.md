# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-12 06:17:16Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 112,406 | clean: 92,198, partial: 237, failed: 944 |
| Romanian legislation (articles) | 573,813 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 2 |
| Ingested | 151,775 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,823 |
| Last activity | 2026-08-12 06:16:56Z |
| 7-day avg items ingested/day | 68 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-12 06:16:56Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
