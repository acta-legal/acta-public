# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-14 06:16:30Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 113,885 | clean: 93,528, partial: 245, failed: 945 |
| Romanian legislation (articles) | 594,460 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 153,348 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,866 |
| Last activity | 2026-08-13 14:05:41Z |
| 7-day avg items ingested/day | 251 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-13 14:05:41Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
