#!/usr/bin/env node
/**
 * Regenerates INGESTION_STATUS.md from the gateway's public corpus-status JSON.
 * Run by .github/workflows/refresh-status.yml daily at 05:00 UTC.
 *
 * Environment:
 *   ACTA_STATUS_URL   — e.g. https://acta-api.bojin-law.com/public/corpus-status.json
 *   ACTA_STATUS_TOKEN — bearer token stored as a GH Actions secret
 */

import { writeFileSync } from "node:fs";

const URL = process.env.ACTA_STATUS_URL;
const TOKEN = process.env.ACTA_STATUS_TOKEN;

if (!URL || !TOKEN) {
  console.error("FATAL: ACTA_STATUS_URL and ACTA_STATUS_TOKEN required");
  process.exit(1);
}

const res = await fetch(URL, {
  headers: { Authorization: `Bearer ${TOKEN}` },
  signal: AbortSignal.timeout(30_000),
});

if (!res.ok) {
  console.error(`FATAL: ${URL} returned ${res.status}`);
  process.exit(1);
}

const data = await res.json();

const fmt = (n) => n?.toLocaleString("en-US") ?? "—";
const ts = (s) => (s ? s.replace("T", " ").replace(/\.\d+Z$/, "Z") : "—");

const md = `# Ingestion Status

_Auto-regenerated daily at 05:00 UTC. Last refresh: ${ts(data.generatedAt)}._

## Corpus totals

| Source | Items | Details |
|---|---|---|
| Romanian legislation (acts) | ${fmt(data.corpus.legislation.acts)} | clean: ${fmt(data.corpus.legislation.parseStatus.clean)}, partial: ${fmt(data.corpus.legislation.parseStatus.partial)}, failed: ${fmt(data.corpus.legislation.parseStatus.failed)} |
| Romanian legislation (articles) | ${fmt(data.corpus.legislation.articles)} | |
| ICCJ jurisprudence | ${fmt(data.corpus.jurisprudence.iccj)} | |
| CCR jurisprudence | ${fmt(data.corpus.jurisprudence.ccr)} | |

## Backfill — Romanian legislation

| Metric | Value |
|---|---|
| Pending (queue) | ${fmt(data.backfill.legislationRoQueue.pending)} |
| Ingested | ${fmt(data.backfill.legislationRoQueue.ingested)} |
| Failed | ${fmt(data.backfill.legislationRoQueue.failed)} |
| Skipped (non-legislation content) | ${fmt(data.backfill.legislationRoQueue.skipped)} |
| Last activity | ${ts(data.backfill.lastActivityAt)} |
| 7-day avg items ingested/day | ${fmt(data.backfill.last7dAvgPerDay)} |

## Rate policy

- **Ceiling:** ${data.ratePolicy.ceilingPerMinute} requests/minute per upstream
- **Pacing:** ${data.ratePolicy.pacing}
- Policy details: [INGESTION_POLICY.md](./INGESTION_POLICY.md)

## Sources last success

| Source | Last successful request |
|---|---|
${data.sources.map((s) => `| \`${s.host}\` — ${s.purpose} | ${ts(s.lastSuccess)} |`).join("\n")}

## Known issues

_Edit this section manually in the repo; it's preserved across auto-refreshes._
`;

writeFileSync("INGESTION_STATUS.md", md);
console.log(`Wrote INGESTION_STATUS.md (${md.length} chars)`);
