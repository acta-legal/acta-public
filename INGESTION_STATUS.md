# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-31 08:17:02Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 48,133 | clean: 42,997, partial: 100, failed: 5,033 |
| Romanian legislation (articles) | 271,873 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 27,849 |
| Ingested | 64,197 |
| Failed | 15 |
| Skipped (non-legislation content) | 4,088 |
| Last activity | 2026-05-31 08:16:59Z |
| 7-day avg items ingested/day | 6,351 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-31 08:16:59Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
