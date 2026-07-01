# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-07-01 08:50:50Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,119 | clean: 91,032, partial: 236, failed: 945 |
| Romanian legislation (articles) | 567,706 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 149,944 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,748 |
| Last activity | 2026-06-29 18:01:44Z |
| 7-day avg items ingested/day | 4,634 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-29 18:01:44Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
