# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-21 08:58:33Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,886 | clean: 90,807, partial: 229, failed: 10,356 |
| Romanian legislation (articles) | 548,771 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 68,357 |
| Ingested | 81,504 |
| Failed | 166 |
| Skipped (non-legislation content) | 7,745 |
| Last activity | 2026-06-21 08:58:02Z |
| 7-day avg items ingested/day | 6,069 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-21 08:58:02Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
