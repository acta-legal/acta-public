# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-25 08:24:59Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,115 | clean: 91,029, partial: 236, failed: 3,676 |
| Romanian legislation (articles) | 564,864 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 19,818 |
| Ingested | 130,122 |
| Failed | 198 |
| Skipped (non-legislation content) | 7,748 |
| Last activity | 2026-06-25 08:24:44Z |
| 7-day avg items ingested/day | 11,666 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-25 08:24:44Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
