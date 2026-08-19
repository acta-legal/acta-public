# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-19 05:33:51Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 147,674 | clean: 123,952, partial: 305, failed: 957 |
| Romanian legislation (articles) | 734,159 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 3,145 |
| Ingested | 156,078 |
| Failed | 197 |
| Skipped (non-legislation content) | 2,479 |
| Last activity | 2026-08-19 05:33:40Z |
| 7-day avg items ingested/day | 5,224 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-19 05:33:40Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
