# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-10-27 10:16:15Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,925 | clean: 151,083, partial: 457, failed: 1,356 |
| Romanian legislation (articles) | 1,127,673 | |
| ICCJ jurisprudence | 23,290 | |
| CCR jurisprudence | 8,699 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,122 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-10-27 05:31:39Z |
| 7-day avg items ingested/day | 29 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-10-27 05:31:39Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
