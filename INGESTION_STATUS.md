# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-10 08:52:04Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 90,322 | clean: 77,581, partial: 185, failed: 12,547 |
| Romanian legislation (articles) | 460,738 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 25,978 |
| Ingested | 115,174 |
| Failed | 126 |
| Skipped (non-legislation content) | 6,728 |
| Last activity | 2026-06-10 08:51:48Z |
| 7-day avg items ingested/day | 4,027 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-10 08:51:48Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
