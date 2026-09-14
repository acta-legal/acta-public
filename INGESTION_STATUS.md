# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-14 10:24:57Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 161,769 | clean: 133,517, partial: 324, failed: 989 |
| Romanian legislation (articles) | 811,330 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 13 |
| Ingested | 163,889 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,254 |
| Last activity | 2026-09-14 10:21:59Z |
| 7-day avg items ingested/day | 477 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-14 10:21:59Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
