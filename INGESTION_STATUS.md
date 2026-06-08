# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-08 09:26:20Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 83,503 | clean: 70,817, partial: 169, failed: 12,508 |
| Romanian legislation (articles) | 426,405 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 23,638 |
| Ingested | 107,163 |
| Failed | 125 |
| Skipped (non-legislation content) | 6,333 |
| Last activity | 2026-06-08 09:25:47Z |
| 7-day avg items ingested/day | 4,742 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-08 09:25:47Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
