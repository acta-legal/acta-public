# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-18 05:32:43Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 135,964 | clean: 114,785, partial: 287, failed: 957 |
| Romanian legislation (articles) | 693,077 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 15,033 |
| Ingested | 144,192 |
| Failed | 189 |
| Skipped (non-legislation content) | 2,479 |
| Last activity | 2026-08-18 05:32:32Z |
| 7-day avg items ingested/day | 3,551 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-18 05:32:32Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
