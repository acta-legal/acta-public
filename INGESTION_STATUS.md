# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-24 08:24:27Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,115 | clean: 91,030, partial: 235, failed: 6,202 |
| Romanian legislation (articles) | 561,308 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 32,668 |
| Ingested | 117,269 |
| Failed | 198 |
| Skipped (non-legislation content) | 7,748 |
| Last activity | 2026-06-24 08:24:24Z |
| 7-day avg items ingested/day | 11,197 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-24 08:24:24Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
