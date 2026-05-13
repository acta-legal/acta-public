# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Manual initial seed — 2026-05-13._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | 6,003 | Tier A: 14, Tier C: 5,989; parse status clean: 1, partial: 4,931, failed: 1,071 |
| Romanian legislation (articles) | 64,086 | |
| ICCJ jurisprudence | _Phase-2 backfill in progress (see notes)_ | |
| CCR jurisprudence | _pending_ | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | 309,644 |
| Ingested | 9,066 |
| Failed | 25 |
| Skipped (non-legislation content) | 1,259 |
| Last activity | 2026-04-25 05:30:39Z |
| Status | **Paused** pending the honest-ingestion rollout — see [`INGESTION_POLICY.md`](./INGESTION_POLICY.md). Resumes at 10 req/min once the new identity is live; staged bump to 60 req/min after a clean 24-hour observation window. |

## Rate policy

- **Ceiling:** 60 requests/minute per upstream (post-rollout target)
- **Current cap:** 10 requests/minute (conservative, post-IP-block from 2026-04-21)
- **Pacing:** token bucket, burst 3, refill 1 req/sec
- Policy details: [`INGESTION_POLICY.md`](./INGESTION_POLICY.md)

## Known issues

- Backfill paused since 2026-04-25 while we put the public ingestion policy and honest UA headers in place. Resuming with the new identity in the coming days.
