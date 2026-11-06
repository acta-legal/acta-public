# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-06 12:46:07Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,174 | clean: 151,323, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,129,098 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,724 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,371 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-04 20:53:31Z |
| 7-day avg items ingested/day | 32 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-04 20:53:31Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
