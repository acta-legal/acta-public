# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-23 08:31:08Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,110 | clean: 91,026, partial: 234, failed: 6,683 |
| Romanian legislation (articles) | 559,344 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 44,992 |
| Ingested | 104,944 |
| Failed | 195 |
| Skipped (non-legislation content) | 7,748 |
| Last activity | 2026-06-23 08:31:07Z |
| 7-day avg items ingested/day | 9,437 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-23 08:31:07Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
