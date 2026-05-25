# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-25 08:59:47Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 14,776 | clean: 11,800, partial: 27, failed: 2,949 |
| Romanian legislation (articles) | 110,974 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 50,023 |
| Ingested | 22,458 |
| Failed | 258 |
| Skipped (non-legislation content) | 0 |
| Last activity | 2026-05-25 04:11:32Z |
| 7-day avg items ingested/day | 3,201 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-25 04:11:32Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
