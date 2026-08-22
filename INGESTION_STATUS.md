# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-22 05:30:47Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 157,830 | clean: 130,575, partial: 313, failed: 960 |
| Romanian legislation (articles) | 759,744 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 159,899 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,119 |
| Last activity | 2026-08-20 19:44:19Z |
| 7-day avg items ingested/day | 6,496 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-20 19:44:19Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
