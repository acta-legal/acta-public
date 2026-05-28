# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-28 08:45:10Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 34,204 | clean: 25,266, partial: 66, failed: 8,872 |
| Romanian legislation (articles) | 199,968 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 30,695 |
| Ingested | 46,877 |
| Failed | 3 |
| Skipped (non-legislation content) | 3,294 |
| Last activity | 2026-05-28 08:45:08Z |
| 7-day avg items ingested/day | 6,679 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-28 08:45:08Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
