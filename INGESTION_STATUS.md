# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-24 07:50:46Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 14,775 | clean: 11,800, partial: 27, failed: 2,948 |
| Romanian legislation (articles) | 110,974 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 49,010 |
| Ingested | 22,457 |
| Failed | 135 |
| Skipped (non-legislation content) | 2,496 |
| Last activity | 2026-05-24 04:58:38Z |
| 7-day avg items ingested/day | 3,201 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-24 04:58:38Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
