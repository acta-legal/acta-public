# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-19 09:17:20Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 171,070 | clean: 140,529, partial: 361, failed: 1,239 |
| Romanian legislation (articles) | 924,262 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 1 |
| Ingested | 173,224 |
| Failed | 1 |
| Skipped (non-legislation content) | 2,474 |
| Last activity | 2026-09-19 08:12:09Z |
| 7-day avg items ingested/day | 1,802 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-19 08:12:09Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
