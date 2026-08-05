# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-05 07:42:25Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 112,089 | clean: 91,908, partial: 236, failed: 944 |
| Romanian legislation (articles) | 572,291 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 151,342 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,796 |
| Last activity | 2026-08-05 06:57:35Z |
| 7-day avg items ingested/day | 200 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-05 06:57:35Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
