# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-21 08:35:53Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110 | clean: 69, partial: 5, failed: 34 |
| Romanian legislation (articles) | 13,438 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 55,309 |
| Ingested | 111 |
| Failed | 0 |
| Skipped (non-legislation content) | 2 |
| Last activity | 2026-05-21 08:35:52Z |
| 7-day avg items ingested/day | 16 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-21 08:35:52Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
