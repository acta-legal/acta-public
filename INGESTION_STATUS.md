# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-13 08:24:17Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 107,104 | clean: 89,326, partial: 215, failed: 11,449 |
| Romanian legislation (articles) | 535,638 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 9,636 |
| Ingested | 140,174 |
| Failed | 135 |
| Skipped (non-legislation content) | 7,657 |
| Last activity | 2026-06-13 08:24:15Z |
| 7-day avg items ingested/day | 5,923 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-13 08:24:15Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
