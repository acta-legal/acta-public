# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-22 09:42:27Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 179,289 | clean: 146,212, partial: 440, failed: 1,348 |
| Romanian legislation (articles) | 1,045,052 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 3 |
| Ingested | 181,458 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,666 |
| Last activity | 2026-09-22 09:41:15Z |
| 7-day avg items ingested/day | 1,985 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-22 09:41:15Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
