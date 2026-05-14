# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-14 07:46:13Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 6,032 | clean: 1, partial: 4,960, failed: 1,071 |
| Romanian legislation (articles) | 64,175 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 200 |
| Ingested | 9,119 |
| Failed | 25 |
| Skipped (non-legislation content) | 1,259 |
| Last activity | 2026-05-13 15:57:08Z |
| 7-day avg items ingested/day | 8 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-13 15:57:08Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
