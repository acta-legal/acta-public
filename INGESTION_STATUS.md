# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-17 09:52:38Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,897 | clean: 90,819, partial: 218, failed: 10,676 |
| Romanian legislation (articles) | 549,314 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 149,918 |
| Failed | 135 |
| Skipped (non-legislation content) | 7,734 |
| Last activity | 2026-06-16 23:24:23Z |
| 7-day avg items ingested/day | 4,969 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-16 23:24:23Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
