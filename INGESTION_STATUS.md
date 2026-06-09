# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-09 08:32:33Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 86,837 | clean: 74,098, partial: 180, failed: 12,550 |
| Romanian legislation (articles) | 443,405 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 24,296 |
| Ingested | 111,041 |
| Failed | 126 |
| Skipped (non-legislation content) | 6,523 |
| Last activity | 2026-06-09 08:30:31Z |
| 7-day avg items ingested/day | 4,050 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-09 08:30:31Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
