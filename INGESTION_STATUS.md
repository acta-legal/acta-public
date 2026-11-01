# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-01 11:44:07Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,974 | clean: 151,140, partial: 462, failed: 1,334 |
| Romanian legislation (articles) | 1,128,504 | |
| ICCJ jurisprudence | 23,290 | |
| CCR jurisprudence | 8,702 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,171 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-01 05:32:13Z |
| 7-day avg items ingested/day | 16 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-01 05:32:13Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
