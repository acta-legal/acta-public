# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-09 05:48:24Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 112,282 | clean: 92,084, partial: 236, failed: 944 |
| Romanian legislation (articles) | 573,292 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 151,598 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,804 |
| Last activity | 2026-08-05 14:55:46Z |
| 7-day avg items ingested/day | 236 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-05 14:55:46Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
