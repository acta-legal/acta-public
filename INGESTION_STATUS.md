# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-11-02 13:14:52Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 185,996 | clean: 151,163, partial: 462, failed: 1,333 |
| Romanian legislation (articles) | 1,128,755 | |
| ICCJ jurisprudence | 23,292 | |
| CCR jurisprudence | 8,722 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 188,193 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,639 |
| Last activity | 2026-11-01 16:58:38Z |
| 7-day avg items ingested/day | 15 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-11-01 16:58:38Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
