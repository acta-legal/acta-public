# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-21 10:30:29Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 175,946 | clean: 143,988, partial: 422, failed: 1,313 |
| Romanian legislation (articles) | 1,006,006 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 5 |
| Ingested | 178,106 |
| Failed | 3 |
| Skipped (non-legislation content) | 2,628 |
| Last activity | 2026-09-21 10:29:41Z |
| 7-day avg items ingested/day | 2,081 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-21 10:29:41Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
