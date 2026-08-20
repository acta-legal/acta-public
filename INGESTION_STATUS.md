# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-20 05:34:14Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 151,656 | clean: 126,408, partial: 309, failed: 959 |
| Romanian legislation (articles) | 748,347 | |
| ICCJ jurisprudence | 23,254 | |
| CCR jurisprudence | 8,580 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 6,219 |
| Ingested | 153,558 |
| Failed | 0 |
| Skipped (non-legislation content) | 2,119 |
| Last activity | 2026-08-20 05:33:40Z |
| 7-day avg items ingested/day | 5,789 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-20 05:33:40Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
