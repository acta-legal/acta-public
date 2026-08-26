# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-26 05:37:15Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 157,831 | clean: 130,582, partial: 314, failed: 953 |
| Romanian legislation (articles) | 762,227 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 159,900 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,120 |
| Last activity | 2026-08-24 11:25:34Z |
| 7-day avg items ingested/day | 1,491 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-24 11:25:34Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
