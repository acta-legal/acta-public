# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-29 08:44:07Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 39,730 | clean: 31,019, partial: 72, failed: 8,639 |
| Romanian legislation (articles) | 221,003 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 27,022 |
| Ingested | 53,638 |
| Failed | 7 |
| Skipped (non-legislation content) | 3,755 |
| Last activity | 2026-05-29 06:23:59Z |
| 7-day avg items ingested/day | 6,376 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-29 06:23:59Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
