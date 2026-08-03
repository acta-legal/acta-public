# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: 2026-08-03 08:31:53Z._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 111,667 | clean: 91,502, partial: 236, failed: 945 |
| Romanian legislation (articles) | 570,083 | |
| ICCJ jurisprudence | 0 | |
| CCR jurisprudence | 0 | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 0 |
| Ingested | 150,662 |
| Failed | 199 |
| Skipped (non-legislation content) | 7,764 |
| Last activity | 2026-08-02 15:59:23Z |
| 7-day avg items ingested/day | 103 |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream
- **Pacing:** tokenBucketBurst3
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
| `legislatie.just.ro` — legislation | 2026-08-02 15:59:23Z |

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
