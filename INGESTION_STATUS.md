# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-06-02 09:11:56Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 62,644 | clean: 51,233, partial: 118, failed: 11,284 |
| Romanian legislation (articles) | 319,923 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 16,262 |
| Ingested | 82,975 |
| Failed | 120 |
| Skipped (non-legislation content) | 4,836 |
| Last activity | 2026-06-02 09:11:50Z |
| 7-day avg items ingested/day | 8,512 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-06-02 09:11:50Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
