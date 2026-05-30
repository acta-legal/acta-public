# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-05-30 07:42:47Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 41,472 | clean: 36,950, partial: 82, failed: 1,440 |
| Romanian legislation (articles) | 240,795 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 32,766 |
| Ingested | 52,786 |
| Failed | 12 |
| Skipped (non-legislation content) | 3,813 |
| Last activity | 2026-05-30 07:42:44Z |
| 7-day avg items ingested/day | 5,040 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-05-30 07:42:44Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
