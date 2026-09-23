# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-09-23 09:48:52Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 182,572 | clean: 148,042, partial: 445, failed: 1,363 |
| Romanian legislation (articles) | 1,084,627 | |
| ICCJ jurisprudence | 23,255 | |
| CCR jurisprudence | 8,584 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 6 |
| Ingested | 184,744 |
| Failed | 9 |
| Skipped (non-legislation content) | 2,679 |
| Last activity | 2026-09-23 09:46:35Z |
| 7-day avg items ingested/day | 1,914 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-09-23 09:46:35Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
