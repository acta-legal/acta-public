# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-15 10:56:54Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,784 | clean: 90,700, partial: 218, failed: 10,681 |
| Romanian legislation (articles) | 548,503 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 149,754 |
| Failed | 135 |
| Skipped (non-legislation content) | 7,731 |
| Last activity | 2026-06-14 05:52:52Z |
| 7-day avg items ingested/day | 6,076 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-14 05:52:52Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
