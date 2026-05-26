# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-26 08:34:41Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 18,497 | clean: 14,300, partial: 41, failed: 4,156 |
| Romanian legislation (articles) | 127,728 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 41,724 |
| Ingested | 27,107 |
| Failed | 11 |
| Skipped (non-legislation content) | 1,924 |
| Last activity | 2026-05-26 08:33:57Z |
| 7-day avg items ingested/day | 3,865 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-26 08:33:57Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
