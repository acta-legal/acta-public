# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-09 13:41:33Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,229 | clean: 151,375, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,129,265 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,724 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,426 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-09 05:32:40Z |
| 7-day avg items ingested/day | 36 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-09 05:32:40Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
