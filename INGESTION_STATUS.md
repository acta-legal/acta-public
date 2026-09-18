# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-18 09:29:11Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 171,052 | clean: 140,513, partial: 361, failed: 1,240 |
| Romanian legislation (articles) | 924,011 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 173,206 |
| Failed | 1 |
| Skipped (non-legislation content) | 2,474 |
| Last activity | 2026-09-17 12:45:17Z |
| 7-day avg items ingested/day | 1,758 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-17 12:45:17Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
