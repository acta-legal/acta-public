# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-07 08:26:03Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 79,990 | clean: 67,320, partial: 163, failed: 12,498 |
| Romanian legislation (articles) | 408,930 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 21,533 |
| Ingested | 102,954 |
| Failed | 124 |
| Skipped (non-legislation content) | 6,082 |
| Last activity | 2026-06-07 08:25:48Z |
| 7-day avg items ingested/day | 5,527 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-07 08:25:48Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
