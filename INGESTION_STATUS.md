# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-13 10:04:05Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 159,361 | clean: 131,712, partial: 319, failed: 953 |
| Romanian legislation (articles) | 782,547 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 161,447 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,145 |
| Last activity | 2026-09-13 10:03:24Z |
| 7-day avg items ingested/day | 129 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-13 10:03:24Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
