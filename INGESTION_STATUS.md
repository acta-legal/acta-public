# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-19 09:46:23Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 110,886 | clean: 90,807, partial: 229, failed: 10,621 |
| Romanian legislation (articles) | 548,506 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 89,677 |
| Ingested | 60,194 |
| Failed | 156 |
| Skipped (non-legislation content) | 7,745 |
| Last activity | 2026-06-19 09:46:15Z |
| 7-day avg items ingested/day | 3,771 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-19 09:46:15Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
