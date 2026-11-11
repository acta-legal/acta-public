# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-11 12:30:48Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 186,251 | clean: 151,392, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,129,340 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,723 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,448 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-11 06:12:18Z |
| 7-day avg items ingested/day | 19 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-11 06:12:18Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
