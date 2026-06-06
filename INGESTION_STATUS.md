# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-06 07:48:10Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 76,356 | clean: 63,726, partial: 154, failed: 12,467 |
| Romanian legislation (articles) | 392,113 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 18,712 |
| Ingested | 98,810 |
| Failed | 123 |
| Skipped (non-legislation content) | 5,828 |
| Last activity | 2026-06-06 07:47:41Z |
| 7-day avg items ingested/day | 6,569 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-06 07:47:41Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
