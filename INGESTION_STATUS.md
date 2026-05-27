# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-27 08:40:22Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 26,882 | clean: 20,404, partial: 54, failed: 6,424 |
| Romanian legislation (articles) | 167,797 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 32,888 |
| Ingested | 37,742 |
| Failed | 11 |
| Skipped (non-legislation content) | 2,584 |
| Last activity | 2026-05-27 08:39:57Z |
| 7-day avg items ingested/day | 5,384 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-27 08:39:57Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
