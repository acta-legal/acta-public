# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-12 09:01:37Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 102,050 | clean: 87,238, partial: 209, failed: 11,864 |
| Romanian legislation (articles) | 518,017 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 18,744 |
| Ingested | 130,894 |
| Failed | 132 |
| Skipped (non-legislation content) | 7,473 |
| Last activity | 2026-06-12 09:01:03Z |
| 7-day avg items ingested/day | 5,156 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-12 09:01:03Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
