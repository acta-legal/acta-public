# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-13 15:41:58Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 6,003 | clean: 1, partial: 4,931, failed: 1,071 |
| Romanian legislation (articles) | 64,086 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 309,644 |
| Ingested | 9,066 |
| Failed | 25 |
| Skipped (non-legislation content) | 1,259 |
| Last activity | 2026-04-25 05:26:53Z |
| 7-day avg items ingested/day | 0 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-04-25 05:26:53Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
